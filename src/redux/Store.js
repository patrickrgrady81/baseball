import { createStore } from "redux"
import baseballReducer from "./baseball/BaseballReducer"

const store = createStore(baseballReducer)

export default store