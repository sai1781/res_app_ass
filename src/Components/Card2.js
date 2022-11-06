import * as React from 'react';
import Typography from '@mui/material/Typography';
import { Req } from '../utils';
import { useState, useEffect } from 'react';
import {  Stack } from '@mui/material'
import Favourite from './Favourite';
import Masonry from '@mui/lab/Masonry';


const Card2= _=> {


  const [list, setList] = useState("");
  const [clicked, setClicked] = useState(false);
  const [trigger, setTrigger] = useState(false);
  const [value, setValue] = useState("chicken");



  // useEffect(_ =>{
  //   (async _=>{
  //     // const response = await Req.get("?q=chicken");
  //     const response = await Req.get("?q=chicken");
  //     console.log(response.data);
  //     setData(response.data);
  //   })()
  // }, [data])

  useEffect(_ => {
    (async _ => {
      const response = await Req.get(`?q=chicken`);
      setList(response.data.hits)
      setTrigger(true);
      console.log("sai");
    })()
  },[])


  useEffect(_ => {
    if (clicked === true) {
      (async _ => {
        const response = await Req.get(`?q=${value}`);
        console.log(response.data.count);
        if (response.status === 200 && response.data.count > 0 ) {
          setList(response.data.hits)
          setTrigger(true);
        } else {
          setTrigger(false);
        }
      })()
    }
    //  eslint-disable-next-line react-hooks/exhaustive-deps
  }, [clicked, value])

  const input = e => {
    const input_value = e.target.value;
    setValue(input_value);
  }
  const submit_input = _ => {
    if (value !== "") {
      setClicked(true);
      setTimeout(_ => {
        setClicked(false);

      }, 5000)
    }
  }


  // const data3 = fetch("https:api.edamam.com/api/recipes/v2?type=public&q=mutton&app_id=1583cabd&app_key=b7882c26b14aee51691d82bbb86a2d42")

  // data3.then(response =>{
  //   const data4 = response.json();
  //   return data4;
  // }).then(json_data=>{
  //   console.log(json_data);
  // })


  //  fetch("https:api.edamam.com/api/recipes/v2?type=public&q=mutton&app_id=1583cabd&app_key=b7882c26b14aee51691d82bbb86a2d42")
  //  .then(response => response.json())
  //  .then(json => console.log(json));


  return (
    <>
      <Stack className="Top" >
        <Typography variant="v6" color="white" >Recipe Search APP</Typography>
      </Stack>
      <Stack direction="row" className="searchNav" >
        <input type="text" onKeyUp={input} placeholder="search your Movie names here" />
        <button onClick={submit_input} >Search</button>
      </Stack>
      <p className={trigger === false && clicked === true && value !== "chicken" ? "notfound" : "notfound none"} sx={{ color: "green" }}>Not found</p>

      <hr />
      <div style={{ display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", marginTop: 20 }}>
        <Masonry columns={3} spacing={4} >

          {trigger === true ?

            list.map((data, idx) => {
              return (
                <>
                  <Favourite key={idx} data={data} />
                </>
              )
            })
            : ("")}
        </Masonry>
      </div>

    </>
  );
}


export default Card2;













