import React, { Component } from 'react'

import Nave from './Nave';
import Footer from './Footer';
import Header from './Header';


export default class Base extends Component {
    render() {
        return (
            <div>
                <Header />
                <Nave />
                <Footer />
            </div>
        )
    }
}
