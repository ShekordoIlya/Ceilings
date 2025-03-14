import CeilingsTabs from "../Components/CeilingsTabs/CeilingsTabs";
import CeilingsTypes from "../Components/CeilingsTypes/CeilingsTypes";

const Ceilings = () => {
  return (
    <div className="flex justify-evenly text-white opacity-[99%] w-full">
      <CeilingsTabs />
      <CeilingsTypes />
    </div>
  );
};

export default Ceilings;
