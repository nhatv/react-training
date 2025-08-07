import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import todoReducer from "../slices/TodoSlice";
import monitorReducerEnhancer from "../enhancers/monitorReducer";
import addDateToTask from "../middlewares/addDateToTask";

const rootReducer = combineReducers({
  todoReducer,
});

const middlewareEnhancer = applyMiddleware(addDateToTask);
const composedEnhancers = compose(monitorReducerEnhancer, middlewareEnhancer);

const todoStore = createStore(rootReducer, undefined, composedEnhancers);
// const todoStore = createStore(rootReducer);

export default todoStore;
