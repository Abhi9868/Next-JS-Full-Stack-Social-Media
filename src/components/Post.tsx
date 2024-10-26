import Image from "next/image";
import React from "react";
import Comments from "./Comments";

const Post = () => {
  return (
    <div className="flex flex-col gap-4">
      {/* USER  */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Image
            src="https://plus.unsplash.com/premium_photo-1664366737698-3a98169201c3?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="User"
            width={40}
            height={40}
            className="rounded-full w-10 h-10"
          />
          <span className="font-medium">Abhishek Kumar</span>
        </div>
        <Image src="/more.png" alt="User" width={16} height={16} />
      </div>
      {/* DESC  */}
      <div className=" gap-4 flex flex-col">
        <div className="w-full min-h-96 relative">
          <Image
            src="https://plus.unsplash.com/premium_photo-1664366737698-3a98169201c3?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="User"
            fill
            className=" object-cover rounded-md"
          />
        </div>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate ab
          molestiae rerum voluptatum quaerat fuga eos dicta! Doloremque
          temporibus deserunt ipsam delectus ex a dolores?
        </p>
      </div>
      {/* INTERACTION  */}
      <div className=" flex items-center justify-between text-sm my-4">
        <div className="flex gap-8">
          <div className="flex items-center gap-4 bg-slate-50 p-2 rounded-xl">
            <Image src="/like.png" alt="User" width={16} height={16} />
            <span className="text-gray-300">|</span>
            <span className="text-gray-500">
              500 <span className="hidden md:inline">Likes</span>
            </span>
          </div>

          <div className="flex items-center gap-4 bg-slate-100 p-2 rounded-xl">
            <Image src="/comment.png" alt="User" width={16} height={16} />
            <span className="text-gray-300">|</span>
            <span className="text-gray-500">
              50<span className="hidden md:inline"> Comments </span>
            </span>
          </div>
        </div>
        <div className="">
          <div className="flex items-center gap-4 bg-slate-100 p-2 rounded-xl">
            <Image src="/share.png" alt="User" width={16} height={16} />
            <span className="text-gray-300">|</span>
            <span className="text-gray-500">
              5 <span className="hidden md:inline">Shares</span>
            </span>
          </div>
        </div>
      </div>
      <Comments />
    </div>
  );
};

export default Post;
