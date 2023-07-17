import React from "react";
import { ISelectCardProps } from "../../siam.types";
import "../seriesPost/series.css"

export const SelectCard:React.FC<ISelectCardProps> =(props:ISelectCardProps):JSX.Element => {
  const isOpen= props.customStyle;
  const text= props.text;
    return(   
      <div className='card select-card' style= {isOpen? {backgroundColor:'#f1e189'}:{}}>
        <div className='card-body'>
          <h3 className='card-title'>{text}</h3>  
        </div>
      </div>     
    )
}