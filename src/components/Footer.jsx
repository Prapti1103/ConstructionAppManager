import { Box, Typography, Container, IconButton } from "@mui/material";
import { Facebook, LinkedIn, GitHub, Email } from "@mui/icons-material";
import logo from "../assets/logo.png";

export default function Footer(){

return(

<Box
sx={{
background:"linear-gradient(90deg,#6F56B8,#7C3AED)",
color:"#fff",
py:3,
mt:"auto"
}}

>

<Container
sx={{
display:"flex",
flexDirection:{xs:"column", md:"row"},
alignItems:"center",
justifyContent:"space-between",
gap:2
}}

>

<Box display="flex" alignItems="center" gap={1}>

<Box component="img" src={logo} sx={{width:32}}/>

<Typography fontWeight="bold">
Construction Project Manager
</Typography>

</Box>

<Box>

<IconButton sx={{color:"#fff"}}><Facebook/></IconButton>
<IconButton sx={{color:"#fff"}}><LinkedIn/></IconButton>
<IconButton sx={{color:"#fff"}}><GitHub/></IconButton>
<IconButton sx={{color:"#fff"}}><Email/></IconButton>

</Box>

</Container>

<Typography
variant="body2"
textAlign="center"
sx={{opacity:0.7, mt:1}}

>

© 2026 Fly Technologies </Typography>

</Box>

)

}
