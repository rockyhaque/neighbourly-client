import LoadingSpinner from "../../../components/LoadingSpinner/LoadingSpinner";
import SectionHeading from "../../../components/SectionHeading/SectionHeading";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import useAuth from "./../../../hooks/useAuth";
import { useQuery } from "@tanstack/react-query";
import { Helmet } from "react-helmet";

const MyBookedWorkers = () => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();

  const {
    data: bookings = [],
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["my-bookings", user?.email],
    queryFn: async () => {
      const { data } = await axiosSecure.get(`/my-bookings/${user?.email}`);
      return data;
    },
  });

  console.log(bookings);

  if (isLoading) return <LoadingSpinner />;

  return (
    <div>
      <Helmet>
        <title>My Bookings</title>
      </Helmet>
      <SectionHeading heading="My Booked Workers"/>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>#</th>
              <th>Service Info</th>
              <th>Job</th>
              <th>Favorite Color</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {/* rows */}

            {bookings.map((booking, index) => (
              <tr key={booking._id}>
                <th>
                  {index + 1}
                </th>
                <td>
                  <div className="flex items-center gap-3">
                    <div className="avatar">
                      <div className="mask mask-squircle h-12 w-12">
                        <img
                          src={booking?.service?.worker?.image}
                          alt={booking?.service?.worker?.name}
                        />
                      </div>
                    </div>
                    <div>
                      <div className="font-bold">{booking?.service?.worker?.name}</div>
                      <div className="text-sm opacity-50">{booking?.service?.worker?.email}</div>
                    </div>
                  </div>
                </td>
                <td>
                  Zemlak, Daniel and Leannon
                  <br />
                  <span className="badge badge-ghost badge-sm">
                    Desktop Support Technician
                  </span>
                </td>
                <td>Purple</td>
                <th>
                  <button className="btn btn-ghost btn-xs">details</button>
                </th>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyBookedWorkers;
