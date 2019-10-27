1. What problem does the context API help solve?

Context API helps us solve the problem of props drilling.

1. In your own words, describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?

Store is top level state container that houses the data for different components in Redux. Actions are specific pieces of code that manipulates the state data housed inside of the store. Reducers are functions that take conditionals in order to "dispatch" the correct action.

1. What is the difference between Application state and Component state? When would be a good time to use one over the other?

Application state is more global state that multiple components use throughout the app. Component state is state that is more localized to that specific component. A good time to use component state is if you have a form with changing values.

1. Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?

Redux-thunk gives us the power to have our state management asynchronous throughout our app. Our action-creators change to fixed outcomes to control the code.

1. What is your favorite state management system you've learned and this sprint? Please explain why!


My favorite state management system is the context api because it gives you the power of the Provider but it doesn't require as much boiler plate that is needed for redux.