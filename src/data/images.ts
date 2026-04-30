import type { ImageMetadata } from 'astro';

import IMG_0788 from '../assets/IMG_0788.jpeg';
import IMG_1901 from '../assets/IMG_1901.jpeg';
import IMG_1904 from '../assets/IMG_1904.jpeg';
import IMG_1905 from '../assets/IMG_1905.jpeg';
import IMG_2561 from '../assets/IMG_2561.jpeg';
import IMG_2563 from '../assets/IMG_2563.jpeg';
import IMG_2564 from '../assets/IMG_2564.jpeg';
import IMG_2566 from '../assets/IMG_2566.jpeg';
import IMG_2567 from '../assets/IMG_2567.jpeg';
import IMG_2569 from '../assets/IMG_2569.jpeg';
import IMG_2571 from '../assets/IMG_2571.jpeg';
import IMG_2572 from '../assets/IMG_2572.jpeg';
import IMG_2577 from '../assets/IMG_2577.jpeg';
import IMG_2578 from '../assets/IMG_2578.jpeg';
import IMG_2581 from '../assets/IMG_2581.jpeg';
import IMG_2585 from '../assets/IMG_2585.jpeg';
import IMG_2588 from '../assets/IMG_2588.jpeg';
import IMG_5142 from '../assets/IMG_5142.jpeg';
import IMG_5143 from '../assets/IMG_5143.jpeg';
import IMG_5144 from '../assets/IMG_5144.jpeg';
import IMG_6110 from '../assets/IMG_6110.jpeg';
import IMG_6111 from '../assets/IMG_6111.jpeg';
import IMG_6112 from '../assets/IMG_6112.jpeg';
import IMG_6113 from '../assets/IMG_6113.jpeg';
import IMG_6115 from '../assets/IMG_6115.jpeg';
import IMG_6116 from '../assets/IMG_6116.jpeg';
import IMG_6117 from '../assets/IMG_6117.jpeg';
import IMG_6118 from '../assets/IMG_6118.jpeg';
import IMG_6119 from '../assets/IMG_6119.jpeg';
import IMG_6120 from '../assets/IMG_6120.jpeg';
import IMG_6121 from '../assets/IMG_6121.jpeg';
import IMG_6122 from '../assets/IMG_6122.jpeg';
import IMG_6123 from '../assets/IMG_6123.jpeg';
import IMG_6124 from '../assets/IMG_6124.jpeg';
import IMG_6125 from '../assets/IMG_6125.jpeg';
import IMG_6126 from '../assets/IMG_6126.jpeg';
import IMG_6127 from '../assets/IMG_6127.jpeg';
import IMG_6128 from '../assets/IMG_6128.jpeg';
import IMG_6129 from '../assets/IMG_6129.jpeg';
import IMG_6240 from '../assets/IMG_6240.jpeg';

export type GalleryImage = {
  src: ImageMetadata;
  alt: string;
  category: 'Exterior' | 'Interior' | 'Gardens & Grounds' | 'Outdoor Living';
};

export const HERO = IMG_2578;
export const HERO_ALT = 'The front facade of 1133 Long Road, a white colonial with black shutters set behind mature trees.';

export const FRONT_AUTUMN = IMG_6240;
export const FRONT_SPRING = IMG_5144;
export const FRONT_TREES = IMG_2581;
export const FRONT_ANGLE = IMG_2577;
export const REAR_HOUSE = IMG_0788;
export const PORCH = IMG_1905;
export const FOYER = IMG_6113;

export const KITCHEN_ISLAND = IMG_6117;
export const KITCHEN_RANGE = IMG_6118;
export const DINING_MURAL = IMG_6116;
export const LIVING_ROOM = IMG_6110;
export const SITTING_ROOM = IMG_2561;
export const STAIRCASE = IMG_6111;

export const PATIO_UMBRELLA = IMG_2569;
export const OUTDOOR_KITCHEN = IMG_2563;
export const GARAGE = IMG_5142;
export const ADDRESS_MARKER = IMG_2585;

export const galleryImages: GalleryImage[] = [
  // Exterior
  { src: IMG_2578, alt: 'Stately white colonial front facade with black shutters', category: 'Exterior' },
  { src: IMG_2581, alt: 'The residence framed by mature trees on Long Road', category: 'Exterior' },
  { src: IMG_5144, alt: 'Spring daffodils along the brick walkway to the covered porch', category: 'Exterior' },
  { src: IMG_5143, alt: 'Welcoming front porch with red painted bench', category: 'Exterior' },
  { src: IMG_6240, alt: 'Crimson maple in autumn alongside the residence', category: 'Exterior' },
  { src: IMG_2577, alt: 'Side wing and approach with manicured boxwoods', category: 'Exterior' },
  { src: IMG_1905, alt: 'Covered porch with classical columns, brick floor and wicker rocker', category: 'Exterior' },
  { src: IMG_5142, alt: 'Detached two-car carriage-style garage with arched doors', category: 'Exterior' },
  { src: IMG_2585, alt: 'Mailbox marked 1133 at the foot of the drive', category: 'Exterior' },
  { src: IMG_2588, alt: 'Garden shed with shingle roof and shuttered window', category: 'Exterior' },
  { src: IMG_0788, alt: 'Rear elevation of the home above the brick terrace', category: 'Exterior' },

  // Interior
  { src: IMG_6113, alt: 'Center-hall foyer with arched fanlight transom and antique mirror', category: 'Interior' },
  { src: IMG_6110, alt: 'Library and living room with built-in bookshelves and fireplace', category: 'Interior' },
  { src: IMG_2561, alt: 'Sitting room with French doors opening to the rear garden', category: 'Interior' },
  { src: IMG_6111, alt: 'Center staircase with leopard runner and gallery wall', category: 'Interior' },
  { src: IMG_6112, alt: 'Stair landing with arched window and dark hardwood floors', category: 'Interior' },
  { src: IMG_6119, alt: 'Servants stair with red treads and historic patterned wallpaper', category: 'Interior' },
  { src: IMG_6115, alt: 'Formal dining room with hand-painted scenic mural', category: 'Interior' },
  { src: IMG_6116, alt: 'Dining room with mural panorama and arched butler door', category: 'Interior' },
  { src: IMG_6117, alt: 'Chef’s kitchen with custom cabinetry and walnut island', category: 'Interior' },
  { src: IMG_6118, alt: 'Professional range, subway tile and farmhouse sink', category: 'Interior' },
  { src: IMG_6124, alt: 'Primary bedroom in heritage green with antique floral prints', category: 'Interior' },
  { src: IMG_6120, alt: 'Guest bedroom in soft blue with iron bedstead', category: 'Interior' },
  { src: IMG_6121, alt: 'Sitting alcove with charcoal portraits and chaise', category: 'Interior' },
  { src: IMG_6122, alt: 'Blue bedroom with walnut highboy and gingham linens', category: 'Interior' },
  { src: IMG_6126, alt: 'Bedroom with wicker rocker and patchwork quilt', category: 'Interior' },
  { src: IMG_6127, alt: 'Bedroom with gingham draperies and mahogany secretary', category: 'Interior' },
  { src: IMG_6128, alt: 'Cozy study with custom red painted secretary cabinet', category: 'Interior' },
  { src: IMG_6123, alt: 'Den paneled in heritage green with reading chair', category: 'Interior' },
  { src: IMG_6129, alt: 'Bedroom with twin sleigh bed and antique floral chair', category: 'Interior' },
  { src: IMG_6125, alt: 'Upstairs landing detail with red and ivory wallpaper', category: 'Interior' },

  // Gardens & Grounds
  { src: IMG_1901, alt: 'Herringbone brick walkway through the established gardens', category: 'Gardens & Grounds' },
  { src: IMG_1904, alt: 'Manicured lawn and boxwood borders along the rear elevation', category: 'Gardens & Grounds' },
  { src: IMG_2566, alt: 'Garden bed with hydrangea, ferns and pachysandra', category: 'Gardens & Grounds' },
  { src: IMG_2567, alt: 'Stacked-stone wall with hostas and creeping ivy', category: 'Gardens & Grounds' },
  { src: IMG_2571, alt: 'Wooded path through the back of the property', category: 'Gardens & Grounds' },
  { src: IMG_2572, alt: 'Stone retaining wall and natural plantings beside the home', category: 'Gardens & Grounds' },

  // Outdoor Living
  { src: IMG_2563, alt: 'Brick terrace with dining set and outdoor kitchen', category: 'Outdoor Living' },
  { src: IMG_2564, alt: 'Built-in stone outdoor kitchen with grill and bar', category: 'Outdoor Living' },
  { src: IMG_2569, alt: 'Black-and-white striped umbrella over the dining terrace', category: 'Outdoor Living' },
];
