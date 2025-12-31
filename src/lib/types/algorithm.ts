export interface AlgorithmMetadata {
  name: string;
  slug: string;
  category: 'sorting' | 'searching' | 'graph' | 'tree' | 'dp' | 'greedy' | 'backtracking' | 'math' | 'string' | 'other';
  difficulty: 'beginner' | 'intermediate' | 'advanced';
  timeComplexity: {
    best: string;
    average: string;
    worst: string;
  };
  spaceComplexity: string;
}

export interface AlgorithmContent {
  description: string;
  pseudocode: string;
  useCases: string;
  comparisons: string;
}
