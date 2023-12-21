import React from 'react'
import { Layout } from '../components/layout/Layout'
import { Box, Typography } from '@mui/material'

export const About = () => {
  return (
    <Layout>
      <Box
      sx={{
        my:5,
        textAlign:"center",
        p:2,
        "& h4":{
          fontWeight:'bold', 
          my:2,
          fontSize:'2rem'
        },
        "& p":{
          textAlign:"justify", 
        },

        "@media(max-width:600px)":{
          mt:0,
          "& h4":{
            fontSize:"1.5rem",
          }
        }
      }} >
        <Typography variant="h4" >
          Welcome To My Resurant
        </Typography>
        <p>
           Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis quis autem excepturi aspernatur, perferendis quod magnam repellat, eos est eligendi laudantium officiis quaerat reprehenderit vero provident? Maxime exercitationem facere quo.
           Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis quis autem excepturi aspernatur, perferendis quod magnam repellat, eos est eligendi laudantium officiis quaerat reprehenderit vero provident? Maxime exercitationem facere quo.
           Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis quis autem excepturi aspernatur, perferendis quod magnam repellat, eos est eligendi laudantium officiis quaerat reprehenderit vero provident? Maxime exercitationem facere quo.
        </p>
        <br/>
        <p>
           Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis quis autem excepturi aspernatur, perferendis quod magnam repellat, eos est eligendi laudantium officiis quaerat reprehenderit vero provident? Maxime exercitationem facere quo.
           Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis quis autem excepturi aspernatur, perferendis quod magnam repellat, eos est eligendi laudantium officiis quaerat reprehenderit vero provident? Maxime exercitationem facere quo.
        </p>
      </Box>
    </Layout>
  )
}
