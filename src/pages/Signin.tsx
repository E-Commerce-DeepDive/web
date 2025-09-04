import { useState, useLayoutEffect } from "react";
import { getLocalStorage, setLocalStorage } from "../lib/helpers";
import { useNavigate } from "react-router-dom";

export default function Signin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
  ) => {
    e.preventDefault();
    setEmailError("");
    setPasswordError("");

    if (email.trim() === "") {
      setEmailError("Email is required");
    }
    if (password.trim() === "") {
      setPasswordError("Password is required");
    }

    if (!email || !password) return;

    try {
      setIsLoading(true);
      const res = await fetch(
        "https://e-commercedeepdive.runasp.net/api/Account/login",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email, password }),
        },
      );

      const data = await res.json();

      if (!res.ok) {
        setError(`Error: ${data.message}`);
        setIsLoading(false);
        return;
      }

      setLocalStorage("access_token", data.accessToken);
      setLocalStorage("refresh_token", data.refreshToken);

      setIsLoading(false);

      navigate("/home");
    } catch (error) {
      setIsLoading(false);
      setError("Something went wrong");
      console.error(error);
    }
  };

  useLayoutEffect(() => {
    const accessToken = getLocalStorage("access_token");
    if (accessToken) {
      navigate("/home");
    }
  }, [navigate]);

  return (
    <main className="flex flex-col items-center justify-center gap-16 lg:flex-row">
      <div className="w-[70%] md:w-1/2">
        <img src="/images/auth.png" alt="auth" />
      </div>
      <form className="flex w-full max-w-sm flex-col justify-center gap-5 md:mr-10">
        <h1 className="text-xl font-bold md:text-4xl">Log in to Exclusive</h1>
        <p className="my-4 text-base font-normal">
          Enter your details below to create an account.
        </p>
        <div className="flex w-full flex-col gap-6">
          <div className="w-full">
            <input
              onChange={(e) => setEmail(e.target.value)}
              className="w-full border-b border-gray-200 text-base outline-none"
              type="email"
              placeholder="Email"
              required
            />
            {emailError && <p className="text-red-500">{emailError}</p>}
          </div>
          <div className="w-full">
            <input
              onChange={(e) => setPassword(e.target.value)}
              className="w-full border-b border-gray-200 text-base outline-none"
              type="password"
              placeholder="Password"
              required
            />
            {passwordError && <p className="text-red-500">{passwordError}</p>}
          </div>
          <div>{error && <p className="text-red-500">{error}</p>}</div>
        </div>
        <div className="flex w-full justify-between gap-3">
          <button
            onClick={(e) => handleSubmit(e)}
            disabled={isLoading}
            className="cursor-pointer rounded-md bg-[#DB4444] px-5 py-2 text-base text-white transition-colors duration-300 hover:bg-[#DB4444]/80"
          >
            {isLoading ? "Loading..." : "Log in"}
          </button>
          <button className="cursor-pointer text-sm text-red-500 transition-colors duration-300 hover:underline">
            Forget password?
          </button>
        </div>
      </form>
    </main>
  );
}
