---
name: "Binary Search"
slug: "binary-search"
category: "searching"
difficulty: "beginner"
timeComplexity:
  best: "O(1)"
  average: "O(log n)"
  worst: "O(log n)"
spaceComplexity: "O(1)"
---

# Binary Search

Binary search is an efficient algorithm for finding a target value within a sorted array. It works by repeatedly dividing the search interval in half.

## How It Works

1. Start with two pointers: `left` at the beginning and `right` at the end of the array
2. Calculate the middle index: `mid = floor((left + right) / 2)`
3. Compare the middle element with the target:
   - If equal, we found it!
   - If the middle element is less than the target, search the right half
   - If the middle element is greater than the target, search the left half
4. Repeat until found or the search space is exhausted

## Key Characteristics

- **Requires sorted data** - The array must be sorted for binary search to work
- **Logarithmic time complexity** - Much faster than linear search for large datasets
- **Divide and conquer** - Eliminates half of the remaining elements in each step
