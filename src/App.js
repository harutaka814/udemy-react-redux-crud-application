import React from 'react';

// function App() {
//   return (
//     <div>Hello World!!</div>
//   );
// }

// class App extends Component {
//   render() {
//     // const greeting = "Hi, Tom!";
//     // const dom = <h1 className="foo">{greeting}</h1>; 
//     // return dom;
//     return (
//       <React.Fragment>
//         <label htmlFor="bar">bar</label>
//         <input type="text" onChange={() => console.log("I am clicked.")}></input>
//       </React.Fragment>
//     )
//     // return <input type="text" onChange={() => console.log("I am clicked.")}></input>
//   }
// }

const App = () => {
  return <div><Cat></Cat><Cat></Cat><Cat></Cat></div>
}

const Cat = () => {
  return <div>Meow!</div>
}
// function App() {
//   return React.createElement(
//     "div",
//     null,
//     "Hello, World!!"
//   )
// }
export default App;
