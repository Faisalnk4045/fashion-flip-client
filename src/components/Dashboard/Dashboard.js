import React, { useState } from 'react';
import { Switch, Route, Link, useRouteMatch } from "react-router-dom";
import MyOrders from '../MyOrders/MyOrders';
import Pay from '../Pay/Pay';
import UserReview from '../UserReview/UserReview';
import ManageOrders from '../ManageOrders/ManageOrders';
import AddProduct from '../AddProduct/AddProduct';
import ManageProducts from '../ManageProducts/ManageProducts';
import useAuth from '../hooks/useAuth';
import AdminRoute from '../AdminRoute/AdminRoute';
import './Dashboard.css';

const Dashboard = () => {
    let { path, url } = useRouteMatch();

    const [toggle, setToggle] = useState(true);
    const handleToggle = () => {
        setToggle(!toggle);
    }

    const { user, admin, logOut } = useAuth();

    return (
        <div id="dashboard">
            <div className="wrapper">

                {/* Dashboard Sidebar  */}
                <nav id="sidebar" className={toggle ? '' : 'active'}>
                    <div className="sidebar-header">
                        <Link to={'/home'}><h3>Fashion <br /> Flip <br />Dashboard</h3></Link>
                    </div>

                    <ul className="list-unstyled components">
                        {admin ? <div>
                            <li>
                                <Link to={`${url}/manageOrders`}>Manage All Orders</Link>
                            </li>
                            <li>
                                <Link to={`${url}/addProduct`}>Add A Product</Link>
                            </li>
                            <li>
                                <Link to={`${url}/manageProducts`}>Manage Products</Link>
                            </li>
                        </div> : <div>
                            <li>
                                <Link to={`${url}/pay`}>Pay</Link>
                            </li>
                            <li>
                                <Link to={`${url}/myOrders`}>My Orders</Link>
                            </li>
                            <li>
                                <Link to={`${url}/review`}>Review</Link>
                            </li></div>}
                        <li>
                            <Link to={`/home`} onClick={logOut}>Logout</Link>
                        </li>
                    </ul>
                </nav>

                {/* Dashboard Content */}
                <div id="content" className='container-fluid'>

                    <nav className="navbar navbar-expand-lg navbar-light bg-light rounded-3 shadow-sm">
                        <div className="container-fluid">

                            <button onClick={handleToggle} type="button" id="sidebarCollapse" className="btn btn-outline-secondary">
                                <i className="fas fa-align-left"></i>
                            </button>

                            <button className="navbar-toggler px-3 py-2" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                <i className="fas fa-align-justify"></i>
                            </button>

                            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                                <ul className="nav navbar-nav ms-auto">
                                    <li className="nav-item active">
                                        <span className="nav-link"><Link to={'/home'}><i className="fas fa-home"></i> Home</Link></span>
                                    </li>
                                    <li className="nav-item active">
                                        <span className="nav-link"><Link to={'/home'}><i className="fas fa-user"></i> {user.displayName}</Link></span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </nav>

                    <Switch>
                        {/* <Route exact path={path}>
                            <h3>Dashboard Home</h3>
                        </Route> */}
                        <Route path={`${path}/pay`}>
                            <Pay></Pay>
                        </Route>
                        <Route path={`${path}/myOrders`}>
                            <MyOrders></MyOrders>
                        </Route>
                        <Route path={`${path}/review`}>
                            <UserReview></UserReview>
                        </Route>
                        <AdminRoute path={`${path}/manageOrders`}>
                            <ManageOrders></ManageOrders>
                        </AdminRoute>
                        <AdminRoute path={`${path}/addProduct`}>
                            <AddProduct></AddProduct>
                        </AdminRoute>
                        <AdminRoute path={`${path}/manageProducts`}>
                            <ManageProducts></ManageProducts>
                        </AdminRoute>
                    </Switch>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;