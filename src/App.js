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
  const profiles = [
    { name: "Taro", age: 10 },
    { name: "Hanako", age: 5 },
    { name: "NoName" }
  ]
  return (
    <div>
      {
        profiles.map((profile, index) => {
          return <User name={profile.name} age={profile.age} key={index} />
        })
      }
      {/* <User name={"Taro"} age={10}/>
      <User name={"Hanako"} age={5}/> */}
    </div>)
}

const User = (props) => {
  return <div>Hi, T am {props.name}, and {props.age} years old!</div>
}

User.defaultProps = {
  age: 1
}
// function App() {
//   return React.createElement(
//     "div",
//     null,
//     "Hello, World!!"
//   )
// }
export default App;
