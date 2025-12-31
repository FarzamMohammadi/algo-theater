<script lang="ts">
  import type { VisualizationStep } from '@/lib/types/visualization';
  import '@/styles/components/_visualization.scss';
  import '@/styles/components/_controls.scss';

  export let steps: VisualizationStep[];

  let currentStep = 0;
  let isPlaying = false;
  let speed = 1000;
  let intervalId: ReturnType<typeof setInterval> | null = null;

  $: step = steps[currentStep];
  $: canGoBack = currentStep > 0;
  $: canGoForward = currentStep < steps.length - 1;
  $: playPauseLabel = isPlaying ? '⏸' : '▶';

  function nextStep() {
    if (canGoForward) {
      currentStep++;
    } else {
      pause();
    }
  }

  function prevStep() {
    if (canGoBack) {
      pause();
      currentStep--;
    }
  }

  function reset() {
    pause();
    currentStep = 0;
  }

  function togglePlay() {
    if (isPlaying) {
      pause();
    } else {
      play();
    }
  }

  function play() {
    if (isPlaying) return;
    isPlaying = true;
    intervalId = setInterval(() => {
      if (canGoForward) {
        currentStep++;
      } else {
        pause();
      }
    }, 2100 - speed); // Invert so higher slider value = faster
  }

  function pause() {
    isPlaying = false;
    if (intervalId) {
      clearInterval(intervalId);
      intervalId = null;
    }
  }

  function handleSpeedChange(event: Event) {
    const target = event.target as HTMLInputElement;
    speed = parseInt(target.value);
    // If currently playing, restart with new speed
    if (isPlaying) {
      pause();
      play();
    }
  }

  // Cleanup on unmount
  import { onDestroy } from 'svelte';
  onDestroy(() => {
    if (intervalId) {
      clearInterval(intervalId);
    }
  });
</script>

<div class="visualization-container">
  <div class="visualization">
    <div class="array-display">
      {#each step.state.arr as value, index}
        <div
          class="array-element"
          class:highlighted={step.highlights.includes(index)}
          class:active={step.state.mid === index}
          class:faded={index < step.state.left || index > step.state.right}
        >
          {value}
          <div class="array-index">[{index}]</div>
        </div>
      {/each}
    </div>

    <div class="step-description">
      {step.description}
    </div>
  </div>
</div>

<div class="controls">
  <button
    class="icon-button"
    on:click={prevStep}
    disabled={!canGoBack}
    aria-label="Step backward"
  >
    ◀
  </button>

  <button
    class="icon-button"
    on:click={togglePlay}
    aria-label={isPlaying ? 'Pause' : 'Play'}
  >
    {playPauseLabel}
  </button>

  <button
    class="icon-button"
    on:click={nextStep}
    disabled={!canGoForward}
    aria-label="Step forward"
  >
    ▶
  </button>

  <button
    class="icon-button"
    on:click={reset}
    aria-label="Reset"
  >
    ↺
  </button>

  <div class="speed-control">
    <label for="speed-slider">Speed:</label>
    <input
      type="range"
      id="speed-slider"
      min="100"
      max="2000"
      value={speed}
      on:input={handleSpeedChange}
      aria-label="Animation speed"
    />
  </div>

  <div class="step-counter">
    Step {currentStep + 1} of {steps.length}
  </div>
</div>

<style lang="scss">
  .array-display {
    position: relative;
    padding: 2rem 0;
  }

  .array-element {
    position: relative;

    .array-index {
      position: absolute;
      bottom: -25px;
      left: 50%;
      transform: translateX(-50%);
      font-size: 0.75rem;
      color: #6b7280;
      font-family: monospace;
    }
  }

  .step-counter {
    font-size: 0.875rem;
    color: #6b7280;
    font-weight: 500;
  }
</style>
