# Visual Style Guide & Design System
## Premium Studio Photo — Minimal & Anti-Slop Guidelines

---

## 1. Design Philosophy
- **Editorial & Minimal:** Treat every section like a high-end print magazine layout.
- **Motion with Purpose:** Animations should feel organic, slow, and natural (no rapid popping or tacky bouncy transitions).
- **Image-First:** UI elements stay out of the way; photography is the hero.

---

## 2. Color Palette (Tailwind Tokens)

```javascript
// tailwind.config.js snippet
module.exports = {
  theme: {
    extend: {
      colors: {
        studio: {
          bg: '#0A0A0B',          // Deep obsidian charcoal (Main BG)
          card: '#121214',        // Surface layer background
          border: '#222225',      // Ultra-subtle divider
          text: '#F4F4F5',        // Soft high-contrast white
          muted: '#8E8E93',       // Secondary label text
          accent: '#C5A059',      // Muted champagne gold (Primary accent)
          accentHover: '#D4B06A', // Hover state accent
        }
      }
    }
  }
}2