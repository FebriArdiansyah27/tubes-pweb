import { useDispatch, useSelector } from "react-redux";
import { Items } from "../components";
import { handleRemovewhislist } from "../redux/WhislistSlice";
import whislistImage from "../Assets/Images/whislist.svg"; // Renamed the image variable
import { NavLink } from "react-router-dom";
import { addToCart } from "../redux/Slice";

const Whislist = () => {
  const whislistItems = useSelector((state) => state.whislist);
  const dispatch = useDispatch();

  const removeFromWhislist = (id) => {
    dispatch(handleRemovewhislist({ id }));
  };

  const moveToCart = (item) => {
    dispatch(addToCart({ product: item }));
    removeFromWhislist(item.id); // Remove from wishlist after adding to cart
  };

  return (
    <>
      {whislistItems.length === 0 ? (
        <div className="flex justify-center items-center flex-col pt-28">
          <div>
            <img src={whislistImage} alt="" />
          </div>
          <div className="text-center ">
            <p className="mt-3">Hey! Your wishlist is empty.</p>
            <p className="mt-3">Save your favourites here and make them yours soon!</p>
          </div>
          <NavLink to={"/"}>
            <button className="mt-3 mb-48 px-10 text-lg font-semibold py-2 bg-red-500">Shop Now</button>
          </NavLink>
        </div>
      ) : (
        <div className="flex items-center gap-[76px] p-10 flex-wrap">
          {whislistItems.map((item, i) => {
            return (
              <div className="pt-2" key={i}>
                <Items id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price} />
                <div className="flex gap-2 pt-4">
                  <button onClick={() => moveToCart(item)} className="py-2 px-5 w-[150px] text-base text-white font-semibold bg-[#ff4141] mb-10 border-none outline-none">
                    Move To Cart
                  </button>
                  <button onClick={() => removeFromWhislist(item.id)} className="py-2 px-5 w-[102px] text-base text-white font-semibold bg-[#ff4141] mb-10 border-none outline-none">
                    Remove
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </>
  );
};

export default Whislist;
