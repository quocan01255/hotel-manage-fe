export const Pay = (room) => {
  return (dispatch) => {
    fetch("http://localhost:3000/rooms")
      .then((response) => response.json())
      .then((rooms) => {
        const IteamIndex = rooms.findIndex((iteam) => iteam.id === room.id);
        console.log(IteamIndex);

        if (IteamIndex >= 0) {
          rooms[IteamIndex].quantity += 1;
          dispatch({
            type: "ADD_CART",
            payload: room,
          });
        } else {
          dispatch({
            type: "ADD_CART",
            payload: room,
          });
        }
      })
      .catch((error) => {});
  };
};
