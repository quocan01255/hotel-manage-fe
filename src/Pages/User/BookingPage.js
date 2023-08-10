import SeachBar from "../../components/user/search_bar/SearchBar"
import ListRooms from "../../components/user/list_rooms/ListRooms"
import Header from "../../components/user/Header"
import Login from "../../components/form_login/Login"
import Register from "../../components/form_register/Register"
import Footers from "../../components/user/Footers"

function BookingPage() {
    return (
        <div style={{ backgroundColor: '#f8f8f8' }}>
            <div style={{ backgroundColor: '#f8f8f8', margin: '0 auto' }} className='container'>
                <SeachBar />
                <ListRooms />
            </div>
            <Footers />
        </div>
    )
}

export default BookingPage