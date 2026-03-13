import React, { useState } from "react";
import {
Box,
Typography,
TextField,
Button,
Link,
InputAdornment,
IconButton
} from "@mui/material";

import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import GoogleIcon from "@mui/icons-material/Google";

import { useNavigate } from "react-router-dom";
import img from "../assets/login-illustration.avif";
import logo from "../assets/logo.png";

export default function Login(){

const navigate = useNavigate();

const [email,setEmail] = useState("");
const [password,setPassword] = useState("");
const [error,setError] = useState("");
const [showPassword,setShowPassword] = useState(false);

const handleLogin=(e)=>{
e.preventDefault();

if(email==="prapti@gmail.com" && password==="123456"){
navigate("/projects");
}else{
setError("Invalid email or password");
}
};

return(

<Box
sx={{
minHeight:"100vh",
display:"flex",
alignItems:"center",
justifyContent:"center",
px:2,
overflowX:"hidden",
background:"linear-gradient(135deg,#9dc3ff,#6ee7b7)"
}}

>

{/* CARD */}

<Box
sx={{
width:"100%",
maxWidth:{xs:"100%", sm:"420px", md:"900px"},
display:"flex",
flexDirection:{xs:"column", md:"row"},
borderRadius:4,
overflow:"hidden",
boxShadow:"0 25px 60px rgba(0,0,0,0.2)",
background:"#fff"
}}

>

{/* LEFT SIDE */}

<Box
sx={{
width:"100%",
p:{xs:3, md:5},
display:"flex",
flexDirection:"column",
justifyContent:"center"
}}

>

{/* LOGO */}

<Box
sx={{
display:"flex",
flexDirection:{xs:"column", sm:"row"},
alignItems:"center",
gap:2,
mb:2,
textAlign:{xs:"center", sm:"left"}
}}

>

<Box
component="img"
src={logo}
sx={{
width:{xs:70, sm:85},
height:{xs:70, sm:85},
objectFit:"contain"
}}
/>

<Typography
variant="h6"
fontWeight="bold"
sx={{
color:"#6F56B8"
}}

>

Construction Project Manager </Typography>

</Box>

<Typography
variant="h6"
fontWeight="bold"
sx={{color:"#6F56B8", mb:1}}

>

Log in </Typography>

<Typography
color="text.secondary"
sx={{mb:2}}

>

Enter your credentials to access and manage your construction projects </Typography>

<Box component="form" onSubmit={handleLogin}>

<Typography variant="body2" mb={1}>
Email Address
</Typography>

<TextField
fullWidth
size="small"
placeholder="name@example.com"
value={email}
onChange={(e)=>setEmail(e.target.value)}
sx={{mb:2}}
/>

<Typography variant="body2" mb={1}>
Password
</Typography>

<TextField
fullWidth
size="small"
type={showPassword ? "text" : "password"}
placeholder="Enter your password"
value={password}
onChange={(e)=>setPassword(e.target.value)}
sx={{mb:2}}
InputProps={{
endAdornment:( <InputAdornment position="end">
<IconButton onClick={()=>setShowPassword(!showPassword)}>
{showPassword ? <Visibility/> : <VisibilityOff/>} </IconButton> </InputAdornment>
)
}}
/>

<Box sx={{textAlign:"right", mb:2}}>

<Link underline="hover">Forgot password?</Link>
</Box>

{error && ( <Typography color="error" mb={2}>
{error} </Typography>
)}

<Button
fullWidth
type="submit"
variant="contained"
sx={{
background:"linear-gradient(90deg,#6F56B8,#7C3AED)",
py:1.4,
borderRadius:2,
fontWeight:"bold",
mb:2
}}

>

LOG IN </Button>

<Button
fullWidth
variant="outlined"
startIcon={<GoogleIcon/>}
sx={{
py:1.4,
borderRadius:2
}}

>

Sign in with Google </Button>

</Box>

</Box>

{/* RIGHT SIDE */}

<Box
sx={{
width:"50%",
display:{xs:"none", md:"flex"},
flexDirection:"column",
alignItems:"center",
justifyContent:"center",
background:"#F4F1FB",
p:6,
textAlign:"center"
}}

>

<Typography color="text.secondary">
Nice to see you again
</Typography>

<Typography
variant="h3"
fontWeight="bold"
color="#6F56B8"
mb={3}

>

Welcome back </Typography>

<Box
component="img"
src={img}
sx={{
width:"80%",
maxWidth:400
}}
/>

</Box>

</Box>

</Box>

);

}
