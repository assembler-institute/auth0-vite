import '../App.css'
import {useAuth0} from "@auth0/auth0-react";
import {protectedRequest, publicRequest} from "../services/request.service.ts";

function App() {
    const { logout, getAccessTokenSilently } = useAuth0()
  return (
    <>

      <h1>Vite + React + Home</h1>
      <div className="card">
        <button onClick={()=>publicRequest()}>Public Request</button>
        <button onClick={()=>protectedRequest(getAccessTokenSilently)}>Protected Request</button>
        <button onClick={()=>logout()}>Logout</button>
      </div>
    </>
  )
}

export default App
