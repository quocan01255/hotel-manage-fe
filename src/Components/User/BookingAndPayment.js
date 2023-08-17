// import React, { useState } from "react";
// import BookingSummary from "./BookingSummary";
// import PayCard from "./PayCard";

// const BookingAndPayment = () => {
//   const [showBookingSummary, setShowBookingSummary] = useState(false);

//   const handleBookClick = () => {
//     setShowBookingSummary(true);
//   };

//   return (
//     <div>
//       <div className="payment-form">
//         <div style={{ fontWeight: "bold", fontSize: "20px" }}>Your Details</div>
//         <form>
//           {/* Your form inputs here */}
//           <button
//             type="button"
//             className="btn btn-primary"
//             onClick={handleBookClick}
//           >
//             Book
//           </button>
//         </form>
//       </div>
//       {showBookingSummary ? (
//         <BookingSummary />
//       ) : (
//         <PayCard onBookClick={handleBookClick} />
//       )}
//     </div>
//   );
// };

// export default BookingAndPayment;
