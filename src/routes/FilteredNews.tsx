import React from 'react'
import { useSelector } from 'react-redux';
import INews from '../models/news';
import Section from '../components/section/Section';
import { useParams } from 'react-router';
import { Box, Button } from '@mui/material';
import { Link } from 'react-router-dom';

type Props = {}

const FilteredNews = (props: Props) => {

  const {cat, subcat} = useParams();
  const {news} = useSelector((state: any) => state.newsReducer);

  return (
    <Box>
      <Button variant='outlined' color='info' to="/" component={Link}>Go Back</Button>
    {
        <Section 
          newsItems={
            news.filter( (item : INews) => item.category === cat && item.subcategory === subcat )
          } 
          heading={`${cat}`} 
          subheading={`${subcat}`}
        />
    }
    </Box>
  )
}

export default FilteredNews