import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="container mx-auto flex w-full flex-col gap-10">
      <div className="flex w-full items-start gap-2">
        <Link className="text-[#aaa] hover:underline" to="/home">
          Home
        </Link>
        /
        <Link className="" to="/contact">
          404 Error
        </Link>
      </div>

      <div className="flex min-h-[80vh] w-full flex-col items-center justify-center gap-10">
        <h1 className="text-5xl font-bold lg:text-7xl">404 Not Found</h1>
        <p>Your visited page not found. You many go home page.</p>
        <button className="w-fit cursor-pointer rounded-md bg-[#DB4444] px-8 py-3 text-base text-white transition-colors duration-300 hover:bg-[#DB4444]/80">
          Back to home page
        </button>
      </div>
    </div>
  );
}
