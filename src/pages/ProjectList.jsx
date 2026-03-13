import { Box, Grid, Typography, Container } from "@mui/material";
import { useNavigate } from "react-router-dom";

import Navbar from "../components/Navbar";
import ProjectCard from "../components/ProjectCard";
import { projects } from "../data/projects";
import Footer from "../components/Footer";
export default function ProjectList(){

const navigate = useNavigate();

return(

<Box
sx={{
minHeight:"100vh",
display:"flex",
flexDirection:"column"
}}
>

<Navbar/>

<Container sx={{mt:4}}>

<Typography
variant="h4"
fontWeight="bold"
mb={3}
sx={{color:"#6F56B8"}}
>
Projects
</Typography>

<Grid container spacing={3}>

{projects.map((project)=>(
<Grid
item
xs={12}
sm={6}
md={4}
lg={3}
key={project.id}
>

<ProjectCard
project={project}
onClick={()=>navigate(`/dpr/${project.id}`)}
/>

</Grid>
))}

</Grid>

</Container>
<Footer/>
</Box>


);

}