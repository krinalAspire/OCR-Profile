import React from "react";
import Box from "@mui/material/Box";

function Custombox(){
    return(
     <Box className="scrollableBox" sx={{border:"1px solid blue", height:"50vh"}}>
        Hello
     </Box>
    );
}

export default Custombox;