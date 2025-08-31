export default function Signin() {
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
        <div className="flex w-full justify-between gap-3">
          <button className="cursor-pointer rounded-md bg-[#DB4444] px-5 py-2 text-base text-white transition-colors duration-300 hover:bg-[#DB4444]/80">
            Log in
          </button>
          <button className="cursor-pointer text-sm text-red-500 transition-colors duration-300 hover:underline">
            Forget password?
          </button>
        </div>
      </form>
    </main>
  );
}
