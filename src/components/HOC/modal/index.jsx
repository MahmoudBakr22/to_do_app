"use client";

import CloseIcon from "@/assets/icons/closeIcon";

export default function Modal({ children, close }) {
  return (
    <div>
      <div className="fixed top-0 bottom-0 left-0 right-0 bg-black/50 z-20"></div>
      <div className="fixed h-5/6 w-full transition-all	 -bottom-0 bg-gray-100  rounded-t-3xl z-40 p-10 flex justify-center items-center ">
        <span className={"absolute top-10 right-10 cursor-pointer"} onClick={close}>
          <CloseIcon />
        </span>
        {children}
      </div>
    </div>
  );
}
