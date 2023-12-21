import React from 'react'
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import GitHubIcon from '@mui/icons-material/GitHub';
import YouTubeIcon from '@mui/icons-material/YouTube';
import { Box, Typography } from '@mui/material'

export const Footer = () => {
    return (
        <Box sx={{ textAlign: 'center', bgcolor: '#1a1a19', color: 'white', p: 3 }}>

            <Box sx={{ my: 3,
             "& svg":{
                fontSize:"60px",
                cursor:"pointer",
                mr:2,
               },
            "& svg:hover":{
                    color:'goldenrod',
                    transform:'translateX(5px)',
                    transition:"all 400ms",
                }
            }}
            >

                 {/* {icons} */}
                 <InstagramIcon/>
                 <TwitterIcon/>
                 <GitHubIcon/>
                 <YouTubeIcon/>


            </Box>
            <Typography variant='h5' sx={{
                '@media(mxn-width:600px)': {  //600 px mtlb mobile ke jo device hote h 600px se kam me chalte h.
                    fontSize: '1rem', //1 rem mtlb 16 px
                }
            }}>
                All Rights Reserved &copy; Techinfo YT
            </Typography>
        </Box>
    )
}