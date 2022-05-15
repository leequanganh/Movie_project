import React from "react";
import HomeBtn from "../../Components/HomeBtn/HomeBtn";
import FormSignIn from "./FormSignIn/FormSignIn";

export default function SignInPage() {
  return (
    <div className=" bg-amber-300 h-screen pt-40">
      <HomeBtn />
      <p className="text-center text-white font-bold text-4xl">Sign In </p>
      <FormSignIn />
    </div>
  );
}
