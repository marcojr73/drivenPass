import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Credentials } from "./credentials/Credentials";
import { Home } from "./home/Home";
import { Notes } from "./secureNotes/SecureNotes";
import { SignIn } from "./signInUp/SignIn";
import { SignUp } from "./signInUp/SignUp";
import { Wifi } from "./wifi/Wifi";

import "../styles/reset.css"
import { Cards } from "./cards/Cards";
import { Insert } from "./insert/Insert";
import { InsertCard } from "./cards/InsertCard";
import { InsertWifi } from "./wifi/InsertWifi";
import { InsertNote } from "./secureNotes/InsertNote";
import { InsertCredential } from "./credentials/InsertCredential";


export default function App() {
    return (
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<SignIn/>}> </Route>
                    <Route path="/sign-up" element={<SignUp/>}> </Route>
                    <Route path="/home" element={<Home/>}> </Route>
                    <Route path="/credentials" element={<Credentials/>}> </Route>
                    <Route path="/cards" element={<Cards/>}> </Route>
                    <Route path="/wifi" element={<Wifi/>}> </Route>
                    <Route path="/notes" element={<Notes/>}> </Route>
                    <Route path="/insert" element={<Insert/>}> </Route>
                    <Route path="/insert/credentials" element={<InsertCredential/>}> </Route>
                    <Route path="/insert/cards" element={<InsertCard/>}> </Route>
                    <Route path="/insert/wifi" element={<InsertWifi/>}> </Route>
                    <Route path="/insert/notes" element={<InsertNote/>}> </Route>
                </Routes>
            </BrowserRouter>
    )
}