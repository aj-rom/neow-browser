import {combineReducers} from "@reduxjs/toolkit";
import {searchReducer} from "./searchReducer";
import {browseReducer} from "./browseReducer";

const rootReducer = combineReducers({
    search: searchReducer,
    browse: browseReducer
})

export default rootReducer