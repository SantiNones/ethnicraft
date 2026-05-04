# Ethnicraft

Marketing website for a premium furniture brand, built from Figma with a token-driven component architecture.

## Project goal

Build a clean, responsive, accessible, and visually consistent website that matches the Figma design while keeping the code maintainable and easy to iterate on.

## Stack

- Next.js (App Router)
- React
- TypeScript
- Tailwind CSS
- CSS variables / design tokens

## Current status

Implemented so far:

- Project initialized with Next.js + TypeScript + Tailwind
- Token system wired into the app
- Global typography and base styles configured
- Homepage scaffold started
- `SiteHeader` component created
- `Hero` component created
- `page.tsx` updated to compose the homepage from sections
- GitHub repository connected

## Architecture approach

This project follows a Figma-first workflow:

1. Extract design structure from Figma
2. Convert design decisions into tokens
3. Build the UI section by section
4. Validate each section against the design
5. Keep the code modular and reusable

## Folder structure

```txt
src/
  app/
    layout.tsx
    page.tsx
    globals.css
  components/
    SiteHeader.tsx
    Hero.tsx