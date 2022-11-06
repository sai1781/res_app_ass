import axios from 'axios'

const Req =  axios.create({
    baseURL:"https://api.edamam.com/api/recipes/v2",
    timeout:10000,
    params:{
        type:"public",
        app_key:"b7882c26b14aee51691d82bbb86a2d42",
        app_id:"1583cabd"
        
    }
});

export  {Req};