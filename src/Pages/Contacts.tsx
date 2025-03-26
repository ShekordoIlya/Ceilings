const Contacts = () => {
  return (
    <section className="w-[100vw]">
      <p className="text-white text-6xl lettersBtn mainOpacity text-center pt-4">
        Связаться с нами
      </p>
      <div className="flex w-full justify-center items-center h-[50vh]">
        <div className="w-1/2 text-center">
          <p className="lettersBtn mainOpacity text-white text-4xl">
            Телефоны для связи:
          </p>{" "}
          <br />
          <div className="text-2xl hover:scale-125 duration-[400ms]">
            <a
              href="tel:+375292089676"
              className="lettersBtn mainOpacity text-yellow-400"
            >
              +375292089676
            </a>
            <span className="text-white letterBtn mainOpacity"> МТС</span>
          </div>{" "}
          <br />
          <div className="text-2xl hover:scale-125 duration-[400ms]">
            <a
              href="tel:+375295853413"
              className="lettersBtn mainOpacity text-yellow-400"
            >
              +375295853413
            </a>
            <span className="text-white letterBtn mainOpacity"> A1</span>
          </div>{" "}
          <br />
          <p className="text-white letterBtn mainOpacity text-2xl">
            Электронная почта:
          </p>{" "}
          <br />
          <div className="text-2xl hover:scale-125 duration-[400ms]">
            <a
              className="lettersBtn mainOpacity text-yellow-400"
              href="mailto:skypro_potolok@mail.ru"
              target="blank"
            >
              skypro_potolok@mail.ru
            </a>
          </div>
        </div>
        <div className="w-64 mainOpacity">
          <img src="../../assets/skypro_potolok.by_qr.png" alt="QR Code" />
        </div>
        <div className="w-1/2 text-center">
          <p className="text-2xl text-white letterBtn mainOpacity">
            Мы в социальных сетях:
          </p>{" "}
          <br />
          <div className="text-center text-2xl hover:scale-150 duration-[400ms]">
            <a
              className="text-yellow-400 lettersBtn mainOpacity"
              href="https://www.instagram.com/skypro_potolok.by/?next=%2F"
              target="blank"
            >
              Instagram
              <picture className="[text-align:-webkit-center]">
                <img
                  className="w-10"
                  src="../../assets/square-instagram-brands (1).svg"
                  alt="instagram"
                />
              </picture>
            </a>
          </div>{" "}
          <br />
          <div className="text-center text-2xl hover:scale-150 duration-[400ms]">
            <a
              className="text-yellow-400 lettersBtn mainOpacity"
              href="https://www.t.me/skypro_potolok"
              target="blank"
            >
              Telegram
              <picture className="[text-align:-webkit-center]">
                <img
                  className="w-10"
                  src="../../assets/telegram-brands.svg"
                  alt="instagram"
                />
              </picture>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contacts;
