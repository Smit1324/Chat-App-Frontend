import React from 'react'
import { Route, Routes } from 'react-router-dom'

import Home from "./pages/Home"
import Signup from "./pages/Signup"
import Signin from "./pages/Signin"
import Profile from "./pages/Profile"
import UpdateProfile from "./pages/UpdateProfile"

const App = () => {

    return (

        <Routes>
            <Route path="/" element={<Signup />} />
            <Route path="/signin" element={<Signin />} />
            <Route path="/home" element={<Home />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/update-profile" element={<UpdateProfile />} />
        </Routes>

    )
}

export default App