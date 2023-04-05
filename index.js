import React from "react";
import ReactDOM from "react-dom";

const index = 0;   
// const element = React.createElement("h1", {className: 'heading'}, null, 'hello');

// class Clock extends React.Component{

//   render(){

//   return(

//     <h1 className="heading" tabIndex={index}> 
//     <span className="Text"> Hello word {new Date().toLocaleTimeString(this.props.locale)}</span>
//     <img src=""/>
//     </h1>
//   );
//   }
  

// }

class Clock extends React.Component{

  render(){

  return(

    <h1 className="heading" tabIndex={index}> 
    <span className="Text"> Hello word-{this.props.children} {new Date().toLocaleTimeString(this.props.locale)}</span>
    <img src=""/>
    </h1>
  );
  }
  

}
  
 
 
 const ClockComponent = new Clock();

 ReactDOM.render(<Clock locale="bn-BD">test </Clock>, document.getElementById('root'));








/*
jsx er januine formate
element = {
  type:'h1',
  props: {
    className: 'heading',
    tabIndex: 0,
    children: [
      {
        type: 'span',
        props: {
          className:'text'
        }
      },
      {
        type: 'img',
        props:{
          src: '';
        }
      }
    ]
  }

}


*/ 

