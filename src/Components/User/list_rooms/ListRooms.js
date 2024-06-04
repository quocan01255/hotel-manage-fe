import { useState, useCallback } from "react";
import RoomItem from "../room_item/RoomItem";
import "./listrooms.css";
import { addCartItem } from "../../../services/api";
import { ToastContainer, toast } from 'react-toastify';

function ListRooms({ rooms, handleAdd }) {
  return (
    <>
      {rooms.map((room) => (
        <RoomItem
          key={room.id}
          idTab={room.id}
          // priceType={priceType}
          name={room.name}
          details={room.details}
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
