import { useSelector } from "react-redux";
import StartInfo from "./StartInfo";
import Contacts from "./Contacts";
import Lamp from "./Lamp";

const Main = () => {
  const { isActiveContacts } = useSelector((state) => state.contactStore);
  const { isActiveLamp } = useSelector((state) => state.lampStore);
  if (isActiveContacts == true) {
    return <Contacts />;
  } else if (isActiveLamp == true) {
    return <Lamp />;
  } else {
    return <StartInfo />;
  }
};

export default Main;
