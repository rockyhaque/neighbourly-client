import MenuItem from "./MenuItem";
import { RiProgress1Line } from "react-icons/ri";
import { AiOutlineFileDone } from "react-icons/ai";
import { MdPlaylistAdd } from "react-icons/md";
import { RiListSettingsLine } from "react-icons/ri";

const WorkerMenu = () => {
  return (
    <>
      <MenuItem icon={RiProgress1Line} label="On Progress" address="on-progress" />
      <MenuItem icon={AiOutlineFileDone} label="Past Works" address="past-works" />
      <MenuItem icon={MdPlaylistAdd} label="Add Service" address="add-service" />
      <MenuItem icon={RiListSettingsLine} label="My Listings" address="my-listings" />
    </>
  );
};

export default WorkerMenu;
