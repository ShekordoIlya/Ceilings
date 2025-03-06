const StartInfo = () => {
  return (
    <main className="w-full text-white mainOpacity text-center h-[85%] flex justify-center items-center">
      <div className="p-3">
        <h1 className="text-6xl font-semibold mb-10">
          Натяжные потолки профессионального качества
        </h1>
        <h2 className="text-4xl font-medium mb-10">
          Работаем с <strong className="text-yellow-400">2015</strong> года
        </h2>
        <h3 className="text-2xl font-medium mb-20">
          Стремимся быть лучше и находим индивидуальный подход к каждому
          клиенту!
        </h3>
        <button className="bg-yellow-400 text-black rounded-xl lettersBtn p-5 hover:bg-red-600 duration-[400ms] hover:text-white font-bold hover:scale-125">
          ПОЛУЧИТЬ КОНСУЛЬТАЦИЮ
        </button>
      </div>
    </main>
  );
};

export default StartInfo;
