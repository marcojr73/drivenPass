import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Credentials } from "./credentials/Credentials";
import { Home } from "./home/Home";
import { Notes } from "./secureNotes/SecureNotes";
import { SignIn } from "./signInUp/SignIn";
import { SignUp } from "./signInUp/SignUp";
import { Wifi } from "./wifi/Wifi";

import "../styles/reset.css"


export default function App() {
    return (
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<SignIn/>}> </Route>
                    <Route path="/sign-up" element={<SignUp/>}> </Route>
                    <Route path="/home" element={<Home/>}> </Route>
                    <Route path="/credentials" element={<Credentials/>}> </Route>
                    <Route path="/wifi" element={<Wifi/>}> </Route>
                    <Route path="/notes" element={<Notes/>}> </Route>
                </Routes>
            </BrowserRouter>
    )
}