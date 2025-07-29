# What is virtual dom?

- Virtual DOM is a JavaScript object that resembles the actual DOM structure

# Why does React use it?

- React uses it to improve performance since direct DOM manipulation is usually slow

# How does it work?

- When a change happens, React updates the virtual DOM and compares it with the previous virtual DOM version to apply only the necessary changes to the real DOM. This reduces real DOM operations, making it faster.
