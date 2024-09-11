import MenuItem from "./MenuItem";
import { RiProgress1Line } from "react-icons/ri";
import { AiOutlineFileDone } from "react-icons/ai";

const WorkerMenu = () => {
  return (
    <>
      <MenuItem icon={RiProgress1Line} label="On Progress" address="on-progress" />
      <MenuItem icon={AiOutlineFileDone} label="Past Works" address="past-works" />
    </>
  );
};

export default WorkerMenu;
