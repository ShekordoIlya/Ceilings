import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  return (
    <>
      <header className="w-screen h-auto bg-black opacity-[75%]">
        <div className="w-full flex content-between">
          <div className="w-1/6 p-3 mr-[100px]">
            <a href="/">
              <img src="../../../assets/Logo.png" alt="Logo" />
            </a>
          </div>
          <ul className="text-white flex justify-around lettersBtn items-center w-[54%]">
            <li
              onClick={() => {
                navigate("/works");
              }}
              className="h-full content-center hover:cursor-pointer hover:scale-150 duration-[300ms]"
            >
              <button>Наши работы</button>
            </li>
            <li
              onClick={() => {
                navigate("/ceilings");
              }}
              className="h-full content-center hover:cursor-pointer hover:scale-150 duration-[300ms]"
            >
              <button>Виды потолков</button>
            </li>
            <li className="h-full content-center hover:cursor-pointer hover:scale-150 duration-[300ms]">
              <button
                onClick={() => {
                  navigate("/lighting");
                }}
              >
                Светильники
              </button>
            </li>
            <li className="h-full content-center hover:cursor-pointer hover:scale-150 duration-[300ms]">
              <button
                onClick={() => {
                  navigate("/contacts");
                }}
              >
                Контакты
              </button>
            </li>
          </ul>
          <div className="text-black m-auto rounded-xl text-xl font-medium hover:text-white shadowContainer opacity-[99%] hover:animate-pulse">
            <button className="bg-yellow-400 rounded-xl lettersBtn p-5 hover:bg-red-600 duration-[400ms] ">
              ЗАКАЗАТЬ ЗВОНОК
            </button>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
