1. What is JSX? JSX is a extension of JavaScript syntax and it is commonly used with React. It allows us to create HTML-like elements in React without using React's createElement function.
2. What is the difference between state and props? State is the internal structure of a component that the component can update. Props are the data that is passed from a parent component to a child component.
3. What is the difference between controlled and uncontrolled component? Controlled components are controlled by React where every state change triggers a rerender. Uncontrolled components are controlled by the DOM where changes don't trigger a rerender. If we want to only read values or properties, then using uncontrolled components is better.
4. What is useState? useState is a React hook that takes an initial value as argument and returns an array that is the state and an update function for that state. State updates don't update right away because the setState function is asynchronous.
5. What is useEffect? useEffect is a React hook that is used to manage side effects like DOM updates and data fetching. It takes an effect function and a dependency array as argument. The dependency array changes how the effect is run:

   - The effect function will run if anything in the array changes
   - The effect function will run only at mounting and unmounting phase if an empty array is used
   - The effect function will run at every rerender and component update if no array is used

6. What is useMemo and useCallback? useMemo remembers the results of a value so that it does not need to recalculate it every rerender. useCallback is the same thing as useMemo but instead of a value, it remembers a function so that it does not get created again after rerenders.
7. What is the difference between class component and functional component? Class component uses lifecycle methods such as render, componentDidMount, componentDidUpdate. Functional components only have useEffect as a lifecycle method. For state management, class component uses this.state and this.setState while functional components have the useState hook.
8. What is React's PureComponent? PureComponent implements a shallow comparison in it's shouldComponentUpdate function. It can improve performance by preventing unnecessary rerenders when nested data is not used.
9. What is prop drilling? Prop drilling is passing props through various levels of components even when the components don't need to use the props at all. Context API and Redux is a solution to prop drilling.
10. What is useRef? useRef is a React hook that references a value and doesn't trigger a rerender. It has a current property that is mutable and is commonly used for DOM elements.
