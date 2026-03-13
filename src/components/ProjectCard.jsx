import { Card, CardContent, Typography, Chip, Box } from "@mui/material";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

export default function ProjectCard({ project, onClick }) {

const statusColor = {
Active: "success",
Planning: "warning",
Completed: "default"
};

return (

<Card
onClick={onClick}
sx={{
height:"100%",
borderRadius:4,
cursor:"pointer",
transition:"all 0.3s ease",
"&:hover":{
transform:"translateY(-6px) scale(1.02)",
boxShadow:"0 20px 40px rgba(0,0,0,0.15)"
}
}}

>

<CardContent>

<Typography variant="h6" fontWeight="bold" mb={1}>
{project.name}
</Typography>

<Chip
label={project.status}
color={statusColor[project.status]}
size="small"
sx={{mb:2}}
/>

<Typography variant="body2">
Start Date: {project.startDate}
</Typography>

<Typography variant="body2">
Location: {project.location}
</Typography>

<Box
display="flex"
justifyContent="space-between"
alignItems="center"
mt={2}

>

<Typography
variant="caption"
sx={{
color:"#6F56B8",
fontWeight:"bold"
}}

>

Open DPR </Typography>

<ArrowForwardIosIcon
sx={{
fontSize:16,
color:"#6F56B8"
}}
/>

</Box>

</CardContent>

</Card>

);

}
