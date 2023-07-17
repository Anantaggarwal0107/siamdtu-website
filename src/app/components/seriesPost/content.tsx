import React from "react";
import PostCard from "./postCard";
import "../seriesPost/series.css"
import { CPData, PuzzleData } from "./PostData";
import { IContentProps } from "../../siam.types";
import { Helmet } from "react-helmet";

const Content:React.FC<IContentProps> = (props:IContentProps):JSX.Element => {
    const isCP= props.isCP;
    const seriesData= isCP? CPData: PuzzleData;
    
    return( 
        <>
        <Helmet>
            {isCP? <title>SIAM-DTU | Maths in Competitive Programming </title>: <title>SIAM-DTU | Puzzle</title>}
        </Helmet>
        <div className="row instruct-puzzle d-flex justify-content-center align-items-center">
            {seriesData.map( (seriesContent, idx)=> <div key = {idx} className="d-flex justify-content-center col-xl-3 col-md-6 col-lg-4 col-sm-12">
                    <PostCard link={seriesContent.link} font={seriesContent.font} title={seriesContent.title} isCP= {isCP}/>
                </div>)}
        </div>
        </>
    );
}
export default Content;
