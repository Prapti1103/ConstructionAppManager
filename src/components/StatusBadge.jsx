import { Chip } from "@mui/material";

export default function StatusBadge({status}){

const colorMap={
Active:"success",
Planning:"warning",
Completed:"default"
}

return(
<Chip
label={status}
color={colorMap[status] || "default"}
size="small"
/>
)

}