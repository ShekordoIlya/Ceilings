const CeilingsTabs = () => {
  return (
    <div className="tabsContainer w-[30%]  mt-[50px]">
      <ul className="flex flex-col gap-10 items-center">
        <li className=" hover:scale-110 duration-[400ms] text-black m-auto rounded-xl text-lg font-medium shadowContainer">
          <button className="bg-yellow-400 rounded-xl lettersBtn p-5">
            Мансардные потолки
          </button>
        </li>
        <li className="hover:scale-110 duration-[400ms] text-black m-auto rounded-xl text-lg font-medium shadowContainer">
          <button className="bg-yellow-400 rounded-xl lettersBtn p-5">
            Сатиновые потолки
          </button>
        </li>
        <li className="hover:scale-110 duration-[400ms] text-black m-auto rounded-xl text-lg font-medium shadowContainer">
          <button className="bg-yellow-400 rounded-xl lettersBtn p-5">
            Двухуровневые потолки
          </button>
        </li>
        <li className="hover:scale-110 duration-[400ms] text-black m-auto rounded-xl text-lg font-medium shadowContainer">
          <button className="bg-yellow-400 rounded-xl lettersBtn p-5">
            Матовые потолки
          </button>
        </li>
        <li className="hover:scale-110 duration-[400ms] text-black m-auto rounded-xl text-lg font-medium shadowContainer">
          <button className="bg-yellow-400 rounded-xl lettersBtn p-5">
            Глянцевые потолки
          </button>
        </li>
      </ul>
    </div>
  );
};

export default CeilingsTabs;
