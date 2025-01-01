const FooadCard = ({item}) => {
    const {price,recipe,name,image,category}=item || {}
  return (
    <div className="card bg-base-100  shadow-xl">
      <figure>
        <img
          src={image}
          alt="Shoes"
        />
      </figure>
      <p className="bg-black text-white absolute right-0">${price}</p>
      <div className="card-body flex-col items-center">
        <h2 className="card-title">{name}</h2>
        <p>{recipe}</p>
        <div className="card-actions justify-end">
          <button className="btn btn-outline border-0 border-b-2 uppercase border-orange-400">Add To Cart</button>
        </div>
      </div>
    </div>
  );
};

export default FooadCard;
