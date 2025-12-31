# Binary Search Pseudocode

```
FUNCTION binarySearch(array, target):
    left ← 0
    right ← length(array) - 1

    WHILE left ≤ right DO:
        mid ← ⌊(left + right) / 2⌋

        IF array[mid] = target THEN:
            RETURN mid

        IF array[mid] < target THEN:
            left ← mid + 1
        ELSE:
            right ← mid - 1

    RETURN -1  // Not found
```

## Step-by-Step Explanation

1. **Initialize pointers**
   - Set `left` to the first index (0)
   - Set `right` to the last index (length - 1)

2. **Loop while search space exists**
   - Continue as long as `left ≤ right`

3. **Calculate middle index**
   - `mid = floor((left + right) / 2)`
   - Use floor division to handle odd-length arrays

4. **Compare and decide**
   - If `array[mid]` equals target, return the index
   - If `array[mid]` is less than target, eliminate left half: `left = mid + 1`
   - If `array[mid]` is greater than target, eliminate right half: `right = mid - 1`

5. **Return result**
   - If found, the index was already returned in step 4
   - If loop ends, target doesn't exist, return -1
