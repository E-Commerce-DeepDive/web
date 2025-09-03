import { useState } from "react";

export default function Signup() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [nameError, setNameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
  ) => {
    e.preventDefault();
    setNameError("");
    setEmailError("");
    setPasswordError("");

    if (name === "") {
      setNameError("Name is required");
    }
    if (email === "") {
      setEmailError("Email is required");
    }

    if (!email.match(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/)) {
      setEmailError("Invalid email");
    }
    if (password === "") {
      setPasswordError("Password is required");
    }

    if (
      !password.match(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,}$/,
      )
    ) {
      setPasswordError(
        "Password must contain at least 8 characters & one uppercase, lowercase, number & special character",
      );
    }

    if (emailError || passwordError || nameError) {
      return;
    }

    try {
      setIsLoading(true);
      const res = await fetch(
        "https://e-commercedeepdive.runasp.net/api/Account/register",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email,
            phoneNumber: "01063635425",
            firstName: name,
            lastName: name,
            birthDate: "1995-01-01 12:00:00",
            password,
          }),
        },
      );

      if (!res.ok) {
        setError("Something went wrong");
      }

      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
      setError("Something went wrong");
      console.log(error);
      throw new Error("Something went wrong");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center gap-16 lg:flex-row">
      <div className="w-[70%] md:w-1/2">
        <img src="/images/auth.png" alt="auth" />
      </div>
      <form className="flex w-full max-w-sm flex-col justify-center gap-5 md:mr-10">
        <h1 className="text-xl font-bold md:text-4xl">Create an account</h1>
        <p className="my-4 text-base font-normal">
          Enter your details below to create an account.
        </p>
        <div className="flex w-full flex-col gap-6">
          <div className="w-full">
            <input
              onChange={(e) => setName(e.target.value)}
              className="w-full border-b border-gray-200 text-base outline-none"
              type="text"
              placeholder="Name"
              required
            />
            {nameError && <p className="text-red-500">{nameError}</p>}
          </div>
          <div className="w-full">
            <input
              onChange={(e) => setEmail(e.target.value)}
              className="w-full border-b border-gray-200 text-base outline-none"
              type="email"
              placeholder="Email or Phone Number"
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
        </div>
        <div>{error && <p className="text-red-500">{error}</p>}</div>
        <div className="flex w-full flex-col gap-3">
          <button
            onClick={(e) => handleSubmit(e)}
            disabled={isLoading}
            className="w-full cursor-pointer rounded-md bg-[#DB4444] px-5 py-2 text-base text-white transition-colors duration-300 hover:bg-[#DB4444]/80"
          >
            {isLoading ? "Loading..." : "Create Account"}
          </button>
          <button className="flex w-full cursor-pointer items-center justify-center gap-4 rounded-md border-2 border-gray-200 px-5 py-2 text-base text-black transition-colors duration-300 hover:bg-[#DB4444] hover:text-white">
            <img src="/images/google.png" alt="google" className="h-6 w-6" />
            Sign up with Google
          </button>
        </div>
      </form>
    </div>
  );
}
