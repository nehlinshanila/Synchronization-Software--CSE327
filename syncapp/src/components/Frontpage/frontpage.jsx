import React from 'react';
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";


const Frontpage =() => {


    return (
        <div>
            <h1>This is the "DROP PAGE"</h1>
            <p>this is the first page a user appears at</p>
            <button><Link to="/login">Go to Login Page</Link></button>
        
        </div>
    )
}

export default Frontpage;