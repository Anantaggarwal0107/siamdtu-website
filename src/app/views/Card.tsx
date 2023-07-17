import React from "react";
import "../components/CSS/theme.css"
import { ITeamDetails } from "../siam.types";

const Card:React.FC<ITeamDetails>= (props:ITeamDetails):JSX.Element=> {
  return (
   <div className="m-2">
      <div className="img-container">
        <a href={props.linkedin}> <img src={props.link} alt="SIAM TEAM" className="team-img"/>
        </a>
      </div>
      <h2 className = "team-name">{props.name}</h2>
      <h3 className="team-role">{props.designation}</h3>
    </div>
  );
}

export default Card;
