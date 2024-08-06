import React from "react";
import LoginForm from "./_components/LoginForm";

export const metadata = {
  title: "Login | Chatter ",
  description: "Chatter: Your Chating platform",
};
const Login = () => {
  return (
    <div className="flex justify-center mt-2 backdrop-blur-3xl   ">
      <div className="w-[500px] mt-[5%] bg-opacity-75 p-6 rounded-lg ">
        <LoginForm />
      </div>
    </div>
  );
};

export default Login;
