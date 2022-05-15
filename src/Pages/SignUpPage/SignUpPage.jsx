import React from "react";
import HomeBtn from "../../Components/HomeBtn/HomeBtn";
import FormSignUp from "./FormSignUp/FormSignUp";

export default function SignUpPage() {
  return (
    <div className="flex justify-center items-center bg-sky-300 ">
      <HomeBtn />
      <FormSignUp />
    </div>
  );
}
