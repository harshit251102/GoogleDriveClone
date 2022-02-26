import React from 'react';
import ReactDOM from 'react-dom';

import './index.css'; 
// to link css file  

//its need came while learning components
// import App from './App';

// while learning ES6 Import Export Modules
// import sname,{branch,fullName} from './App2';
//  or
// import * as qs from './App2';

//to create simple calculator
// import Calcapp from './Calcpp';

// for learning props
// import Card from './Card';
// import Sdata from './Sdata';

//For Slot Machine App
// import Slot from "./Slot"

//  For Click Game
// import Click from './Click';

//For GetTime Challenge
// import GetTime from './GetTime';

//To create Digital Clock
// import DigiClock from './DigiClock';

//Learning Events 
// import Clickme from './Clickme';

//Learning Forms in React JS
// import Forms from './Forms';

//Learning to use npm pre-defined packages
// import Clock from 'react-digital-clock';

//Building a To Do List
// import ToDoList from './ToDoList';

//importing bootstrap
// import App3 from './App3';

//1-min website
// import Aminwebsite from './Aminwebsite';

//Google-Keep App
// import KeepApp from './KeepApp';

//Context-API //useContext
// import ContextAPI from './ContextAPI';

//useEffect Hook
// import TutuseEff from './TutuseEff';

//live covid tracker
// import Covid from './CovidTracker/Covid'

//Pokemon
// import CompA from './PokemonAPI/CompA';
// import axios from "axios";

//React-router-DOM
// import Router from './reactrouter/Router';
// import { BrowserRouter } from "react-router-dom";
// import { Route, Switch } from "react-router-dom";

//Learning UseReducer Hool
// import LearnReducer from './LearnReducer';


//Google-Drive-Clone
import  App from "../src/GoogleDriveClone/components/App";
import reportWebVitals from './reportWebVitals';
// import "bootstrap/dist/css/bootstrap.min.css";

// const arr = ['harshit','gupta']
// // In React v15 it's possible for render()
// // to return an array of Elements



// // ReactDOM.render(<div><h1>Hi Harshit!</h1>
// //   <p>Paragraph Tag</p></div>,              // is waale method se div ke andar div aayega uske liye React.Fragment
// //   document.getElementById("root"));

// // Below is the alter of above code

// ReactDOM.render([<h1>Hi Harshit!</h1>,
//   <p>Paragraph Tag alter approach</p>,],
//   document.getElementById("root"));

// // Using React.Fragment
// ReactDOM.render(
//   <React.Fragment>                   
//     <h1> Harshit Gupta</h1>
//     <p>This is a Paragraph tag</p>
//     <h2> Heading2</h2>
//   </React.Fragment>,
//   document.getElementById("root")
// );

// // we can use simply angular brackets like below
// ReactDOM.render(
//   <>                   
//     <h1> Harshit Gupta</h1>
//     <p>This is a Paragraph tag</p>
//     <h2> Heading2</h2>
//   </>,
//   document.getElementById("root")
// );

// const flname = "harshit gupta";

// ReactDOM.render(
//   <>
//       <h1>my name is {flname}</h1>
//       <p>  my lucky number is {15+5}</p>
//   </>,
//   document.getElementById("root")
// );

// // We can't use statements in curly braces

// const fname = "harshit";
// const lname = "gupta";
// ReactDOM.render(
//   <>
//       <h1>my name is {fname + " " + lname}</h1>
//   </>,
//   document.getElementById("root")
// );
// // alter way
// const currdate = new Date().toLocaleDateString();
// const currtime = new Date().toLocaleTimeString();
// ReactDOM.render(
//   <>
//       <h1> {`my name is ${lname} ${fname}`}</h1>
//       <p>{`today's date is ${currdate}`} </p>
//       <p>{`current time is ${currtime}`}</p>
//   </>,
//   document.getElementById("root")
// );

// // JSX Attributes
// ReactDOM.render(
//   <>
//   <h1 contentEditable='true'>My name is {fname}</h1>
//   {/* self closing tag */}
//   <img src='https://ih1.redbubble.net/image.1045049975.0131/poster,504x498,f8f8f8-pad,600x600,f8f8f8.jpg' alt='randomImages'/>
//   <a><img></img></a>               {/*creating a link thru image*/ }
//   </>,
//   document.getElementById('root')
// );


// //CSS Styling and Importing CSS file IN React JS
// ReactDOM.render(
//   <>
//   <h1 className="heading">My name is Harshit Gupta</h1> {/*we have to use classname keyword instead of class*/}
//   <div className='img_div'>
//   <img className='img_div_img' src='https://images.pexels.com/photos/3844788/pexels-photo-3844788.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940' alt='randomImages'/>
//   <img className='img_div_img' src='https://images.pexels.com/photos/4238994/pexels-photo-4238994.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940' alt='randomImages'/>
//   <img className='img_div_img' src='https://images.pexels.com/photos/7066408/pexels-photo-7066408.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500' alt='randomImages'/>
//   </div>
//   </>,
//   document.getElementById('root')
// );

// //Internal CSS and Inline CSS in ReactJS
// ReactDOM.render(
//   <>
//     <h1 style={{color:'blue',textTransform:'capitalize',textAlign:'center'}}>Learning to use inline css in ReactJS</h1>
//   </>,
//   document.getElementById('root')
// );

// // we can pass the object also in style
// const heading = {
//   color: '#fa9191',
//   textAlign: 'center',                    // key : 'value'
//   textTransform: 'capitalize',
//   fontWeight: 'bold',
//   textShadow: '0px 2px 4px #ffe9c5',
//   margin: '70px 0',
// };


// ReactDOM.render(
//   <>
//     <h1 style={heading}>Learning to use inline css in ReactJS</h1>
//   </>,
//   document.getElementById('root')
// );


// //mini project
// let curDate= new Date();
// curDate = curDate.getHours();
// let greeting='';
// const cssstyle = { };
// if(curDate>=1 && curDate<12)
// {
//   greeting='Morning';
//   cssstyle.color='green';
// }
// else if(curDate >=12 && curDate <19)
// {
//   greeting='AfterNoon';
//   cssstyle.color='orange';
// }
// else
// {
//   greeting='Night';
//   cssstyle.color='black';
// }

// ReactDOM.render(
//   <>
//   <div class='miniproj'>
//   <h1>Hello Harshit, Good <span style={cssstyle}>{greeting}</span></h1>
//   </div>
//   </>,
//   document.getElementById('root')
// );

// //Components in React


// // ReactDOM.render(
// //   <>
// //     <Heading/>
// //     <Para/>
// //     <List/>
// //   </>,
// //   document.getElementById('root')
// // );

// //now onwards we will work in index js this much only
// ReactDOM.render(
//   <> <App/> </>,document.getElementById("root")
// );

// //Learning ES6 Modeules Import Export
// ReactDOM.render(
//   <>
//   <ol>
//     <li>Harshit</li>
//     <li>{sname} {/*or {qs.default}*/}</li>
//     <li>{branch} {/*or {qs.branch}*/}</li>
//     <li>{fullName()} {/*or {qs.fullName()}*/}</li>
//   </ol>
//   </>,
//   document.getElementById('root')
// );

// //creating very simple calculator

// ReactDOM.render(
//   <> <Calcapp/> </>, document.getElementById('root')
// );


// // Props in React JS

// // NOTE:- "props" stands for properties
// // React Props are like functions arguments in Javascript & attributes in HTML.

// // import Card from './Card';

// //avoid using props name same as pre defined keywords

// ReactDOM.render(
//   <>

//     <h1> List of top NETFLIX Series in 2020 </h1>
//     <Card imgsrc='https://wallpapercave.com/wp/wp4056410.jpg'
//       sname='DARK'
//       link='https://www.netflix.com/in/title/80990668?source=35'
//     />
//     <Card imgsrc='https://wallpapercave.com/wp/wp4056410.jpg'
//       sname='DARK'
//       link='https://www.netflix.com/in/title/80990668?source=35'
//     />
//     <Card imgsrc='https://wallpapercave.com/wp/wp4056410.jpg'
//       sname='DARK'
//       link='https://www.netflix.com/in/title/80990668?source=35'
//     />
//     <Card imgsrc='https://wallpapercave.com/wp/wp4056410.jpg'
//       sname='DARK'
//       link='https://www.netflix.com/in/title/80990668?source=35'
//     />
//   </>,
//   document.getElementById('root')
// );

// function ncard(val,ind,arr){
//   return (
//     <>
//       <Card
//         imgsrc={val.imgscr}
//         sname={val.sname}
//         link={val.links}
//       />
//     </>
//   );
// }
// ReactDOM.render(
//   <>
//     <h1> List of top NETFLIX Series in 2020 </h1>
//     {Sdata.map(ncard)};
//   </>,
//   document.getElementById('root')
// );

// Fat arrow function

// function myname(a,b){
  // return a+b;
// }

// const myname = (a,b) => a+b;

// Both are same

//Implementation of fat arrow function below
//  ReactDOM.render(
//    <>
//      <h1> List of top NETFLIX Series in 2020</h1>
//      {Sdata.map((val) =>
//      {
//        return (
//          <Card
//           key={val.id}
//           imgsrc={val.imgscr}
//           sname={val.sname}
//           link={val.link}
//         />
//        );
//      })}
//    </>,
//    document.getElementById('root')
//  );
 

// Ternary Operator
// condition?ExpsnTrue:ExpsnFalse

//Slot Machine Game
// ReactDOM.render( <> <Slot/> </>, document.getElementById('root') );

//React Hooks
// 1. Hooks are the new features introduces in 16.8
// 2. It allows you to state and other React features without writing a class. Hooks are the functions which "hook into" React state and lifecycle features from function components.
//3. It doesn't work inside classes.
//4. Hooks should always be used at the top level of the React Functions.

// ReactDOM.render(<> <Click/> </>, document.getElementById('root'));

//Get Time Challenge
// ReactDOM.render(<> <GetTime/> </>, document.getElementById('root'));

//Creating Digital Clock
// ReactDOM.render(<> <DigiClock/> </>, document.getElementById('root'));

//Learning Events in JS using CLICK ME Game
// ReactDOM.render(<> <Clickme/> </>, document.getElementById('root'));

//Forms in React JS
// ReactDOM.render(<> <Forms/> </>, document.getElementById('root'));
//Note :- An input form element whose value is controlled by React is called a "Controlled Component".

//Spread Operator in React JS
// ReactDOM.render(<> <Spread/> </>, document.getElementById('root'));

//Material UI Icons

//Playing with npm (using digital clock already in npm)
// ReactDOM.render(<> <Clock/> </>, document.getElementById('root'));

//To Do List using Material UI Framework
// ReactDOM.render(<> <ToDoList/> </>, document.getElementById('root'));

// Learning to use Bootstrap
// ReactDOM.render(<> <App3/></>, document.getElementById('root'));

// Creating a accordion
// ReactDOM.render(<> <Aminwebsite/></>, document.getElementById('root'));

//Creating a google keep app clone
// ReactDOM.render(<> <KeepApp/></>, document.getElementById('root'));

//-------------------------//
      //CONTEXT API//
//------------------------//
// ReactJS provides a concept call concept

// React Context API allows you to easily access data at different levels of the component tree, without passing the prop to every level

//useContext Hook
// ReactDOM.render(<> <ContextAPI/></>, document.getElementById('root'));

//useEffect Hook
// ReactDOM.render(<> <TutuseEff/></>, document.getElementById('root'));

//StateWise Live Covid Tracker
// ReactDOM.render(<> <Covid/></>, document.getElementById('root'));

//axious
// ReactDOM.render(<> <CompA/></>, document.getElementById('root'));

//React-Router-DOM
// ReactDOM.render(<>
//   <BrowserRouter>
//     <Router/>
//   </BrowserRouter>
// </>, document.getElementById('root'));

// what is a pure function 
//1. it always return the same output if same args are passed
//2. it doesn't produce any side effects

// UseReducer Hook
// ReactDOM.render(<>
//   <BrowserRouter>
//     <LearnReducer/>
//   </BrowserRouter>
// </>, document.getElementById('root'));

//Google Drive Clone
ReactDOM.render(
  <React.StrictMode>
    <App/>
  </React.StrictMode>,
  document.getElementById("root"));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();