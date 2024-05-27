import { useState, useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import { add } from "../../../redux/actions/cartActions";
import RoomItem from "../room_item/RoomItem";
import "./listrooms.css";
import { addCartItem } from "../../../services/api";
import { ToastContainer, toast } from 'react-toastify';

function ListRooms({ rooms }) {
  const doCartAction = useSelector((state) => state.cartReducer.type);
  const dispatch = useDispatch();
  const userId = localStorage.getItem("id");
  // const [priceType, setPriceType] = useState("VND");

  const showMsgBox = useCallback((msg) => {
    toast(msg, {
      position: "top-center",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  }, [])

  // const handleSelect = useCallback((e) => {
  //   setPriceType(e.target.value);
  // }, []);

  const handleAdd = useCallback(
    async (id, checkout) => {
      // const loggedIn = localStorage.getItem("loggedIn");
      // if (!loggedIn) {
      //   dispatch(add(id,checkout, false, null));
      // } else {
      //   const user = JSON.parse(localStorage.getItem("user"));
      //   dispatch(add(id,checkout, true, user.id));
      // }
      if (userId) {
        const response = await addCartItem(userId, id);
        showMsgBox(response.message);
      } else {
        showMsgBox("Please login to add room!")
      }
    },

    [doCartAction, dispatch]
  );


  return (
    <>
      {/* <div className="select-container">
        <div className="select-content">
          <select className="price-select" onChange={handleSelect}>
            <option value="VND" defaultValue>
              Vietnamese Dong(đ)
            </option>
            <option value="USD">US Dollar($)</option>
          </select>
          <i className="fa-solid fa-angle-down select-icon"></i>
        </div>
      </div> */}
      {rooms.map((room) => (
        <RoomItem
          key={room.id}
          idTab={room.id}
          checkout={room.checkout}
          // priceType={priceType}
          name={room.name}
          detail={room.detail}
          description={room.description}
          price={room.price}
          priceSale={room.priceSale}
          img={room.img}
          addRoom={handleAdd}
        />
      ))}
    </>
  );

}

export default ListRooms;
