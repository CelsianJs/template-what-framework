import { signal } from 'what-framework';

export default function Counter() {
  const count = signal(0);

  return (
    <section class="counter" aria-labelledby="counter-heading">
      <div>
        <h2 id="counter-heading">A little reactivity.</h2>
        <p>Change the count. Only the value updates.</p>
      </div>
      <div class="counter-controls">
        <div class="stepper">
          <button type="button" aria-label="Decrease count" onClick={() => count(value => value - 1)}>−</button>
          <output aria-label="Count" aria-live="polite" aria-atomic="true">{count()}</output>
          <button type="button" class="increment" aria-label="Increase count" onClick={() => count(value => value + 1)}>+</button>
        </div>
        <button type="button" class="reset" onClick={() => count(0)}>Reset</button>
      </div>
    </section>
  );
}
