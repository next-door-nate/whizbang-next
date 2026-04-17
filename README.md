<img src="/public/cover.png" alt="Whizbang project cover showing screenshots of the template" />

## Whizbang Next Starter

A marketing-site starter built with **Next.js + Sanity**, with page content driven by reusable **block-based sections**.

## 1) What this starter includes

- **Next.js App Router app** (frontend + metadata generation + page routing):
  - `src/app/page.tsx` (homepage)
  - `src/app/[slug]/page.tsx` (CMS-driven pages)
  - `src/app/layout.tsx` (global layout + metadata shell)
- **Embedded Sanity Studio** mounted inside the same app:
  - `src/app/studio/[[...index]]/page.tsx`
  - `sanity.config.ts`
- **Block-based page builder model**:
  - Block schemas: `sanity/schemas/`
  - Block query fragments: `src/app/utils/queries.ts`
  - Block renderer registry: `src/app/components/Blocks.js`

## 2) Required environment variables

Create a `.env.local` file in the project root (`/workspace/whizbang-next/.env.local`) with:

```bash
NEXT_PUBLIC_SANITY_PROJECT_ID=your_project_id
NEXT_PUBLIC_SANITY_DATASET=production
NEXT_PUBLIC_SANITY_API_VERSION=2024-05-14
SANITY_API_TOKEN=your_token_with_read_access
PREVIEW=false
```

### What each variable is used for

- `NEXT_PUBLIC_SANITY_PROJECT_ID`, `NEXT_PUBLIC_SANITY_DATASET`, `NEXT_PUBLIC_SANITY_API_VERSION`
  - Used by both Next app and Studio clients:
    - `sanity/env.ts`
    - `src/app/utils/sanity/client.ts`
    - `sanity/lib/client.ts`
    - `sanity.cli.ts`
- `SANITY_API_TOKEN`
  - Used for authenticated Sanity API reads (especially preview/drafts)
  - `src/app/utils/sanity/client.ts`, `sanity/lib/client.ts`
- `PREVIEW`
  - Toggles CDN + perspective (`published` vs `previewDrafts`)
  - `src/app/utils/sanity/client.ts`, `sanity/lib/client.ts`

### Site identity values to set early

For project/site identity, update these as part of setup:

- Package/app name: `package.json`
- Metadata/site URL fallback values:
  - `src/app/page.tsx`
  - `src/app/[slug]/page.tsx`
- Brand name in UI chrome:
  - `src/app/components/Header.tsx`
  - `src/app/components/Footer.tsx`

## 3) Local setup (app + studio)

1. Install dependencies:

   ```bash
   npm install
   ```

2. Add `.env.local` (see above).

3. Start the app (frontend + embedded Studio in one process):

   ```bash
   npm run dev
   ```

4. Open:
   - App: `http://localhost:3000`
   - Studio: `http://localhost:3000/studio`

### Helpful paths while developing

- Frontend page templates:
  - `src/app/page.tsx`
  - `src/app/[slug]/page.tsx`
- Shared frontend components:
  - `src/app/components/`
- Studio configuration:
  - `sanity.config.ts`
  - `sanity/schema.ts`

## 4) Content model overview (`sanity/schemas/`)

Key document + structure schemas:

- `sanity/schemas/page.tsx`
  - Core page document with slug/meta/blocks.
- `sanity/schemas/post.tsx`, `sanity/schemas/changelog.tsx`
  - Additional document types.
- `sanity/schemas/globalConfig.tsx`
  - Sitewide settings (theme, SEO meta, social).
- `sanity/schemas/theme.tsx`, `sanity/schemas/header.tsx`, `sanity/schemas/footer.tsx`, `sanity/schemas/navItem.ts`
  - Theme and navigation system.
- `sanity/schemas/blocks.ts`
  - The `blocks` array field that allows page builder sections.

Key block schemas currently included:

- `sanity/schemas/bannerHome.ts`
- `sanity/schemas/bannerPage.ts`
- `sanity/schemas/faqBlock.ts`
- `sanity/schemas/richTextBlock.tsx`
- `sanity/schemas/separator.ts`
- `sanity/schemas/twoUp.tsx`
- `sanity/schemas/logoGrid.tsx`

Schema registration entrypoint:

- `sanity/schema.ts`

## 5) Add a new block end-to-end

Use this checklist each time you introduce a new section type.

1. **Create block schema**
   - Add `sanity/schemas/yourBlock.ts` (or `.tsx`).
   - Export schema with a unique `_type` (for example `"testimonial_block"`).

2. **Register schema globally**
   - Import and add it to `types` in `sanity/schema.ts`.

3. **Allow block in the page builder array**
   - Add `{ type: "testimonial_block" }` to `allBlockTypes` in:
     - `sanity/utils/referenceHelper.ts`
   - This feeds `sanity/schemas/blocks.ts`.

4. **Add GROQ fragment for the new block**
   - Extend `blocksQuery` in:
     - `src/app/utils/queries.ts`
   - Add a branch like:
     - `_type == "testimonial_block" => { ... }`

5. **Create frontend component**
   - Add component file(s), e.g.:
     - `src/app/components/TestimonialBlock.tsx`
     - `src/app/components/TestimonialBlock.module.scss`

6. **Wire into block renderer registry**
   - Import and add `case "testimonial_block"` in:
     - `src/app/components/Blocks.js`

7. **Add content in Studio + verify rendering**
   - In Studio (`/studio`), add the block to a `page` document.
   - Confirm it renders on frontend route for that page slug.

## 6) Rebrand quickly (name, URL, metadata, assets)

Use this quick rebrand pass after cloning the starter.

### A) Project + package identity

- Rename package:
  - `package.json` → `name`

### B) Site name in visible UI

- Update brand text in:
  - `src/app/components/Header.tsx`
  - `src/app/components/Footer.tsx`

### C) Canonical URL + Open Graph site identity

- Update hardcoded URL/siteName defaults in:
  - `src/app/page.tsx`
  - `src/app/[slug]/page.tsx`

### D) SEO metadata source of truth

- Update global SEO content in Studio document:
  - Schema: `sanity/schemas/globalConfig.tsx` (`meta` field)
- Metadata is consumed in:
  - `src/app/layout.tsx`

### E) Brand assets

Replace files in `public/`:

- `public/favicon.png`
- `public/og-image.png`
- `public/cover.png`
- `public/next.svg` / `public/vercel.svg` (if you do not want starter logos)

### F) Theme and homepage identity in CMS

- Set homepage and visual theme references in:
  - `sanity/schemas/theme.tsx`
  - `sanity/schemas/globalConfig.tsx`

---

If you're onboarding a new team member, have them read this README plus:

- `sanity/schema.ts`
- `src/app/utils/queries.ts`
- `src/app/components/Blocks.js`

Those three files explain most of the CMS → query → component rendering flow.
