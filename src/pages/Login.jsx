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
import CardGiftcardIcon from "@mui/icons-material/CardGiftcard";
import GoogleIcon from "@mui/icons-material/Google";

import { useNavigate } from "react-router-dom";
import img from "../assets/login-illustration.avif";
import logo from "../assets/logo.png";
export default function Login() {

  const navigate = useNavigate();

  const [email,setEmail] = useState("");
  const [password,setPassword] = useState("");
  const [error,setError] = useState("");
  const [showPassword,setShowPassword] = useState(false);

  const handleLogin=(e)=>{
    e.preventDefault();

    if(email==="test@test.com" && password==="123456"){
      navigate("/projects");
    }else{
      setError("Invalid email or password");
    }
  }

  return (

   <Box
  sx={{
    minHeight: "100vh",
    width: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "flex-start",
    background: "linear-gradient(135deg,#9dc3ff,#6ee7b7)",
    pt: 8,
    pb: 12,
  }}
>
      {/* LOGIN CARD */}

      <Box
  sx={{
    width: "100%",
    maxWidth: "900px",
    maxHeight: "700px",
    display: "flex",
    borderRadius: 4,
    overflow: "hidden",
    boxShadow: "0 35px 80px rgba(0,0,0,0.25)",
    background: "#fff",
    my: 3,
    mt:4,
    mb:4
  }}
>

        {/* LEFT SIDE */}

       <Box
  sx={{
    maxWidth:"420px",
    maxHeight:"600px",
    width:{xs:"100%",md:"50%"},
    p:{xs:4,md:5},
    display:"flex",
    flexDirection:"column",
    justifyContent:"center",
    gap:1
  }}
>

          {/* LOGO */}

         <Box sx={{display:"flex",alignItems:"center",gap:1,mb:1}}>

  <Box
  component="img"
  src={logo}
  sx={{
    width:85,
    height:85,
    objectFit:"contain",
    mr:1
  }}
/>

  <Typography
    variant="h5"
    fontWeight="bold"
    sx={{
      color:"#6F56B8",
      letterSpacing:0.5,
      lineHeight:1.2
    }}
  >
    Construction Project Manager
  </Typography>

</Box>

<Typography variant="h6" fontWeight="bold" mb={3}
  sx={{
    color:"#6F56B8"
  }}>
  Log in
</Typography>

<Typography
  color="text.secondary"
  sx={{
    mb: 1,
    fontSize:"0.95rem",
    maxWidth:"320px"
  }}
>
  Enter your credentials to access and manage your construction projects
</Typography>
          <Box component="form" onSubmit={handleLogin}>

            <Typography variant="body2" mb={1}>
              Email Address
            </Typography>

            <TextField
              fullWidth
              placeholder="name@example.com"
              value={email}
              onChange={(e)=>setEmail(e.target.value)}
              sx={{mb:1}}
            />


            <Typography variant="body2" mb={1}>
              Password
            </Typography>

            <TextField
              fullWidth
              type={showPassword ? "text" : "password"}
              placeholder="Enter your password"
              value={password}
              onChange={(e)=>setPassword(e.target.value)}
              sx={{mb:2}}
              InputProps={{
                endAdornment:(
                  <InputAdornment position="end">
                    <IconButton
                      onClick={()=>setShowPassword(!showPassword)}
                    >
                      {showPassword ? <Visibility/> : <VisibilityOff/>}
                    </IconButton>
                  </InputAdornment>
                )
              }}
            />


            <Box sx={{textAlign:"right",mb:3}}>
              <Link href="#" underline="hover">
                Forgot password?
              </Link>
            </Box>


            {error && (
              <Typography color="error" mb={2}>
                {error}
              </Typography>
            )}


           <Button
  fullWidth
  type="submit"
  variant="contained"
  sx={{
    background:"linear-gradient(90deg,#6F56B8,#7C3AED)",
    py:1.6,
    borderRadius:10,
    fontWeight:"bold",
    letterSpacing:1,
    mb:2
  }}
>
  LOG IN
</Button>


            <Button
              fullWidth
              variant="outlined"
              startIcon={<GoogleIcon/>}
              sx={{
                py:1.5,
                borderRadius:8
              }}
            >
              Sign in with Google
            </Button>


          </Box>

        </Box>



        {/* RIGHT SIDE */}

        <Box
          sx={{
            width:{xs:"0%",md:"50%"},
            display:{xs:"none",md:"flex"},
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
            Welcome back
          </Typography>


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