import { useDispatch, useSelector } from "react-redux";
import { setActive } from "../../Redux/Slices/contactSlice";
import { setActiveLamp } from "../../Redux/Slices/lampSlice";

const Header = () => {
  const dispatch = useDispatch();
  const { isActiveContacts } = useSelector((state) => state.contactStore);
  const { isActiveLamp } = useSelector((state) => state.lampStore);
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
            <li className="h-full content-center hover:cursor-pointer hover:scale-150 duration-[300ms]">
              <button>Наши работы</button>
            </li>
            <li className="h-full content-center hover:cursor-pointer hover:scale-150 duration-[300ms]">
              <button>Виды потолков</button>
            </li>
            <li className="h-full content-center hover:cursor-pointer hover:scale-150 duration-[300ms]">
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  dispatch(setActiveLamp(!isActiveLamp));
                }}
              >
                Светильники
              </button>
            </li>
            <li className="h-full content-center hover:cursor-pointer hover:scale-150 duration-[300ms]">
              <button
                onClick={() => {
                  dispatch(setActive(!isActiveContacts));
                  console.log(isActiveContacts);
                }}
              >
                Контакты
              </button>
            </li>
          </ul>
          <div className="text-black m-auto rounded-xl text-xl font-medium hover:text-white shadowContainer">
            <button className="bg-yellow-400 rounded-xl lettersBtn p-5 hover:bg-red-600 duration-[400ms] hidden">
              ЗАКАЗАТЬ ЗВОНОК
            </button>
          </div>
        </div>
      </header>
      <div className="text-black m-auto rounded-xl text-xl font-medium hover:text-white shadowContainer absolute left-[1157px] bottom-[629px] hover:animate-pulse">
        <button className="bg-yellow-400 rounded-xl lettersBtn p-5 hover:bg-red-600 duration-[400ms]">
          ЗАКАЗАТЬ ЗВОНОК
        </button>
      </div>
    </>
  );
};

export default Header;
