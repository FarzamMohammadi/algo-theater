export interface ControlState {
  isPlaying: boolean;
  currentStep: number;
  speed: number; // milliseconds per step
  customInput: string;
}

export interface ControlEvents {
  onPlay: () => void;
  onPause: () => void;
  onStepForward: () => void;
  onStepBackward: () => void;
  onReset: () => void;
  onSpeedChange: (speed: number) => void;
  onCustomInput: (input: string) => void;
}
