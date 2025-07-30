# What are the 2 forms of the setState argument and what is the difference

- The two forms of the setState argument are object and function. The difference is that the function form has a previous state parameter that we can have the most up-to-date state. This allows us to update the same state multiple times within the same function. The object form cannot do this since its state will not be recent.

# What is state update batching and why

- State update batching is when React gathers all the state updates in a function and applies all of it at once in one render. It reduces the number of re-renders by not having to re-render every time a state update is called.

# What is React lifecycle

- When we add a component to our app, React will need to create the component by calling the component's constructor then add it to the DOM. The componentDidMount function gets called when the component is added ot the DOM. It will get the state of the component then it will call the render function to update the DOM. After React renders and updates the DOM, it calls the componentDidUpdate function. If we remove the component from the DOM, React will call the componentWillUnmount function.

# Explain immutability in one sentence

- Immutability allows us to easily compare objects and values since we don't have to worry about it changing.
