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

export const projects: Project[] = [
  {
    title: 'Westover Hills Estate',
    slug: 'westover-hills-estate',
    projectType: 'Custom Home',
    location: 'Westover Hills, Fort Worth',
    style: 'Modern Contemporary',
    completedYear: '2024',
    subtitle: 'A masterfully crafted contemporary residence in one of Fort Worth\'s most prestigious neighborhoods.',
    description: [
      'This ground-up custom home in Westover Hills represents the pinnacle of modern residential design. Working closely with the homeowners and their architect, Gearheart Construction brought to life a vision of contemporary elegance that harmonizes with the neighborhood\'s established character.',
      'The 6,200-square-foot residence features clean architectural lines, floor-to-ceiling windows, and an open floor plan that seamlessly connects indoor and outdoor living spaces. Premium materials were carefully selected throughout — from the imported Italian tile to the custom millwork and hand-selected natural stone facades.',
      'Every detail was executed with the precision that defines Gearheart Construction: custom steel and glass doors, integrated smart home systems, a chef\'s kitchen with premium appliances, and outdoor living spaces designed for Fort Worth\'s climate. The result is a home that feels both grand and intimately livable.',
    ],
    heroImage: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1920&q=80',
    cardImage: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1200&q=80',
      'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80',
      'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=800&q=80',
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80',
      'https://images.unsplash.com/photo-1600573472592-401b489a3cdc?w=800&q=80',
    ],
    featured: true,
    order: 1,
  },
  {
    title: 'Rivercrest Manor Renovation',
    slug: 'rivercrest-manor-renovation',
    projectType: 'Renovation',
    location: 'Rivercrest, Fort Worth',
    style: 'Traditional',
    completedYear: '2023',
    subtitle: 'A meticulous whole-home renovation preserving historic character while adding modern luxury.',
    description: [
      'The Rivercrest Manor renovation showcases Gearheart Construction\'s ability to seamlessly blend old and new. This historic residence required a complete interior renovation while maintaining its original architectural character.',
      'Our team carefully restored original millwork and architectural details while modernizing the home\'s infrastructure, systems, and finishes. The result is a residence that honors its heritage while meeting the demands of contemporary living.',
    ],
    heroImage: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1920&q=80',
    cardImage: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200&q=80',
      'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80',
      'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=800&q=80',
    ],
    featured: true,
    order: 2,
  },
  {
    title: 'Colonial Kitchen Transformation',
    slug: 'colonial-kitchen-transformation',
    projectType: 'Kitchen Remodel',
    location: 'Arlington Heights, Fort Worth',
    style: 'Colonial Revival',
    completedYear: '2023',
    subtitle: 'A complete kitchen transformation featuring custom cabinetry and premium finishes.',
    description: [
      'This Colonial Revival kitchen was completely reimagined with custom cabinetry, natural stone countertops, and professional-grade appliances. The layout was reconfigured to create a more functional space while maintaining the home\'s architectural character.',
      'Every finish was hand-selected to complement the home\'s colonial character — from the shaker-style cabinet profiles to the brass hardware and farmhouse sink.',
    ],
    heroImage: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1920&q=80',
    cardImage: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1200&q=80',
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80',
      'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=800&q=80',
    ],
    featured: true,
    order: 3,
  },
  {
    title: 'Tanglewood Contemporary',
    slug: 'tanglewood-contemporary',
    projectType: 'Custom Home',
    location: 'Tanglewood, Fort Worth',
    style: 'Contemporary',
    completedYear: '2022',
    subtitle: 'A striking contemporary home that redefines luxury living in Tanglewood.',
    description: [
      'This contemporary custom home in Tanglewood features bold architectural lines, expansive glass walls, and an open-concept design that maximizes natural light and indoor-outdoor connectivity.',
      'Premium materials throughout include polished concrete floors, custom steel fabrication, and floor-to-ceiling glass that frames views of the meticulously landscaped grounds.',
    ],
    heroImage: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=1920&q=80',
    cardImage: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=800&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=1200&q=80',
      'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&q=80',
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80',
    ],
    featured: true,
    order: 4,
  },
  {
    title: 'Monticello Addition',
    slug: 'monticello-addition',
    projectType: 'Addition',
    location: 'Monticello, Fort Worth',
    style: 'Traditional',
    completedYear: '2023',
    subtitle: 'A seamless two-story addition that expanded living space while preserving the original home\'s character.',
    description: [
      'This Monticello addition demonstrates Gearheart\'s signature ability to make new construction indistinguishable from the original. The two-story addition includes a new master suite, expanded family room, and covered outdoor living area.',
      'Inspectors couldn\'t tell where the original structure ended and the new construction began — the hallmark of a Gearheart renovation.',
    ],
    heroImage: 'https://images.unsplash.com/photo-1600573472592-401b489a3cdc?w=1920&q=80',
    cardImage: 'https://images.unsplash.com/photo-1600573472592-401b489a3cdc?w=800&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1600573472592-401b489a3cdc?w=1200&q=80',
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80',
      'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80',
    ],
    featured: true,
    order: 5,
  },
  {
    title: 'Berkeley Place Remodel',
    slug: 'berkeley-place-remodel',
    projectType: 'Whole-Home Remodel',
    location: 'Berkeley Place, Fort Worth',
    style: 'Craftsman',
    completedYear: '2022',
    subtitle: 'A complete whole-home remodel breathing new life into a classic Craftsman bungalow.',
    description: [
      'This Berkeley Place Craftsman received a complete interior and exterior remodel, transforming every room while preserving the home\'s beloved character. New systems, updated layouts, and modern finishes bring this classic home into the 21st century.',
    ],
    heroImage: 'https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=1920&q=80',
    cardImage: 'https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=800&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=1200&q=80',
      'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&q=80',
      'https://images.unsplash.com/photo-1600573472592-401b489a3cdc?w=800&q=80',
    ],
    featured: false,
    order: 6,
  },
  {
    title: 'Crestline Road Modern',
    slug: 'crestline-road-modern',
    projectType: 'Custom Home',
    location: 'Crestline, Fort Worth',
    style: 'Modern',
    completedYear: '2021',
    subtitle: 'A modern custom home featuring clean lines and innovative design on Crestline Road.',
    description: [
      'The Crestline Road Modern is a testament to contemporary residential design. Clean lines, an open floor plan, and a seamless connection between indoor and outdoor spaces define this custom build.',
    ],
    heroImage: 'https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?w=1920&q=80',
    cardImage: 'https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?w=800&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?w=1200&q=80',
      'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=800&q=80',
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80',
    ],
    featured: false,
    order: 7,
  },
  {
    title: 'Arlington Heights Master Bath',
    slug: 'arlington-heights-master-bath',
    projectType: 'Bathroom Remodel',
    location: 'Arlington Heights, Fort Worth',
    style: 'Transitional',
    completedYear: '2023',
    subtitle: 'A luxurious master bathroom transformation with spa-inspired design.',
    description: [
      'This Arlington Heights master bathroom was transformed into a spa-like retreat featuring a freestanding soaking tub, oversized walk-in shower with multiple showerheads, and custom double vanity with natural stone countertops.',
    ],
    heroImage: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=1920&q=80',
    cardImage: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=800&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=1200&q=80',
      'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80',
      'https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=800&q=80',
    ],
    featured: false,
    order: 8,
  },
  {
    title: 'Ridglea Hills Estate',
    slug: 'ridglea-hills-estate',
    projectType: 'Renovation',
    location: 'Ridglea Hills, Fort Worth',
    style: 'Tudor Revival',
    completedYear: '2022',
    subtitle: 'A comprehensive renovation of a stately Tudor Revival estate in Ridglea Hills.',
    description: [
      'This Ridglea Hills Tudor Revival received a comprehensive renovation that preserved its stately exterior while completely modernizing the interior. The project included structural updates, new mechanical systems, and custom finishes throughout.',
    ],
    heroImage: 'https://images.unsplash.com/photo-1600585152220-90363fe7e115?w=1920&q=80',
    cardImage: 'https://images.unsplash.com/photo-1600585152220-90363fe7e115?w=800&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1600585152220-90363fe7e115?w=1200&q=80',
      'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&q=80',
      'https://images.unsplash.com/photo-1600573472592-401b489a3cdc?w=800&q=80',
    ],
    featured: false,
    order: 9,
  },
];
