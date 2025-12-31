# Binary Search vs Other Search Algorithms

## Binary Search vs Linear Search

| Aspect | Binary Search | Linear Search |
|--------|---------------|---------------|
| **Time Complexity** | O(log n) | O(n) |
| **Space Complexity** | O(1) | O(1) |
| **Data Requirement** | Must be sorted | Any order |
| **Best Case** | O(1) - element at middle | O(1) - element at start |
| **Worst Case** | O(log n) | O(n) - element at end |
| **Implementation** | More complex | Very simple |
| **Performance (n=1000)** | ~10 comparisons | ~500 avg comparisons |
| **Best For** | Large sorted datasets | Small or unsorted data |

### Example Performance

For an array of 1,000,000 elements:
- **Binary Search**: Maximum 20 comparisons
- **Linear Search**: Maximum 1,000,000 comparisons (average: 500,000)

## Binary Search vs Jump Search

| Aspect | Binary Search | Jump Search |
|--------|---------------|-------------|
| **Time Complexity** | O(log n) | O(√n) |
| **Approach** | Divide and conquer | Jump by blocks |
| **Cache Friendliness** | Lower | Higher |
| **Best For** | General sorted arrays | Sequential access hardware |

## Binary Search vs Interpolation Search

| Aspect | Binary Search | Interpolation Search |
|--------|---------------|---------------------|
| **Time Complexity (avg)** | O(log n) | O(log log n) |
| **Time Complexity (worst)** | O(log n) | O(n) |
| **Data Distribution** | Works on any sorted data | Best with uniform distribution |
| **Calculation** | Simple midpoint | Position estimation formula |
| **Reliability** | Consistent performance | Varies with data distribution |

## Binary Search vs Hash Table

| Aspect | Binary Search | Hash Table |
|--------|---------------|------------|
| **Search Time** | O(log n) | O(1) average |
| **Ordered Operations** | ✅ Yes (min, max, range) | ❌ No |
| **Space** | O(1) extra | O(n) extra |
| **Sorted Traversal** | ✅ Natural | ❌ Not possible |
| **Dynamic Updates** | ❌ Expensive | ✅ Efficient |

## When Each Algorithm Shines

### Choose Binary Search When:
- Data is sorted and static
- Memory is limited
- Need range queries (find all elements between x and y)
- Consistent O(log n) performance required

### Choose Linear Search When:
- Data is unsorted
- Array is very small (< 50 elements)
- Simplicity is priority
- One-time search

### Choose Hash Table When:
- Constant-time lookups are critical
- Frequent insertions/deletions
- Data order doesn't matter
- Memory is available

### Choose Interpolation Search When:
- Data is uniformly distributed
- Very large sorted dataset
- Performance better than O(log n) needed
- Can afford worst-case O(n)

## Visual Performance Comparison

For a sorted array of size n = 1,000,000:

```
Binary Search:      20 operations     [====================] O(log n)
Jump Search:        1,000 operations  [████████████████████████████████████████████████████████] O(√n)
Linear Search:      500,000 avg ops   [████████████████████████████████████████████████████████████████████████████████████████...] O(n)
Hash Table:         1 operation       [=] O(1)
```

**Note**: Hash table requires O(n) extra space and doesn't support ordered operations.
