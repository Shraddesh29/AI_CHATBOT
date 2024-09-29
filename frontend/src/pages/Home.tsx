import { Box, useMediaQuery, useTheme } from "@mui/material";
import React from "react";
import TypingAnim from "../components/typer/TypingAnim";
import Footer from "../components/footer/Footer";

const Home = () => {
    const theme = useTheme();
    const isBelowMd = useMediaQuery(theme.breakpoints.down("md"));
    return (
        <Box width={"100%"} height={"100%"}>
            <Box 
                sx={{
                    display:"flex",
                    width:"100%",
                    flexDirection:"column",
                    alignItems:"center",
                    mx:"auto",
                    mt: 3,
                }}    
            >
                <Box>
                    <TypingAnim/>
                </Box>
                <Box 
                    sx={{
                        width:"100%",
                        display:"flex",
                        flexDirection:{ md:"row", xs:"column", sm:"column"},
                        gap: 5,
                        my: 10,
                    }}
                >
                    <img src="ai2.png" alt="robot" style={{ width:"200px", margin:"auto"}} />
                    <img 
                        className="rotate"
                        src="ai1.png" 
                        alt="AI" 
                        style={{ width:"200px", margin:"auto"}} 
                    />
                </Box>
                <Box sx={{ display:"flex", width:"100%", mx:"auto"}}>
                    <img
                        src="s2.png" 
                        alt="chatbot" 
                        style={{
                            display:"flex",
                            margin:"auto",
                            width:"60%",
                            borderRadius:20,
                            boxShadow:"-5px -5px 105px #64f3d5",
                            marginTop: 20,
                            marginBottom: 20,
                        }}
                    />
                </Box>
            </Box>
            <Footer/>
        </Box>
    )
}

export default Home