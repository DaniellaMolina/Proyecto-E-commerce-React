import React, {useState} from 'react';


const Counter = () => {
  const [count, setCount] = useState(0);
  
  
  const decrease = () => setCount(prevCount => {
    if (prevCount <= 0) return 0;
    return prevCount - 1;
  })

  let stock = 4;
  const increase = () => setCount(proCount =>{
    if (proCount >= stock) return ("No hay mas stock");
    return proCount + 1;    
  });


  return (
    <div className="app">
      <h1 className={count > 0 ? "positive" : null}>
        {count}
      </h1>
      <div className="button__wrapper">
        <button onClick={() => decrease()}>-</button>
        <button onClick={() => increase()}>+</button>
      </div>
    </div>
  );
}


export default Counter;