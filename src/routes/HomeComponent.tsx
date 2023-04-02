import React from 'react'
import { useSelector } from 'react-redux';
import INews from '../models/news';
import Section from '../components/section/Section';

type Props = {}

const HomeComponent = (props: Props) => {

  const {news} = useSelector((state: any) => state.newsReducer);
  const categories = ['cat1', 'cat1', 'cat3','cat4', 'cat5', 'cat6', 'cat7', 'cat8', 'cat9'];

  return (
    <>
    {
        categories.map((cat, idx) => {
        const newsItems = news.filter((item : INews) => item.category === cat);
        return <Section key={idx} newsItems={newsItems} heading={cat} />
        })
    }
    </>
  )
}

export default HomeComponent