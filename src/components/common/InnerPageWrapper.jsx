import React from 'react';
import Header from "../HomeThree/Header";
import Drawer from "../Mobile/Drawer";

function InnerPageWrapper({children}) {
    return (
        <>
            <Header/>
            <Drawer type={3}/>
            {children && children}
        </>
    );
}

export default InnerPageWrapper;