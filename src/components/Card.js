import React from "react";
import bgPattern from "../images/bg-pattern-card.svg";
import avatar from "../images/image-victor.jpg";
import "../css/Card.css"

class Card extends React.Component {
    render() { 
        return ( 
            <div>
                <div id="card">
                    <div id="imgContainer">
                        <img className="bgStyle" src={bgPattern} alt="background" />
                        <img className="avatar" src={avatar} alt="avatar" />
                    </div>
                    <div id="cardHeader">
                        <div>
                            <h1>Victor Crest</h1> 
                            <p>26</p>
                        </div>
                        <p className="city">London</p> 
                    </div>
                    <div id="stats">
                        <div>
                            <p className="statsNumber">80K</p> 
                            <p className="statsText">Followers</p> 
                        </div>
                        <div>
                            <p className="statsNumber">803K</p> 
                            <p className="statsText">Likes</p> 
                        </div>
                        <div>
                            <p className="statsNumber">1.4K</p> 
                            <p className="statsText">Photos</p>
                        </div>
                        

                        
                    </div>
                    
                </div>
            </div>
         );
    }
}
 
export default Card;