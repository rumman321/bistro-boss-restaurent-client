import { useForm } from "react-hook-form";
import SectionTitle from "../../../Componnets/SectonTitle/SectionTitle";
import { FaUtensils } from "react-icons/fa";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import Swal from "sweetalert2";

const image_hosting_key = import.meta.env.VITE_IMAGE_HOST_KEY;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;
const AddItems = () => {
  const axiosPublic = useAxiosPublic();
  const axiosSecure = useAxiosSecure()
  const { register, handleSubmit, reset } = useForm();
  const onSubmit = async (a) => {
    console.log(a);
    const imageFile = { image: a.image[0] };
    const { data } = await axiosPublic.post(image_hosting_api, imageFile, {
      headers: {
        "content-type": "multipart/form-data",
      },
    });
    if(data.success){
       const menuItem = {
        name : a.name,
        recipe:a.recipe,
        image:data.data.display_url,
        category:a.category,
        price:parseFloat(a.price) ,

        }
        const menuRes = await axiosSecure.post("/menu",menuItem)
        console.log(menuRes.data);
        if(menuRes.data.insertedId){
            Swal.fire({
                position: "top-end",
                icon: "success",
                title: `${a.name} added `,
                showConfirmButton: false,
                timer: 1500
              });
              reset()
        }
    }
    console.log(data)
  };
  return (
    <div>
      <SectionTitle
        heading={"ADD AN ITEM"}
        subHeading={"Menu Items"}
      ></SectionTitle>
      <div className="">
        <form onSubmit={handleSubmit(onSubmit)}>
          <label className="form-control w-full my-6 ">
            <div className="label">
              <span className="label-text">Recipe name?</span>
            </div>
            <input
              {...register("name", { required: true })}
              type="text"
              placeholder="Recipe Name"
              className="input input-bordered w-full "
            />
          </label>

          <div className="flex gap-5">
            {/* category */}
            <label className="form-control w-full my-6 ">
              <div className="label">
                <span className="label-text">Category?</span>
              </div>
              <select
                {...register("category", { required: true })}
                defaultValue="default"
                className="select select-bordered w-full "
              >
                <option disabled value="default" selected>
                  Select a Category
                </option>
                <option value="salad">Salad</option>
                <option value="pizza">Pizza</option>
                <option value="soup">Soup</option>
                <option value="dessert">Dessert</option>
                <option value="drinks">Drink</option>
              </select>
            </label>

            {/* price */}
            <label className="form-control w-full my-6 ">
              <div className="label">
                <span className="label-text">Price?</span>
              </div>
              <input
                {...register("price", { required: true })}
                type="number"
                placeholder="Price"
                className="input input-bordered w-full "
              />
            </label>
          </div>

          <label className="form-control">
            <div className="label">
              <span className="label-text">Recipe details</span>
            </div>
            <textarea
              {...register("recipe", { required: true })}
              className="textarea textarea-bordered h-24"
              placeholder="Details"
            ></textarea>
          </label>
          <div>
            <input
              {...register("image", { required: true })}
              type="file"
              className="file-input file-input-bordered w-full max-w-xs my-6"
            />
          </div>
          <button className="btn">
            ADD <FaUtensils />
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddItems;
