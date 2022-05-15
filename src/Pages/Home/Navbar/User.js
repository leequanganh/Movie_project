import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { removeUserAction } from "../../../Redux/Actions/userActions";
export default function User() {
  let { userInfor } = useSelector((state) => {
    return state.userReducer;
  });
  const handleSignOut = () => {
    dispatch(removeUserAction());
  };
  const dispatch = useDispatch();
  return (
    <div>
      {userInfor?.accessToken ? (
        <div className=" space-x-4 text-white">
          <span className=" font-semibold">{userInfor.hoTen}</span>
          <button
            onClick={handleSignOut}
            className="bg-red-500 p-2  rounded-md"
          >
            Đăng xuất
          </button>
        </div>
      ) : (
        <div className=" space-x-4 ">
          <NavLink to="/sign-in">
            <button className="bg-green-500 p-2 rounded-md text-white">
              Đăng Nhập
            </button>
          </NavLink>
          <NavLink to="/sign-up">
            <button className="bg-red-500 p-2 rounded-md text-white">
              Đăng Ký
            </button>
          </NavLink>
        </div>
      )}
    </div>
  );
}
