import React from "react";

export default function Menu() {
  return (
    <div className=" border-solid border-[#e00d7a] border-2 rounded-full flex items-center justify-center p-2">
      <div className=" text-white font-semibold space-x-5 uppercase bg-[#e00d7a] h-[44px] leading-[44px] rounded-full overflow-hidden">
        <a
          href="#list_Film"
          className="text-white transition-all inline-block px-4 hover:bg-[#f2b819]"
        >
          Phim
        </a>
        <a
          href="#lich_chieu"
          className=" text-white transition-all inline-block px-4 hover:bg-[#f2b819]"
        >
          Lịch chiếu
        </a>
        <span className=" transition-all inline-block px-4 hover:bg-[#f2b819]">
          Khuyến mãi
        </span>
        <span className=" transition-all inline-block px-4 hover:bg-[#f2b819]">
          Hỏi đáp
        </span>
        <span className=" transition-all inline-block px-4 hover:bg-[#f2b819]">
          Tin tức{" "}
        </span>
        <span className=" transition-all inline-block px-4 hover:bg-[#f2b819]">
          Giới thiệu
        </span>
        <span className=" transition-all inline-block px-4 hover:bg-[#f2b819]">
          Liên hệ
        </span>
      </div>
    </div>
  );
}
