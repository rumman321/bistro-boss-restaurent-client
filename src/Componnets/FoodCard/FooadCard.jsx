import { useLocation, useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import Swal from 'sweetalert2'
import useAxiosSecure from "../../hooks/useAxiosSecure";
import useCart from "../../hooks/useCart";


const FooadCard = ({ item }) => {
  const { user } = useAuth();
  const location = useLocation()
  const navigate = useNavigate()
  const axiosSecure = useAxiosSecure()
  const [,refetch] = useCart()
  const { price, recipe, name, image, category, _id } = item || {};

  const handleAddToCart = () => {
    if (user && user?.email) {      
      const cartItem ={
        menuId:_id,
        email:user.email,
        name,
        price,
        image,
        category,
        recipe
      }
      //send data to server
      axiosSecure.post("/carts",cartItem) 
      .then(res=>{
        console.log(res.data)
        if(res.data.insertedId){
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: `${name} has been added to cart`,
            showConfirmButton: false,
            timer: 1500
          });
          //refetch cart
          refetch()
        }
        

      })

      
    } else {
      Swal.fire({
        title: "you are not logged in",
        text: "Please Login First",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, Login!",
      }).then((result) => {
        if (result.isConfirmed) {
         //send to login page
          navigate("/login", {state:{ from: location }})
        }
      });
    }
  };
  return (
    <div className="card bg-base-100  shadow-xl">
      <figure>
        <img src={image} alt="Shoes" />
      </figure>
      <p className="bg-black text-white absolute right-0">${price}</p>
      <div className="card-body flex-col items-center">
        <h2 className="card-title">{name}</h2>
        <p>{recipe}</p>
        <div className="card-actions justify-end">
          <button
            onClick={handleAddToCart}
            className="btn btn-outline border-0 border-b-2 uppercase border-orange-400"
          >
            Add To Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default FooadCard;
