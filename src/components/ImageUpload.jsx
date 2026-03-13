import { Box, Typography } from "@mui/material";
import { useState } from "react";

export default function ImageUpload(){

const [images,setImages]=useState([]);

const handleChange=(e)=>{

const files = Array.from(e.target.files).slice(0,3);

setImages(files.map(file=>URL.createObjectURL(file)));

}

return(

<Box mt={2}>

<Typography mb={1}>
Upload Photos (max 3)
</Typography>

<input
type="file"
accept="image/*"
multiple
onChange={handleChange}
/>

<Box display="flex" gap={2} mt={2} flexWrap="wrap">

{images.map((img,i)=>(
<img
key={i}
src={img}
width="100"
style={{borderRadius:"8px"}}
/>
))}

</Box>

</Box>

)

}