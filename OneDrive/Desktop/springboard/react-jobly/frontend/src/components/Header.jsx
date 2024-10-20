import React from "react";

const Header = () => {
    return (
        <>
        <div className="header">
            <div className="sub-div">
                <h3>Find Your Dream Job with Jobly</h3>
                <p>
                    We help you find exciting opportunities
                    around the world.
                    Have the latest openings at your fingertips
                </p>
            </div>
            <div className="input-div">
                <input type="text"  placeholder="Enter search term"/>
                <button type="submit">Search</button>
            </div>
        </div>

        </>
        
    );
};

export default Header;
