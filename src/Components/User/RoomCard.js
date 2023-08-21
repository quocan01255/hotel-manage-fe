// import React, { useEffect, useState } from "react";
// import { useSelector } from "react-redux";
// import { useParams } from "react-router-dom";
// const RoomCard = () => {
//   const { id } = useParams();
//   const [data, setData] = useState([]);

//   const getdata = useSelector((state) => state.PayReducer.carts);

//   const compare = () => {
//     let comparedata = getdata.filter((e) => {
//       return e.id == id;
//     });
//     setData(comparedata);
//   };

//   useEffect(() => {
//     compare();
//   }, [id]);
//   const currencyFormat = (num) => {
//     return num.replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,");
//   };
//   return (
//     <div className="mt-5 mp-5">
//       <div className="c-room-card mt-5 mb-5 pt-5 pb-5 ">
//         {data.map((element) => (
//           <div key={element.id}>
//             <img className="c-room-image" src={element.img} alt="Room Image" />
//             <div className="c-form-details">
//               <div className="c-form-title">{element.name}</div>
//               <div className="c-room-subtitle">{element.detail}</div>
//               <div className="c-room-features">{element.description}</div>
//               <div className="c-room-rating">Rating: 4.5</div>
//               <div className="c-room-price">
//                 {currencyFormat(element.price)} VND
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default RoomCard;

// import React, { useEffect, useState } from "react";
// import { useSelector } from "react-redux";
// import { useParams } from "react-router-dom";

// const RoomCard = () => {
//   const { id } = useParams();
//   const [addedRooms, setAddedRooms] = useState([]);

//   const cartItems = useSelector((state) => state.PayReducer.carts);

//   useEffect(() => {
//     const filteredRooms = cartItems.filter((item) => item.id === parseInt(id));
//     setAddedRooms(filteredRooms);
//   }, [cartItems, id]);

//   const currencyFormat = (num) => {
//     return num.replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,");
//   };

//   return (
//     <div className="mt-5 mp-5">
//       <div className="c-room-card mt-5 mb-5 pt-5 pb-5">
//         {addedRooms.map((room) => (
//           <div key={room.id}>
//             <img className="c-room-image" src={room.img} alt="Room Image" />
//             <div className="c-form-details">
//               <div className="c-form-title">{room.name}</div>
//               <div className="c-room-subtitle">{room.detail}</div>
//               <div className="c-room-features">{room.description}</div>
//               <div className="c-room-rating">Rating: 4.5</div>
//               <div className="c-room-price">
//                 {currencyFormat(room.price)} VND
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default RoomCard;

import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

const RoomCard = () => {
  const { id } = useParams();
  const [addedRooms, setAddedRooms] = useState([]);
  const [rooms, setRooms] = useState([]);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3001/userCart")
      .then((response) => response.json())
      .then((cart) => {
        fetch("http://localhost:3001/rooms")
          .then((response) => response.json())
          .then((rooms) => {
            setRooms(rooms);
            let idUser;
            if (localStorage.getItem("user")) {
              idUser = JSON.parse(localStorage.getItem("user")).id;
            }
            const filteredRooms = cart.filter(
              (product) => product.idUser === idUser
            );
            const result = []
            filteredRooms.forEach((item) => {
              rooms.forEach((room) => {
                if(room.id === item.idRoom) {
                  let quantity = item.quantity
                  result.push({...room, quantity})
                }
              });
            })
           setCart(result);
          })
      })
      .catch((err) => {});
  }, []);

  // useEffect(() => {
  //   console.log("cartItems", cartItems);
  //   const filteredRooms = cartItems.filter((item) => item.idRoom === parseInt(id));
  //   setAddedRooms(filteredRooms);
  // }, [cartItems, id]);

  const currencyFormat = (num) => {
    return num.replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,");
  };

  return (
    <div className="mt-5 mp-5">
      <div className="c-room-card mt-5 mb-5 pt-5 pb-5">
        {cart.map((room) => (
          <div key={room.id}>
            <img className="c-room-image" src={room.img} alt="Hình ảnh phòng" />
            <div className="c-form-details">
              <div className="c-form-title">{room.name}</div>
              <div className="c-room-subtitle">{room.detail}</div>
              <div className="c-room-features">{room.description}</div>
              <div className="c-room-rating">Quantity: {room.quantity}</div>
              <div className="c-room-price">
                {currencyFormat(room.price)} VND
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RoomCard;
