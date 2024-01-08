import { Outlet, Link } from "react-router-dom";

const Layout = () => {
    return (
        <div className="page-layout">
            <div className="sidebar">
                <nav>
                    <ul>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/searchApi">Search Api</Link>
                        </li>
                        <li>
                            <Link to="/lifecycle">Life LifeCycle</Link>
                        </li>
                        <li>
                            <Link to="/javascript">Javascript</Link>
                        </li>
                        <li>
                            <Link to="/testPromise">Promise</Link>
                        </li>
                        <li>
                            <Link to="/executioncontent">Execution context</Link>
                        </li>
                        <li>
                            <Link to="/redux">Redux</Link>
                        </li>
                        <li>
                            <Link to="/todilist">Todo list</Link>
                        </li>
                        <li>
                            <Link to="/githuuser">Get user</Link>
                        </li>
                        <li>
                            <Link to="/useref">Use ref</Link>
                        </li>
                        <li>
                            <Link to="/gitCommit">Git commit</Link>
                        </li>

                    </ul>
                </nav>
            </div>
            <div className="right-sidebar">
                <Outlet />
            </div>
        </div>
    )
};

export default Layout;