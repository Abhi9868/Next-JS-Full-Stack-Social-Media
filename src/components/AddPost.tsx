import Image from "next/image";
import React from "react";

const AddPost = () => {
  return (
    <div className="p-4 bg-white shadow-md rounded-lg flex gap-4 justify-between text-sm">
      {/* AVATAR  */}
      <Image
        src="https://plus.unsplash.com/premium_photo-1683147701489-580baa385cae?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Y3V0ZSUyMGdpcmxzfGVufDB8fDB8fHww"
        alt="Avatar"
        width={48}
        height={48}
        className="w-12 h-12 object-cover rounded-full"
      />
      {/* POST  */}
      <div className=" flex-1">
        {/* TEXT INPUT  */}
        <div className="flex gap-4">
          <textarea
            placeholder="What's on your mind?"
            className="flex-1 bg-slate-100 rounded-lg p-2"
            name=""
            id=""
          ></textarea>
          <Image
            src="/emoji.png"
            alt="Avatar"
            width={20}
            height={20}
            className="w-5 h-5 cursor-pointer self-end"
          />
        </div>
        {/* POST OPTIONS  */}
        <div className="flex items-center gap-4 mt-4 text-gray-400 flex-wrap">
          <div className="flex items-center cursor-pointer gap-2">
            <Image src="/addimage.png" alt="Avatar" width={20} height={20} />
            Photo
          </div>
          <div className="flex items-center cursor-pointer gap-2">
            <Image src="/addVideo.png" alt="Avatar" width={20} height={20} />
            Video
          </div>
          <div className="flex items-center cursor-pointer gap-2">
            <Image src="/poll.png" alt="Avatar" width={20} height={20} />
            Poll
          </div>
          <div className="flex items-center cursor-pointer gap-2">
            <Image src="/addevent.png" alt="Avatar" width={20} height={20} />
            Event
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddPost;
