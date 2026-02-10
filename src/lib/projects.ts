import { createClient } from '@sanity/client';
import { createImageUrlBuilder } from '@sanity/image-url';

export interface Project {
  title: string;
  slug: string;
  projectType: string;
  location: string;
  style: string;
  completedYear: string;
  subtitle: string;
  description: string[];
  heroImage: string;
  cardImage: string;
  gallery: string[];
  featured: boolean;
  order: number;
}

const projectId = import.meta.env.SANITY_PROJECT_ID;
const dataset = import.meta.env.SANITY_DATASET || 'production';

const client = createClient({
  projectId,
  dataset,
  useCdn: false,
  apiVersion: '2024-01-01',
});

const builder = createImageUrlBuilder(client);

function imageUrl(source: any, width: number): string {
  if (!source) return '';
  return builder.image(source).width(width).auto('format').url();
}

function mapSanityProject(doc: any): Project {
  return {
    title: doc.title,
    slug: typeof doc.slug === 'string' ? doc.slug : doc.slug?.current ?? '',
    projectType: doc.projectType ?? '',
    location: doc.location ?? '',
    style: doc.style ?? '',
    completedYear: doc.completedYear ?? '',
    subtitle: doc.subtitle ?? '',
    description: Array.isArray(doc.description)
      ? doc.description
          .filter((block: any) => block._type === 'block')
          .map((block: any) =>
            block.children?.map((child: any) => child.text).join('') ?? ''
          )
      : [],
    heroImage: imageUrl(doc.heroImage, 1920),
    cardImage: imageUrl(doc.cardImage, 800),
    gallery: Array.isArray(doc.gallery)
      ? doc.gallery.map((img: any, i: number) =>
          imageUrl(img, i === 0 ? 1200 : 800)
        )
      : [],
    featured: doc.featured ?? false,
    order: doc.order ?? 0,
  };
}

const PROJECTS_QUERY = `*[_type == "project"] | order(order asc) {
  title,
  slug,
  projectType,
  location,
  style,
  completedYear,
  subtitle,
  description,
  heroImage,
  cardImage,
  gallery,
  featured,
  order
}`;

export async function getAllProjects(): Promise<Project[]> {
  const docs = await client.fetch(PROJECTS_QUERY);
  return (docs ?? []).map(mapSanityProject);
}

export async function getFeaturedProjects(): Promise<Project[]> {
  const all = await getAllProjects();
  return all.filter((p) => p.featured);
}

export async function getProjectBySlug(slug: string): Promise<Project | undefined> {
  const all = await getAllProjects();
  return all.find((p) => p.slug === slug);
}
