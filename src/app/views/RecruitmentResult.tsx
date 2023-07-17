import React from "react";
import "../components/CSS/theme.css";
import welcomeImg from "../assets/welcome.svg";
import bgImage from '../assets/recruitBg.svg';
import Sparkle from "react-sparkle";
import { Helmet } from "react-helmet";

const FirstYears:string[]= ['Harsh Aggarwal', 'Mayur Kumar','Chiranjeevi', 'Riya sehrawat', 'Pragyan', 'Bhavya jain', 
'Dheeresh', 'Alok kumar singh', 'Apurv Vats', 'Yash Bagga', 'Abhishek sambharya', 'Shubham phogat', 
'Aditya Sharma', 'Himanshu', 'Abhishek Yadav', 'Arnav krishn kushwaha', 'Ayush Malik', 'Kunal Baniwal', 'Satya Prakash',
'Garvit Rastogi', 'Priya Chaudhary', 'Mohd Danish', 'Aman', 'Shobhit Gautam'];

const SecondYears:string[]= ['Pranav Pundeer', 'Sunny Jha', 'Saurabh', 'Anshul Aggarwal', 'Dhruv Rana']

const MSc:string[]=['Prusha', 'Riya', 'Charu', 'Utkarsh', 'Jaskirat', 'Aman', 'Neha', 'Garima', 'Rashi', 'Ranjeeta', 'Ankita' ,'Shweta','Priyanshi','Prachi','Mansi','Himani']

const RecruitmentResult:React.FC= ():JSX.Element=> {
  return (
   <>
   <Helmet>
    <title>SIAM DTU | Results</title>
   </Helmet>
    <section style={{backgroundImage:`url(${bgImage})`, backgroundRepeat:'no-repeat'}}>
        <div className="container vh-100 d-flex justify-content-center align-items-center">
            <div className="row">
                <div className=" d-flex align-items-center col-lg-6 col-md-6 col-sm-12 justify-content-center mb-2 pt-4">
                    <p className="display-4 text-center text-main px-2" style={{position:'relative'}}>Welcome New Recruits!!
                        <Sparkle color={'red'} count={10} minSize={10} maxSize={20} fadeOutSpeed={10} flicker={false}/>
                    </p>
                </div>
                <div className="d-flex col-lg-6 col-md-6 col-sm-6 align-items-center justify-content-center">
                    <img src={welcomeImg} alt="Congratulations!!" style={{width:'80%'}}/>
                </div>
            </div>
        </div>
        <div className="container mb-4 ">
            <h1 className="text-center text-main display-4 mb-4">
                <i className="fas fa-trophy" style={{color:'#FFD700'}}/>Congratulations To All New Recruits!!
            </h1>
        </div>
        <div className="container d-flex flex-column justify-content-center align-items-center">
            <h2 className='text-main my-4 text-center'>
                First Year
            </h2>
            <div className="row d-flex justify-content-center mt-4 align-items-center">
                {FirstYears.map((name, index)=>{
                    return (
                        <div className="col-lg-3 col-md-4 col-sm-6 col-xs-12 mb-4" key={index}>
                            <div className="card shadow rounded-lg">
                                <button className="card-body text-center btn btn-outline-dark">
                                    <h5 className="card-title">{name}</h5>
                                </button>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
        <div className="container d-flex flex-column justify-content-center align-items-center mt-4">
            <h2 className='text-main my-4 text-center'>
                Second Year
            </h2>
            <div className="row d-flex justify-content-center align-items-center mt-4">
                {SecondYears.map((name, index)=>{
                    return (
                        <div className="col-lg-4 col-md-4 col-sm-6 col-xs-12 mb-4" key={index}>
                            <div className="card shadow rounded-lg">
                                <button className="card-body text-center btn btn-outline-dark">
                                    <h4 className="card-title">{name}</h4>
                                </button>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
        <div className="container d-flex flex-column justify-content-center align-items-center mt-4">
            <h2 className='text-main my-4 text-center'>
                MSc. Applied Mathematics
            </h2>
            <div className="row d-flex justify-content-center mt-4 align-items-center">
                {MSc.map((name, index)=>{
                    return (
                        <div className="col-lg-3 col-md-4 col-sm-6 col-xs-12 mb-4" key={index}>
                            <div className="card shadow rounded-lg">
                                <button className="card-body text-center btn btn-outline-dark">
                                    <h5 className="card-title">{name}</h5>
                                </button>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    </section>
   </>
  );
}

export default RecruitmentResult;
