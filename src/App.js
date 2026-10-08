import { BrowserRouter,Routes,Route } from "react-router-dom";
import React, { useState } from 'react'
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Landing from "./pages/Landing";

function App () {

     const [user,setUser] = useState([
        {userName:"priya",password:"123"},
        {userName:"abc",password:"123"}
    ])
    return(
<BrowserRouter>



<Routes>
    <Route path='/' element={<Login user={user} setUser={setUser} />}></Route>
    <Route path='signup' element={<Signup user={user} setUser={setUser} />}/>
    <Route path="landing" element={<Landing />}/>
   
</Routes>
</BrowserRouter>
    )
}

export default App;
