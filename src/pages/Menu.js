import React from 'react'
import { MenuList } from '../data/Data'
import { Layout } from '../components/layout/Layout'
import { Box, Card, CardActionArea, CardContent, CardMedia, Typography } from '@mui/material'

export const Menu = () => {
    return (
        <Layout>
            <Box sx={{display:"flex",flexWrap:"wrap", justifyContent:"center"}}>
                {
                    MenuList.map(menu => (
                        <Card sx={{ maxWidth: "390px", display: "flex", m: 2 }}>
                            <CardActionArea>
                                <CardMedia sx={{ minHeight: "400px" }} component={'img'} src={menu.image} alt={menu.Name} />

                                <CardContent>
                                    <Typography variant='h5' gutterBottom component={"div"}>
                                        {menu.Name}
                                    </Typography>

                                    <Typography variant='body2'>
                                        {menu.description}
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    ))
                }
            </Box>
        </Layout>
    )
}