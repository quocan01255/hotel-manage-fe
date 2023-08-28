export const add = (idRoom, loggedIn, idUser) => {
  // let userId = "";
  // if (JSON.parse(localStorage.getItem("user"))) {
  //   userId = JSON.parse(localStorage.getItem("user")).id;
  // }
  if (!localStorage.getItem("guestCart")) {
    localStorage.setItem('guestCart', JSON.stringify([]))
  }

  let guestCart = JSON.parse(localStorage.getItem("guestCart"))

  return (dispatch) => {
    // Check if logged in
    if (loggedIn) {
      fetch("http://localhost:3001/userCart")
        .then((response) => response.json())
        .then((products) => {
          // Check if product is existed
          const isExist = products.findIndex(
            (product) => product.idRoom === idRoom && product.idUser === idUser
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
              .catch((err) => { });
          } else {
            fetch(`http://localhost:3001/userCart`)
              .then((response) => response.json())
              .then((data) => {
                const findRoom = data.find(
                  (room) => room.idRoom === idRoom && room.idUser === idUser
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
        localStorage.setItem('guestCart', JSON.stringify(guestCart))
        dispatch({
          type: "ADD",
          payload: {
            message: "Add room success!",
          },
        });
      } else {
        guestCart[findProduct].quantity += 1;
        localStorage.setItem('guestCart', JSON.stringify(guestCart))
        dispatch({
          type: "UPDATE",
          payload: {
            message: "Update cart success!",
          },
        });
      }
    }
  };
};

export const remove = (idRoom, loggedIn, idUser) => {
  // let userId = "";
  // if (JSON.parse(localStorage.getItem("user"))) {
  //   userId = JSON.parse(localStorage.getItem("user")).id;
  // }
  if (!localStorage.getItem("guestCart")) {
    localStorage.setItem('guestCart', JSON.stringify([]))
  }

  let guestCart = JSON.parse(localStorage.getItem("guestCart"))

  return (dispatch) => {
    // Check if logged in
    if (loggedIn) {
      fetch("http://localhost:3001/userCart")
        .then((response) => response.json())
        .then((products) => {
          // Check if product is existed
          const findProduct = products.find(
            (product) => product.idRoom === idRoom && product.idUser === idUser
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
      if (findProduct >= 0) {
        let result
        result = guestCart.filter((item, index) => index !== findProduct)
        localStorage.setItem('guestCart', JSON.stringify(result))
        dispatch({
          type: "REMOVE",
          payload: {
            message: "Remove room success!",
          },
        });
      }
    }
  };
};

export const increase = (idRoom, loggedIn, idUser) => {
  if (!localStorage.getItem("guestCart")) {
    localStorage.setItem('guestCart', JSON.stringify([]))
  }

  let guestCart = JSON.parse(localStorage.getItem("guestCart"))

  return (dispatch) => {
    // Check if logged in
    if (loggedIn) {
      fetch("http://localhost:3001/userCart")
        .then((response) => response.json())
        .then((products) => {
          // Check if product is existed
          fetch(`http://localhost:3001/userCart`)
            .then((response) => response.json())
            .then((data) => {
              const findRoom = data.find(
                (room) => room.idRoom === idRoom && room.idUser === idUser
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
                    type: "INCREASE",
                    payload: {
                      message: "",
                      quantity: findRoom.quantity + 1
                    },
                  });
                })
                .catch((err) => {
                  console.log(err);
                });
            });
        });
    } else {
      const findProduct = guestCart.findIndex((item) => item.idRoom === idRoom);
      guestCart[findProduct].quantity += 1;
      localStorage.setItem('guestCart', JSON.stringify(guestCart))
      dispatch({
        type: "INCREASE",
        payload: {
          message: "",
          quantity: guestCart[findProduct].quantity + 1
        },
      });
    }
  };
}

export const decrease = (idRoom, loggedIn, idUser) => {
  if (!localStorage.getItem("guestCart")) {
    localStorage.setItem('guestCart', JSON.stringify([]))
  }

  let guestCart = JSON.parse(localStorage.getItem("guestCart"))

  return (dispatch) => {
    // Check if logged in
    if (loggedIn) {
      fetch("http://localhost:3001/userCart")
        .then((response) => response.json())
        .then((products) => {
          // Check if product is existed
          fetch(`http://localhost:3001/userCart`)
            .then((response) => response.json())
            .then((data) => {
              const findRoom = data.find(
                (room) => room.idRoom === idRoom && room.idUser === idUser
              );
              if (findRoom.quantity > 1) {
                fetch(`http://localhost:3001/userCart/${findRoom.id}`, {
                  method: "PUT",
                  headers: { "Content-Type": "application/json" },
                  body: JSON.stringify({
                    idUser: idUser,
                    idRoom: idRoom,
                    quantity: findRoom.quantity - 1,
                  }),
                })
                  .then((res) => res.json())
                  .then(() => {

                  })
                  .catch((err) => {
                  });
              }
              dispatch({
                type: "DECREASE",
                payload: {
                  message: "",
                  isDecrease: true,
                  quantity: findRoom.quantity - 1
                },
              });
            });
        });
    } else {
      const findProduct = guestCart.findIndex((item) => item.idRoom === idRoom);
      if (guestCart[findProduct].quantity > 1) {
        guestCart[findProduct].quantity -= 1;
      }
      localStorage.setItem('guestCart', JSON.stringify(guestCart))
      dispatch({
        type: "DECREASE",
        payload: {
          message: "",
          quantity: guestCart[findProduct].quantity - 1
        },
      });
    }
  };
}

export const resetCartMessage = () => {
  return (dispatch) => {
    dispatch({
      type: 'RESET',
    });
  }
}

export const resetCart = (listIdRoom, loggedIn, idUser) => {
  if (!localStorage.getItem("guestCart")) {
    localStorage.setItem('guestCart', JSON.stringify([]))
  }

  let guestCart = JSON.parse(localStorage.getItem("guestCart"))

  return (dispatch) => {
    // Check if logged in
    if (loggedIn) {
      const deleteRoom = (id) => {
        fetch(`http://localhost:3001/userCart/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then(() => {
          });
      }
      
      fetch("http://localhost:3001/userCart")
        .then((response) => response.json())
        .then((products) => {
          // Check if product is existed
          let userCart = products.filter(product => product.idUser === idUser)
          listIdRoom.forEach((idRoom) => {
            const findProduct = userCart.find(
              (product) => product.idRoom === idRoom
            );
            if (findProduct) {
              deleteRoom(findProduct.id)
            }
          })
          dispatch({
            type: "RESETCART",
            payload: {
              message: "",
              cartLength: 0,
            },
          });
        });
    } else {
      localStorage.setItem('guestCart', JSON.stringify([]))
      dispatch({
        type: "RESETCART",
        payload: {
          message: "",
          cartLength: 0,
        },
      });
    }
  };
}