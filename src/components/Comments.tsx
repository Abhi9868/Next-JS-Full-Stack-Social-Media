import Image from "next/image";
import React from "react";

const Comments = () => {
  return (
    <div className="">
      {/* WRITE  */}
      <div className="flex items-center gap-4">
        <Image
          src="https://images.unsplash.com/photo-1729632604860-a99ebd0002a1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxMTV8fHxlbnwwfHx8fHw%3D"
          alt="user"
          width={32}
          height={32}
          className="w-8 h-8 rounded-full"
        />
        <div className="flex-1 flex items-center justify-between bg-slate-100 rounded-md  text-sm px-6 py-2 w-full">
          <input
            type="text"
            placeholder="Write a comment..."
            name=""
            id=""
            className="bg-transparent outline-none"
          />

          <Image
            src="/emoji.png"
            alt="user"
            width={16}
            height={16}
            className="cursor-pointer"
          />
        </div>
      </div>
      {/* Comments */}
      <div className="flex gap-4 justify-between mt-6">
        {/* AVATAR  */}
        <Image
          src="https://images.unsplash.com/photo-1729632604860-a99ebd0002a1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxMTV8fHxlbnwwfHx8fHw%3D"
          alt="user"
          width={40}
          height={40}
          className="w-10 h-10 rounded-full"
        />
        {/* DESC  */}
        <div className=" flex flex-col gap-2 flex-1">
          <span className="font-medium">John Doe</span>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maxime
            eius provident, alias id architecto suscipit!
          </p>
          <div className="flex items-center gap-8 text-xs text-gray-500">
            <div className="flex items-center gap-4">
              <Image
                src="/like.png"
                alt="user"
                width={12}
                height={12}
                className="cursor-pointer w-3 h-3"
              />
              <span>|</span>
              <span>123 Likes </span>
            </div>
            <div className="">Reply</div>
          </div>
        </div>

        {/* ICON  */}

        <Image
          src="/more.png"
          alt="user"
          width={16}
          height={16}
          className="cursor-pointer w-4 h-4"
        />
      </div>
    </div>
  );
};

export default Comments;
