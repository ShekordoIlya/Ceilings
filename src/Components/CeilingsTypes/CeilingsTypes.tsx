const CeilingsTypes = () => {
  return (
    <div className="w-[70%] border-gray-100 flex justify-center items-center">
      <picture className="w-[60%] pl-10">
        <img
          className="rounded-3xl"
          src="../../../assets/ceilings/mansard.jpg"
          alt="Мансардный потолок"
        />
      </picture>
      <div className="w-[40%]">
        <h2 className="text-3xl text-center pb-4 text-yellow-400">
          Мансардный потолок
        </h2>
        <p className="text-center text-xl pl-2 pr-2">
          Мансардные натяжные потолки характеризуются высоким уровнем
          устойчивости к перепадам температуры и влаги. Это идеальное решение
          для помещений любого типа. Они хорошо взаимодействуют с любым
          каркасом, вне зависимости от расположения. Однако, при выборе
          мансардного потолка необходимо учитывать особенности крыши.
          Конструкция находится к ней максимально близко, что имеет важное
          значение. Ведь от качества крыши зависит и состояние мансарды.
        </p>
      </div>
    </div>
  );
};

export default CeilingsTypes;
