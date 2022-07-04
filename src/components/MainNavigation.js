import React from "react"
import Login from "./Login"
import classes from "./MainNavigation.module.css"


const MainNavigation = () => {
    return <div className={classes.Nav}>
        <Login />
        <h1>NFT Minting App</h1>
    </div>
}

export default MainNavigation