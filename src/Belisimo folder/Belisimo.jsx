const Belisimo = () => {
  return (
    <div className="container m-auto">
      <div className="flex py-5 gap-5">
        <img className="w-[200px]" src="/Belisimo-img/logo.webp" alt="rasm" />
        <div className="flex gap-3">
          <img
            className="p-3 bg-lime-100 rounded-md"
            src="/Belisimo-img/location.svg"
            alt="rasm"
          />
          <div>
            <p>Shahar :</p>
            <h1 className="text-[20px] text-lime-900 font-semibold">Toshkent </h1>
          </div>
        </div>
        <div className="flex gap-3">
          <div className="p-3 flex gap-2 bg-lime-100 rounded-md">
            <img src="/Belisimo-img/phone.svg" alt="rasm" />
            <h1 className="text-[20px] text-lime-900 font-semibold">1174</h1>
          </div>
          <p>Yagona aloqa <span className="block">markazi</span></p>
        </div>
      </div>
    </div>
  );
};
export default Belisimo;
