import { useSelector } from "react-redux";

const CeilingsTypes = () => {
  const { image, description, alt, header } = useSelector(
    (state: any) => state.ceilingsTabsStore
  );
  return (
    <div className="w-[70%] border-gray-100 flex justify-center items-center">
      <picture className="w-[60%] pl-10 pt-8">
        <img className="rounded-3xl" src={image} alt={alt} />
      </picture>
      <div className="w-[40%]">
        <h2 className="text-3xl text-center pb-4 text-yellow-400">{header}</h2>
        <p className="text-center text-xl pl-2 pr-2">{description}</p>
      </div>
    </div>
  );
};

export default CeilingsTypes;
