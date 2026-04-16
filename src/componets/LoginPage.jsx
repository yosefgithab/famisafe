import { FaGoogle, FaFacebookF, FaApple, FaPhoneAlt } from "react-icons/fa";
import { RiTwitterXFill } from "react-icons/ri";

export default function LoginPage() {
  return (
    <div className="min-h-screen flex">
      
      {/* LEFT SIDE */}
      <div className="hidden lg:flex w-1/2 bg-gradient-to-br from-pink-200 via-purple-200 to-blue-200 relative items-center justify-center">
        
        {/* Logo */}
        <div className="absolute top-6 left-10 flex items-center gap-2">
          <img src="/assets\images\logo\vite.svg" alt="" />
          <span className="text-xl font-semibold">Famisafe</span>
        </div>

        {/* Main Image */}
        <img
          src="https://dc-static.wondershare.com/wsid/release/7.90.28/com/img/Wondershare-login.85c649ca.svg" // replace with your uploaded image
          alt="illustration"
          className="w-[80%] object-contain"
        />
      </div>

      {/* RIGHT SIDE */}
      <div className="w-full lg:w-1/2 flex items-center justify-center bg-white px-6">
        <div className="w-full max-w-md">

          {/* Top Logo */}
          <div className="flex items-center gap-2 mb-6">
          <img src="/assets\images\logo\vite.svg" alt="" />
            <span className="text-lg font-semibold">Famisafe</span>
          </div>

          {/* Title */}
          <h2 className="text-2xl font-semibold mb-6">
            Log in to FamiSafe
          </h2>

          {/* Social Buttons */}
          <div className="flex items-center gap-3 mb-6">
            <button className="flex items-center gap-2 border px-4 py-2 rounded-full hover:shadow">
              <FaGoogle />
              Google
            </button>

            <button className="p-2 border rounded-full hover:shadow">
              <FaFacebookF />
            </button>

            <button className="p-2 border rounded-full hover:shadow">
              <RiTwitterXFill />
            </button>

            <button className="p-2 border rounded-full hover:shadow">
              <FaApple />
            </button>
           <button className="flex items-center gap-2 border px-4 py-2 rounded-full hover:shadow">
              <FaPhoneAlt  />
              Call
            </button>
          </div>

          {/* Divider */}
         {/* <div className="flex items-center gap-2 mb-6">
            0909442183
             <div className="flex-1 h-px bg-gray-300"></div>
            <span className="text-sm text-gray-400">or</span>
            <div className="flex-1 h-px bg-gray-300"></div> 
          </div>*/}

          {/* Form */}
          <form className="space-y-4">
            
            <input
              type="email"
              placeholder="Email address"
              className="w-full border-b border-gray-300 py-2 focus:outline-none focus:border-blue-500"
            />

            <div className="relative">
              <input
                type="password"
                placeholder="Password"
                className="w-full border-b border-gray-300 py-2 focus:outline-none focus:border-blue-500"
              />
            </div>

            {/* Checkbox */}
            <div className="flex items-center gap-2">
              <input type="checkbox" defaultChecked />
              <span className="text-sm">Keep me logged in</span>
            </div>

            {/* Button */}
            <button className="w-full bg-blue-600 text-white py-3 rounded-md hover:bg-blue-700 transition">
              Log in
            </button>
          </form>

          {/* Links */}
          <div className="mt-4 text-sm">
            <p>
              Don't have a famisafe ID?{" "}
              <span className="text-blue-600 cursor-pointer">
                Create account
              </span>
            </p>

            <p className="text-blue-600 mt-2 cursor-pointer">
              Forgot your password?
            </p>
          </div>

        </div>
      </div>
    </div>
  );
}