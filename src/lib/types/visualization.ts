export interface VisualizationStep {
  stepNumber: number;
  description: string;
  state: any; // Algorithm-specific state (flexible for different algorithms)
  highlights: number[]; // Indices to highlight
  comparison?: { left: number; right: number };
}

export interface VisualizationState {
  currentStep: number;
  totalSteps: number;
  steps: VisualizationStep[];
  isPlaying: boolean;
  speed: number; // milliseconds per step
}

export interface BinarySearchState {
  arr: number[];
  target: number;
  left: number;
  right: number;
  mid: number | null;
  found?: boolean;
}
