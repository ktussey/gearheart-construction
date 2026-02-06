import { projects as localProjects, type Project } from '../data/projects';

const USE_SANITY = false;

export async function getAllProjects(): Promise<Project[]> {
  if (USE_SANITY) {
    // TODO: Replace with Sanity client query
    // const client = createClient({ ... });
    // return client.fetch('*[_type == "project"] | order(order asc)');
  }
  return localProjects.sort((a, b) => a.order - b.order);
}

export async function getFeaturedProjects(): Promise<Project[]> {
  const all = await getAllProjects();
  return all.filter((p) => p.featured);
}

export async function getProjectBySlug(slug: string): Promise<Project | undefined> {
  const all = await getAllProjects();
  return all.find((p) => p.slug === slug);
}
