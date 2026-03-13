import {
Box,
TextField,
Typography,
MenuItem,
Button,
Container,
Alert
} from "@mui/material";

import { useState } from "react";
import { useNavigate } from "react-router-dom";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ImageUpload from "../components/ImageUpload";
import { projects } from "../data/projects";

export default function DPRForm(){

const navigate = useNavigate();

const [form,setForm]=useState({
project:"",
date:"",
weather:"",
description:"",
workers:""
});

const [error,setError]=useState("");
const [success,setSuccess]=useState(false);

const handleSubmit=(e)=>{
e.preventDefault();

if(!form.project || !form.date || !form.weather || !form.description || !form.workers){
setError("Please fill all fields");
return;
}

setError("");
setSuccess(true);

setTimeout(()=>{
navigate("/projects");
},2000);

};

return(

<Box
sx={{
minHeight:"100vh",
display:"flex",
flexDirection:"column",
background:"#F4F1FB"
}}

>

<Navbar/>

{/* CONTENT AREA */}

<Box
flex={1}
display="flex"
alignItems="center"
justifyContent="center"
px={2}
py={3}

>

<Container maxWidth="sm">

<Box
sx={{
background:"#fff",
p:3,
borderRadius:3,
boxShadow:"0 10px 30px rgba(0,0,0,0.1)",
animation:"fadeIn 0.4s ease"
}}

>

<Typography
variant="h5"
fontWeight="bold"
mb={2}
sx={{color:"#6F56B8"}}

>

Daily Progress Report </Typography>

{error && <Alert severity="error" sx={{mb:2}}>{error}</Alert>}
{success && <Alert severity="success" sx={{mb:2}}>DPR Submitted Successfully</Alert>}

<Box component="form" onSubmit={handleSubmit}>

<TextField
select
label="Select Project"
fullWidth
size="small"
sx={{mb:2}}
value={form.project}
onChange={(e)=>setForm({...form,project:e.target.value})}

>

{projects.map((project)=>(

<MenuItem key={project.id} value={project.name}>
{project.name}
</MenuItem>
))}

</TextField>

<TextField
label="Date"
type="date"
fullWidth
size="small"
sx={{mb:2}}
InputLabelProps={{shrink:true}}
value={form.date}
onChange={(e)=>setForm({...form,date:e.target.value})}
/>

<TextField
select
label="Weather"
fullWidth
size="small"
sx={{mb:2}}
value={form.weather}
onChange={(e)=>setForm({...form,weather:e.target.value})}

>

<MenuItem value="Sunny">Sunny ☀️</MenuItem>
<MenuItem value="Cloudy">Cloudy ☁️</MenuItem>
<MenuItem value="Rainy">Rainy 🌧</MenuItem>

</TextField>

<TextField
label="Work Description"
multiline
rows={3}
fullWidth
size="small"
sx={{mb:2}}
value={form.description}
onChange={(e)=>setForm({...form,description:e.target.value})}
/>

<TextField
label="Worker Count"
type="number"
fullWidth
size="small"
sx={{mb:2}}
value={form.workers}
onChange={(e)=>setForm({...form,workers:e.target.value})}
/>

<ImageUpload/>

<Box mt={2}>

<Button
type="submit"
variant="contained"
fullWidth
sx={{
background:"linear-gradient(90deg,#6F56B8,#7C3AED)",
py:1,
borderRadius:6,
fontWeight:"bold"
}}

>

Submit DPR </Button>

<Button
variant="outlined"
fullWidth
sx={{mt:1}}
onClick={()=>navigate("/projects")}

>

Back to Projects </Button>

</Box>

</Box>

</Box>

</Container>

</Box>

<Footer/>

</Box>

);

}
