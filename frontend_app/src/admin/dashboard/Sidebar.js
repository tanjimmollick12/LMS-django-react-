import "./sidebar.css";
import {
    LineStyle,
    Timeline,
    TrendingUp,
    PermIdentity,
    Storefront, Add, Chat,

} from "@material-ui/icons";
import {Link} from "react-router-dom";

export default function Sidebar() {
    return (
        <div className="sidebar">
            <div className="sidebarWrapper">
                <div className="sidebarMenu">
                    <h3 className="sidebarTitle">Dashboard</h3>
                    <ul className="sidebarList">
                        <Link to="/" className="link">
                            <li className="sidebarListItem active">
                                <LineStyle className="sidebarIcon"/>
                                Home
                            </li>
                        </Link>
                    </ul>
                </div>
                <div className="sidebarMenu">
                    <h3 className="sidebarTitle">Quick Menu</h3>
                    <ul className="sidebarList">
                        <Link to="/loanee" className="link">
                            <li>
                                <PermIdentity className="sidebarIcon"/>
                                Loanee
                            </li>
                        </Link>
                        <Link to="/addloan" className="link">
                            <li>

                                <Add className={'sidebarIcon'}></Add>
                                Loan
                            </li>
                        </Link>
                        <Link to="/chatlist" className="link">
                            <li>
                                <Chat className={'sidebarIcon'}/>
                                Chat
                            </li>
                        </Link>
                    </ul>
                </div>


            </div>
        </div>
    )
        ;
}
