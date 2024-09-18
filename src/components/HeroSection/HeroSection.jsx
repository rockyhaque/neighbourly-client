import toast from "react-hot-toast";
import { axiosSecure } from "../../hooks/useAxiosSecure";
import useRole from "../../hooks/useRole";
import useAuth from "./../../hooks/useAuth";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";

const HeroSection = () => {
  const { user } = useAuth();
  const [role] = useRole();

  // Apply Request
  const applyRequst = async () => {
    try {
      const currentUser = {
        email: user?.email,
        role: "worker",
        status: "Requested",
      };
      const { data } = await axiosSecure.put(`/user`, currentUser);
      console.log(data)
      if (data.modifiedCount > 0) {
        toast.success("Success! Please wait for admin confirmation.");
      } else {
        toast.success("Please wait for admin approval ⌛");
      }
    } catch (err) {
      toast.error(err.messsage);
    }
  };

  // handle Apply Worker Modal
  const handleApplyWorker = async () => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "question",
      showCancelButton: true,
      confirmButtonColor: "#4B0082",
      cancelButtonColor: "#FA003F",
      confirmButtonText: "Apply",
    }).then((result) => {
      if (result.isConfirmed) {
        applyRequst();
      }
    });
  };

  return (
    <div>
      <section className="pt-8 lg:py-16 bg-[url('https://pagedone.io/asset/uploads/1691055810.png')] bg-center bg-cover">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative text-center">
          <div className="border border-indigo-600 p-1 w-60 mx-auto rounded-full flex items-center justify-between mb-4">
            <span className="font-inter text-xs font-medium text-gray-900 ml-3">
              Explore our service categories.
            </span>
            <a
              href="javascript:;"
              className="w-8 h-8 rounded-full flex justify-center items-center bg-indigo-600"
            >
              <svg
                width={17}
                height={16}
                viewBox="0 0 17 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M2.83398 8.00019L12.9081 8.00019M9.75991 11.778L13.0925 8.44541C13.3023 8.23553 13.4073 8.13059 13.4073 8.00019C13.4073 7.86979 13.3023 7.76485 13.0925 7.55497L9.75991 4.22241"
                  stroke="white"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </a>
          </div>
          <h1 className="max-w-2xl mx-auto text-center font-manrope font-bold text-4xl text-gray-900 mb-5 md:text-5xl leading-[50px]">
            Simplify Your Life with
            <span className="text-indigo-600 ml-2">Neighbourly</span>
          </h1>
          <p className="max-w-sm mx-auto text-center text-base font-normal leading-7 text-gray-500 mb-9">
            Neighbourly connects residents with skilled workers for home
            services, making it easy to hire trusted professionals in your
            community.
          </p>

          {!user && (
            <div className="flex justify-center items-center w-full md:w-1/4 rounded-xl bg-gradient-to-tr from-pink-300 to-blue-300 p-0.5 shadow-lg mb-10 mx-auto">
              <Link to="/register" className="flex-1 font-bold text-base md:text-xl bg-white px-2 py-2 rounded-xl hover:shadow-lg hover:bg-indigo-200">
                Sign Up / Sign In
              </Link>
            </div>
          )}

          {user && role === "resident" && (
            <div className="flex justify-center items-center w-full md:w-1/4 rounded-xl bg-gradient-to-tr from-pink-300 to-blue-300 p-0.5 shadow-lg mb-10 mx-auto">
              <button
                onClick={handleApplyWorker}
                className="flex-1 font-bold text-base md:text-xl bg-white px-2 py-2 rounded-xl hover:shadow-lg hover:bg-indigo-200"
              >
                Join as a Worker
              </button>
            </div>
          )}

          {/* <div className="flex justify-center">
            <img
              src="https://pagedone.io/asset/uploads/1691054543.png"
              alt="Dashboard image"
            />
          </div> */}
        </div>
      </section>
    </div>
  );
};

export default HeroSection;
