1. Are you using websocket to stream data? Yes, I do use websockets to stream data in my React application. I use websocket data with React's context api to make sure that the state is being updated in real time.

2. What specific strategy did you implement to make sure UI is not buggy? Breaking down the UI into smaller components makes it easier to manage and less buggy due to the fact that we can check each component to see if it is causing any issue.

3. Have you run into memory issues with data caching? Yes, I've noticed that data caching can cause memory leaks so I've been more mindful about the component lifecycle and using the methods to clean up any unused subscriptions or event listeners.

4. What is component memoization? Component memoization is caching a components props to reduce unnecessary rerenders.

5. How do React.memo, useMemo, useCallback work, what's the main functionality? React.memo caches the component's props and it uses a shallow comparison to decide if the component will rerender. useMemo caches a value. useCallback caches a function.
   a. Should we wrap every single function with useCallback? No, there is a memoization cost so it should not be used on simple functions.
   b. Should we use useMemo for every variable? No, there is a memoization cost so it should not be used on simple variables.

6. When does React render a component? React renders a component when its props change or when its state changes.

7. useEffect vs useLayoutEffect, which one will be triggered first? useLayoutEffect triggers before the browser paints while useEffect triggers after the browser paints.

8. Have you worked on any custom hooks, when do you need it, why not regular functions? Yes, I have created custom hooks. They are useful when you are managing multiple states or have a more complicated state logic that you want to reuse. Regular functions can't use react hooks while custom hooks can use react hooks.

9. Tell me about something you built that you are proud of. I spent hundreds of hours playing a game called Spiral Knights because I find it fun and exciting. But it takes a lot of time and effort to gather resources and upgrade my character. So I just wondered if I could make a bot that could automatically gather resources for me. I needed object detection so I went and found a model to train images on. This allowed me to avoid obstacles like fire and wheels rolling down the hill and allowed me to move around the map.

10. What are you looking at when writing unit tests, what is your thinking process? I focus on making sure that the unit tests are independent, taking care of all the dependencies by creating mocks of them.

11. Have you used any mock up library for unit testing? Yes, I use Jest as my mock up library for unit testing.

12. Are you familiar with CSS 3, LESS, or SASS? I am familiar with CSS 3, but have not used LESS or SASS.

13. What's your full stack experience? My full stack experience is only from my web development course in university where I created a flask app for my personal website.

14. How does useEffect syntax look like? useEffect is a React hook that is used to manage side effects like DOM updates and data fetching. It takes an effect function and a dependency array as argument.
    a. What does the cleanup syntax look like? The cleanup syntax is the effect function returning a cleanup function.

15. How to make sure your React application is working property on different browsers? First thing is to make sure my React application looks the same on every browser. We can accomplish this by using a CSS framework or CSS reset.
    a. What if it is not compatible with one browser? I would recommend the user to switch browser or warn them that the app does not work with the particular browser.

16. Do you prefer context api for redux? How do you compare them? I don't have a preference between context api and redux. Context api is used for simpler applications where state management doesn't need to be complex. Redux is used to handle more complex state management.

17. Have you used rtk (react toolkit)? Yes, I have used rtk to handle state management in my React app.

18. What is immutability? Immutability is when variables can't change once it has been created. It is useful for state management and detecting changes because we can easily compare current state and previous state.

19. Do you use javascript or typescript for react? I use javascript, but will be switching to typescript soon.

20. Do you have any questions? What does a typical day look like at this company?
