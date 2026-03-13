import { Box, Typography, Container, IconButton } from "@mui/material";
import {
  Facebook,
  LinkedIn,
  GitHub,
  Email
} from "@mui/icons-material";

import logo from "../assets/logo.png";

export default function Footer() {

return (

<Box
sx={{
mt:6,
py:4,
background:"linear-gradient(90deg,#6F56B8,#7C3AED)",
color:"white"
}}
>

<Container>

{/* Top Section */}

<Box
display="flex"
flexDirection={{xs:"column",md:"row"}}
alignItems="center"
justifyContent="space-between"
gap={3}
>

{/* Logo + Name */}

<Box display="flex" alignItems="center" gap={0}>

<Box
component="img"
src={logo}
sx={{
width:85,
height:85
}}
/>

<Typography fontWeight="bold" fontSize="18px">
Construction Project Manager
</Typography>

</Box>

{/* Social Icons */}

<Box>

<IconButton sx={{color:"white"}}>
<Facebook/>
</IconButton>

<IconButton sx={{color:"white"}}>
<LinkedIn/>
</IconButton>

<IconButton sx={{color:"white"}}>
<GitHub/>
</IconButton>

<IconButton sx={{color:"white"}}>
<Email/>
</IconButton>

</Box>

</Box>

{/* Divider spacing */}

<Box mt={3}/>

{/* Contact Info */}

<Typography variant="body2">
Fly Technologies Pvt Ltd
</Typography>

<Typography variant="body2">
Sector 62, Noida, Uttar Pradesh, India
</Typography>

<Typography variant="body2">
Email: contact@getflytechnologies.com
</Typography>

<Typography variant="body2">
Phone: +91 98765 43210
</Typography>

{/* Copyright */}

<Typography
variant="body2"
mt={2}
sx={{opacity:0.7}}
>

© 2026 Construction Project Manager. All rights reserved.

</Typography>

</Container>

</Box>

);

}