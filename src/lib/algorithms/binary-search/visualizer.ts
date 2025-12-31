import type { VisualizationStep, BinarySearchState } from '@/lib/types/visualization';

/**
 * Generate step-by-step visualization states for Binary Search
 */
export function generateBinarySearchSteps(
  arr: number[],
  target: number
): VisualizationStep[] {
  const steps: VisualizationStep[] = [];
  let left = 0;
  let right = arr.length - 1;
  let stepNumber = 0;

  // Initial state
  steps.push({
    stepNumber: stepNumber++,
    description: `Searching for ${target} in sorted array`,
    state: {
      arr,
      target,
      left,
      right,
      mid: null,
    } as BinarySearchState,
    highlights: [],
    comparison: { left, right },
  });

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);

    // Show middle element calculation
    steps.push({
      stepNumber: stepNumber++,
      description: `Calculate middle index: mid = (${left} + ${right}) / 2 = ${mid}`,
      state: {
        arr,
        target,
        left,
        right,
        mid,
      } as BinarySearchState,
      highlights: [mid],
      comparison: { left, right },
    });

    // Show comparison
    steps.push({
      stepNumber: stepNumber++,
      description: `Compare arr[${mid}] (${arr[mid]}) with target (${target})`,
      state: {
        arr,
        target,
        left,
        right,
        mid,
      } as BinarySearchState,
      highlights: [mid],
      comparison: { left, right },
    });

    if (arr[mid] === target) {
      // Found the target
      steps.push({
        stepNumber: stepNumber++,
        description: `✓ Found ${target} at index ${mid}!`,
        state: {
          arr,
          target,
          left,
          right,
          mid,
          found: true,
        } as BinarySearchState,
        highlights: [mid],
      });
      break;
    }

    if (arr[mid] < target) {
      // Search right half
      steps.push({
        stepNumber: stepNumber++,
        description: `${arr[mid]} < ${target}, search right half (left = ${mid + 1})`,
        state: {
          arr,
          target,
          left: mid + 1,
          right,
          mid,
        } as BinarySearchState,
        highlights: [mid],
        comparison: { left: mid + 1, right },
      });
      left = mid + 1;
    } else {
      // Search left half
      steps.push({
        stepNumber: stepNumber++,
        description: `${arr[mid]} > ${target}, search left half (right = ${mid - 1})`,
        state: {
          arr,
          target,
          left,
          right: mid - 1,
          mid,
        } as BinarySearchState,
        highlights: [mid],
        comparison: { left, right: mid - 1 },
      });
      right = mid - 1;
    }
  }

  // If not found
  if (left > right) {
    steps.push({
      stepNumber: stepNumber++,
      description: `✗ ${target} not found in array`,
      state: {
        arr,
        target,
        left,
        right,
        mid: null,
        found: false,
      } as BinarySearchState,
      highlights: [],
    });
  }

  return steps;
}

/**
 * Generate a random sorted array for testing
 */
export function generateSortedArray(size: number, min = 1, max = 100): number[] {
  const arr: number[] = [];
  for (let i = 0; i < size; i++) {
    arr.push(Math.floor(Math.random() * (max - min + 1)) + min);
  }
  return arr.sort((a, b) => a - b);
}

/**
 * Get a default example configuration
 */
export function getDefaultExample(): { arr: number[]; target: number } {
  return {
    arr: [1, 3, 5, 7, 9, 11, 13, 15, 17, 19],
    target: 7,
  };
}
