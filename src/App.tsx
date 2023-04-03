import React, { useEffect } from 'react';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { useDispatch, useSelector } from 'react-redux';
import {Header, Content, Footer} from './components';
import { buildTree, getData } from './services/getData';


function App() {

  const dispatch = useDispatch();
  const {news} = useSelector((state: any) => state.newsReducer);

  useEffect(
    () => {
      if(! news.length) {
        const getNewsData = async () => {
          const newsData = await getData();
          const treeData = await buildTree();   
             
          dispatch({
            type: "setNews",
            payload: newsData
          });
          dispatch({
            type: "setTree",
            payload: treeData
          });
        };
        getNewsData();
      }
    }, []
  );

  return (
    <>
      <Header/>
      <Content/>
      <Footer/>
    </>

  );
}

export default App;
