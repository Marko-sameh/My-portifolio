# Implementation Phases - Portfolio Audit Fixes

## Phase A: Critical Stability & Crash Risks
**Priority:** IMMEDIATE  
**Estimated Time:** 12-16 hours  
**Risk:** HIGH if not fixed

### A1. Fix Memory Leaks in Emotion Detection
**Files:**
- `src/hooks/useEmotionDetection.js`
- `src/lib/behaviorTracker.js`

**Changes:**
- Add proper cleanup for all event listeners
- Clear all intervals and timeouts
- Reset refs on unmount
- Add cleanup verification

**Expected Impact:** Prevents memory leaks, stops crashes on long sessions

---

### A2. Add Error Boundaries
**Files to Create:**
- `src/components/ErrorBoundary/PageErrorBoundary.jsx`
- `src/components/ErrorBoundary/FeatureErrorBoundary.jsx`

**Files to Modify:**
- `src/app/Identity/page.jsx`
- `src/app/Mastery/page.jsx`
- `src/app/Builds/page.jsx`
- `src/app/Core/page.jsx`
- `src/app/beyond/page.jsx`
- `src/app/Signal/page.jsx`
- `src/components/ui/AIEmotionSystem.jsx`

**Changes:**
- Wrap each page in error boundary
- Add error boundary around emotion system
- Add error boundary around project loading
- Create fallback UI components

**Expected Impact:** Graceful error handling, no full app crashes

---

### A3. Fix API Security Issues
**Files:**
- `src/hooks/useProjects.js`
- `src/app/api/projects/route.js`
- `src/app/api/projects/[id]/route.js`
- `src/lib/auth.js`

**Changes:**
- Remove `NEXT_PUBLIC_API_KEY` from client
- Move authentication to server-only
- Create server-side API wrapper
- Use server actions for mutations

**Expected Impact:** Secure API, no exposed credentials

---

### A4. Handle Promise Rejections
**Files:**
- `src/hooks/useProjects.js`
- `src/lib/dynamicSEO.js`
- All API route files

**Changes:**
- Add try-catch to all async functions
- Add error state management
- Add user-facing error messages
- Add retry logic where appropriate

**Expected Impact:** No silent failures, better UX

---

## Phase B: Performance Bottlenecks
**Priority:** HIGH  
**Estimated Time:** 10-14 hours  
**Impact:** User-facing performance

### B1. Optimize Navigation Component
**Files:**
- `src/components/ui/Nav.jsx`

**Changes:**
- Memoize nav items array
- Use CSS transforms instead of state for visibility
- Reduce scroll event handler complexity
- Add `React.memo` to component

**Expected Impact:** Smooth scrolling, 60fps maintained

---

### B2. Fix Image Loading
**Files:**
- `src/components/ui/MasteryCard.jsx`
- `src/components/ui/ExperimentCard.jsx`
- `src/components/ui/ProjectCard.jsx`
- All components using `<img>`

**Changes:**
- Replace `<img>` with Next.js `<Image>`
- Add proper sizes prop
- Configure loading priority
- Add blur placeholders

**Expected Impact:** 30-40% faster page loads, better LCP

---

### B3. Defer Emotion Detection
**Files:**
- `src/components/ui/AIEmotionSystem.jsx`
- `src/hooks/useEmotionDetection.js`

**Changes:**
- Lazy initialize on user interaction
- Use `requestIdleCallback`
- Make opt-in with user preference
- Add loading state

**Expected Impact:** Faster TTI, better FID

---

### B4. Optimize Context Updates
**Files:**
- `src/contexts/RecruiterModeContext.jsx`

**Changes:**
- Memoize context value with `useMemo`
- Split context if needed
- Add context selectors

**Expected Impact:** Fewer unnecessary re-renders

---

### B5. Add Loading States
**Files:**
- `src/app/Builds/BuildsClient.jsx`
- `src/components/ui/RecruterProjects.jsx`
- `src/hooks/useProjects.js`

**Changes:**
- Add loading state to hook
- Create skeleton loader components
- Show loading UI during fetch
- Add suspense boundaries

**Expected Impact:** Better perceived performance

---

## Phase C: Maintainability Improvements
**Priority:** MEDIUM  
**Estimated Time:** 12-16 hours  
**Impact:** Developer experience

### C1. Extract Shared Components
**Files to Create:**
- `src/components/shared/BackButton.jsx`
- `src/components/shared/PageLayout.jsx`
- `src/components/shared/MarketingSection.jsx`
- `src/components/shared/SkeletonLoader.jsx`

**Files to Refactor:**
- All `*Client.jsx` files

**Changes:**
- Extract repeated back button
- Create page layout wrapper
- Standardize marketing sections
- Remove code duplication

**Expected Impact:** 40% less code duplication, easier maintenance

---

### C2. Add Error Logging
**Files:**
- `src/lib/logger.js` (create)
- All API routes
- All error boundaries

**Changes:**
- Create logging utility
- Add structured logging
- Log errors with context
- Add monitoring integration points

**Expected Impact:** Better debugging, faster issue resolution

---

### C3. Add Input Validation
**Files:**
- `src/app/api/projects/route.js`
- `src/app/api/projects/[id]/route.js`
- `src/lib/validation.js` (create)

**Changes:**
- Install Zod
- Create validation schemas
- Validate all inputs
- Return proper error messages

**Expected Impact:** Data integrity, security

---

### C4. Remove Debug Code
**Files:**
- `src/components/ui/ProjectCard.jsx`
- All files with console.log

**Changes:**
- Remove all console.log
- Remove commented code
- Clean up debug statements

**Expected Impact:** Cleaner production code

---

## Phase D: Accessibility Fixes
**Priority:** MEDIUM  
**Estimated Time:** 8-10 hours  
**Impact:** WCAG compliance

### D1. Fix Form Accessibility
**Files:**
- `src/components/ui/SignalSection.jsx`
- `src/app/Signal/SignalClient.jsx`

**Changes:**
- Add proper `<label>` elements
- Add `aria-label` where needed
- Add `aria-describedby` for errors
- Add required/invalid states

**Expected Impact:** WCAG 2.1 AA compliance

---

### D2. Add Focus Management
**Files:**
- `src/components/ui/CVModal.jsx`
- `src/components/ui/Nav.jsx` (mobile menu)

**Changes:**
- Trap focus in modals
- Restore focus on close
- Add focus indicators
- Test keyboard navigation

**Expected Impact:** Better keyboard navigation

---

### D3. Improve Alt Text
**Files:**
- All components with images

**Changes:**
- Write descriptive alt text
- Add context to images
- Remove redundant "image of"
- Add empty alt for decorative images

**Expected Impact:** Better screen reader experience

---

## Phase E: Optional Enhancements
**Priority:** LOW  
**Estimated Time:** 16-20 hours  
**Impact:** Nice to have

### E1. Add TypeScript
- Migrate to .tsx files
- Add type definitions
- Configure strict mode

### E2. Add Testing
- Setup Jest + React Testing Library
- Add unit tests for utilities
- Add integration tests for pages

### E3. Add Performance Monitoring
- Integrate analytics
- Add custom metrics
- Setup error tracking

### E4. Optimize Bundle
- Analyze bundle size
- Remove unused dependencies
- Add dynamic imports

---

## Implementation Order

1. **Week 1:** Phase A (Critical fixes)
2. **Week 2:** Phase B (Performance)
3. **Week 3:** Phase C (Maintainability)
4. **Week 4:** Phase D (Accessibility)
5. **Week 5+:** Phase E (Optional)

## Success Metrics

### After Phase A:
- Zero memory leaks
- Zero unhandled errors
- Secure API endpoints

### After Phase B:
- Lighthouse: 95+
- TTI: < 2s
- FCP: < 1s

### After Phase C:
- Code duplication: -40%
- Build time: -20%
- Developer velocity: +30%

### After Phase D:
- WCAG 2.1 AA: 100%
- Keyboard nav: 100%
- Screen reader: 95%+
