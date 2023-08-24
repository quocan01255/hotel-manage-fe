import { useState, useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import { add } from "../../../redux/actions/cartActions";
import RoomItem from "../room_item/RoomItem";
import "./listrooms.css";

function ListRooms({ rooms }) {
  const doCartAction = useSelector((state) => state.cartReducer.type);
  const authState = useSelector((state) => state.authReducer);
  const dispatch = useDispatch();
  const [priceType, setPriceType] = useState("VND");


  const handleSelect = useCallback((e) => {
    setPriceType(e.target.value);
  }, []);

  const handleAdd = useCallback(
    (id) => {
      const loggedIn = localStorage.getItem("loggedIn");
      if (!loggedIn) {
        dispatch(add(id, false, null));
      } else {
        const user = JSON.parse(localStorage.getItem("user"));
        dispatch(add(id, true, user.id));
      }
    },
    [doCartAction, dispatch]
  );


  return (
    <>
      <div className="select-container">
        <div className="select-content">
          <select className="price-select" onChange={handleSelect}>
            <option value="VND" defaultValue>
              Vietnamese Dong(đ)
            </option>
            <option value="USD">US Dollar($)</option>
          </select>
          <i className="fa-solid fa-angle-down select-icon"></i>
        </div>
      </div>
      {rooms.map((room) => (
        <RoomItem
          key={room.id}
          idTab={room.id}
          priceType={priceType}
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
