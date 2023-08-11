import RoomItem from "./room_item/RoomItem";

function ListRooms() {
    return (
        <>
            <RoomItem idTab={1} priceType="VND"/>
            <RoomItem idTab={2} priceType="VND"/>
            <RoomItem idTab={3} priceType="VND"/>

        </>
    )
}

export default ListRooms