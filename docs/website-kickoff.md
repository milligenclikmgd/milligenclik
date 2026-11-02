# Milli Gençlik Derneği website kickoff

## Repository baseline

- Repository: `milligenclikmgd/milligenclik`
- Static site source and deployable files are under `dist/`; no build step is required.
- Main page currently includes a hero carousel, institutional introduction, activities, an interactive 81 province map, leadership tabs, publications, donation callout, and contact/footer.
- Page content is separated into `dist/data.json`; visual behavior is in `dist/app.js` and `dist/style.css`.
- Hosting instructions already cover Vercel static hosting and cPanel.

## Brand starting point

- Primary blue: `#213b78`
- Deep navy: `#172b55`
- Accent yellow: `#f7ce53`
- Official high-resolution blue and white logo files are staged in `dist/assets/logo-official-blue.png` and `dist/assets/logo-official-white.png`.
- Use blue logo on light surfaces and white logo on dark surfaces. Keep existing logo references until the final header/footer design is approved.

## Content required before public launch

- Confirmed institutional description and approved home page copy.
- Current general president name, portrait, and short biography.
- Current board/divan names, titles, portraits, and any assistant relationships.
- Verified provincial branch names, office addresses, public phone numbers, and branch photos.
- Approved activity photos and the exact official publication cover.
- Public contact address, phone, email, and social links.
- Donation recipient/account information and a verified payment destination. Do not imply payments are being collected before this is supplied.

## Delivery sequence

1. Confirm the page design direction and the final logo lockup for the header.
2. Gather and validate the factual content listed above; keep unknown facts blank.
3. Integrate approved copy, photos, and branch details into `dist/data.json` and `dist/assets/`.
4. Review desktop and mobile layouts, keyboard navigation, reduced-motion behavior, map selection, forms, and outbound links.
5. Publish a preview on a separate hostname, collect feedback, then switch the production domain after approval.

## Current boundary

The content editor described in the README only saves a visitor's draft in their own browser; it is not a secure server-backed administration panel. A real admin workflow would need a separate authenticated backend.