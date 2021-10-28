import { combineReducers } from "redux";
import otherReducer from "./reducer/other.reducer";
import userReducer from "./reducer/user.reducer";

const rootReducer = combineReducers({
    profileInfo: userReducer,
    other: otherReducer,
});

export default rootReducer
