import useAuth from "../../hooks/useAuth";
import MenuItem from "../../pages/Dashboard/Menu/MenuItem";
import { RiHomeLine } from "react-icons/ri";
import useRole from "../../hooks/useRole";
import { FaUserShield } from "react-icons/fa6";
import { Link } from "react-router-dom";
import AdminMenu from "../../pages/Dashboard/Menu/AdminMenu";
import ResidentMenu from "../../pages/Dashboard/Menu/ResidentMenu";
import WorkerMenu from "../../pages/Dashboard/Menu/WorkerMenu";

const Sidebar = () => {
  const { user } = useAuth();
  const [role, isLoading] = useRole();

  return (
    <div className="w-64 h-full bg-gradient-to-r from-neutral-900 to-slate-800  p-3 shadow-lg pt-10">
      <div className="flex justify-center items-center space-x-4 p-2 mb-5">
        <Link to="/" className="flex justify-center items-center gap-3">
          <img className="w-auto h-8 md:h-8 " src="./logo.png" alt="logo" />
          <p className="text-gray-200 font-semibold text-base md:text-xl font-nunitoSans">
            Neighbourly
          </p>
        </Link>
      </div>

      <div className="font-nunitoSans">
        <div className="relative cursor-pointer dark:text-white">
          <span className="absolute top-0 left-0 w-full h-full mt-1 ml-1 bg-indigo-500 rounded-lg dark:bg-gray-200" />
          <div className="relative p-1 bg-white dark:bg-gray-800 border-2 border-indigo-500 dark:border-gray-300 rounded-lg hover:scale-105 transition duration-500">
            <div className="flex items-center">
              <div className="flex items-center space-x-4 p-2">
                <img
                  className="h-12 rounded-full"
                  src={user?.photoURL}
                  alt="User Profile"
                />
                <div>
                  <h4 className="font-semibold text-lg text-gray-200  ">
                    {user?.displayName}
                  </h4>
                  <span className="text-sm flex items-center space-x-1">
                    <FaUserShield />
                    <span className="text-gray-400 pl-1">
                      {role.charAt(0).toUpperCase() +
                        role.slice(1).toLowerCase()}
                    </span>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <ul className="space-y-2 text-sm">
        <MenuItem label="Home" address="/" icon={RiHomeLine} />
        {/* <MenuItem label="Statistics" address="/dashboard" icon={BsGraphUp} /> */}

        {role === "admin" && <AdminMenu />}
        {role === "resident" && <ResidentMenu />}
        {role === "worker" && <WorkerMenu />}
        
      </ul>
    </div>
  );
};

export default Sidebar;
