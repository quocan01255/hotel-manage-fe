import React, { useState, useEffect } from "react";
import RoomCard from "../User/RoomCard"; 

const RoomList = () => {
  const [rooms, setRooms] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3001/rooms")
      .then((response) => response.json())
      .then((data) => {
        setRooms(data);
      })
      .catch((error) => {
        console.error("Error fetching data from API:", error);
      });
  }, []);

  return (
    <div>
      {rooms.map((room, index) => (
        <RoomCard key={index} roomInfo={room} />
      ))}
    </div>
  );
};

export default RoomList;