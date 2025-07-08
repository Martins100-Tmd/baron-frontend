import { useState } from "react";
import { bdm } from "../index";
import { GoogleLogin } from "@react-oauth/google";

export default function UserCreateAccount() {
  let [viewPassword, setViewPassword] = useState<boolean>(false);
  return (
    <section className="w-1/2 mx-auto rounded-sm flex flex-col items-center gap-2">
      <div className="flex flex-row items-center gap-1">
        <img src={bdm} className="sm:w-20 sm:h-20 rounded object-cover" />
        <div className="flex flex-col items-start">
          <p className="font-all font-semibold text-2xl">Baron</p>
          <p className="font-all text-sm text-start">DeMusical</p>
        </div>
      </div>
      <p className="font-all font-semibold text-xl text-start w-full">
        Create an Account
      </p>
      <div className="flex flex-col items-center w-full gap-4 p-2">
        <div className="flex flex-col w-full gap-2">
          <p className="font-medium text-sm text-start font-all">Full Name</p>
          <input
            type="text"
            className="rounded-sm shadow outline-0 font-all border text-sm border-black/20 p-2"
            placeholder="e.g John Doe..."
          />
        </div>
        <div className="flex flex-col w-full gap-2">
          <p className="font-medium text-sm text-start font-all">Full Email</p>
          <input
            type="text"
            className="rounded-sm shadow outline-0 border font-all text-sm border-black/20 p-2"
            placeholder="e.g johndoe@xyz.com"
          />
        </div>
        <div className="flex flex-col w-full gap-2">
          <p className="font-medium text-sm text-start font-all">
            Full Password
          </p>
          <div className="flex flex-row items-center w-full border text-sm border-black/20 rounded-sm shadow">
            <input
              type={viewPassword ? "text" : "password"}
              className="w-full outline-0 p-2 font-all"
              placeholder="* * * * * * *"
            />
            <div
              onClick={() => setViewPassword(!viewPassword)}
              className="flex justify-center w-[4rem] cursor-pointer"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className={`${
                  viewPassword ? "hidden" : "flex"
                }  lucide lucide-eye-icon lucide-eye`}
              >
                <path d="M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0" />
                <circle cx="12" cy="12" r="3" />
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className={`${
                  viewPassword ? "flex" : "hidden"
                } lucide lucide-eye-off-icon lucide-eye-off`}
              >
                <path d="M10.733 5.076a10.744 10.744 0 0 1 11.205 6.575 1 1 0 0 1 0 .696 10.747 10.747 0 0 1-1.444 2.49" />
                <path d="M14.084 14.158a3 3 0 0 1-4.242-4.242" />
                <path d="M17.479 17.499a10.75 10.75 0 0 1-15.417-5.151 1 1 0 0 1 0-.696 10.75 10.75 0 0 1 4.446-5.143" />
                <path d="m2 2 20 20" />
              </svg>
            </div>
          </div>
        </div>
        <button
          type="button"
          className="p-3 bg-green-700 rounded-sm shadow w-full font-all font-normal text-white"
        >
          Create account
        </button>
        <div className="w-full flex justify-end">
          <p className="font-all text-xs text-end font-normal">
            Already have an account?
            <span className="text-orange-400"> sign in.</span>
          </p>
        </div>
        <div className="flex flex-row items-center w-full gap-2">
          <div className="h-[1px] bg-black/30 w-1/2 self-center"></div>
          <p className="font-medium font-all text-sm self-center">or</p>
          <div className="h-[1px] bg-black/30 w-1/2 self-center"></div>
        </div>
      </div>
      <GoogleLogin
        width={"100%"}
        onSuccess={() => console.log("success")}
        onError={() => console.log("error")}
      />
    </section>
  );
}
