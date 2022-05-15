import React, { useRef, useState } from "react";
import { NavLink } from "react-router-dom";
import "../flipCard.css";
import ReactPlayer from "react-player";
import { Modal } from "antd";
const ModalVideo = function ({ data }) {
  const [isModalVisible, setIsModalVisible] = useState(false);
  let [play, setPlay] = useState();

  const showModal = () => {
    setIsModalVisible(true);
    setPlay(true);
  };

  const handleOk = async () => {
    await setPlay(false);

    setIsModalVisible(false);
  };

  const handleCancel = async () => {
    await setPlay(false);
    setIsModalVisible(false);
  };
  console.log(<ReactPlayer />);
  return (
    <div className="w-1/2">
      <button
        className="text-white shadow-lg   py-2 rounded-lg bg-yellow-500 w-full "
        onClick={showModal}
      >
        Trailer
      </button>
      <Modal
        className="w-screen bg-none fixed z-10 p-0"
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
        footer={false}
      >
        <ReactPlayer
          onPause={play}
          url={`${data}`}
          controls={true}
          playing={play}
          width="100%"
        />
      </Modal>
    </div>
  );
};
export default function ITemPhim({ data }) {
  return (
    <div
      className=" overflow-hidden bg-white p-4 shadow-md flex flex-col items-center border-neutral-200 border-2"
      style={{ height: "50vh" }}
    >
      <div className="flip-box h-3/4">
        <div className="flip-box-inner">
          <div className="flip-box-front">
            <img
              src={data.hinhAnh}
              className=" w-full h-full object-cover "
              alt=""
            />
          </div>
          <div className="flip-box-back overflow-hidden relative ">
            <img
              src={data.hinhAnh}
              className="w-full h-full object-cover opacity-20"
              alt=""
            />
            <span className=" text-black absolute w-full h-full  top-0 left-0">
              {data.moTa}
            </span>
          </div>
        </div>
      </div>

      <div className=" text-center">
        <p className=" font-semibold uppercase text-lg">
          {data.tenPhim.substring(0, 25)}
        </p>
      </div>
      <div className=" w-full flex space-x-3 ">
        <NavLink
          to={`/detail-film/${data.maPhim}`}
          className=" text-white shadow-lg  w-1/2 py-2 rounded-lg bg-red-500  text-center"
        >
          <button>Đặt vé</button>
        </NavLink>
        <ModalVideo data={data.trailer} />
      </div>
    </div>
  );
}
