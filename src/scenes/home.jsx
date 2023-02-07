import {useNavigate} from "react-router-dom"


export default function Home({setIsLoggedIn}){
  const navigate = useNavigate();
  return (
    <>
    <h1>You're Back!!! </h1>
    <h2>Welcome Home!!</h2>
    <button onClick={() => navigate('/')}>back to welcome!</button>
    </>
  )
}