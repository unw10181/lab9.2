Lab 9.2 REACT PER Scholas


# Character Counter

A React + TypeScript character counter that tracks characters, words, and estimated reading time in real time. The app demonstrates state management with `useState`, event handling, and component communication using callbacks. The UI is responsive and provides visual feedback for word count goals.

## Reflection
State updates are handled in the parent component to keep data centralized. Reading time is calculated using an average reading speed of 200 words per minute. Performance remains smooth because calculations are lightweight and triggered only on input changes. The main challenge was handling edge cases like empty input and accurate word counting.