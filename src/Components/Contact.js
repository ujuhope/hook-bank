import React, {useState} from "react";
import "../App.css";

const Contact = () => {
  const [subscribe, setSubscribe]=useState(false)
  const changeText=()=>{
    setSubscribe(true)
  }
  return (
    <section>
      <h2>Contact</h2>
      <p>{subscribe ?("you have sent your contact details "): ("Provide your contact information and links to social media.") }</p>
      {subscribe ? (
        <button onClick={changeText}>subscribed!</button>
      ) : (
        <button onClick={changeText}>subscribe</button>
      )}
    </section>
  );
};

export default Contact;


