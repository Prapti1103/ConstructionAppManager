import { AppBar, Toolbar, Typography, Button, Box } from "@mui/material";
import { useNavigate } from "react-router-dom";
import logo from "../assets/logo.png";

export default function Navbar(){

const navigate = useNavigate();

const handleLogout = ()=>{
navigate("/");
};

return(

<AppBar
position="static"
sx={{
background:"linear-gradient(90deg,#6F56B8,#7C3AED)"
}}
>

<Toolbar>

<Box display="flex" alignItems="center" gap={1} flexGrow={1}>

<Box
component="img"
src={logo}
sx={{
width:85,
height:85
}}
/>

<Typography fontWeight="bold">
Construction Project Manager
</Typography>

</Box>

<Button
variant="contained"
color="error"
onClick={handleLogout}
>
Logout
</Button>

</Toolbar>

</AppBar>

);

}