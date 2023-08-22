import FilterManagerBooking from './filterManagerBooking';
import SearchBar from './searchBarManagerBooking';
import { Breadcrumb } from 'antd';

function SearchFormBooking() {
    return (
        <>
            <Breadcrumb className='breadcrumb'>
                <Breadcrumb.Item className='breadcrumbItem'>Admin</Breadcrumb.Item>
                <Breadcrumb.Item className='breadcrumbItem'>Manager Booking</Breadcrumb.Item>
            </Breadcrumb>
            <div className="search-form-booking-main">
                <div className="search-form-booking-child">
                    <SearchBar />
                    <FilterManagerBooking />
                </div>
            </div>
        </>
    )
}
export default SearchFormBooking;