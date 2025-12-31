# Architecture Decision Records (ADRs)

**Date:** 2025-10-21
**Status:** Accepted

## Decision

Use ADRs to document significant architectural decisions.

## Context

Document "why" decisions were made, not just "what" was implemented.

## Alternatives

- **README documentation:** Hard to maintain, poor searchability
- **Wiki/Confluence:** Gets out of sync with code
- **Code comments:** Limited context, hard to find
- **ADRs:** Lightweight markdown in repo → **Chosen**

## Consequences

✅ Searchable, discrete, version-controlled
✅ ~100-150 words each (easy to skim)
✅ Industry-standard pattern

---

## Guidelines:
- Keep it short (~100-150 words)
- Use bullets and tables for skimmability
- State decision up front (takeaways first)
- Explain alternatives considered (shows thoughtfulness)
- Use emoji markers for consequences (✅ benefit, ⚠️ tradeoff)

**Reference:** [Documenting Architecture Decisions by Michael Nygard](http://thinkrelevance.com/blog/2011/11/15/documenting-architecture-decisions)

---

## Template for New ADRs

```markdown
# [Decision Title]

**Date:** YYYY-MM-DD
**Status:** Accepted | Rejected | Superseded

## Decision

[One clear sentence: What we decided to do]

## Context

- [Why this decision matters]
- [What problem does it solve]
- [What constraints influenced this decision]

## Alternatives

- **Option A:** [Description] → [Why rejected]
- **Option B:** [Description] → [Why rejected]
- **Chosen:** [What we picked] → **Chosen**

## Consequences

✅ [Positive outcome 1]
✅ [Positive outcome 2]
⚠️ [Trade-off or limitation]
```