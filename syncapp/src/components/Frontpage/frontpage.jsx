import React from 'react';


const Frontpage =({ onLoginClick }) => {
    const handleClick = () => {
        onLoginClick();
      };

    return (
        <div>
            <h1>This is the "DROP PAGE"</h1>
            <p>this is the first page a user appears at</p>
            <button onClick={handleClick}>LOGIN</button>
        </div>
    )
}

export default Frontpage;