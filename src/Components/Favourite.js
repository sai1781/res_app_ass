
import { Stack } from '@mui/material'
import { Card, CardMedia, CardContent, Typography, CardActionArea } from '@mui/material';
import * as React from 'react';



const Favourite = ({ data, idx }) => {


    return (
        <div key={idx}>

            <Stack >
                <Card key={idx} sx={{ backgroundColor: "linear-gradient(90deg, #efd5ff 0%, #515ada 100%)", boxShadow: "1px 1px 10px rgba(0,0,0,0.5)" }} >
                    <CardContent   >
                        <Typography key={idx} variant="h5" style={{ textAlign: "center",color:"linear-gradient(90deg, #d53369 0%, #daae51 100%)", }}>
                            {data.recipe.label}
                            <hr />
                        </Typography>
                    </CardContent>
                    <CardActionArea  >
                        <CardMedia key={idx} component="img" image={data.recipe.image} />
                        <CardContent>
                        </CardContent>
                    </CardActionArea>
                    <CardContent key={idx} sx={{ border: "0.5px solid green" }}>
                            <Stack >
                                <Typography variant='h5' sx={{ fontWeight: 500 }}>Total_Calories:{Math.round(data.recipe.calories)}</Typography>
                                <Typography variant='h5'  >{data.recipe.cuisineTpe}</Typography>
                                <Typography variant='h5'  >DishType:{data.recipe.dishType}</Typography>
                                <Typography variant='h5'  >MealType:{data.recipe.mealType}</Typography>
                            </Stack>
                    </CardContent>
                </Card>
            </Stack>

        </div>

    )
}

export default Favourite;




