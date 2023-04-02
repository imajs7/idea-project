import React, { useEffect } from 'react';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { useDispatch, useSelector } from 'react-redux';
import Header from './components/header/Header';
import Content from './components/content/Content';
import Footer from './components/footer/Footer';
import { getData } from './services/getData';


function App() {

  const dispatch = useDispatch();
  const {news} = useSelector((state: any) => state.newsReducer);

  useEffect(
    () => {
      if(! news.length) {
        const getNewsData = async () => {
          const data = await getData();        
          dispatch({
            type: "setNews",
            payload: data
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
