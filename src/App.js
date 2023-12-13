// استیت ها در ریکت میتواند هرنوع مقدار جاوااسکریپتی را نگه دارد
// اما بهتر است اشیایی که در استیت نگه داری میشوند به طور مستقیم تغییرداده نشود*
import { useState } from "react";
// بدین صورت هوک استیت را از ریکت فرا خوانی میکنیم
const App = () => {
  
  //به صورت های مختلفی میتوانیم استیت تعریف کنیم
  // const [initalValue, setInitalValue] = useState(0);
  // const [initalValue, setInitalValue] = useState("Amin");
  // const [initalValue, setInitalValue] = useState(["1", "3", "8"]);
  // const [initalValue, setInitalValue] = useState({
  //   1: "Amin",
  //   3: "Ali",
  //   8: "reza",
  // });
  

  const [counter, setCounter] = useState(0);
//  تعریف استیت باید به این صورت انجام بشه
// (state , setState)

  const increment = () => setCounter(counter + 1);
  const decrement = () => setCounter(counter - 1);
  // برای تغییر و انجام عملی روی استیت 
  // setState(setCounter)
  // را فراخوانی میکنیم 

  return (
    <section>
      <h1>{counter}</h1>
      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
    </section>
  );
};

export default App;
