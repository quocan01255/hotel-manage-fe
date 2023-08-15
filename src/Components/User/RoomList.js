import React from "react";
import RoomCard from "./RoomCard";
import roomListData from "../Components/RoomListData";

const RoomList = () => {
  return (
    <div>
      {roomListData.map((room, index) => (
        <RoomCard key={index} roomInfo={room} />
      ))}
    </div>
  );
};

export default RoomList;
