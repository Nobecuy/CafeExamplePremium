# Product Requirement Document (PRD)
## Premium Photography Studio Web App

---

## 1. Project Overview
A high-end, modern portfolio and booking showcase website for a premium photography studio. Built with **React + Vite**, focusing on speed, seamless micro-interactions, minimalist aesthetic, and visual storytelling.

### Core Goals
- **Brand Positioning:** Establish an ultra-premium, editorial, and minimalist visual identity.
- **Performance:** Instant load times, image optimization, smooth 60fps animations without layout shifts.
- **Conversion:** Drive client inquiries and bookings with frictionless, high-touch UI elements.

---

## 2. Target Audience
- High-end personal clients (Portraits, Weddings, Graduation, Editorial).
- Commercial brands & creative directors seeking studio rentals or commercial shoots.

---

## 3. Tech Stack & Architecture
- **Framework:** React + Vite
- **Styling:** Tailwind CSS (configured for custom typography & colors)
- **Animation:** Framer Motion (page transitions, parallax, scroll triggers)
- **Icons:** Lucide React (minimal line icons)
- **Image Handling:** Lazy loading, WebP format, Blurhash/dominant color placeholders.

---

## 4. Key Pages & Features

### 4.1 Home Page
- **Hero Section:** Full-bleed image/video hero with subtle parallax and fluid title reveal.
- **Curated Showcases:** Grid of signature works with smooth tilt/hover effects.
- **About / Philosophy:** Editorial layout mixing typography and high-contrast imagery.
- **Client Testimonials:** Clean marquee or minimalist slide showcasing high-profile feedback.
- **Footer:** Quick contact, studio location, operating hours, and magnetic social links.

### 4.2 Portfolio Gallery
- **Filter Categories:** All, Editorial, Portrait, Commercial, Studio Rental.
- **Masonry/Grid Hybrid:** Asymmetric layout to avoid boring stock-grid vibes.
- **Lightbox Overlay:** Full-screen modal with image zoom, EXIF/shoot details, and smooth exit gestures.

### 4.3 Services & Packages
- **Interactive Pricing Cards:** Expandable accordion/modal for full breakdown of inclusions.
- **Add-on Selectors:** Interactive estimator before redirecting to inquiry.

### 4.4 Booking & Inquiry (Contact)
- **Interactive Form:** Multi-step or clean single-view form with floating labels.
- **Date/Slot Selector:** Minimalist date picker interface for checking studio availability.
- **Direct WhatsApp / Email Integration:** Quick CTA for high-priority inquiries.

---

## 5. Non-Functional Requirements
- **Performance:** Lighthouse score ≥ 90 in Performance, Accessibility, and SEO.
- **No AI Slop Rule:** 
  - Avoid generic gradient cards, glow effects, or overuse of glassmorphism.
  - Avoid repetitive rounded-3xl cards with uniform drop shadows.
  - Focus on whitespace, intentional contrast, sharp/subtle borders, and editorial typography.
- **Responsiveness:** Fluid scaling across Mobile, Tablet, and Ultra-wide Desktop displays.