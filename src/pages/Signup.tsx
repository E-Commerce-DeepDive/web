export default function Signup() {
  return (
    <main className="flex flex-col items-center justify-center gap-16 lg:flex-row">
      <div className="w-[70%] md:w-1/2">
        <img src="/images/auth.png" alt="auth" />
      </div>
      <form className="flex w-full max-w-sm flex-col justify-center gap-5 md:mr-10">
        <h1 className="text-xl font-bold md:text-4xl">Create an account</h1>
        <p className="my-4 text-base font-normal">
          Enter your details below to create an account.
        </p>
        <div className="flex w-full flex-col gap-6">
          <input
            className="border-b border-gray-200 text-base outline-none"
            type="text"
            placeholder="Name"
          />
          <input
            className="border-b border-gray-200 text-base outline-none"
            type="email"
            placeholder="Email or Phone Number"
          />
          <input
            className="border-b border-gray-200 text-base outline-none"
            type="password"
            placeholder="Password"
          />
        </div>
        <div className="flex w-full flex-col gap-3">
          <button className="w-full cursor-pointer rounded-md bg-[#DB4444] px-5 py-2 text-base text-white transition-colors duration-300 hover:bg-[#DB4444]/80">
            Create Account
          </button>
          <button className="flex w-full cursor-pointer items-center justify-center gap-4 rounded-md border-2 border-gray-200 px-5 py-2 text-base text-black transition-colors duration-300 hover:bg-[#DB4444] hover:text-white">
            <img src="/images/google.png" alt="google" className="h-6 w-6" />
            Sign up with Google
          </button>
        </div>
      </form>
    </main>
  );
}
