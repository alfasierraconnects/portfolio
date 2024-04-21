import React from "react";
import leetcode from "../logos/leetcode.png";

const SocialLinks = () => {
  return (
    <div className="text-gray-300 font-semibold flex flex-col items-center mt-16 my-10">
      <h4 className="text-xl underline underline-offset-4 decoration-blue-400">
        Find me on
      </h4>
      <p className="mt-6">Feel free to connect with me</p>
      <div className="flex justify-around my-4 text-black gap-4">
        <div className="hover:translate-y-1 hover:scale-105 transition">
          <ion-icon size="large" name="logo-github"></ion-icon>
        </div>
        <div className="hover:translate-y-1 hover:scale-105 transition">
          <ion-icon size="large" name="logo-linkedin"></ion-icon>
        </div>
        <div className="hover:translate-y-1 hover:scale-105 transition">
          <img src={leetcode} alt="leetcode" width="30" />
        </div>
      </div>
    </div>
  );
};

export default SocialLinks;
