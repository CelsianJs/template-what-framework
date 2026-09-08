# Starter authoring contract

- User-facing components and entrypoints use JSX/TSX, never hand-written `h()` calls.
- Keep this starter minimal and useful: no new runtime UI dependencies, external
  font downloads, decorative images, or marketing sections by default.
- Preserve keyboard access, visible focus, semantic HTML, and mobile layouts.
- Run `npm ci` and `npm run check`; browser-test the production preview, including
  increment, decrement, reset, and a narrow viewport, before shipping changes.
- This is a client-rendered What starter. Do not claim SSR or automatic file routing.
- Keep What independently usable. Do not add Platform-specific runtime coupling.
