import { configureStore } from "@reduxjs/toolkit";
import {newsReducer, treeReducer} from './reducers'

const store = configureStore({
    reducer: {
        newsReducer,
        treeReducer
    }
});

export {
    store
}