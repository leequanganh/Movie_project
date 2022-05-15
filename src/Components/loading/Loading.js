import React from "react";
import { useSelector } from "react-redux";

export default function Loading() {
  let { status } = useSelector((state) => state.loadingReducer);
  return status ? (
    <div
      className=" fixed top-0 w-screen h-screen z-[99999]"
      style={{
        backgroundImage:
          "url(https://mir-s3-cdn-cf.behance.net/project_modules/fs/b6e0b072897469.5bf6e79950d23.gif)",
        backgroundSize: "cover",
        backgroundOpacity: "0.001",
      }}
    ></div>
  ) : (
    <></>
  );
}
