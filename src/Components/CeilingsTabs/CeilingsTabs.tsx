import { useDispatch } from "react-redux";
import { dataCeilings } from "../../../data.js";
import {
  setAlt,
  setDescription,
  setHeader,
  setImage,
} from "../../Redux/ceilingsTabsSlice";

const CeilingsTabs = () => {
  const dispatch = useDispatch();
  return (
    <div className="tabsContainer w-[30%]  mt-[50px]">
      <ul className="flex flex-col gap-10 items-center">
        <li className=" hover:scale-110 duration-[400ms] text-black m-auto rounded-xl text-lg font-medium shadowContainer">
          <button
            onClick={() => {
              dispatch(setHeader(dataCeilings[1].header));
              dispatch(setImage(dataCeilings[1].image));
              dispatch(setAlt(dataCeilings[1].alt));
              dispatch(setDescription(dataCeilings[1].description));
            }}
            className="bg-yellow-400 rounded-xl lettersBtn p-5"
          >
            Мансардные потолки
          </button>
        </li>
        <li className="hover:scale-110 duration-[400ms] text-black m-auto rounded-xl text-lg font-medium shadowContainer">
          <button
            onClick={() => {
              dispatch(setHeader(dataCeilings[2].header));
              dispatch(setImage(dataCeilings[2].image));
              dispatch(setAlt(dataCeilings[2].alt));
              dispatch(setDescription(dataCeilings[2].description));
            }}
            className="bg-yellow-400 rounded-xl lettersBtn p-5"
          >
            Сатиновые потолки
          </button>
        </li>
        <li className="hover:scale-110 duration-[400ms] text-black m-auto rounded-xl text-lg font-medium shadowContainer">
          <button
            onClick={() => {
              dispatch(setHeader(dataCeilings[3].header));
              dispatch(setImage(dataCeilings[3].image));
              dispatch(setAlt(dataCeilings[3].alt));
              dispatch(setDescription(dataCeilings[3].description));
            }}
            className="bg-yellow-400 rounded-xl lettersBtn p-5"
          >
            Двухуровневые потолки
          </button>
        </li>
        <li className="hover:scale-110 duration-[400ms] text-black m-auto rounded-xl text-lg font-medium shadowContainer">
          <button
            onClick={() => {
              dispatch(setHeader(dataCeilings[4].header));
              dispatch(setImage(dataCeilings[4].image));
              dispatch(setAlt(dataCeilings[4].alt));
              dispatch(setDescription(dataCeilings[4].description));
            }}
            className="bg-yellow-400 rounded-xl lettersBtn p-5"
          >
            Матовые потолки
          </button>
        </li>
        <li className="hover:scale-110 duration-[400ms] text-black m-auto rounded-xl text-lg font-medium shadowContainer">
          <button
            onClick={() => {
              dispatch(setHeader(dataCeilings[5].header));
              dispatch(setImage(dataCeilings[5].image));
              dispatch(setAlt(dataCeilings[5].alt));
              dispatch(setDescription(dataCeilings[5].description));
            }}
            className="bg-yellow-400 rounded-xl lettersBtn p-5"
          >
            Глянцевые потолки
          </button>
        </li>
      </ul>
    </div>
  );
};

export default CeilingsTabs;
