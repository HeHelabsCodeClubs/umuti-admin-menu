import React, { Component } from 'react';
import Notifications from 'react-notify-toast';
import { Link } from 'react-router-dom';
// import JWT from 'jwt-client';
// import Jumbo from '../../reusable/Jumbo';
// import { TOKEN_KEY } from '../../../../config';
// import Notification from './notification';
import './style.css';

class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            collapseStatus: 'closed',
            showOrderMenu: false,
            showCustomerMenu: false,
            showConfigMenu: false,
            userData: {}
        };
    this.handleHamburgerIconClick = this.handleHamburgerIconClick.bind(this);
    this.customerHandleHover = this.customerHandleHover.bind(this);
    this.customerHandleLeave = this.customerHandleLeave.bind(this);
    // this.logoutUser = this.logoutUser.bind(this);
    };

    // componentWillMount() {
    //     this.getUser();
    // }

    // logoutUser(e) {
    //     e.preventDefault();
    //     localStorage.removeItem(TOKEN_KEY);
    //     window.location.replace('/');
    // }

    handleHamburgerIconClick(e) {
        e.preventDefault();
        const { collapseStatus } = this.state;
        if (collapseStatus === 'closed') {
            this.setState({
                collapseStatus: 'show'
            });
        } else {
            this.setState({
                collapseStatus: 'closed'
            });
        }
    }

    // getUser() {
    //     const token = JWT.remember(TOKEN_KEY);
    //     if (token !== null) {
    //         const public_claims = token.claim;
    //         const user = {
    //             username: public_claims.username,
    //             full_names: public_claims.full_name,
    //             email: public_claims.email,
    //             phone: public_claims.phone
    //         };

    //         this.setState({ userData: user });
    //     }
    // }
    customerHandleHover () {
        this.setState({ showCustomerMenu: true });
    };
      
    customerHandleLeave () {
        this.setState({ showCustomerMenu: false });
    };

    render() {
        const borderClass = this.props.hasBorder ? ' dashed-border' : '';
        const backgroundColorClass = this.props.hasWhiteBackground ? 'white-background' : '';
        const { children } = this.props;
        const { collapseStatus, userData, clientInfoData } = this.state;
        const collapseClasses = collapseStatus === 'closed' ? 'collapse navbar-collapse' : 'collapse navbar-collapse show';
        return(
            <div className="common-header">
                <Notifications />
                {/* <div className="top-panel row">
                    <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12 col-reset">
                        <Link to="/dashboard"><img src={clientInfoData.data.logo} className='comp-logo' /></Link>
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12 col-reset">
                        <div className="user-account">
                            <img src="https://res.cloudinary.com/hehe/image/upload/v1535021246/Iposita/EMS_logo2.png" className='user-pic' />
                            <span className="user-name">{userData.full_names}</span>
                            <button
                            className="not-icon"
                            onClick={this.logoutUser}
                            >Logout</button>
                            <span><Notification /></span>
                        </div>
                        
                    </div>
                </div> */}

                {/* top panel */}

                <div>
                    {children}
                </div>
                <div className="main-menu row">
                    <button 
                    className="navbar-toggler btn barBtn" 
                    type="button" data-toggle="collapse" 
                    data-target="#navbarSupportedContent" 
                    aria-controls="navbarSupportedContent" 
                    aria-expanded="false" 
                    aria-label="Toggle navigation"
                    onClick={this.handleHamburgerIconClick}
                    >
                    <span className="navbar-toggler-icon"><span className="icon-list-view"></span></span>
                    </button>
                    <div className={collapseClasses} id="navbarSupportedContent">
                        <a 
                        className="hamburger-closer"
                        onClick={this.handleHamburgerIconClick}
                        >
                        <span className="not-close icon-icon_close"></span>
                        </a>
                        <nav className="nav nav-container">
                            <ul className="nav__menu">
                                <li className="nav__menu-item">
                                    <Link to="/dashboard" className={this.props.view === 'dashboard' ? 'main-menu__item-a active' : 'main-menu__item-a'}>Dashboard</Link>
                                </li>
                                <li className="nav__menu-item">
                                    <Link to="/orders" className={this.props.view === 'orders' ? 'main-menu__item-a active' : 'main-menu__item-a'}>Requests</Link>
                                </li>
                                <li className="nav__menu-item" onMouseLeave={this.customerHandleLeave}>
                                    <div 
                                    onMouseEnter={this.customerHandleHover} 
                                    className={this.props.view === 'customers' || this.props.view === 'customercreate' ? 'main-menu__item-a active' : 'main-menu__item-a'
                                    }>
                                    Customers
                                    <span className={this.state.showCustomerMenu ? 'icon-icon_up-arrow-small' : 'icon-icon_down-arrow-small'}></span>
                                    </div>
                                    { this.state.showCustomerMenu && 
                                        <ul className="nav__submenu">
                                            <li className="nav__submenu-item ">
                                                <Link to="/customers" className={this.props.view === 'customers' ? 'sub-menu__item-a active' : 'sub-menu__item-a'}>All customers</Link>
                                            </li>
                                            <li className="nav__submenu-item ">
                                                <Link to="/customers/create/details" className={this.props.view === 'customercreate' ? 'sub-menu__item-a active' : 'sub-menu__item-a'}>Add Customer</Link>
                                            </li>
                                        </ul>
                                    }
                                </li>
                                <li className="nav__menu-item">
                                    <Link to="/invoices" className={this.props.view === 'invoices' ? 'main-menu__item-a active' : 'main-menu__item-a'}>Invoices</Link>
                                </li>
                                <li className="nav__menu-item">
                                    <Link to="/config" className={this.props.view === 'configurations' ? 'main-menu__item-a active' : 'main-menu__item-a'}>Configurations</Link>
                                </li>
                                <li className="nav__menu-item">
                                    <Link to="/messages" className={this.props.view === 'messages' ? 'main-menu__item-a active' : 'main-menu__item-a'}>Messages</Link>
                                </li>
                                <li className="nav__menu-item">
                                    <Link to="/users" className={this.props.view === 'users' ? 'main-menu__item-a active' : 'main-menu__item-a'}>Users</Link>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>   
            </div>         
        );
    }
};

export default Header;







  