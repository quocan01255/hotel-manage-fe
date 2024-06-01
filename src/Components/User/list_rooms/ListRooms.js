import { useState, useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import { add } from "../../../redux/actions/cartActions";
import RoomItem from "../room_item/RoomItem";
import "./listrooms.css";
import { addCartItem } from "../../../services/api";
import { ToastContainer, toast } from 'react-toastify';

function ListRooms({ rooms, handleAdd }) {
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

  // const handleAdd = useCallback(
  //   async (id) => {
  //     if (userId) {
  //       console.log(checkIn, checkOut)
  //       const response = await addCartItem(userId, id, checkIn, checkOut);
  //       showMsgBox(response.message);
  //     } else {
  //       showMsgBox("Please login to add room!")
  //     }
  //   },

  //   []
  // );


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
