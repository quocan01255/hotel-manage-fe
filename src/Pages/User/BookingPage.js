import SearchBar from "../../Components/User/search_bar/SearchBar"
import ListRooms from "../../Components/User/ListRooms"
import HeaderBooking from "../../Components/User/HeaderBooking"



function BookingPage() {
    return (
        <div style={{ backgroundColor: '#f8f8f8' }}>
            <div style={{ backgroundColor: '#f8f8f8', margin: '0 auto' }} className='container'>
               <HeaderBooking/>
               <SearchBar/>
               <ListRooms/>
            </div>
        </div>
    )
}

export default BookingPage