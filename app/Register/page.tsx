import React from "react";

const page = () => {
  return (
    <div className="mx-auto block my-10  ">
      <form action="" className="h-96 W-96  shadow-white shadow-2xl">
        <div className="mx-auto block ">
          <div>
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              placeholder="email"
              name=""
              className="border border-amber-100  p-2 rounded-sm my-2"
            />
          </div>
          <div>
            <label htmlFor="username">Username:</label>

            <input
              type="username"
              id="usnername"
              placeholder="username"
              name=""
              className="border border-amber-100  p-2 rounded-sm my-2"
            />
          </div>
          <div>
            <label htmlFor="password">Password:</label>

            <input
              type="password "
              id="password"
              placeholder="password"
              name=""
              className="border border-amber-100  p-2 rounded-sm my-2"
            />
          </div>
        </div>
      </form>
      <p className="bg-red-600 text-red-100 error">Email already exists </p>
    </div>
  );
};

export default page;
