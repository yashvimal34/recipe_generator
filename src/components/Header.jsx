import React from "react";
import chefImage from "../assets/chef-claude-icon.png";

export default function ChefClaudeHeader() {
    return (
        <>
           <header className="header">
                <img className="chef-image" src={chefImage} alt="Chef Image" />
                <h1 className="chef-text">Chef Claude</h1>
           </header>
        </>
    )
}