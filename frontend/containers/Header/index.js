import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'


const Nav = () => (
    <ul className="navbar-nav mr-auto ml-md-5 navbar__center-nav">
        <li>
            <Link className="navbar__nav-item" to='/'>Home</Link>
        </li>
        <li>
            <Link className="navbar__nav-item" to='/artists'>Artists</Link>
        </li>
        <li>
            <Link className="navbar__nav-item" to='/albums'>Albums</Link>
        </li>
        <li>
            <Link className="navbar__nav-item" to='/contact'>Contact</Link>
        </li>
    </ul>
);

const Dropdown = (props) => (
    <div className={"dropdown-menu " + (props.showDropdown ? "d-block" : "")}>
        <Link className="navbar__nav-item" to='/'>Home</Link>
        <Link className="navbar__nav-item" to='/artists'>Artists</Link>
        <Link className="navbar__nav-item" to='/albums'>Albums</Link>
        <Link className="navbar__nav-item" to='/contact'>Contact</Link>
    </div>
);

const Auth = () => (
    <ul className="navbar-nav ml-auto ml-5">
        <li>
            <Link className="navbar__nav-item" to='/'>Log in</Link>
        </li>
        <span className="navbar__sep d-none d-md-block">or</span>
        <li>
            <Link className="navbar__nav-item" to='/'>Register</Link>
        </li>
    </ul>
);

class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showDropdown: false,
            showMobileMenu: false,
        }
    }

    dropdownHandler = e => {
        e.preventDefault();
        this.setState({
            showDropdown: !this.state.showDropdown
        })
    };

    mobileMenuHandler = e => {
        e.preventDefault();
        this.setState({
            showMobileMenu: !this.state.showMobileMenu
        })
    };

    render () {
        return (
            <nav className="navbar navbar-expand-md navbar-light">
                <a className="navbar-brand mr-5" href="#">webMuzic</a>
                <button className="navbar-toggler" type="button" onClick={this.mobileMenuHandler}>
                    <span className="navbar-toggler-icon">&nbsp;</span>
                </button>
                <div className={"collapse navbar-collapse navbar__nav-block " + (this.state.showMobileMenu ? "show" : "")} >
                    <form className="form-inline my-2 my-lg-0">
                        <div className="position-relative navbar__search">
                            <i className="position-absolute left-1 center-v o-15 fa fa-lg fa-search">&nbsp;</i>
                            <input className="navbar__search-input form-control mr-sm-2" type="text" placeholder="search"
                                   aria-label="Search"/>
                        </div>
                    </form>
                    <Nav/>
                    <ul className="navbar-nav mr-auto ml-5 navbar__nav-dropdown">
                        <li className="nav-item dropdown">
                            <a className="dropdown-toggle navbar__nav-item" href="#"
                               onClick={this.dropdownHandler}>Menu</a>
                                <Dropdown showDropdown={this.state.showDropdown} />
                        </li>
                    </ul>
                    <Auth/>
                </div>
            </nav>
        )
    }
}

export default Header