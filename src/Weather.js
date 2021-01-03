import React from "react";
import "./Weather.css";

export default function Weather() {
    return (
        <div className="Weather container">
            <div className="row"><p>Don't let someone who gave up on their dreams talk you out of going after yours</p></div> 
            <div className="row"><form><input type="search"/><input type="submit"/></form></div>   
            <div className="row">
                <div className = "column-4">
                    <img src="//ssl.gstatic.com/onebox/weather/64/partly_cloudy.png" alt="Partly cloudy"></img>
                    <h4>27°C|F</h4>
                </div>
                <div className="column-4">
                    <ul>
                        <li>03.01.2021</li>
                        <li>Bali</li>
                        <li>12:45</li>
                    </ul>
                </div>
                <div className="column-4">
                    <ul>
                        <li>humidity:88%</li>
                        <li>wind:18km/h</li>
                    </ul>
                </div>
            </div>  
        </div>
    );
}