const guestCart = [];
var userId;

export const add = (idRoom, loggedIn, idUser) => {
  let userId = "";
  if (JSON.parse(localStorage.getItem("user"))) {
    userId = JSON.parse(localStorage.getItem("user")).id;
  }

  return (dispatch) => {
    // Check if logged in
    if (loggedIn) {
      fetch("http://localhost:3001/userCart")
        .then((response) => response.json())
        .then((products) => {
          // Check if product is existed
          const isExist = products.findIndex(
            (product) => product.idRoom === idRoom && product.idUser === userId
          );
          if (isExist < 0) {
            fetch("http://localhost:3001/userCart", {
              method: "POST",
              body: JSON.stringify({
                idUser: idUser,
                idRoom: idRoom,
                quantity: 1,
              }),
              headers: {
                "Content-type": "application/json; charset=UTF-8",
              },
            })
              .then((response) => response.json())
              .then((data) => {
                dispatch({
                  type: "ADD",
                  payload: {
                    message: "Add room success!",
                  },
                });
              })
              .catch((err) => {});
          } else {
            fetch(`http://localhost:3001/userCart`)
              .then((response) => response.json())
              .then((data) => {
                const findRoom = data.find(
                  (room) => room.idRoom === idRoom && room.idUser === userId
                );
                fetch(`http://localhost:3001/userCart/${findRoom.id}`, {
                  method: "PUT",
                  headers: { "Content-Type": "application/json" },
                  body: JSON.stringify({
                    idUser: idUser,
                    idRoom: idRoom,
                    quantity: findRoom.quantity + 1,
                  }),
                })
                  .then((res) => res.json())
                  .then(() => {
                    dispatch({
                      type: "UPDATE",
                      payload: {
                        message: "Update cart success!",
                      },
                    });
                  })
                  .catch((err) => {
                    console.log(err);
                  });
              });
          }
        });
    } else {
      const findProduct = guestCart.findIndex((item) => item.idRoom === idRoom);
      if (findProduct < 0) {
        guestCart.push({
          idRoom: idRoom,
          quantity: 1,
        });
        dispatch({
          type: "ADD",
          payload: {
            message: "Add room success!",
            guestCart,
          },
        });
      } else {
        guestCart[findProduct].quantity += 1;
        dispatch({
          type: "UPDATE",
          payload: {
            message: "Update cart success!",
            guestCart,
          },
        });
      }
    }
  };
};

export const remove = (idRoom, loggedIn, idUser) => {
  let userId = "";
  if (JSON.parse(localStorage.getItem("user"))) {
    userId = JSON.parse(localStorage.getItem("user")).id;
  }

  return (dispatch) => {
    // Check if logged in
    if (loggedIn) {
      fetch("http://localhost:3001/userCart")
        .then((response) => response.json())
        .then((products) => {
          // Check if product is existed
          const findProduct = products.find(
            (product) => product.idRoom === idRoom && product.idUser === userId
          );
          if (findProduct) {
            fetch(`http://localhost:3001/userCart/${findProduct.id}`, {
              method: "DELETE",
            })
              .then((res) => res.json())
              .then(() => {
                dispatch({
                  type: "REMOVE",
                  payload: {
                    message: "Remove room success!",
                  },
                });
              });
          }
        });
    } else {
      const findProduct = guestCart.findIndex((item) => item.idRoom === idRoom);
      if (findProduct < 0) {
        guestCart.push({
          idRoom: idRoom,
          quantity: 1,
        });
        dispatch({
          type: "ADD",
          payload: {
            message: "Add room success!",
            guestCart,
          },
        });
      } else {
        guestCart[findProduct].quantity += 1;
        dispatch({
          type: "UPDATE",
          payload: {
            message: "Update cart success!",
            guestCart,
          },
        });
      }
    }
  };
};
