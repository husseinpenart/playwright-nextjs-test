"use client"
import React from "react";
import { useRouter } from "next/navigation";

const page = () => {
  const router = useRouter();
  const submit = (e: any) => {
    e.preventDefault();
    router.push("/dashboard");
  };
  return (
    <div>
      <form>
        <label>
          Username:
          <input name="username" />
        </label>
        <label>
          Password:
          <input type="password" name="password" />
        </label>
        <button type="submit" onClick={submit}>
          Login
        </button>
      </form>
      <p className="error">نام کاربری یا رمز عبور اشتباه است</p>

    </div>
  );
};

export default page;
