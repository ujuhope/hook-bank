// import React from "react";
import React, { useState } from "react";
import "../App.css";

const AboutMe = () => {
  const [counter, setCounter] = useState(15);
  const addValue = () => {
    setCounter((prevCounter) => prevCounter + 1)
        setCounter((counter) => counter + 1);
           setCounter((prevCounter) => prevCounter + 1);
    // console.log(counter)
  };
const removeValue=()=>{
  setCounter(counter - 1);
  // console.log(counter)
}
const [subscribe, setSubscribe]= useState(false)
const changeText=()=>{
setSubscribe(true)
}
  return (
    <section>
      <h2>About Me</h2>
      <p>This is a brief description of yourself.</p>
      <h1>hello {counter}</h1>
      <h2>count value</h2>
      <h1>{subscribe ? "thank you for subscribing" : "welcome dear"}</h1>
      <button onClick={addValue}>add</button>

      {"        "}
      <button onClick={removeValue}>remove</button>
      {subscribe?(<button onClick={changeText}> subscribed!</button>) : (<button onClick={changeText}> subscribe</button>)}
    </section>
  );
};

export default AboutMe;


// import React, { useState } from "react";
// import "./App.css";

// function App() {
//   let counter = 15;
//   const [counter, setCounter] = useState(15);
//   const addValue = () => {
//     setCounter(counter + 1);
//   };

//   return (
//     <>
//       <h1>hello {counter}</h1>
//       <h2>count value</h2>
//       <button onClick={addValue}>add</button>

//       {"        "}
//       <button onClick={removeValue}>remove</button>
//     </>
//   );
// }