


export default function Home({setIsLoggedIn}){
  return (
    <>
    <h1>You're Back!!! </h1>
    <h2>Welcome Home!!</h2>
    <button onClick={() => setIsLoggedIn(false)}>Logout</button>
    </>
  )
}