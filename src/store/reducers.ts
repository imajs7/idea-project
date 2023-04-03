import { createAction, createReducer } from "@reduxjs/toolkit";
import INews from "../models/news";

const initialState = {
    news: []
};
const setNews = createAction<INews[]>('setNews');
const unsetNews = createAction<INews[]>('unsetNews');

export const newsReducer = createReducer( initialState, (builder) => {
    builder
      .addCase(setNews, (state : {news: INews[]}, action) => {
        state.news = action.payload
      })
      .addCase(unsetNews, (state, action) => {
        state.news = []
      })
} );

const initialTree = {
  catTree: {}
};
const setTree = createAction<any>('setTree');
export const treeReducer = createReducer( initialTree, (builder) => {
  builder
    .addCase(setTree, (state : {catTree: any}, action) => {
      state.catTree = action.payload
    })
} );