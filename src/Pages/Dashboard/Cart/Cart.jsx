import { TiDeleteOutline } from "react-icons/ti";
import useCart from "../../../hooks/useCart";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { Link } from "react-router-dom";

const Cart = () => {
  const [cart, refetch] = useCart();
  const axiosSecure = useAxiosSecure()
  const totalPrice = cart.reduce((acc, item) => acc + item.price, 0)
  const handleDelete=(id) =>{
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
        
            axiosSecure.delete(`/carts/${id}`)
            .then(res=>{
               
                if(res.data.deletedCount){
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
      <div className="flex justify-between items-center">
        <h2>total Order : {cart.length}</h2>
        <h2>total Price : $ {totalPrice}</h2>
        {cart.length ?<Link to="/dashboard/pay">
        <button className="btn btn-primary">Pay</button>
        </Link>:
          <button disabled className="btn btn-primary">Pay</button>
        }
      </div>
      {/* //tableData */}
      <div className="overflow-x-auto">
        <table className="table w-full">
          {/* head */}
          <thead>
            <tr>
              <th>#</th>
              <th>Image</th>
              <th>Name</th>
              <th>Price </th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {cart.map((item,idx) => {
              return <tr key={item._id}>
                <th>{idx+1}</th>
                <td>
                  <div className="flex items-center gap-3">
                    <div className="avatar">
                      <div className="mask mask-squircle h-12 w-12">
                        <img src={item.image} alt="Avatar Tailwind CSS Component" />
                      </div>
                    </div>
                    
                  </div>
                </td>
                <td>
                 {item.name}
                </td>
                <td>${item.price}</td>
                <th>
                  <button className="btn btn-ghost btn-xs" 
                  onClick={()=>handleDelete(item._id)}>
                    <TiDeleteOutline size={30}/></button>
                </th>
              </tr>;
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Cart;
