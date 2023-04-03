import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import { Box, Button, Typography } from '@mui/material';
import { getAllCategories } from '../services/getData';
import { Link } from 'react-router-dom';

type Props = {
  
}

const HomeComponent = (props: Props) => {

  const {catTree} = useSelector((state: any) => state.treeReducer);
  const [categories, setCategories] = useState<string[]>([]);

  useEffect(
    () => {
      const getCategories = async() => {
        const data = await getAllCategories();
        setCategories(data);
      };
      getCategories();
    }, []
  );

  return (
    <>
    { categories.length &&
        categories.map((cat: string, idx : number) => {
          return (
            <Box key={idx} sx={{marginBlock: '1rem'}}>
              <Typography variant='h5' sx={{textTransform: 'capitalize'}}>{cat}</Typography>
              <Box sx={{border: '2px', borderColor: '#777', borderRadius: '0.5rem', padding: '1.25rem'}}>
                { catTree[cat] && (catTree[cat]).length &&
                  (catTree[cat]).map( (sub: string, id: number) => <Button key={id} to={`/show/${cat}/${sub}`} variant='contained' sx={{margin: '0.5rem'}} component={Link}>{sub}</Button> )
                }

              </Box>
            </Box>
          )
        })
    }
    </>
  )
}

export default HomeComponent