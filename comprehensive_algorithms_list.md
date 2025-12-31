# Comprehensive Algorithms & Data Structures List
## For Algorithm Visualization Project

*Organized by category, sorted by difficulty (Beginner → Intermediate → Advanced) within each category*

---

## 1. SORTING ALGORITHMS

### Beginner
| Algorithm | Time Complexity | Space | Stable | Visual Appeal |
|-----------|----------------|-------|--------|---------------|
| Bubble Sort | O(n²) | O(1) | Yes | ⭐⭐⭐⭐⭐ |
| Selection Sort | O(n²) | O(1) | No | ⭐⭐⭐⭐⭐ |
| Insertion Sort | O(n²) | O(1) | Yes | ⭐⭐⭐⭐⭐ |
| Counting Sort | O(n+k) | O(k) | Yes | ⭐⭐⭐⭐ |

### Intermediate
| Algorithm | Time Complexity | Space | Stable | Visual Appeal |
|-----------|----------------|-------|--------|---------------|
| Merge Sort | O(n log n) | O(n) | Yes | ⭐⭐⭐⭐⭐ |
| Quick Sort | O(n log n) avg | O(log n) | No | ⭐⭐⭐⭐⭐ |
| Heap Sort | O(n log n) | O(1) | No | ⭐⭐⭐⭐ |
| Shell Sort | O(n log² n) | O(1) | No | ⭐⭐⭐⭐ |
| Bucket Sort | O(n+k) | O(n) | Yes | ⭐⭐⭐⭐ |
| Radix Sort | O(nk) | O(n+k) | Yes | ⭐⭐⭐⭐ |
| Cocktail Shaker Sort | O(n²) | O(1) | Yes | ⭐⭐⭐⭐ |
| Comb Sort | O(n²) | O(1) | No | ⭐⭐⭐ |
| Gnome Sort | O(n²) | O(1) | Yes | ⭐⭐⭐⭐ |

### Advanced
| Algorithm | Time Complexity | Space | Stable | Visual Appeal |
|-----------|----------------|-------|--------|---------------|
| Tim Sort | O(n log n) | O(n) | Yes | ⭐⭐⭐ |
| Intro Sort | O(n log n) | O(log n) | No | ⭐⭐⭐ |
| Block Sort | O(n log n) | O(1) | Yes | ⭐⭐⭐ |
| Bitonic Sort | O(log² n) | O(n log² n) | No | ⭐⭐⭐⭐ |
| Pancake Sort | O(n²) | O(1) | No | ⭐⭐⭐⭐⭐ |
| Bogo Sort (for fun) | O((n+1)!) | O(1) | No | ⭐⭐⭐⭐⭐ |
| Sleep Sort (for fun) | O(max(arr)) | O(n) | No | ⭐⭐⭐⭐⭐ |

---

## 2. SEARCHING ALGORITHMS

### Beginner
| Algorithm | Time Complexity | Best For | Visual Appeal |
|-----------|----------------|----------|---------------|
| Linear Search | O(n) | Unsorted arrays | ⭐⭐⭐⭐⭐ |
| Binary Search | O(log n) | Sorted arrays | ⭐⭐⭐⭐⭐ |
| Jump Search | O(√n) | Sorted arrays | ⭐⭐⭐⭐ |

### Intermediate
| Algorithm | Time Complexity | Best For | Visual Appeal |
|-----------|----------------|----------|---------------|
| Interpolation Search | O(log log n) | Uniformly distributed | ⭐⭐⭐⭐ |
| Exponential Search | O(log n) | Unbounded arrays | ⭐⭐⭐⭐ |
| Ternary Search | O(log₃ n) | Unimodal functions | ⭐⭐⭐⭐ |
| Fibonacci Search | O(log n) | Sorted arrays | ⭐⭐⭐ |

### Advanced
| Algorithm | Time Complexity | Best For | Visual Appeal |
|-----------|----------------|----------|---------------|
| Binary Search on Answer | O(log n × f(n)) | Optimization | ⭐⭐⭐ |
| Two Pointer Technique | O(n) | Sorted arrays | ⭐⭐⭐⭐ |
| Sliding Window | O(n) | Subarray problems | ⭐⭐⭐⭐⭐ |

---

## 3. GRAPH ALGORITHMS

### Traversal (Beginner)
| Algorithm | Time Complexity | Space | Visual Appeal |
|-----------|----------------|-------|---------------|
| Breadth-First Search (BFS) | O(V+E) | O(V) | ⭐⭐⭐⭐⭐ |
| Depth-First Search (DFS) | O(V+E) | O(V) | ⭐⭐⭐⭐⭐ |
| Level Order Traversal | O(V+E) | O(V) | ⭐⭐⭐⭐⭐ |

### Shortest Path (Intermediate)
| Algorithm | Time Complexity | Space | Use Case | Visual Appeal |
|-----------|----------------|-------|----------|---------------|
| Dijkstra's Algorithm | O((V+E) log V) | O(V) | Non-negative weights | ⭐⭐⭐⭐⭐ |
| Bellman-Ford Algorithm | O(VE) | O(V) | Negative weights | ⭐⭐⭐⭐ |
| Floyd-Warshall Algorithm | O(V³) | O(V²) | All-pairs shortest | ⭐⭐⭐⭐ |
| A* Search Algorithm | O(E) | O(V) | Heuristic-based | ⭐⭐⭐⭐⭐ |
| Bidirectional BFS | O(V+E) | O(V) | Single source-target | ⭐⭐⭐⭐ |

### Minimum Spanning Tree (Intermediate)
| Algorithm | Time Complexity | Space | Visual Appeal |
|-----------|----------------|-------|---------------|
| Prim's Algorithm | O((V+E) log V) | O(V) | ⭐⭐⭐⭐⭐ |
| Kruskal's Algorithm | O(E log E) | O(V) | ⭐⭐⭐⭐⭐ |
| Borůvka's Algorithm | O(E log V) | O(V) | ⭐⭐⭐⭐ |

### Connectivity & Components (Intermediate)
| Algorithm | Time Complexity | Use Case | Visual Appeal |
|-----------|----------------|----------|---------------|
| Union-Find (Disjoint Set) | O(α(n)) | Connected components | ⭐⭐⭐⭐⭐ |
| Tarjan's SCC Algorithm | O(V+E) | Strongly connected | ⭐⭐⭐⭐ |
| Kosaraju's Algorithm | O(V+E) | Strongly connected | ⭐⭐⭐⭐ |
| Bridge Finding | O(V+E) | Cut edges | ⭐⭐⭐⭐ |
| Articulation Points | O(V+E) | Cut vertices | ⭐⭐⭐⭐ |

### Advanced Graph
| Algorithm | Time Complexity | Use Case | Visual Appeal |
|-----------|----------------|----------|---------------|
| Topological Sort | O(V+E) | DAG ordering | ⭐⭐⭐⭐⭐ |
| Johnson's Algorithm | O(V² log V + VE) | All-pairs (sparse) | ⭐⭐⭐ |
| Ford-Fulkerson (Max Flow) | O(E × max_flow) | Network flow | ⭐⭐⭐⭐ |
| Edmonds-Karp | O(VE²) | Network flow | ⭐⭐⭐⭐ |
| Dinic's Algorithm | O(V²E) | Network flow | ⭐⭐⭐ |
| Hungarian Algorithm | O(n³) | Assignment problem | ⭐⭐⭐ |
| Hopcroft-Karp | O(E√V) | Bipartite matching | ⭐⭐⭐⭐ |
| Euler Path/Circuit | O(E) | Eulerian graphs | ⭐⭐⭐⭐⭐ |
| Hamiltonian Path | O(n! × n) | NP-complete | ⭐⭐⭐⭐ |
| Graph Coloring | O(2^n × n) | Chromatic number | ⭐⭐⭐⭐⭐ |

---

## 4. TREE ALGORITHMS

### Tree Traversals (Beginner)
| Algorithm | Time Complexity | Visual Appeal |
|-----------|----------------|---------------|
| Pre-order Traversal | O(n) | ⭐⭐⭐⭐⭐ |
| In-order Traversal | O(n) | ⭐⭐⭐⭐⭐ |
| Post-order Traversal | O(n) | ⭐⭐⭐⭐⭐ |
| Level-order Traversal | O(n) | ⭐⭐⭐⭐⭐ |
| Morris Traversal | O(n) | ⭐⭐⭐⭐ |

### Binary Search Tree Operations (Beginner-Intermediate)
| Operation | Time Complexity | Visual Appeal |
|-----------|----------------|---------------|
| BST Insert | O(h) | ⭐⭐⭐⭐⭐ |
| BST Delete | O(h) | ⭐⭐⭐⭐⭐ |
| BST Search | O(h) | ⭐⭐⭐⭐⭐ |
| Find Min/Max | O(h) | ⭐⭐⭐⭐ |
| Find Successor/Predecessor | O(h) | ⭐⭐⭐⭐ |

### Self-Balancing Trees (Intermediate-Advanced)
| Data Structure | Operations | Visual Appeal |
|----------------|------------|---------------|
| AVL Tree (rotations) | O(log n) | ⭐⭐⭐⭐⭐ |
| Red-Black Tree | O(log n) | ⭐⭐⭐⭐⭐ |
| Splay Tree | O(log n) amortized | ⭐⭐⭐⭐ |
| B-Tree | O(log n) | ⭐⭐⭐⭐ |
| B+ Tree | O(log n) | ⭐⭐⭐ |
| 2-3 Tree | O(log n) | ⭐⭐⭐⭐ |
| 2-3-4 Tree | O(log n) | ⭐⭐⭐⭐ |
| Treap | O(log n) expected | ⭐⭐⭐⭐ |

### Heap Operations (Intermediate)
| Algorithm | Time Complexity | Visual Appeal |
|-----------|----------------|---------------|
| Heapify | O(n) | ⭐⭐⭐⭐⭐ |
| Heap Insert | O(log n) | ⭐⭐⭐⭐⭐ |
| Heap Extract | O(log n) | ⭐⭐⭐⭐⭐ |
| Build Heap | O(n) | ⭐⭐⭐⭐⭐ |
| Decrease/Increase Key | O(log n) | ⭐⭐⭐⭐ |

### Advanced Tree Structures
| Data Structure | Use Case | Visual Appeal |
|----------------|----------|---------------|
| Segment Tree | Range queries | ⭐⭐⭐⭐⭐ |
| Fenwick Tree (BIT) | Prefix sums | ⭐⭐⭐⭐ |
| Trie (Prefix Tree) | String operations | ⭐⭐⭐⭐⭐ |
| Suffix Tree | String matching | ⭐⭐⭐ |
| Suffix Array | String matching | ⭐⭐⭐ |
| K-D Tree | Spatial data | ⭐⭐⭐⭐ |
| Interval Tree | Interval queries | ⭐⭐⭐⭐ |
| Merkle Tree | Data verification | ⭐⭐⭐ |

---

## 5. STRING ALGORITHMS

### Pattern Matching (Beginner-Intermediate)
| Algorithm | Time Complexity | Visual Appeal |
|-----------|----------------|---------------|
| Naive Pattern Search | O(nm) | ⭐⭐⭐⭐⭐ |
| KMP Algorithm | O(n+m) | ⭐⭐⭐⭐⭐ |
| Rabin-Karp Algorithm | O(n+m) avg | ⭐⭐⭐⭐ |
| Boyer-Moore Algorithm | O(nm) worst | ⭐⭐⭐⭐ |
| Z Algorithm | O(n+m) | ⭐⭐⭐⭐ |

### Advanced String
| Algorithm | Time Complexity | Use Case | Visual Appeal |
|-----------|----------------|----------|---------------|
| Aho-Corasick | O(n+m+z) | Multi-pattern | ⭐⭐⭐⭐ |
| Manacher's Algorithm | O(n) | Palindromes | ⭐⭐⭐⭐⭐ |
| Longest Common Substring | O(nm) | String comparison | ⭐⭐⭐⭐ |
| Longest Common Subsequence | O(nm) | String comparison | ⭐⭐⭐⭐⭐ |
| Edit Distance (Levenshtein) | O(nm) | String similarity | ⭐⭐⭐⭐⭐ |
| Suffix Array Construction | O(n log n) | String indexing | ⭐⭐⭐ |

---

## 6. DYNAMIC PROGRAMMING

### Classic DP (Beginner)
| Problem/Algorithm | Time Complexity | Visual Appeal |
|-------------------|----------------|---------------|
| Fibonacci Numbers | O(n) | ⭐⭐⭐⭐⭐ |
| Climbing Stairs | O(n) | ⭐⭐⭐⭐⭐ |
| House Robber | O(n) | ⭐⭐⭐⭐ |
| Maximum Subarray (Kadane's) | O(n) | ⭐⭐⭐⭐⭐ |
| Coin Change | O(n×amount) | ⭐⭐⭐⭐⭐ |

### Grid DP (Intermediate)
| Problem/Algorithm | Time Complexity | Visual Appeal |
|-------------------|----------------|---------------|
| Unique Paths | O(mn) | ⭐⭐⭐⭐⭐ |
| Minimum Path Sum | O(mn) | ⭐⭐⭐⭐⭐ |
| Longest Increasing Path | O(mn) | ⭐⭐⭐⭐⭐ |
| Edit Distance | O(mn) | ⭐⭐⭐⭐⭐ |
| Longest Common Subsequence | O(mn) | ⭐⭐⭐⭐⭐ |

### Knapsack Variants (Intermediate)
| Problem/Algorithm | Time Complexity | Visual Appeal |
|-------------------|----------------|---------------|
| 0/1 Knapsack | O(nW) | ⭐⭐⭐⭐⭐ |
| Unbounded Knapsack | O(nW) | ⭐⭐⭐⭐ |
| Subset Sum | O(n×sum) | ⭐⭐⭐⭐⭐ |
| Partition Equal Subset | O(n×sum) | ⭐⭐⭐⭐ |

### Advanced DP
| Problem/Algorithm | Time Complexity | Visual Appeal |
|-------------------|----------------|---------------|
| Matrix Chain Multiplication | O(n³) | ⭐⭐⭐⭐ |
| Optimal BST | O(n³) | ⭐⭐⭐⭐ |
| Longest Palindromic Subsequence | O(n²) | ⭐⭐⭐⭐ |
| Rod Cutting | O(n²) | ⭐⭐⭐⭐⭐ |
| Egg Dropping | O(nk²) | ⭐⭐⭐⭐⭐ |
| Word Break | O(n²) | ⭐⭐⭐⭐ |
| Burst Balloons | O(n³) | ⭐⭐⭐⭐ |
| Traveling Salesman (DP) | O(n² × 2ⁿ) | ⭐⭐⭐⭐ |
| Bitmask DP | varies | ⭐⭐⭐⭐ |
| Digit DP | varies | ⭐⭐⭐ |

---

## 7. GREEDY ALGORITHMS

### Beginner
| Algorithm | Problem Type | Visual Appeal |
|-----------|-------------|---------------|
| Activity Selection | Scheduling | ⭐⭐⭐⭐⭐ |
| Fractional Knapsack | Optimization | ⭐⭐⭐⭐⭐ |
| Coin Change (Greedy) | Change making | ⭐⭐⭐⭐⭐ |
| Jump Game | Array traversal | ⭐⭐⭐⭐ |

### Intermediate
| Algorithm | Problem Type | Visual Appeal |
|-----------|-------------|---------------|
| Huffman Coding | Compression | ⭐⭐⭐⭐⭐ |
| Job Sequencing | Scheduling | ⭐⭐⭐⭐ |
| Minimum Platforms | Scheduling | ⭐⭐⭐⭐ |
| Gas Station | Circular array | ⭐⭐⭐⭐ |
| Interval Scheduling | Scheduling | ⭐⭐⭐⭐⭐ |

### Advanced
| Algorithm | Problem Type | Visual Appeal |
|-----------|-------------|---------------|
| Egyptian Fraction | Number theory | ⭐⭐⭐ |
| Optimal Merge Pattern | File merging | ⭐⭐⭐⭐ |
| Minimum Spanning Tree (Prim/Kruskal) | Graph | ⭐⭐⭐⭐⭐ |

---

## 8. DIVIDE AND CONQUER

### Beginner
| Algorithm | Time Complexity | Visual Appeal |
|-----------|----------------|---------------|
| Binary Search | O(log n) | ⭐⭐⭐⭐⭐ |
| Merge Sort | O(n log n) | ⭐⭐⭐⭐⭐ |
| Quick Sort | O(n log n) avg | ⭐⭐⭐⭐⭐ |

### Intermediate
| Algorithm | Time Complexity | Visual Appeal |
|-----------|----------------|---------------|
| Maximum Subarray (D&C) | O(n log n) | ⭐⭐⭐⭐ |
| Closest Pair of Points | O(n log n) | ⭐⭐⭐⭐⭐ |
| Count Inversions | O(n log n) | ⭐⭐⭐⭐ |
| Karatsuba Multiplication | O(n^1.585) | ⭐⭐⭐⭐ |
| Quick Select | O(n) avg | ⭐⭐⭐⭐ |

### Advanced
| Algorithm | Time Complexity | Visual Appeal |
|-----------|----------------|---------------|
| Strassen Matrix Multiplication | O(n^2.807) | ⭐⭐⭐ |
| Fast Fourier Transform (FFT) | O(n log n) | ⭐⭐⭐⭐ |
| Convex Hull (D&C) | O(n log n) | ⭐⭐⭐⭐⭐ |

---

## 9. BACKTRACKING

### Beginner
| Problem | Time Complexity | Visual Appeal |
|---------|----------------|---------------|
| Generate Permutations | O(n!) | ⭐⭐⭐⭐⭐ |
| Generate Subsets | O(2ⁿ) | ⭐⭐⭐⭐⭐ |
| Generate Combinations | O(C(n,k)) | ⭐⭐⭐⭐⭐ |

### Intermediate
| Problem | Time Complexity | Visual Appeal |
|---------|----------------|---------------|
| N-Queens | O(n!) | ⭐⭐⭐⭐⭐ |
| Sudoku Solver | O(9^(n×n)) | ⭐⭐⭐⭐⭐ |
| Rat in a Maze | O(2^(n²)) | ⭐⭐⭐⭐⭐ |
| Word Search | O(m×n×4^L) | ⭐⭐⭐⭐ |
| Letter Combinations | O(4ⁿ) | ⭐⭐⭐⭐ |

### Advanced
| Problem | Time Complexity | Visual Appeal |
|---------|----------------|---------------|
| Hamiltonian Path | O(n!) | ⭐⭐⭐⭐⭐ |
| Graph Coloring | O(m^n) | ⭐⭐⭐⭐⭐ |
| Knight's Tour | O(8^(n²)) | ⭐⭐⭐⭐⭐ |
| Cryptarithmetic | varies | ⭐⭐⭐⭐ |
| Subset Sum (Backtrack) | O(2ⁿ) | ⭐⭐⭐⭐ |

---

## 10. MATHEMATICAL ALGORITHMS

### Number Theory (Beginner)
| Algorithm | Time Complexity | Visual Appeal |
|-----------|----------------|---------------|
| GCD (Euclidean) | O(log min(a,b)) | ⭐⭐⭐⭐⭐ |
| LCM | O(log min(a,b)) | ⭐⭐⭐⭐ |
| Prime Check | O(√n) | ⭐⭐⭐⭐⭐ |
| Sieve of Eratosthenes | O(n log log n) | ⭐⭐⭐⭐⭐ |
| Factorial | O(n) | ⭐⭐⭐⭐ |
| Fibonacci | O(n) / O(log n) | ⭐⭐⭐⭐⭐ |

### Intermediate Math
| Algorithm | Time Complexity | Visual Appeal |
|-----------|----------------|---------------|
| Fast Exponentiation | O(log n) | ⭐⭐⭐⭐ |
| Modular Exponentiation | O(log n) | ⭐⭐⭐⭐ |
| Prime Factorization | O(√n) | ⭐⭐⭐⭐⭐ |
| Extended Euclidean | O(log min(a,b)) | ⭐⭐⭐ |
| Modular Inverse | O(log m) | ⭐⭐⭐ |
| Pascal's Triangle | O(n²) | ⭐⭐⭐⭐⭐ |
| Catalan Numbers | O(n) | ⭐⭐⭐⭐ |

### Advanced Math
| Algorithm | Time Complexity | Visual Appeal |
|-----------|----------------|---------------|
| Sieve of Atkin | O(n) | ⭐⭐⭐⭐ |
| Miller-Rabin Primality | O(k log³ n) | ⭐⭐⭐ |
| Chinese Remainder Theorem | O(n log n) | ⭐⭐⭐ |
| Euler's Totient Function | O(√n) | ⭐⭐⭐ |
| Matrix Exponentiation | O(k³ log n) | ⭐⭐⭐⭐ |
| FFT for Polynomial Mult. | O(n log n) | ⭐⭐⭐⭐ |
| Gaussian Elimination | O(n³) | ⭐⭐⭐⭐ |

---

## 11. BIT MANIPULATION

### Beginner
| Operation/Algorithm | Visual Appeal |
|--------------------|---------------|
| Check if Power of 2 | ⭐⭐⭐⭐⭐ |
| Count Set Bits | ⭐⭐⭐⭐⭐ |
| Toggle nth Bit | ⭐⭐⭐⭐ |
| Check if nth Bit Set | ⭐⭐⭐⭐ |
| Swap Two Numbers (XOR) | ⭐⭐⭐⭐⭐ |

### Intermediate
| Operation/Algorithm | Visual Appeal |
|--------------------|---------------|
| Find Single Number (XOR) | ⭐⭐⭐⭐⭐ |
| Generate All Subsets | ⭐⭐⭐⭐⭐ |
| Brian Kernighan's Algorithm | ⭐⭐⭐⭐ |
| Reverse Bits | ⭐⭐⭐⭐ |
| Find Missing Number | ⭐⭐⭐⭐ |

### Advanced
| Operation/Algorithm | Visual Appeal |
|--------------------|---------------|
| Bitmask DP | ⭐⭐⭐⭐ |
| Hamming Distance | ⭐⭐⭐⭐ |
| Bit Manipulation Tricks | ⭐⭐⭐⭐ |

---

## 12. COMPUTATIONAL GEOMETRY

### Beginner
| Algorithm | Visual Appeal |
|-----------|---------------|
| Distance Between Points | ⭐⭐⭐⭐⭐ |
| Orientation of Points | ⭐⭐⭐⭐⭐ |
| Line Intersection | ⭐⭐⭐⭐⭐ |
| Point in Polygon | ⭐⭐⭐⭐⭐ |

### Intermediate
| Algorithm | Time Complexity | Visual Appeal |
|-----------|----------------|---------------|
| Convex Hull (Graham Scan) | O(n log n) | ⭐⭐⭐⭐⭐ |
| Convex Hull (Jarvis March) | O(nh) | ⭐⭐⭐⭐⭐ |
| Closest Pair of Points | O(n log n) | ⭐⭐⭐⭐⭐ |
| Line Sweep Algorithm | O(n log n) | ⭐⭐⭐⭐ |

### Advanced
| Algorithm | Time Complexity | Visual Appeal |
|-----------|----------------|---------------|
| Voronoi Diagram | O(n log n) | ⭐⭐⭐⭐⭐ |
| Delaunay Triangulation | O(n log n) | ⭐⭐⭐⭐⭐ |
| Polygon Triangulation | O(n log n) | ⭐⭐⭐⭐ |
| Rotating Calipers | O(n) | ⭐⭐⭐⭐ |

---

## 13. DATA STRUCTURE OPERATIONS

### Array/List Operations
| Operation | Time Complexity | Visual Appeal |
|-----------|----------------|---------------|
| Array Rotation | O(n) | ⭐⭐⭐⭐⭐ |
| Array Reversal | O(n) | ⭐⭐⭐⭐⭐ |
| Dutch National Flag | O(n) | ⭐⭐⭐⭐⭐ |
| Kadane's Algorithm | O(n) | ⭐⭐⭐⭐⭐ |
| Two Pointers | O(n) | ⭐⭐⭐⭐⭐ |
| Sliding Window | O(n) | ⭐⭐⭐⭐⭐ |

### Linked List Operations
| Operation | Visual Appeal |
|-----------|---------------|
| Reverse Linked List | ⭐⭐⭐⭐⭐ |
| Detect Cycle (Floyd's) | ⭐⭐⭐⭐⭐ |
| Find Middle | ⭐⭐⭐⭐⭐ |
| Merge Two Sorted Lists | ⭐⭐⭐⭐⭐ |
| Remove Nth from End | ⭐⭐⭐⭐ |
| Palindrome Check | ⭐⭐⭐⭐ |

### Stack/Queue Operations
| Operation | Visual Appeal |
|-----------|---------------|
| Valid Parentheses | ⭐⭐⭐⭐⭐ |
| Next Greater Element | ⭐⭐⭐⭐⭐ |
| Stock Span Problem | ⭐⭐⭐⭐ |
| Min Stack | ⭐⭐⭐⭐ |
| Implement Queue using Stacks | ⭐⭐⭐⭐⭐ |
| Sliding Window Maximum | ⭐⭐⭐⭐ |

### Hash Table Operations
| Operation | Visual Appeal |
|-----------|---------------|
| Hash Function Visualization | ⭐⭐⭐⭐ |
| Collision Resolution (Chaining) | ⭐⭐⭐⭐⭐ |
| Collision Resolution (Open Addressing) | ⭐⭐⭐⭐⭐ |
| Linear Probing | ⭐⭐⭐⭐⭐ |
| Quadratic Probing | ⭐⭐⭐⭐ |
| Double Hashing | ⭐⭐⭐⭐ |

---

## 14. COMPRESSION & ENCODING

| Algorithm | Type | Visual Appeal |
|-----------|------|---------------|
| Huffman Coding | Lossless | ⭐⭐⭐⭐⭐ |
| Run-Length Encoding (RLE) | Lossless | ⭐⭐⭐⭐⭐ |
| LZW Compression | Lossless | ⭐⭐⭐⭐ |
| Arithmetic Coding | Lossless | ⭐⭐⭐ |
| Shannon-Fano Coding | Lossless | ⭐⭐⭐⭐ |

---

## 15. MISCELLANEOUS

### Randomized Algorithms
| Algorithm | Use Case | Visual Appeal |
|-----------|----------|---------------|
| Fisher-Yates Shuffle | Array shuffling | ⭐⭐⭐⭐⭐ |
| Reservoir Sampling | Stream sampling | ⭐⭐⭐⭐ |
| Randomized Quick Sort | Sorting | ⭐⭐⭐⭐⭐ |
| Monte Carlo Methods | Estimation | ⭐⭐⭐⭐ |

### Cache/Memory Algorithms
| Algorithm | Use Case | Visual Appeal |
|-----------|----------|---------------|
| LRU Cache | Caching | ⭐⭐⭐⭐⭐ |
| LFU Cache | Caching | ⭐⭐⭐⭐ |
| FIFO Cache | Caching | ⭐⭐⭐⭐⭐ |

### Classic Problems
| Problem | Category | Visual Appeal |
|---------|----------|---------------|
| Tower of Hanoi | Recursion | ⭐⭐⭐⭐⭐ |
| Josephus Problem | Math | ⭐⭐⭐⭐⭐ |
| Celebrity Problem | Array | ⭐⭐⭐⭐ |
| Water Trapping | Array | ⭐⭐⭐⭐⭐ |
| Stock Buy/Sell | DP/Greedy | ⭐⭐⭐⭐ |

---

## RECOMMENDED VISUALIZATION PRIORITIES

### Tier 1: Must Have (High Visual Impact, Foundational)
1. Bubble Sort, Selection Sort, Insertion Sort
2. Merge Sort, Quick Sort
3. Binary Search
4. BFS, DFS
5. Dijkstra's Algorithm
6. BST Operations
7. AVL Rotations
8. N-Queens
9. Fibonacci DP
10. Sliding Window

### Tier 2: Should Have (Great Learning Value)
1. Heap Operations
2. Red-Black Tree
3. Trie Operations
4. KMP String Matching
5. Prim's/Kruskal's MST
6. 0/1 Knapsack
7. Floyd-Warshall
8. Convex Hull
9. Huffman Coding
10. Union-Find

### Tier 3: Nice to Have (Advanced Topics)
1. A* Search
2. Segment Tree
3. FFT
4. Network Flow
5. Suffix Array
6. Voronoi Diagram
7. Advanced DP (Bitmask, etc.)

---

## TOTAL COUNT BY CATEGORY

| Category | Count |
|----------|-------|
| Sorting | 17+ |
| Searching | 10+ |
| Graph | 30+ |
| Tree | 35+ |
| String | 12+ |
| Dynamic Programming | 25+ |
| Greedy | 12+ |
| Divide & Conquer | 12+ |
| Backtracking | 12+ |
| Mathematical | 20+ |
| Bit Manipulation | 12+ |
| Computational Geometry | 12+ |
| Data Structure Ops | 25+ |
| Compression | 5+ |
| Miscellaneous | 10+ |
| **TOTAL** | **230+** |

---

*This list is comprehensive but not exhaustive.*
