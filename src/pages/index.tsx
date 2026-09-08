import Counter from '../components/Counter';

const docsUrl = 'https://whatfw.com/docs/';
const sourceUrl = 'https://github.com/CelsianJs/what-framework';

function Arrow() {
  return <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M4 12h16m-6-6 6 6-6 6" /></svg>;
}

export default function HomePage() {
  return (
    <div class="site">
      <a class="skip-link" href="#main">Skip to content</a>
      <header class="site-header">
        <a class="wordmark" href="/" aria-label="What starter home">what.</a>
        <nav aria-label="Resources">
          <a href={docsUrl}>Docs</a>
          <a href={sourceUrl}>GitHub</a>
        </nav>
      </header>
      <main id="main" tabIndex={-1}>
        <section class="intro" aria-labelledby="page-heading">
          <h1 id="page-heading">Make something<br />that matters.</h1>
          <p>Your next idea starts here. A small, editable foundation built with What Framework.</p>
          <p class="edit-hint">Start with <code>src/pages/index.tsx</code></p>
        </section>
        <Counter />
        <div class="resources">
          <a class="resource" href={docsUrl}>
            <h2>Read the docs <Arrow /></h2>
            <p>Learn components, signals, and routing.</p>
          </a>
          <a class="resource" href={sourceUrl}>
            <h2>Explore the source <Arrow /></h2>
            <p>See how the framework works.</p>
          </a>
        </div>
      </main>
      <footer>Built with What Framework.</footer>
    </div>
  );
}
