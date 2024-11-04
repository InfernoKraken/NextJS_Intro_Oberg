import React, { useState } from "react";

export default function Counter(props) {
    const [count, setCount] = useState(0);

    function rollOverCount(){
      if(count > 10){
        setCount(0);
      }
    }

    const buttonStyle = {
      backgroundColor: "black",
      color: "white",
      padding: props.size + "rem",
      borderRadius: "10px"
    }

    const handleIncrement = () => {
      setCount(prevCount => {
        const newCount = prevCount + props.amount;
        if(newCount > 10){
          return 0;
        }
        return newCount;
      });
    }
    return (
      <div>
        <p>Count: {count}</p>
        <button onClick={handleIncrement} style={buttonStyle}>{props.name}</button>
      </div>
    );
  }