

## Plan

### 1. Reduce navigation bar height on scroll

In `src/components/Navigation.tsx`, change the nav bar height when scrolled to be smaller:
- Line 70: Change `h-20 lg:h-24` to use a conditional based on `scrolled` state
- When scrolled: `h-14 lg:h-16` (compact)
- When not scrolled: `h-20 lg:h-24` (normal)
- Also reduce logo size when scrolled

### 2. Update Papéis de Parede page images

In `src/pages/produtos/PapeisDeParede.tsx`:
- Copy all 10 uploaded wallpaper images to `src/assets/` (wallpaper_01.webp through wallpaper_10.webp)
- Remove the current 2 images (the curtains import and the external URL)
- Import all 10 new images and use them in the carousel
- Update alt texts to describe each room/environment shown

### Files to modify
1. `src/components/Navigation.tsx` - Conditional height reduction on scroll
2. `src/pages/produtos/PapeisDeParede.tsx` - Replace carousel images with 10 uploaded photos

