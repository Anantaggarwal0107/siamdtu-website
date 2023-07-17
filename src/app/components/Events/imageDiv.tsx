import React from 'react'
import { IImageDivProps } from '../../siam.types'

export const ImageDiv:React.FC<IImageDivProps> =(props:IImageDivProps):JSX.Element=>{
    const imageUrl= props.imageLink;    
    const imageAlt= props.imageAlt;
    return(
        <div className="d-flex justify-content-center col-md-6">
            <img src={imageUrl} alt={imageAlt} style={{width:"80%", borderRadius:'10px'}}/>
        </div>
    )
}