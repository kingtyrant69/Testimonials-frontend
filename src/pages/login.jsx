// import {useState} from 'react'
import { useState, useRef, useEffect } from "react";
import Button from "../components/Button.jsx";
import Input from "../components/Input.jsx";
import { Link, useNavigate, Navigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import axios from "../api/axios.js";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { auth, setAuth } = useAuth();
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false)


  const handleSubmit = async () => {
    try {
      setIsLoading(true)
      const response = await axios.post(
        "/v1/users/login",
        { email: email, password: password },
        { withCredentials: true }
      );
      const accessToken = response.data.data.accessToken;
      if(accessToken){
        setAuth({ user: email, accessToken: accessToken });
        setEmail("");
        setPassword("");
        navigate('/dashboard');
      }
    } catch (error) {
      console.log(error);
    }finally{
      setIsLoading(false)
    }
  };

  return auth?.accessToken ? <Navigate to="/dashboard" replace /> :   (
    <div className="lg:p-36 py-20">
      <section className="flex items-center justify-center flex-col px-2 font-bold text-4xl">
        <h1>Log-In</h1>
      </section>
      <form className="my-10">
        <div className="flex flex-col gap-6 justify-center items-center">
          <Input
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            disabled={isLoading}
            required
          />
          <Input
            placeholder="Password"
            type="password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            disabled={isLoading}
            required
          />
          <Button label="Log In" onClick={handleSubmit} disabled={isLoading} />
          <div className="text-slate-500 text-center">
            <p>First time using Testimonials?</p>
            <span
              className="
                          cursor-pointer
                          hover:underline text-purple-800
                          "
            >
              <Link to="/signup">Create an account</Link>
            </span>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Login;
