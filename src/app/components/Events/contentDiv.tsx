import React from 'react';
import { IContentDivProps, IEventContentList } from '../../siam.types';

export const ContentDiv:React.FC<IContentDivProps> =(props:IContentDivProps):JSX.Element=>{
    const title= props.title;
    const contentList= props.contentList;
    
    return(
    <div className="d-flex flex-column justify-content-center align-items-center text-justify mb-4 col-md-6">
        <ul>
            {title}
                {props.date? <li> <b>Date: </b> {props.date}</li>:null}

                {contentList.map((item:string,index:number)=>{
                    return(
                        <li key={index}>{item}</li>
                    )
                })}
            {props.additionalList?
                props.additionalList.map((item:IEventContentList,index:number)=>{
                    return( 
                        item.type==='ul'?
                        <ul key={index}>
                            {item.listTitle}
                            {item.listItems.map((listItem:string,idx:number)=>{
                                return(
                                    <li key={idx}>{listItem}</li>
                                )
                            }
                            )}
                        </ul>:
                        <ol key={index}>
                            {item.listTitle}
                            {item.listItems.map((listItem:string,idx:number)=>{
                                return(
                                    <li key={idx}>{listItem}</li>
                                )
                            }
                            )}
                        </ol>)
                }):null}
        </ul>
    </div>
    )
}