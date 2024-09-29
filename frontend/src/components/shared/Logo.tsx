import React from "react";
import { Link } from "react-router-dom";
import  Typography  from "@mui/material/Typography";

const Logo = () => {
    return(
        <div 
            style={{ 
                display: "flex",
                marginRight: "auto",
                alignItems: "center",
                gap: "15px",
            }}
        >
            <Link to={"/"}>
                <img 
                    src="download (2).jpeg" 
                    alt="image" 
                    width={"30px"} 
                    height={"30px"} 
                    className="images-inverted"
                />
            </Link>{" "}           
            <Typography 
             sx={{ 
                display: {md: "block", sm: "none", xs: "none"}, 
                mr: "auto", 
                fontWeight: "800", 
                textShadow: "2px 2px 20px #000",
               }}
            >
             <span style={{ fontSize: "20px" }}>INTELECT</span>-ChatBot
            </Typography>
        </div>
    );
};

export default Logo;
