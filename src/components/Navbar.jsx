import { AppBar, Toolbar, Typography, Box, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import logo from "../assets/logo.png";

export default function Navbar(){

const navigate = useNavigate();

return(

<AppBar
position="static"
sx={{
background:"linear-gradient(90deg,#6F56B8,#7C3AED)"
}}

>

<Toolbar
sx={{
display:"flex",
justifyContent:"space-between"
}}

>

<Box
display="flex"
alignItems="center"
gap={1}
sx={{cursor:"pointer"}}
onClick={()=>navigate("/projects")}

>

<Box
component="img"
src={logo}
sx={{width:35}}
/>

<Typography fontWeight="bold">
Construction Project Manager
</Typography>

</Box>

<Button
color="inherit"
onClick={()=>navigate("/")}

>

Logout </Button>

</Toolbar>

</AppBar>

)

}
