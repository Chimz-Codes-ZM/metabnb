import React from "react";

import card1 from "../Images/Home/Frame 151.png";
import stars from "../Images/Home/stars.png";

function Cards() {
    return (
        <div className="cards-header">
            <div className="inspiration">
                <p>Inspiration for your next adventure</p>
            </div>
            <div className="cards">
                <div className="cards-row-1">
                    <div className="card1">
                        <img src={card1}/>
                        <div className="card-text">
                            <p>Desert king</p>
                            <p><b>1MBT per night</b></p>
                        </div>

                        <div className="card-text-2">
                            <p>2345km away</p>
                            <p>available for 2weeks stay</p>
                        </div>

                        <img src={stars}/>
                        
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Cards