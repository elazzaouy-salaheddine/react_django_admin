import React, { Component } from 'react'

export default class Nave extends Component {
    render() {
        return (
            <div className="main-menu menu-fixed menu-dark menu-accordion menu-shadow" data-scroll-to-active="true">
                <div className="navbar-header">
                    <ul className="nav navbar-nav flex-row">
                        <li className="nav-item mr-auto"><a className="navbar-brand" href="#">
                            <div className="brand-logo"><img className="logo" src="../../../app-assets/images/logo/logo.png" /></div>
                            <h2 className="brand-text mb-0">Frest</h2>
                        </a></li>
                        <li className="nav-item nav-toggle"><a className="nav-link modern-nav-toggle pr-0" data-toggle="collapse"><i className="bx bx-x d-block d-xl-none font-medium-4 primary"></i><i className="toggle-icon bx bx-disc font-medium-4 d-none d-xl-block primary" data-ticon="bx-disc"></i></a></li>
                    </ul>
                </div>
                <div className="shadow-bottom"></div>
                <div className="main-menu-content">
                    <ul className="navigation navigation-main" id="main-menu-navigation" data-menu="menu-navigation" data-icon-style="lines">
                        <li className=" nav-item">
                            <a href="#">
                                <i className="ficon bx bx-calendar-alt"></i>
                                <span className="menu-title">Dashboard</span>
                                {/* <span className="badge badge-light-danger badge-pill badge-round float-right mr-2">+</span> */}
                            </a>
                        </li>
                        <li className=" navigation-header"><span>Apps</span>
                        </li>
                        <li className=" nav-item">
                            <a href="#">
                                <i className="ficon bx bx-calendar-alt"></i>
                                <span className="menu-title">Email</span>
                            </a>
                        </li>

                    </ul>
                </div>
            </div>
        )
    }
}
