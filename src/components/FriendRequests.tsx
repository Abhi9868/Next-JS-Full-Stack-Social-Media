import Image from "next/image";
import Link from "next/link";
import React from "react";

const FriendRequests = () => {
  return (
    <div className="p-4 bg-white rounded-lg shadow-md text-sm flex flex-col gap-4">
      {/* top  */}
      <div className="flex justify-between items-center font-medium">
        <span className="text-gray-500">Friend Requests</span>
        <Link href="/friend-requests" className="text-blue-500 text-xs">
          Sell All
        </Link>
      </div>
      {/* bottom  */}
      <div className="">
        {/* user  */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Image
              src="https://plus.unsplash.com/premium_photo-1683147701489-580baa385cae?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Y3V0ZSUyMGdpcmxzfGVufDB8fDB8fHww"
              alt="User"
              width={40}
              height={40}
              className="w-10 h-10  rounded-full object-cover"
            />
            <span className="font-semibold">john doe </span>
          </div>
          <div className="flex justify-end gap-3">
            <Image
              src="/accept.png"
              alt="User"
              width={20}
              height={20}
              className="cursor-pointer"
            />
            <Image
              src="/reject.png"
              alt="User"
              width={20}
              height={20}
              className="cursor-pointer"
            />
          </div>
        </div>

        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Image
              src="https://plus.unsplash.com/premium_photo-1683147701489-580baa385cae?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Y3V0ZSUyMGdpcmxzfGVufDB8fDB8fHww"
              alt="User"
              width={40}
              height={40}
              className="w-10 h-10  rounded-full object-cover"
            />
            <span className="font-semibold">john doe </span>
          </div>
          <div className="flex justify-end gap-3">
            <Image
              src="/accept.png"
              alt="User"
              width={20}
              height={20}
              className="cursor-pointer"
            />
            <Image
              src="/reject.png"
              alt="User"
              width={20}
              height={20}
              className="cursor-pointer"
            />
          </div>
        </div>

        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Image
              src="https://plus.unsplash.com/premium_photo-1683147701489-580baa385cae?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Y3V0ZSUyMGdpcmxzfGVufDB8fDB8fHww"
              alt="User"
              width={40}
              height={40}
              className="w-10 h-10  rounded-full object-cover"
            />
            <span className="font-semibold">john doe </span>
          </div>
          <div className="flex justify-end gap-3">
            <Image
              src="/accept.png"
              alt="User"
              width={20}
              height={20}
              className="cursor-pointer"
            />
            <Image
              src="/reject.png"
              alt="User"
              width={20}
              height={20}
              className="cursor-pointer"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FriendRequests;
