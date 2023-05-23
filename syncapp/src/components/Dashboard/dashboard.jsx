import React from 'react';
import Navbar from './Navbar/navbar';
import Statistics from './Statistics/statistics';
import Update from './Update/update';
import Connected from './Connected/connected';


const Dashboard =({ onHomeClick }) => {
    const handleHomeClick = () => {
        onHomeClick();
      };

    return (
        <div>
            <h1>This is the "DASHBOARD PAGE"</h1>
            <p>this is the third and final page a user appears at</p>
            <button onClick={handleHomeClick}>Home</button>

            <Navbar/>
            <Statistics/>
            <Update/>
            <Connected/>

        </div>
    )
}

export default Dashboard;