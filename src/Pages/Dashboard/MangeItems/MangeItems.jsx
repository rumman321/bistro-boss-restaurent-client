import { TiDeleteOutline } from "react-icons/ti";
import SectionTitle from "../../../Componnets/SectonTitle/SectionTitle";
import useMenu from "../../../hooks/useMenu";
import { MdDelete, MdUpdate } from "react-icons/md";
import { FaEdit } from "react-icons/fa";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { Link } from "react-router-dom";


const MangeItems = () => {
  const [menus,,refetch] = useMenu();
  const axiosSecure = useAxiosSecure()
  
  const handleDeleteItem =  (item)=>{
    Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!"
      }).then(async (result) => {
        if (result.isConfirmed) {
            const res = await axiosSecure.delete(`/menu/${item._id}`)
            console.log(res)
            if(res.data.deletedCount > 0){
                Swal.fire({
                    title: "Deleted!",
                    text: `Your ${item.name} has been deleted.`,
                    icon: "success"
                  });
                  refetch()
            }
       
        }
      });
  }
  return (
    <div>
      <div className="w-full">
        <SectionTitle
          subHeading={"Manage All Item"}
          heading={"hurry Up"}
        ></SectionTitle>
      </div>
      <div>
        <div className="overflow-x-auto">
          <table className="table">
            {/* head */}
            <thead>
              <tr>
                <th>#</th>
                <th>Image</th>
                <th>Item Name</th>
                <th>Favorite Color</th>
                <th>Category</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {menus.map((menu,i) => (
                <tr key={menu._id}>
                  <td>{i+1}</td>
                  <td>
                    <div className="flex items-center gap-3">
                      <div className="avatar">
                        <div className="mask mask-squircle h-12 w-12">
                          <img
                            src={menu.image}
                            alt={menu.name}
                          />
                        </div>
                      </div>
                    </div>
                  </td>
                  <td>{menu.name}</td>
                  <td>{menu.category}</td>
                  <td>{menu.price} $</td>
                  <td className="flex items-center">
                    <Link to={`/dashboard/updateItem/${menu._id}`}>
                    <button >
                      <FaEdit  size={25} />
                    </button>
                    </Link>
                    <button onClick={()=>handleDeleteItem(menu)}>
                      <TiDeleteOutline className="text-red-600" size={30} />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default MangeItems;
