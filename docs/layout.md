# Algorithm Page Layout Specification

## Design Philosophy
Visualization-first. Supporting content is accessible but never competes for attention.

---

## Layout Structure

### Primary Zone (70-80% of viewport)

```
┌─────────────────────────────────────────────────────────┐
│  BINARY SEARCH                                          │
│  Time: O(log n)  Space: O(1)  Category: Searching       │ ← Metadata strip
├─────────────────────────────────────────────────────────┤
│                                                         │
│            ╔══════════════════════╗                     │
│            ║   VISUALIZATION      ║                     │ ← Primary area
│            ║   [Array display]    ║                     │
│            ╚══════════════════════╝                     │
│                                                         │
│  ┌─ Controls ──────────────────────────────────────┐   │
│  │ [◀] [⏸] [▶] [↺]  Speed: ●═══  [Custom Input]   │   │ ← Control panel
│  └──────────────────────────────────────────────────┘   │
└─────────────────────────────────────────────────────────┘
```

### Secondary Zone (20-30% of viewport, collapsed by default)

```
├─────────────────────────────────────────────────────────┤
│  [📋 Code] [📐 Pseudocode] [💡 Use Cases] [⚖️ Compare] │ ← Expandable tabs
└─────────────────────────────────────────────────────────┘
```

---

## Components

### 1. Metadata Strip
**Purpose**: Provide essential algorithm information without clutter

**Content**:
- Algorithm name (prominent)
- Time complexity (badge/tooltip)
- Space complexity (badge/tooltip)
- Category (subtle label)

**Behavior**:
- Always visible
- Minimal vertical space (~60-80px)

---

### 2. Visualization Area
**Purpose**: The star of the show - where the algorithm comes to life

**Requirements**:
- Maximum screen real estate
- Responsive scaling (adapts to viewport)
- Clear visual hierarchy (active elements stand out)
- Smooth animations

**Behavior**:
- Automatically scales to available space
- Maintains aspect ratio on different screen sizes
- Pauses on user interaction with controls

---

### 3. Control Panel
**Purpose**: Full playback control for the visualization

**Controls**:
- `[◀]` Step backward
- `[⏸]/[▶]` Play/Pause toggle
- `[↺]` Reset to initial state
- Speed slider (continuous control)
- Custom input field (for user-defined data)

**Behavior**:
- Integrated into primary zone (not floating)
- Always accessible (sticky positioning on mobile)
- Immediate visual feedback on interaction

---

### 4. Expandable Content Tabs
**Purpose**: Deep-dive content for learners who want more

**Tabs**:
1. **📋 Code** - Implementation with syntax highlighting
2. **📐 Pseudocode** - Language-agnostic algorithm description
3. **💡 Use Cases** - When to use this algorithm, real-world applications
4. **⚖️ Compare** - Comparison with alternative algorithms

**Behavior**:
- Collapsed by default (visibility doesn't interfere with visualization)
- Click/tap to expand individual tab
- Only one tab expanded at a time (accordion pattern)
- Smooth expand/collapse animation
- Content scrollable if needed

---

## Responsive Behavior

### Desktop (≥1024px)
- Primary zone: 75% viewport height
- Visualization area: Maximum width with comfortable padding
- Control panel: Horizontal layout
- Tabs: Full-width bar, icons + labels

### Tablet (768px - 1023px)
- Primary zone: 70% viewport height
- Visualization area: Adapts to narrower width
- Control panel: Compact horizontal layout
- Tabs: Icons + abbreviated labels

### Mobile (<768px)
- Primary zone: 80% viewport height (maximize visualization)
- Visualization area: Full-width minus minimal padding
- Control panel: Stacked/wrapped layout, larger touch targets
- Tabs: Icon-only with tooltips, or vertical stack when expanded

---

## Interaction Patterns

### Tab Expansion
1. User clicks/taps tab
2. Smooth slide-down animation (300ms)
3. Content fades in
4. Other tabs remain collapsed

### Custom Input
1. User clicks custom input field
2. Modal/inline form appears
3. User enters data (array, target value, etc.)
4. Visualization resets with new data
5. Form closes

### Playback Controls
- Play: Auto-advance through steps at selected speed
- Pause: Freeze at current step
- Step back/forward: Manual frame-by-frame control
- Reset: Return to initial state

---

## Visual Hierarchy

**Priority 1** (Always visible, maximum attention):
- Visualization area

**Priority 2** (Always visible, supportive):
- Metadata strip
- Control panel

**Priority 3** (Hidden until requested):
- Code
- Pseudocode
- Use Cases
- Comparisons

---

## Design Constraints

1. **No scrolling in primary zone** - Everything above tabs fits in viewport
2. **Touch-friendly** - Minimum 44x44px touch targets on mobile
3. **Keyboard accessible** - All controls navigable via keyboard
4. **Fast load** - Static content, minimal JavaScript
5. **Offline-capable** - No external dependencies for core functionality

---

## Implementation Notes

- Use CSS Grid for primary zone layout
- Flexbox for control panel
- CSS transitions for tab animations
- JavaScript for visualization state management
- HTML details/summary fallback for tabs (progressive enhancement)
- ARIA labels for accessibility

---

## Example User Flow

1. Page loads → Visualization visible, controls ready, tabs collapsed
2. User clicks Play → Animation begins
3. User pauses at interesting step → Clicks "Code" tab
4. Code section expands → User sees corresponding implementation
5. User scrolls code → Visualization remains visible above
6. User clicks "Compare" tab → Code collapses, comparison expands
7. User clicks Reset → Returns to step 1

---

*This layout will be the template for all 230+ algorithms.*
