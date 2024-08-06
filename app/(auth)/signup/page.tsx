import React from "react";
import SignupForm from "./_components/SignupForm";

export const metadata = {
  title: "Signup | Chatter ",
  description: "Chatter: Your Chating platform",
};
function SignupPage() {
  return (
    <div className="flex justify-center mt-2 backdrop-blur-3xl  ">
      <div className="w-[500px]  mt-[5%]">
        <SignupForm />
      </div>
    </div>
  );
}

export default SignupPage;
