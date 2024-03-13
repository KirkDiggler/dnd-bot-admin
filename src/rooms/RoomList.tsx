import {Route, Routes} from "react-router-dom";

const RoomList = () => {
    return (
        <div>
        <h2>Rooms</h2>
        <ul>
            <li>Room 1</li>
            <li>Room 2</li>
        </ul>
        </div>
    );
}

const RoomListRoute = () => {
    return (
        <div>
            <Routes>
                <Route path="/rooms" element={<RoomList />} />

            </Routes>
        </div>
    );
}

export default RoomListRoute;