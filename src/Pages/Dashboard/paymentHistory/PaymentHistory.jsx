import { useQuery } from "@tanstack/react-query";
import useAuth from "../../../hooks/useAuth";
import useAxiosSecure from "../../../hooks/useAxiosSecure";

const PaymentHistory = () => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();
  const { data: payments=[] } = useQuery({
    queryKey: ["payments", user?.email],
    queryFn: async () => {
      const res = await axiosSecure(`/payments/${user?.email}`);
      return res.data;
    },
  });
  return (
    <div>
      <h2 className="text-center text-3xl">
        Total Payment History : {payments?.length}
      </h2>
      <div>
        <div className="overflow-x-auto">
          <table className="table table-zebra">
            {/* head */}
            <thead>
              <tr>
                <th>#</th>
                <th>price </th>
                <th>transactionId</th>
                <th>status</th>
              </tr>
            </thead>
            <tbody>
              {/* row 1 */}
             {
                payments.map((payment,i)=>  <tr key={payment._id}>
                <th>{i+1}</th>
                <td>{payment.price}</td>
                <td>{payment.transactionId}</td>
                <td>{payment.status}</td>
              </tr>)
             }
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default PaymentHistory;
