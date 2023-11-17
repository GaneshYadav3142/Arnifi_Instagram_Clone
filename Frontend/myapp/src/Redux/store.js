import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import {reducer as postReducer} from "./postReducer/reducer"
import {reducer as commentReducer} from "./commentReducer/reducer"
import thunk from "redux-thunk";
const rootReducer=combineReducers({
postReducer,
commentReducer
})


export const store=legacy_createStore(rootReducer,applyMiddleware(thunk))