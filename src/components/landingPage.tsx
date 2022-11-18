import React from "react";

import { AppContext } from "../context/appContext";

const LandingPage = () => {
    const { isOpen } = React.useContext(AppContext);

    console.log(isOpen);
    
    return (
        <div>
            <h1>Landing Page</h1>
        </div>
    );
};

export default LandingPage;