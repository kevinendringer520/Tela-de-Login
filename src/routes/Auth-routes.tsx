import { Routes, Route } from "react-router";

import { Authlayout } from "../components/Authlayout";

import { SignIn } from "../Pages/signin";

import { SignUp } from "../Pages/SignUp";

import { Notfound } from "../Pages/Notfound";

export function AuthRoutes() {
    return (
        <Routes>
            <Route path="/" element={<Authlayout />}>
                <Route path="/" element={<SignIn />} />
                <Route path="/signUp" element={<SignUp />} />
             </Route>

             <Route path="*" element={<Notfound/>} />
        </Routes>
    )
}   