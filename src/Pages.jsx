import React from "react";
import { Link } from "react-router-dom";

function Pages(){
    return( 
       <>
       <Link to={"/profile"}>profile</Link>
       <Link to={"/payment"}>Payment</Link>
       <Link to={"/upload"}>Upload</Link>
       <Link to={"/invoice"}>Invoice</Link>
       </>
    );
}

export default Pages;