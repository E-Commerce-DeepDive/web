export function Arrival() {
  return (
    <section className="flex flex-col gap-2">
      <div className="flex items-center gap-3">
        <span className="block h-[40px] w-[20px] rounded-sm bg-[#DB4444]" />
        <span className="text-base font-semibold text-[#DB4444]">Featured</span>
      </div>
      <div className="flex items-center justify-between gap-2">
        <div className="mb-7 flex items-center gap-20">
          <h1 className="text-3xl font-bold">New Arrivals</h1>
        </div>
      </div>
      <div className="flex flex-col gap-6 lg:flex-row">
        <div className="w-full lg:w-1/2">
          <img className="w-full" src="/images/arrival-01.png" alt="" />
        </div>
        <div className="flex w-full flex-col gap-8 lg:w-1/2">
          <div className="w-full">
            <img className="w-full" src="/images/arrival-02.png" alt="" />
          </div>
          <div className="flex gap-6">
            <div className="w-1/2">
              <img className="w-full" src="/images/arrival-03.png" alt="" />
            </div>
            <div className="w-1/2">
              <img className="w-full" src="/images/arrival-04.jpg" alt="" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
