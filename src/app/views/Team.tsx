import React from "react";
import Card from "./Card";
import shagun from "../assets/teamImage/Shagun.jpeg";
import narayan from "../assets/teamImage/narayan.jpeg";
import jeevika from '../assets/teamImage/Jeevika Wadhwa.jpeg';
import abhijeet from "../assets/teamImage/Abhijit.jpg";
import anirudh from "../assets/teamImage/Anirudh.jpg";
import ankita from "../assets/teamImage/ankita.jpg";
import manpreet from "../assets/teamImage/Manpreet.jpeg";
import parn from "../assets/teamImage/Parn.jpg";
import aditya from "../assets/teamImage/Aditya.jpg";
import sarthak from  "../assets/teamImage/Sarthak.jpg"
import aneesh from  "../assets/teamImage/Aneesh.jpg"
import yash from  "../assets/teamImage/Yash.png"
import shivam from  "../assets/teamImage/Shivam.jpg"
import vivekKumarAggarwal from '../assets/teamImage/VivekKumarAggarwal.jpg'
import jatin from "../assets/teamImage/Jatin_.jpeg"
import rumit from "../assets/teamImage/Rumit.jpg"
import riya from "../assets/teamImage/riya.png"
import vardhaman from "../assets/teamImage/Vardhaman.jpg"
import nandika from "../assets/teamImage/NandikaArora.jpg"
import abhishek from "../assets/teamImage/Abhishek.jpeg"
import nikhil from '../assets/teamImage/NikhilGupta.jpeg'
import "../components/CSS/theme.css"
import { ITeamDetails } from "../siam.types";
import { Helmet } from "react-helmet";

export const Team:React.FC = ():JSX.Element => {
const senior:ITeamDetails[] = [
  {
    name : " Shagun Uppal",
    link : shagun,
    designation : "President",
    linkedin : "https://www.linkedin.com/in/shagun-uppal-b986511b2"
  },
  {
    name : "Ankita Jain",
    link : ankita,
    designation : "Vice President",
    linkedin : "https://www.linkedin.com/in/ankita-jain-711765197/"
  },
  {
    name : "Anirudh Kumar Aheer",
    link : anirudh,
    designation : "Vice President",
    linkedin : "https://www.linkedin.com/in/anirudhaheer/"
  },
  {
    name : "Vardhman Jain",
    link : vardhaman,
    designation : "Treasurer",
    linkedin : "https://www.linkedin.com/in/vardhmanjain2611"
  },
  {
    name : "Abhijit Barua",
    link : abhijeet,
    designation : "General Secretary",
    linkedin : "https://www.linkedin.com/in/abhijit-barua-3683a6193"
  },
  {
    name : "Narayan Jee Jha",
    link : narayan,
    designation : "Joint Secretary",
    linkedin : "https://www.linkedin.com/in/narayan-jee-jha-95b27a193/"
  },
  {
    name : "Nandika Arora",
    link : nandika,
    designation : "Joint Secretary",
    linkedin : "https://www.linkedin.com/in/nandika-arora-1333641ab/"
  },
  {
    name : "Rumit Garg",
    link : rumit,
    designation : "Head of Operations",
    linkedin : "https://www.linkedin.com/in/rumit-garg/"
  },
  {
    name : "Jeevika Wadhwa",
    link : jeevika,
    designation : "Head of Mathematics",
    linkedin : "https://www.linkedin.com/in/jeevika-wadhwa-386219195/"
  } 
]

const junior:ITeamDetails[] = [
   {
    name : "Nikhil Gupta",
    link : nikhil,
    designation :"Design Head",
    linkedin : "https://www.linkedin.com/in/nikhil-gupta-2601/"
  },
  {
    name : "Riya Nayak",
    link : riya,
    designation :"Design Head",
    linkedin : "https://www.linkedin.com/in/riya-nayak-855496201/"
  },
  {
    name : "Manpreet Kaur",
    link : manpreet,
    designation :"Corporate Head",
    linkedin : "https://www.linkedin.com/in/manpreet-kaur-6b942a190"
  },
  {
    name : "Abhishek Kumar",
    link : abhishek,
    designation :"Corporate Head",
    linkedin : "https://www.linkedin.com/in/abhishek-kumar-357466202/"
  },
  {
    name : "Parn Pratap Singh",
    link : parn,
    designation :"Technical Head",
    linkedin : "https://www.linkedin.com/in/parn-pratap-singh-500b6a208"
  },
  {
    name : "Aditya",
    link : aditya,
    designation :"Technical Head",
    linkedin : "https://www.linkedin.com/in/aditya-khandelwal-6a2030205/"
  },
  {
    name : "Sarthak Gandotra",
    link : sarthak,
    designation :"S.I.G. Head",
    linkedin : ""
  },
  {
    name : "Aneesh Panchal",
    link : aneesh,
    designation :"S.I.G. Head",
    linkedin : "https://www.linkedin.com/in/aneesh-panchal-04611a1a1"
  },
  {
    name : "Jatin Bansal",
    link : jatin,
    designation :"Student Coordinator",
    linkedin : "https://www.linkedin.com/in/jatin-bansal-0a8161205/"
  },
  {
    name : "Shivam",
    link : shivam,
    designation :"P.R. & Publicity Head",
    linkedin : "https://www.linkedin.com/in/shivam-singh-7930a9202"
  },
  {
    name : "Yash",
    link : yash,
    designation :"P.R. & Publicity Head",
    linkedin : "https://linkedin.com/in/yash-vats-a70a51208"
  },
]
  return (
      <section className="team-bg">
      <Helmet>
        <title>SIAM-DTU | Team</title>
      </Helmet>
      <div>
        <h1 className="section-title">FACULTY ADVISOR</h1>
        <div className="council-team">
          <Card link={vivekKumarAggarwal} designation="" name=" Dr. Vivek Kumar Aggarwal" linkedin="http://www.dtu.ac.in/Web/Departments/AppliedMathematics/faculty/vivekkumaraggarwal.php"></Card>
        </div>
      </div>

      <h1 className="section-title">SENIOR COUNCIL 2K20-21</h1>
      <div className="council-team">
        <div className="row d-flex justify-content-center align-items-center">
          {senior.map((item, idx)=>{
            return (
              <div className="col-xs-12 col-sm-6 col-lg-3 col-md-4 d-flex justify-content-center"key={idx}>
                <Card
                link={item.link}
                designation = {item.designation}
                name = {item.name}
                linkedin = {item.linkedin}/>
              </div>
            )
          })}
        </ div> 
      </div>

      <h1 className="section-title">JUNIOR COUNCIL 2K20-21</h1>
      <div className="council-team">
        <div className="row d-flex justify-content-center align-items-center">
        {junior.map((item, idx)=>{
          return (
            <div className="col-xs-12 col-sm-6 col-lg-3 col-md-4 d-flex justify-content-center"key={idx}>
              <Card
              link={item.link}
              designation = {item.designation}
              name = {item.name}
              linkedin = {item.linkedin}/>
            </div>
          )
          })}
        </ div>
      </div>   
    </section>
  );
};
