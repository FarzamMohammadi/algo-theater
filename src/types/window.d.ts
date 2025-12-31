import type { VisualizationStep } from '@/lib/types/visualization';

declare global {
  interface Window {
    __BINARY_SEARCH_STEPS__: VisualizationStep[];
  }
}

export {};
