import React, { Component } from 'react'
import '../styles/index.css'
import Profile from '../src/components/Profile'
import Header from '../src/components/Header'
import Navbar from '../src/components/Navbar'

export default class Home extends Component {
  render() {
    return (
        <div>
            <Navbar />
            <Header />
            <Profile />
        </div>
    )
  }
}