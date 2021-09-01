import React from 'react';
import ReactDOM from 'react-dom';


const names=["Arin","Elis","Gamze"];

//<button type="button" style="padding: 10px;color: white; background-color: red; border: 2px  solid yellow;">HTML button</button>

function App() {

  const buttonValue="My Button";
  const str1="Click ";
  const str2="Me";

  return(
    // <div>
    //   {names.map(name=>(<h1>{name}</h1>))}
    //   <h2>
    //   betul
    // </h2>
    // </div>
    <button className="jsxCLASS" type="button" style={{padding:'10px',color:'white', backgroundColor:'blue',border:'2px solid yellow'}}>
      {str1.concat(str2)}</button>
    
  );
}

ReactDOM.render(
  <App/>,
  document.getElementById('root')
);
