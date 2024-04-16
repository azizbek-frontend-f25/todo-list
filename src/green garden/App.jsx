const App = () => {
  return (
    <div className="container mx-auto">
      <div className="flex items-center justify-between p-[15px]">
        <img className="w-[200px]" src="/Logo.svg" alt="rasm" />
        <div className="hidden gap-[30px] xl:flex">
          <a className="no-underline text-xl" href="#">
            О нас
          </a>
          <a className="no-underlin decoration-black text-xl" href="#">
            Услуги
          </a>
          <a className="no-underline text-xl" href="#">
            Специалисты
          </a>
          <a className="no-underline text-xl" href="#">
            Контакты
          </a>
        </div>
        <div className="text-center hidden xl:block">
          <p className="text-sm">Есть номер! Звоните</p>
          <h3 className="text-xl font-semibold">+7 495 797 77 35</h3>
        </div>
        <a href="#">
          <button className="w-[200px] bg-green-500 h-[45px] rounded-[25px] text-white hidden xl:block">
            Заказать звонок
          </button>
        </a>
        <div className="flex gap-[25px] xl:hidden">
          <img src="/tel.svg" alt="rasm" />
          <img src="/Close.svg" alt="rasm" />
        </div>
      </div>
      <main className="main px-[15px]">
        <div className="bg-[url('/bg-image.svg')] bg-cover w-full h-[500px] xl:h-[550px] rounded-[30px] text-white py-[30px] px-[20px] xl:py-[40px] xl:px-[130px] flex justify-between xl:justify-end flex-col gap-y-[110px]">
          <div className="flex flex-col gap-8 xl:mb-[90px]">
            <h1 className="xl:text-[36px] text-xl font-bold">
              Подмосковная резиденция{" "}
              <span className="xl:text-[50px] text-2xl block xl:mt-[15px]">
                "ЛЕСНАЯ УСАДЬБА"
              </span>
            </h1>
            <p className="xl:text-[25px] font-thin text-lg">
              Пансионат для пожилых{" "}
              <span className="block">премиум-класса</span>
            </p>
          </div>
          <ul className="grid grid-cols-1 xl:grid-cols-3 gap-y-4">
            <li className="text-base xl:text-[20px]">
              Для тех кто любит своих{" "}
              <span className="block">родных и близких</span>
            </li>
            <li className="text-base xl:text-[20px]">
              Безопасная среда <span className="block">и интересный досуг</span>
            </li>
            <li className="text-base xl:text-[20px]">
              Долгосрочные и краткосрочные{" "}
              <span className="block">программы пребывания</span>
            </li>
          </ul>
        </div>
        <div className="mt-[50px] mb-[50px]">
          <h1 className="text-[30px] xl:text-[40px] xl:w-[450px] mb-6">
            <span className="font-thin">Мы стремимся создать для вас</span>{" "}
            комфортные условия проживания
          </h1>
          <div className="flex flex-col-reverse xl:flex-row xl:justify-between">
            <div className="flex flex-col justify-between xl:justify-normal">
              <p className="text-[18px] xl:w-[460px] xl:text-[22px] w-full text-gray-500">
                Загородный пансионат предлагает комфортное пространство для
                пожилых людей и инвалидов для долговременного проживания.
              </p>
              <p className="text-[18px] xl:w-[460px] xl:text-[22px] w-full mt-7 text-gray-500">
                Мы помогаем людям с возрастными особенностями здоровья жить без
                стресса и боли, сохранять душевное равновесие и теплые отношения
                с близкими
              </p>
            </div>
            <img
              className="w-[550px] xl:w-[600px] xl:relative bottom-[200px]"
              src="/Image-01.svg"
              alt="rasm"
            />
          </div>
        </div>
        <div className="flex flex-col xl:mt-[-50px]">
          <h1 className="text-base xl:px-[120px] xl:text-[40px] text-center ">
            <span className="xl:relative xl:bottom-3">
              Мы предлагаем уютные комнаты с удобной мебелью
            </span>{" "}
            и всем необходимым для комфортного проживания
          </h1>
          <div className="flex flex-col xl:flex-row  mt-[50px] xl:gap-[80px] justify-center">
            <div className="flex flex-col items-center">
              <div className="grid grid-cols-2 gap-[30px] gapy-[30px]">
                <img className="w-[250px]" src="/Image-03-2.svg" alt="rasm" />
                <img className="w-[250px]" src="/Image-03-3.svg" alt="rasm" />
                <img className="w-[250px]" src="/Image-03-3.svg" alt="rasm" />
                <img className="w-[250px]" src="/Image-03-2.svg" alt="rasm" />
              </div>
              <div className="bg-white w-[150px] h-[150px] flex justify-center items-center rounded-[50%] relative bottom-[250px] xl:bottom-[330px]">
                <img className="w-[120px]" src="/logo2.svg" alt="rasm" />
              </div>
            </div>
            <div className="grid grid-cols-1 gap-y-[40px] xl:grid-cols-2">
              <div className="flex gap-[15px] items-start">
                <img width={45} src="/ok.svg" alt="rasm" />
                <div>
                  <h1 className="xl:w-[120px] font-semibold text-[18px] mb-[8px]">
                    Медицинское обслуживание
                  </h1>
                  <p className="xl:w-[250px] font-thin">
                    Квалифицированная команда врачей: невролог, реабилитолог,
                    терапевт, психолог и психиатр
                  </p>
                </div>
              </div>
              <div className="flex gap-[15px] items-start">
                <img width={45} src="/ok.svg" alt="rasm" />
                <div>
                  <h1 className="xl:w-[120px] font-semibold text-[18px] mb-[8px]">
                    Медицинское обслуживание
                  </h1>
                  <p className="xl:w-[250px] font-thin">
                    Квалифицированная команда врачей: невролог, реабилитолог,
                    терапевт, психолог и психиатр
                  </p>
                </div>
              </div>
              <div className="flex gap-[15px] items-start">
                <img width={45} src="/ok.svg" alt="rasm" />
                <div>
                  <h1 className="xl:w-[120px] font-semibold text-[18px] mb-[8px]">
                    Медицинское обслуживание
                  </h1>
                  <p className="xl:w-[250px] font-thin">
                    Квалифицированная команда врачей: невролог, реабилитолог,
                    терапевт, психолог и психиатр
                  </p>
                </div>
              </div>
              <div className="flex gap-[15px] items-start">
                <img width={45} src="/ok.svg" alt="rasm" />
                <div>
                  <h1 className="xl:w-[120px] font-semibold text-[18px] mb-[8px]">
                    Медицинское обслуживание
                  </h1>
                  <p className="xl:w-[250px] font-thin">
                    Квалифицированная команда врачей: невролог, реабилитолог,
                    терапевт, психолог и психиатр
                  </p>
                </div>
              </div>
              <div className="flex gap-[15px] items-start">
                <img width={45} src="/ok.svg" alt="rasm" />
                <div>
                  <h1 className="xl:w-[120px] font-semibold text-[18px] mb-[8px]">
                    Медицинское обслуживание
                  </h1>
                  <p className="xl:w-[250px] font-thin">
                    Квалифицированная команда врачей: невролог, реабилитолог,
                    терапевт, психолог и психиатр
                  </p>
                </div>
              </div>
              <div className="flex gap-[15px] items-start">
                <img width={45} src="/ok.svg" alt="rasm" />
                <div>
                  <h1 className="xl:w-[120px] font-semibold text-[18px] mb-[8px]">
                    Медицинское обслуживание
                  </h1>
                  <p className="xl:w-[250px] font-thin">
                    Квалифицированная команда врачей: невролог, реабилитолог,
                    терапевт, психолог и психиатр
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-[50px] ">
          <div className="xl:flex xl:justify-between mb-7">
            <h1 className="text-2xl pe-[90px] xl:pe-[450px] xl:text-4xl">
              Вы получите{" "}
              <span className="font-semibold block xl:inline">
                незабываемые впечатления в нашей резиденции
              </span>
            </h1>
            <button className="hidden xl:block w-[350px] px-[7px] h-[60px] bg-[#437D2B] rounded-[25px] text-white">Записаться на экскурсию</button>
          </div>
          <div className="flex flex-col items-center gap-10">
            <div className="text-center">
              <img className="w-full object-cover xl:w-[1250px] xl:h-[600px] xl:rounded-[25px]" src="/Image-04-2.svg" alt="rasm" />
              <p className="xl:text-2xl">Уютные комнаты отдыха</p>
            </div>
            <img className="w-full" src="./video.svg" alt="rasm" />
            <button className="w-[350px] h-[60px] px-[7px] bg-[#437D2B] rounded-[25px] text-white xl:hidden">Записаться на экскурсию</button>
          </div>
        </div>
      </main>
    </div>
  );
};
export default App;
