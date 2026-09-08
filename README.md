# Your What app

A minimal [What Framework](https://whatfw.com/docs/) starter: TypeScript, JSX,
plain CSS, and a working signal-powered counter. No React, UI library, external
fonts, or image downloads.

## Start locally

Use Node.js 22 or newer.

```sh
npm ci
npm run dev
```

Open the local URL printed by Vite. Edit `src/pages/index.tsx` to make it yours.

- `src/main.tsx` mounts the page and imports the stylesheet.
- `src/pages/index.tsx` is the home component, explicitly imported by the entry.
- `src/components/Counter.tsx` demonstrates local signals and event handlers.
- `src/styles.css` contains all styling, including responsive layouts and focus states.
- `index.html` owns the document title and description. Update both before launch.

Components are authored in JSX/TSX. The What compiler handles DOM operations;
do not replace user-facing JSX with hand-written `h()` calls. Components run
once, and signal expressions update their dependent DOM values.

## Verify and build

```sh
npm run check
npm run preview
```

`check` runs TypeScript, source-contract tests, a production build, and an asset
check with a 20 KiB gzipped JavaScript budget. Preview serves the built `dist/`
locally; it is not a production server. Test the counter with mouse and keyboard,
including decrement and reset, and check your layout at mobile widths after edits.

Vite and Babel are build-time tools used by the What compiler. The application
runtime is What Framework; build tools are not shipped to the browser.

## Deploy

Build command: `npm run build`. Static output directory: `dist`.
Deploy that directory to a static host, or create this template through
[Vura Platform](https://app.vura.io/). No environment variables are required.

This is a client-rendered, single-page starter, not an SSR or file-routing
template. The `pages/` directory is organizational; adding a file does not
automatically add a route. For indexable server-rendered content and full-stack
routes, see [Vura](https://vura.io/). Do not assume this starter provides SSR.

Templates are copied when a repository is created. Updates here do not overwrite
projects already created from this template.

## Next steps

- [Learn What](https://whatfw.com/docs/learn/)
- [Signals](https://whatfw.com/docs/learn/signals/)
- [Deployment guide](https://whatfw.com/docs/learn/deployment/)
- [Framework source](https://github.com/CelsianJs/what-framework)
