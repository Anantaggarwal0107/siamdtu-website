import { useState } from "react";
import React from "react";
import "../seriesPost/series.css";
import Content from "./content";
import { SelectCard } from "./selectCard";

const SeriesPOST:React.FC= ():JSX.Element => {
  const [isCP, setIsCP] = useState(false);
  return (
    <section>
      <div className=' container-fluid about-main'>
        <h3> THE ONLY WAY TO LEARN MATHEMATICS</h3>
        <h3> IS TO DO MATHEMATICS</h3>
        <div className='row r1'>
          <div onClick={()=>{setIsCP(false)}} className='col-md-6'>
            <SelectCard customStyle={!isCP} text= 'Puzzle' />
          </div>
          <div className='col-md-6' onClick={()=>{setIsCP(true)}}>
            <SelectCard customStyle={isCP} text = 'Maths in CP'/>
          </div>
        </div>
        <Content isCP= {isCP}/>
      </div>
    </section>
  );
}
export default SeriesPOST;