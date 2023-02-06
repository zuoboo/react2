// import { useState } from "react";
// import reactLogo from "./assets/react.svg";
// import "./App.css";

// function App() {
//   return (
//     <div className="App">
//       {" "}
//       <div>
//         <a href="https://vitejs.dev" target="_blank">
//           <img src="/vite.svg" className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://reactjs.org" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />{" "}
//         </a>
//       </div>
//       <h1>Hello, World!</h1>{" "}
//     </div>
//   );
// }

// export default App;


import { FC } from 'react';
import logo from './assets/react.svg';
import "./App.css";

const App: FC = () => {
  
const name = "Patty";
const greet = (name: string) => <p>Hello, {name || "Guest"}!</p>;

const n = Math.floor(Math.random() * 10);
const thershold = 5;

const list = ['Patty', 'Rolley', 'Bobby'];

  return (
    <div className='App'>
      <header className='App-header'>
        <img src={logo} className='logo react' alt="React logo" />
        <p>Hello World!</p>
      </header>
      <div>{greet(name)}</div>
      <div />
      {n > thershold && (
        <p>
          {n} は {thershold}よりも大きい値です
        </p>
      )}
      {n > thershold || (
        <p>
          {n}は {thershold}以下の値です
        </p>
      )}
      <p>{n}は{n % 2 === 0 ? '偶数' : '奇数'}です</p>

      <ul>
        {list.map((name) => (
          <li>Hello, {name}!</li>
        ))}
      </ul>
    </div>
  );
};

export default App;

