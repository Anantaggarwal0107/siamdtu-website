import React from "react";
import { useMediaQuery } from "react-responsive";
import { IEventHeroProps } from "../../siam.types";
import { ContentDiv } from "./contentDiv";
import { ImageDiv } from "./imageDiv";

export const EventHero:React.FC<IEventHeroProps> = (props:IEventHeroProps):JSX.Element => {
    const isMobile = useMediaQuery({ query: `(max-width: 900px)` });
    const yearwiseEvents= props.yearwiseEvents;
    return(
        <>
          {yearwiseEvents.map((yearwiseEvent,index)=>{
              const colorType= index%2===0?true:false;
              let isLeft:boolean=true;
            return(
            <section className="eventCard my-5 my-sm-3" key={index}>
                <div className="container-fluid" style={colorType?{backgroundColor:'#FFF6FA'}:{backgroundColor:'#F0FBF8'}}>
                  <header className='section-header d-flex'>
                      <p style={colorType?{color:'#FD71AF'}:{color:'#00B884'}}>{yearwiseEvent.cardTitle}</p>
                  </header>
                      
                      {yearwiseEvent.eventData.map( (event, idx)=> {
                          return(
                              <div className="row" key={idx}>
                                  {isMobile || isLeft? 
                                      <>
                                          <ImageDiv imageAlt={event.contentTitle} imageLink={event.photoLink}/> 
                                          <ContentDiv title={event.contentTitle} date={event.date} contentList={event.contentList} additionalList={event.additionalList}/>
                                          {isLeft=false}
                                      </>:
                                      <>
                                          <ContentDiv title={event.contentTitle} date={event.date} contentList={event.contentList} additionalList={event.additionalList}/>
                                          <ImageDiv imageAlt={event.contentTitle} imageLink={event.photoLink}/>
                                          {isLeft=true}
                                      </>
                                  }
                              </div>
                          )
                      })}
                      
                  </div>
            </section>
            )
          })}
        </>
    )
}