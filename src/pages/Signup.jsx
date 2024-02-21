import React from "react"

const Signup = () => {
  return (

    <div className="w-full h-screen bg-black flex items-center justify-center">

      <div className="w-4/12 h-5/6 border-2 border-white border-opacity-30 bg-white bg-opacity-20 backdrop-blur-md shadow-xl rounded-3xl absolute">

        <form className="w-full h-full flex flex-col items-center justify-evenly">

          <div className="w-9/12 flex items-center justify-center text-purple-600">
            <div className="w-1/12 h-10 px-5 flex items-center justify-center rounded-l-lg bg-gradient-to-r from-indigo-500 to-purple-600 text-white">@</div>
            <input
              type="text"
              placeholder="Enter a username"
              className="w-11/12 h-10 focus:border-2 border-purple-500 outline-none rounded-r-lg px-2"
            />
          </div>

          <div className="w-9/12 flex items-center justify-center text-purple-600">
            <input
              type="text"
              placeholder="Enter your full name"
              className="w-full h-10 focus:border-2 border-purple-500 outline-none rounded-lg px-2"
            />
          </div>

          <div className="w-9/12 flex items-center justify-center text-purple-600">
            <input
              type="text"
              placeholder="Enter your email address"
              className="w-full h-10 focus:border-2 border-purple-500 outline-none rounded-lg px-2"
            />
          </div>

          <div className="w-9/12 flex items-center justify-center text-purple-600">
            <input
              type="password"
              placeholder="Create a password"
              className="w-full h-10 focus:border-2 border-purple-500 outline-none rounded-lg px-2"
            />
          </div>

          <div className="w-9/12 flex items-center justify-center text-purple-600">
            <input
              type="password"
              placeholder="Re-enter your password"
              className="w-full h-10 focus:border-2 border-purple-500 outline-none rounded-lg px-2"
            />
          </div>

          <div className="w-9/12 flex items-center justify-center text-purple-500 font-medium">
            <button className="w-full h-11 flex items-center justify-center border-2 border-purple-500 hover:bg-gradient-to-r hover:border-none from-[#8000FF] to-[#FF1C6E] hover:text-white rounded-lg">
              Sign Up
            </button>
          </div>

        </form>

      </div>

    </div>

  )
}

export default Signup