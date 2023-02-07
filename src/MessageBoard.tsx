import { Link, Outlet } from "react-router-dom";
import Login from "./Login";
import { useContext } from "react";
import { UserContext } from "./App";


export default function MessageBoard() {
    const userProfile = useContext(UserContext)
    return (
        <div className="message-board-container">
            <Link to="/1">
                <h2 className="message-board-header-link">Message Board</h2>
            </Link>
            {userProfile.session ? (
                <></>
            ) : (
                <h2 
                    className="message-board-login-message"
                    data-e2e="message-board-login-message"
                >
                    You have to <Login/> to join the conversation!
                </h2>
            )}
            <Outlet />
        </div>
    )
}