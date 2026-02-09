# Identity Page UX Pattern Guide

## Key Design Elements to Apply Across All Pages

### 1. Hero Section
```jsx
<div className="relative overflow-hidden">
  <div className="absolute inset-0 bg-gradient-to-b from-[var(--accent)]/10 via-transparent to-transparent" />
  <div className="max-w-6xl mx-auto px-4 sm:px-6 pt-10 sm:pt-16 lg:pt-20 pb-16 sm:pb-24 relative">
    {/* Back button */}
    {/* Title with gradient */}
    {/* Subtitle */}
  </div>
</div>
```

### 2. Section Spacing
- Main sections: `mb-24 sm:mb-32`
- Sub-sections: `mb-16 sm:mb-20`
- Content gaps: `gap-12` or `gap-8 sm:gap-12`

### 3. Chapter/Section Labels
```jsx
<div className="flex items-center gap-3 mb-6">
  <div className="h-px w-12 bg-gradient-to-r from-transparent to-[var(--accent)]" />
  <span className="text-sm font-medium tracking-wider text-[var(--accent)] uppercase">
    Chapter 1
  </span>
</div>
```

### 4. Image Containers with Hover Effects
```jsx
<div className="relative h-80 lg:h-96">
  <div className="absolute inset-0 bg-gradient-to-br from-[var(--accent)]/20 to-transparent rounded-2xl -rotate-3" />
  <div className="relative h-full rounded-2xl overflow-hidden border border-white/10 rotate-1 hover:rotate-0 transition-transform duration-500">
    <Image src="..." alt="..." fill className="object-cover" />
  </div>
</div>
```

### 5. Card Components
```jsx
<motion.div
  className="group relative overflow-hidden rounded-xl p-6 bg-white/5 border border-white/10 hover:border-[var(--accent)]/50 transition-all duration-300"
>
  <div className="absolute inset-0 bg-gradient-to-br from-[var(--accent)]/0 to-[var(--accent)]/0 group-hover:from-[var(--accent)]/10 group-hover:to-transparent transition-all duration-300" />
  <div className="relative">
    {/* Content */}
  </div>
</motion.div>
```

### 6. Feature Boxes with Icons
```jsx
<div className="text-center space-y-3">
  <div className="w-12 h-12 rounded-full bg-[var(--accent)]/20 border border-[var(--accent)]/30 flex items-center justify-center mx-auto mb-4">
    <Icon className="w-6 h-6" style={{ color: 'var(--accent)' }} />
  </div>
  <h3 className="text-xl font-semibold">Title</h3>
  <p className="text-gray-400 leading-relaxed">Description</p>
</div>
```

### 7. Large Container Sections
```jsx
<div className="relative rounded-3xl overflow-hidden border border-white/10">
  <div className="absolute inset-0 bg-gradient-to-tr from-white/5 via-transparent to-transparent" />
  <div className="relative p-8 sm:p-12">
    {/* Content */}
  </div>
</div>
```

### 8. Typography
- Main heading: `text-5xl sm:text-6xl lg:text-7xl font-bold`
- Section heading: `text-3xl sm:text-4xl font-bold`
- Body text: `text-lg text-gray-300 leading-relaxed`
- Small text: `text-sm text-gray-400`

### 9. Animations
- whileInView with `viewport={{ once: true }}`
- Stagger delays: `delay: i * 0.1`
- Duration: `0.6` for most animations

### 10. Color Usage
- Accent color for: icons, labels, headings, borders on hover
- Gray-300 for body text
- Gray-400 for secondary text
- White/5 for card backgrounds
- White/10 for borders

## Pages to Update
1. ✅ Identity - DONE (reference)
2. ⏳ Mastery
3. ⏳ Core
4. ⏳ Beyond
5. ⏳ Signal
6. ⏳ Builds (already has some updates)
