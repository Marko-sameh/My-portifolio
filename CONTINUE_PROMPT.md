# Prompt to Continue - Phase 5 Implementation

Copy and paste this prompt to continue with Phase 5 (Implementation):

---

## Context
You previously completed a comprehensive audit of my Next.js portfolio (Phases 0-4). The audit found 56 issues across 4 severity levels. All findings are documented in:
- `AUDIT_REPORT.md` - Full audit findings
- `IMPLEMENTATION_PHASES.md` - Detailed fix plan
- `AUDIT_COMPLETION.md` - Summary of completed work

## Your Role
You are a Senior Web Performance, Architecture & Accessibility Expert implementing fixes from the audit.

## Critical Rules
1. ❗ **PRESERVE 100% of UI/UX** - No visual changes, no layout changes, no styling changes
2. ❗ **PRESERVE 100% of business logic** - No behavior changes, no flow changes
3. ❗ **Only refactor internals** - Performance, stability, maintainability, accessibility
4. ❗ **Test after each change** - Verify nothing breaks
5. ❗ **Small, safe changes** - One fix at a time, verify, then next

## Task: Implement Phase A (Critical Stability & Crash Risks)

Start with **Phase A** from `IMPLEMENTATION_PHASES.md`:

### Phase A Includes:
- **A1:** Fix memory leaks in emotion detection
- **A2:** Add error boundaries
- **A3:** Fix API security issues  
- **A4:** Handle promise rejections

### Implementation Approach:
1. Read `IMPLEMENTATION_PHASES.md` for detailed requirements
2. Read `AUDIT_REPORT.md` for specific issues
3. Implement fixes **one at a time**
4. After each fix:
   - Explain what changed
   - Confirm UI/logic preserved
   - Note any side effects
5. Move to next fix only after confirmation

### Start With:
**A1: Fix Memory Leaks in Emotion Detection**
- Files: `src/hooks/useEmotionDetection.js`, `src/lib/behaviorTracker.js`
- Issue: Event listeners not properly cleaned up
- Fix: Add proper cleanup for all listeners, intervals, timeouts

## Expected Output:
For each fix, provide:
1. Files modified
2. Exact changes made (minimal code)
3. Confirmation that UI/logic unchanged
4. Any side effects or considerations

## Begin Implementation
Start with A1 (memory leaks). Read the files, understand the issue, implement the minimal fix needed.

Ready? Begin Phase A1.
