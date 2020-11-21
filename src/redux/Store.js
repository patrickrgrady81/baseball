import { createStore } from "redux"
import baseballReducer from "./Reducer"

const store = createStore(baseballReducer)

export default store