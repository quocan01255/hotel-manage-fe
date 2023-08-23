import { useCallback } from "react";
import "./roomitem.css";
import { useDispatch, useSelector } from "react-redux";

function RoomItem({
  idTab,
  priceType,
  name,
  detail,
  description,
  price,
  img,
  addRoom,
}) {
  // const cartState = useSelector(state => state.cartReducer)
  const dispatch = useDispatch();

  const currencyFormat = useCallback((num) => {
    return num.replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,");
  }, []);

  const handleClick = () => {
    addRoom(idTab);
  };

  return (
    <div className="row room">
      <div className="room__content">
        <div className="col-4 room__img">
          <img src={img}></img>
        </div>
        <div className="col-8 room__container">
          <div className="room__title">{name}</div>
          <div className="room__description">
            <p>{detail}</p>
          </div>
          <div className="room__icon">
            <i className="fa-solid fa-wifi"></i>
            <i className="fa-solid fa-phone"></i>
            <i className="fa-regular fa-snowflake"></i>
            <i className="fa-solid fa-tv"></i>
            <i className="fa-solid fa-shower"></i>
          </div>
        </div>
        {/* <div className="col-3 room__btn">
                        <button className='btn btn-primary'>ADD</button>
                    </div> */}
      </div>
      <div className="room__detail">
        <nav>
          <div
            className="nav nav-tabs room__detail-navbar"
            id="nav-tab"
            role="tablist"
          >
            <button
              className="nav-link active room__detail-navtab"
              id="nav-home-tab"
              data-bs-toggle="tab"
              data-bs-target={`#nav-home${idTab}`}
              type="button"
              role="tab"
              aria-controls="nav-home"
              aria-selected="true"
            >
              BEST AVAILABLE RATE
            </button>
            {/* <button
                            className="nav-link room__detail-navtab"
                            id="nav-contact-tab"
                            data-bs-toggle="tab"
                            data-bs-target={`#nav-contact${idTab}`}
                            type="button"
                            role="tab"
                            aria-controls="nav-contact"
                            aria-selected="false"
                        >
                            STAY 3 PAY 2
                        </button> */}
          </div>
        </nav>
        <div className="tab-content room__tab" id="nav-tabContent">
          <div
            className="tab-pane fade show active room__tab-description"
            id={`nav-home${idTab}`}
            role="tabpanel"
            aria-labelledby="nav-home-tab"
          >
            Room with available rate and includes:
            <ul className="room__tab-list">
              {description.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
            <div className="room__tab-booking">
              {priceType === "VND" ? (
                <span className="room_tab-price">
                  {currencyFormat(price)}
                  <span style={{ fontSize: "16px" }}>đ</span>
                </span>
              ) : (
                <span className="room_tab-price">
                  {(price / 23805.6).toFixed(2)}
                  <span style={{ fontSize: "16px" }}>US$</span>
                </span>
              )}
              <button
                className="btn btn-primary room_tab-btn"
                onClick={handleClick}
              >
                ADD
              </button>
            </div>
          </div>
          {/* <div
                        className="tab-pane fade room__tab-description"
                        id={`nav-contact${idTab}`}
                        role="tabpanel"
                        aria-labelledby="nav-contact-tab"
                    >
                        Room with best sale and includes:
                        <ul className='room__tab-list'>
                            {description.map((item, index) => <li key={index}>{item}</li>)}
                        </ul>
                        <div className='room__tab-booking'>
                            {priceType === 'VND' ?
                                (
                                    <span className='room_tab-price'>
                                        {currencyFormat(priceSale)}
                                        <span style={{ fontSize: '16px' }}>đ</span>
                                    </span>
                                )
                                :
                                (
                                    <span className='room_tab-price'>
                                        {(priceSale / 23805.6).toFixed(2)}
                                        <span style={{ fontSize: '16px' }}>US$</span>
                                    </span>
                                )
                            }
                            <Link to="/homecart"  className='btn btn-primary room_tab-btn'>ADD</Link>
                        </div>
                    </div> */}
        </div>
      </div>
    </div>
  );
}

export default RoomItem;

// import { Link } from 'react-router-dom'
// import './roomitem.css'
// import { useDispatch } from 'react-redux'
// import { Pay } from '../../../redux/actions/PayAction'
// import { Button } from 'bootstrap'

// function RoomItem({ idTab, priceType, name, detail, description, price, priceSale, img,room }) {
//     const dispatch = useDispatch()
//     const currencyFormat = (num) => {
//         return num.replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
//     }
//     const send = (e)=>{
//         // console.log(e);
//         dispatch(Pay(e));
//       }
//     return (
//         <div className="row room">
//             <div className='room__content'>
//                 <div className="col-4 room__img">
//                     <img src={img}></img>
//                 </div>
//                 <div className="col-8 room__container">
//                     <div className="room__title">{name}</div>
//                     <div className="room__description">
//                         <p>
//                             {detail}
//                         </p>
//                     </div>
//                     <div className="room__icon">
//                         <i className="fa-solid fa-wifi"></i>
//                         <i className="fa-solid fa-phone"></i>
//                         <i className="fa-regular fa-snowflake"></i>
//                         <i className="fa-solid fa-tv"></i>
//                         <i className="fa-solid fa-shower"></i>
//                     </div>
//                 </div>
//                 {/* <div className="col-3 room__btn">
//                         <button className='btn btn-primary'>ADD</button>
//                     </div> */}
//             </div>
//             <div className='room__detail'>
//                 <nav>
//                     <div className="nav nav-tabs room__detail-navbar" id="nav-tab" role="tablist">
//                         <button
//                             className="nav-link active room__detail-navtab"
//                             id="nav-home-tab"
//                             data-bs-toggle="tab"
//                             data-bs-target={`#nav-home${idTab}`}
//                             type="button"
//                             role="tab"
//                             aria-controls="nav-home"
//                             aria-selected="true"
//                         >
//                             BEST AVAILABLE RATE
//                         </button>
//                         <button
//                             className="nav-link room__detail-navtab"
//                             id="nav-contact-tab"
//                             data-bs-toggle="tab"
//                             data-bs-target={`#nav-contact${idTab}`}
//                             type="button"
//                             role="tab"
//                             aria-controls="nav-contact"
//                             aria-selected="false"
//                         >
//                             STAY 3 PAY 2
//                         </button>
//                     </div>
//                 </nav>
//                 <div className="tab-content room__tab" id="nav-tabContent">
//                     <div
//                         className="tab-pane fade show active room__tab-description"
//                         id={`nav-home${idTab}`}
//                         role="tabpanel"
//                         aria-labelledby="nav-home-tab"
//                     >
//                         Room with available rate and includes:
//                         <ul className='room__tab-list'>
//                             {description.map((item, index) => <li key={index}>{item}</li>)}
//                         </ul>
//                         <div className='room__tab-booking'>
//                             {priceType === 'VND' ?
//                                 (
//                                     <span className='room_tab-price'>
//                                         {currencyFormat(price)}
//                                         <span style={{ fontSize: '16px' }}>đ</span>
//                                     </span>
//                                 )
//                                 :
//                                 (
//                                     <span className='room_tab-price'>
//                                         {(price / 23805.6).toFixed(2)}
//                                         <span style={{ fontSize: '16px' }}>US$</span>
//                                     </span>
//                                 )
//                             }
//                             <button onClick={()=> send(room)} className='btn btn-primary room_tab-btn'>ADD</button>
//                         </div>
//                     </div>
//                     <div
//                         className="tab-pane fade room__tab-description"
//                         id={`nav-contact${idTab}`}
//                         role="tabpanel"
//                         aria-labelledby="nav-contact-tab"
//                     >
//                         Room with best sale and includes:
//                         <ul className='room__tab-list'>
//                             {description.map((item, index) => <li key={index}>{item}</li>)}
//                         </ul>
//                         <div className='room__tab-booking'>
//                             {priceType === 'VND' ?
//                                 (
//                                     <span className='room_tab-price'>
//                                         {currencyFormat(priceSale)}
//                                         <span style={{ fontSize: '16px' }}>đ</span>
//                                     </span>
//                                 )
//                                 :
//                                 (
//                                     <span className='room_tab-price'>
//                                         {(priceSale / 23805.6).toFixed(2)}
//                                         <span style={{ fontSize: '16px' }}>US$</span>
//                                     </span>
//                                 )
//                             }
//                             <button onClick={()=> send(room)} className='btn btn-primary room_tab-btn'>ADD</button>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>

//     )
// }

// export default RoomItem
