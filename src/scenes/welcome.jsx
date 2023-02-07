import logo from '../logo.svg';

export default function Welcome({setIsLoggedIn}){
  //sets state state in Parent component
  return (
    <>
    <img src={logo} className="App-logo" alt="logo" />
    <h1>Welcome to react!!!</h1>
    <button onClick={() => setIsLoggedIn(true)}>Login</button>
    </>
  )
}