export default function Newsletter() {
  return (
    <div className=" flex flex-col lg:flex-row gap-6 bg-primary-pink text-white p-6 justify-center w-full px-16">
      <div className="flex flex-col lg:flex-row lg:items-center lg:gap-60 w-full lg:justify-center">
        <div className="flex flex-col text-center lg:text-left pb-5">
          <span>INSCREVA-SE NA NOSSA</span>
          <span className="text-3xl">NEWSLETTER</span>
        </div>
        <div className="w-full lg:flex lg:items-center lg:gap-10">
          <div className="grid gap-4 w-full lg:flex lg:gap-4 ">
            <label className="relative w-full lg:w-1/2">
              <input
                placeholder=""
                className="peer bg-transparent w-full h-11 px-4 border border-white-100 text-white-100 rounded-lg transition-all duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-white-50 focus:border-transparent placeholder:text-white-100 text-[16px]"
              />
              <span className="bg-primary-pink absolute px-2 left-4 -top-3 peer-focus:-top-3.5 font-semibold text-sm transition-all duration-200 ease-in-out text-white-100 peer-focus:text-white-50">
                Nome
              </span>
            </label>
            <label
              htmlFor="newsletter-form-email"
              className="relative w-full lg:w-1/2"
            >
              <input
                placeholder=""
                className="peer bg-transparent w-full h-11 px-4 border border-white-100 text-white-100 rounded-lg transition-all duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-white-50 focus:border-transparent placeholder:text-white-100 text-[16px]"
              />
              <span className="bg-primary-pink absolute px-2 left-4 -top-3 peer-focus:-top-3.5 font-semibold text-sm transition-all duration-200 ease-in-out text-white-100 peer-focus:text-gray-50">
                Email
              </span>
            </label>
          </div>
          <button
            type="button"
            className="mt-4 lg:mt-0 border font-bold text-lg rounded-lg w-full lg:w-auto h-11 px-10 flex items-center justify-center bg-white text-primary-pink"
          >
            ENVIAR
          </button>
        </div>
      </div>
    </div>
  );
}
