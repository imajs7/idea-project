import { configureStore } from "@reduxjs/toolkit";
import {newsReducer} from './reducers'

const store = configureStore({
    reducer: {
        newsReducer
    }
});

export {
    store
}