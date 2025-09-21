// src/data/registry.ts

import { containerPallets, palletQualities } from "./palletQualities";


// If you add more product arrays later, just put them here:
export const PRODUCT_SOURCES = [palletQualities, containerPallets] as const;

// Flattened list (useful for listings/search)
export const allProducts = PRODUCT_SOURCES.flat();

// Generic getter
export function getProductBySlug(slug: string) {
  for (const src of PRODUCT_SOURCES) {
    const hit = src.find((p) => p.slug === slug);
    if (hit) return hit;
  }
  return undefined;
}

// Re-export types if you want (optional)
// export type Product = typeof allProducts[number];
