import type { VisualizationStep, VisualizationState } from '@/lib/types/visualization';

export class BinarySearchVisualizer {
  private canvas: HTMLCanvasElement;
  private ctx: CanvasRenderingContext2D;
  private state: VisualizationState;
  private animationFrameId: number | null = null;

  // Visual constants
  private readonly ELEMENT_WIDTH = 60;
  private readonly ELEMENT_HEIGHT = 60;
  private readonly ELEMENT_GAP = 10;
  private readonly COLORS = {
    default: '#ffffff',
    border: '#e5e7eb',
    highlighted: '#fbbf24',
    active: '#10b981',
    faded: 'rgba(255, 255, 255, 0.3)',
    text: '#1f2937',
    activeText: '#ffffff',
  };

  constructor(canvas: HTMLCanvasElement, steps: VisualizationStep[]) {
    this.canvas = canvas;
    const context = canvas.getContext('2d');
    if (!context) {
      throw new Error('Could not get 2D context from canvas');
    }
    this.ctx = context;

    this.state = {
      currentStep: 0,
      totalSteps: steps.length,
      steps,
      isPlaying: false,
      speed: 1000,
    };

    this.setupCanvas();
    this.render();
  }

  private setupCanvas() {
    // Set canvas size based on array length
    const step = this.state.steps[0];
    const arr = step.state.arr as number[];
    const width = arr.length * (this.ELEMENT_WIDTH + this.ELEMENT_GAP) + this.ELEMENT_GAP;
    const height = 200;

    this.canvas.width = width;
    this.canvas.height = height;
  }

  render() {
    const step = this.state.steps[this.state.currentStep];
    const { arr, left, right, mid, found } = step.state;

    // Clear canvas
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

    // Draw array elements
    arr.forEach((value: number, index: number) => {
      const x = this.ELEMENT_GAP + index * (this.ELEMENT_WIDTH + this.ELEMENT_GAP);
      const y = 70;

      // Determine element state
      const isHighlighted = step.highlights.includes(index);
      const isMid = mid === index;
      const isInRange = index >= left && index <= right;
      const isFound = found && mid === index;

      // Draw element box
      this.drawElement(x, y, value, {
        isHighlighted,
        isMid: isMid || isFound,
        isInRange,
        isFound,
      });

      // Draw index label
      this.ctx.font = '12px monospace';
      this.ctx.fillStyle = '#6b7280';
      this.ctx.textAlign = 'center';
      this.ctx.fillText(`[${index}]`, x + this.ELEMENT_WIDTH / 2, y + this.ELEMENT_HEIGHT + 20);
    });

    // Draw pointers
    this.drawPointers(left, right, mid);
  }

  private drawElement(
    x: number,
    y: number,
    value: number,
    options: {
      isHighlighted: boolean;
      isMid: boolean;
      isInRange: boolean;
      isFound: boolean;
    }
  ) {
    const { isHighlighted, isMid, isInRange, isFound } = options;

    // Background
    let bgColor = this.COLORS.default;
    if (isFound) {
      bgColor = this.COLORS.active;
    } else if (isMid) {
      bgColor = this.COLORS.active;
    } else if (isHighlighted) {
      bgColor = this.COLORS.highlighted;
    }

    // Opacity for out-of-range elements
    if (!isInRange && !isFound) {
      this.ctx.globalAlpha = 0.3;
    }

    // Draw box
    this.ctx.fillStyle = bgColor;
    this.ctx.fillRect(x, y, this.ELEMENT_WIDTH, this.ELEMENT_HEIGHT);

    // Border
    this.ctx.strokeStyle = isMid ? '#059669' : this.COLORS.border;
    this.ctx.lineWidth = 2;
    this.ctx.strokeRect(x, y, this.ELEMENT_WIDTH, this.ELEMENT_HEIGHT);

    // Value text
    this.ctx.font = 'bold 20px sans-serif';
    this.ctx.fillStyle = isMid || isFound ? this.COLORS.activeText : this.COLORS.text;
    this.ctx.textAlign = 'center';
    this.ctx.textBaseline = 'middle';
    this.ctx.fillText(
      value.toString(),
      x + this.ELEMENT_WIDTH / 2,
      y + this.ELEMENT_HEIGHT / 2
    );

    // Reset opacity
    this.ctx.globalAlpha = 1;
  }

  private drawPointers(left: number, right: number, mid: number | null) {
    const y = 50;

    // Left pointer
    const leftX = this.ELEMENT_GAP + left * (this.ELEMENT_WIDTH + this.ELEMENT_GAP) + this.ELEMENT_WIDTH / 2;
    this.drawPointer(leftX, y, 'L', '#3b82f6');

    // Right pointer
    const rightX = this.ELEMENT_GAP + right * (this.ELEMENT_WIDTH + this.ELEMENT_GAP) + this.ELEMENT_WIDTH / 2;
    this.drawPointer(rightX, y, 'R', '#ef4444');

    // Mid pointer
    if (mid !== null) {
      const midX = this.ELEMENT_GAP + mid * (this.ELEMENT_WIDTH + this.ELEMENT_GAP) + this.ELEMENT_WIDTH / 2;
      this.drawPointer(midX, y - 15, 'M', '#10b981');
    }
  }

  private drawPointer(x: number, y: number, label: string, color: string) {
    // Arrow
    this.ctx.beginPath();
    this.ctx.moveTo(x, y + 10);
    this.ctx.lineTo(x - 5, y);
    this.ctx.lineTo(x + 5, y);
    this.ctx.closePath();
    this.ctx.fillStyle = color;
    this.ctx.fill();

    // Label
    this.ctx.font = 'bold 12px sans-serif';
    this.ctx.fillStyle = color;
    this.ctx.textAlign = 'center';
    this.ctx.fillText(label, x, y - 5);
  }

  nextStep() {
    if (this.state.currentStep < this.state.totalSteps - 1) {
      this.state.currentStep++;
      this.render();
      return true;
    }
    return false;
  }

  prevStep() {
    if (this.state.currentStep > 0) {
      this.state.currentStep--;
      this.render();
      return true;
    }
    return false;
  }

  reset() {
    this.state.currentStep = 0;
    this.state.isPlaying = false;
    if (this.animationFrameId) {
      cancelAnimationFrame(this.animationFrameId);
      this.animationFrameId = null;
    }
    this.render();
  }

  play() {
    if (this.state.isPlaying) return;
    this.state.isPlaying = true;
    this.animate();
  }

  pause() {
    this.state.isPlaying = false;
    if (this.animationFrameId) {
      cancelAnimationFrame(this.animationFrameId);
      this.animationFrameId = null;
    }
  }

  setSpeed(speed: number) {
    this.state.speed = speed;
  }

  private animate() {
    if (!this.state.isPlaying) return;

    const hasNext = this.nextStep();
    if (!hasNext) {
      this.pause();
      return;
    }

    setTimeout(() => {
      this.animationFrameId = requestAnimationFrame(() => this.animate());
    }, this.state.speed);
  }

  getCurrentStep(): number {
    return this.state.currentStep;
  }

  getTotalSteps(): number {
    return this.state.totalSteps;
  }

  getCurrentDescription(): string {
    return this.state.steps[this.state.currentStep].description;
  }
}
