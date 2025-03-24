import { useDispatch } from "react-redux";
import { dataLighting } from "../../data.js";

const Lighting = () => {
  const dispatch = useDispatch();
  const lightingTypes = () => {
    return (
      <picture className="flex justify-center gap-5 flex-wrap mainOpacity flex-col max-h-[50vh] items-center">
        {dataLighting.map((element: string) => {
          return (
            <div className="w-[13rem] hover:cursor-pointer hover:scale-125 duration-[400ms]">
              <img className="rounded-lg" src={element} alt="Cветильник" />
            </div>
          );
        })}
      </picture>
    );
  };

  return (
    <div className="w-full h-[85%] p-3 flex flex-col justify-center">
      <p className="text-white mainOpacity text-center lettersBtn text-4xl pb-10">
        Светильники на Ваш вкус и цвет!
      </p>
      {lightingTypes()}
      <p className="text-white mainOpacity text-2xl text-center pt-10 lettersBtn">
        За более подробной и расширенной информацией обращайтесь к{" "}
        <button
          onClick={() => {
            dispatch("/contacts");
          }}
          className="text-yellow-400 mainOpacity text-2xl hover:scale-105 duration-[400ms] hover:cursor-pointer transform-gpu"
        >
          специалистам
        </button>
      </p>
    </div>
  );
};

export default Lighting;
