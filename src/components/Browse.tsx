export function Browse() {
  return (
    <section className="flex flex-col gap-2">
      <div className="flex items-center gap-3">
        <span className="block h-[40px] w-[20px] rounded-sm bg-[#DB4444]" />
        <span className="text-base font-semibold text-[#DB4444]">Today's</span>
      </div>
      <div className="flex items-center justify-between gap-2">
        <div className="flex flex-col gap-20">
          <h1 className="text-3xl font-bold">Browse By Category</h1>
          <div className="grid grid-cols-2 gap-5 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6">
            <div className="flex cursor-pointer flex-col items-center justify-center gap-2 rounded-md border border-gray-400 p-16 transition-colors duration-300 hover:bg-[#DB4444] hover:*:text-white">
              <div className="size-20">
                <img className="h-full w-full" src="/images/phone.png" alt="" />
              </div>
              <h3 className="text-center text-lg font-semibold">Phones</h3>
            </div>
            <div className="flex cursor-pointer flex-col items-center justify-center gap-2 rounded-md border border-gray-400 p-16 transition-colors duration-300 hover:bg-[#DB4444] hover:*:text-white">
              <div className="size-20">
                <img
                  className="h-full w-full"
                  src="/images/laptop.png"
                  alt=""
                />
              </div>
              <h3 className="text-center text-lg font-semibold">Computers</h3>
            </div>
            <div className="flex cursor-pointer flex-col items-center justify-center gap-2 rounded-md border border-gray-400 p-16 transition-colors duration-300 hover:bg-[#DB4444] hover:*:text-white">
              <div className="size-20">
                <img
                  className="h-full w-full"
                  src="/images/smartwatch.png"
                  alt=""
                />
              </div>
              <h3 className="text-center text-lg font-semibold">SmartWatch</h3>
            </div>
            <div className="flex cursor-pointer flex-col items-center justify-center gap-2 rounded-md border border-gray-400 p-16 transition-colors duration-300 hover:bg-[#DB4444] hover:*:text-white">
              <div className="size-20">
                <img className="h-full w-full" src="/images/phone.png" alt="" />
              </div>
              <h3 className="text-center text-lg font-semibold">Phones</h3>
            </div>
            <div className="flex cursor-pointer flex-col items-center justify-center gap-2 rounded-md border border-gray-400 p-16 transition-colors duration-300 hover:bg-[#DB4444] hover:*:text-white">
              <div className="size-20">
                <img
                  className="h-full w-full"
                  src="/images/headphone.png"
                  alt=""
                />
              </div>
              <h3 className="text-center text-lg font-semibold">Phones</h3>
            </div>
            <div className="flex cursor-pointer flex-col items-center justify-center gap-2 rounded-md border border-gray-400 p-16 transition-colors duration-300 hover:bg-[#DB4444] hover:*:text-white">
              <div className="size-20">
                <img
                  className="h-full w-full"
                  src="/images/gamepad.png"
                  alt=""
                />
              </div>
              <h3 className="text-center text-lg font-semibold">Phones</h3>
            </div>
          </div>
        </div>
      </div>
      <hr className="my-10 border-gray-200" />
    </section>
  );
}
