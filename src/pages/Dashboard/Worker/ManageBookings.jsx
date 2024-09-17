import { useQuery } from "@tanstack/react-query";
import useAuth from "../../../hooks/useAuth";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import LoadingSpinner from "../../../components/LoadingSpinner/LoadingSpinner";
import { Helmet } from "react-helmet";
import { ClimbingBoxLoader } from "react-spinners";
import SectionHeading from "../../../components/SectionHeading/SectionHeading";
import EmptyContent from "../../../components/EmptyContent/EmptyContent";

const ManageBookings = () => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();

  const { data: bookings = [], isLoading } = useQuery({
    queryKey: ["my-bookings", user?.email],
    queryFn: async () => {
      const { data } = await axiosSecure.get(`/manage-bookings/${user?.email}`);
      return data;
    },
  });

  console.log(bookings);

  if (isLoading) return <LoadingSpinner />;

  return (
    <div>
      <Helmet>
        <title>Manage Bookings | Neighbourly</title>
      </Helmet>

      <SectionHeading heading="Manage Bookings" />

      {bookings.length === 0 ? (
        <EmptyContent title="No Bookings Available" subTitle="Keep Patience. You will be booked soon" />
      ) : (
        <table className="table-auto w-full border-collapse border border-gray-200">
          <thead>
            <tr className="bg-gray-100">
              <th className="border px-4 py-2">#</th>
              <th className="border px-4 py-2">Resident Name</th>
              <th className="border px-4 py-2">Service</th>
              <th className="border px-4 py-2">Booking Date</th>
              <th className="border px-4 py-2">Address</th>
              <th className="border px-4 py-2">Contact</th>
            </tr>
          </thead>
          <tbody>
            {bookings.map((booking, index) => (
              <tr key={booking._id}>
                <td className="border px-4 py-2">{index + 1}</td>
                <td className="border px-4 py-2">{booking.resident?.name}</td>
                <td className="border px-4 py-2">
                  {booking.service?.service_title}
                </td>
                <td className="border px-4 py-2">
                  {new Date(booking.date).toLocaleDateString()}
                </td>
                <td className="border px-4 py-2">
                  {booking.resident?.address}
                </td>
                <td className="border px-4 py-2">{booking.resident?.phone}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default ManageBookings;
