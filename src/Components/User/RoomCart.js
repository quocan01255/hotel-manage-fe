import React, { useCallback, useEffect, useState } from "react";
import { getRoomById, removeCartItem } from "../../services/api";
import CartItem from "./CartItem";

const RoomCart = ({
  removeRoom,
  cart,
  increaseTotal,
  decreaseTotal
}) => {
  return (
    //Logged in
    <div className="mt-5 mp-5">
      <div className="c-room-card ">
        {cart ? cart.map((item) => (
          <CartItem key={item.id} roomId={item.id_room} handleRemove={() => removeRoom(item.id)} increaseTotal={increaseTotal} decreaseTotal={decreaseTotal}/>
        )) : <div className="d-flex justify-content-center align-items-center" style={{height: '100%'}}>Cart is empty</div>}
        <br />
      </div>
    </div>
  );
};

export default RoomCart;