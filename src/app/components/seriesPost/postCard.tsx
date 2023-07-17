import React from "react";
import { IPostCardProps } from "../../siam.types";
import "../seriesPost/series.css";

const PostCard:React.FC<IPostCardProps> = (props:IPostCardProps)=> {
  const isCP= props.isCP;
  return (
    <div className='card text-white mb-3 puzzle-card' style={isCP? {backgroundColor:"#7579e7"} :{}}>
      <div className='card-body'>
      <div className='image-area h-300'><img src={props.font} alt= {props.title}/></div>
          <div className="d-flex justify-content-center align-items-center">
              <a href= {props.link}>
                <i className="fas fa-arrow-circle-right m-2" style={{fontSize:'40px', color:'white'}}/>
              </a>
          </div>
      </div>
    </div>
  );
}
export default PostCard;
