import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";
import { TiDeleteOutline } from "react-icons/ti";
import { FaUser, FaUsers } from "react-icons/fa";
import Swal from "sweetalert2";

const AllUser = () => {
  const axiosSecure = useAxiosSecure();
  const { data: users = [], refetch } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const res = await axiosSecure.get("/users"
    );
      return res.data;
    },
  });
  console.log(users);
  const handleMakeAdmin=(user)=>{
    axiosSecure.patch(`/users/admin/${user._id}`)
    .then(res=>{
        console.log(res.data);
        if(res.data.modifiedCount > 0){
            refetch()
            Swal.fire({
                position: "top-end",
                icon: "success",
                title: `${user.name} is admin now`,
                showConfirmButton: false,
                timer: 1500
              });
        }
    })
  }
  const handleDeleteUser=(user)=>{
    Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
          }).then((result) => {
            if (result.isConfirmed) {
            
                axiosSecure.delete(`/users/${user._id}`)
                .then(res=>{
                   
                    if(res.data.deletedCount > 0){
                        refetch()
                        Swal.fire({
                            title: "Deleted!",
                            text: "Your file has been deleted.",
                            icon: "success"
                          });
                    }
                })
            }
          });
  }
  return (
    <div>
      <h1>all users {users.length}</h1>
      <div className="overflow-x-auto">
        <table className="table table-zebra w-full">
          {/* head */}
          <thead>
            <tr>
              <th>No.</th>
              <th>Name</th>
              <th>Email</th>
              <th>Role</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, i) => (
              <tr key={user._id}>
                <th>{i + 1}</th>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>
               { user?.role == 'admin' ? 'admin' : <button
                    className="btn btn-sm  bg-orange-500"
                    onClick={() => handleMakeAdmin(user)}
                  >
                    <FaUsers size={25} />
                  </button>}
                </td>
                <td>
                    <button
                    className="btn btn-ghost btn-xs"
                    onClick={() => handleDeleteUser(user)}
                  >
                    <TiDeleteOutline size={30} />
                  </button>
                  </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllUser;
