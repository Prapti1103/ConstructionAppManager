import { Routes,Route } from "react-router-dom";

import Login from "../pages/Login";
import ProjectList from "../pages/ProjectList";
import DPRForm from "../pages/DPRForm";

export default function AppRoutes(){

return(

<Routes>

<Route path="/" element={<Login/>}/>
<Route path="/projects" element={<ProjectList/>}/>
<Route path="/dpr/:id" element={<DPRForm/>}/>

</Routes>

)

}