import '../App.css'
import {useAuth0} from "@auth0/auth0-react";
import {protectedRequest, uploadRequest} from "../services/request.service.ts";
import React, {useState} from "react";

function App() {
    const { logout, getAccessTokenSilently } = useAuth0()
    const [file, setFile] = useState<File>()

    const handleFileInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        if(e.target.files !== null){
            const file = e.target.files[0];
            setFile(file);
            console.log(file)
        }
    }


    return (
        <>

            <h1>Vite + React + Home</h1>
            <div className="card">
                <input  accept='image/*,audio/*' type="file" onChange={handleFileInput}/>
                <button onClick={()=>uploadRequest(getAccessTokenSilently,file)}>Upload File Request</button>
                <button onClick={()=>protectedRequest(getAccessTokenSilently)}>Protected Request</button>
                <button onClick={()=>logout()}>Logout</button>
            </div>
        </>
    )
}

export default App
