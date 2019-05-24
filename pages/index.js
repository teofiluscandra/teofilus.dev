import React, { Component } from 'react'
import '../styles/index.css'
import Profile from '../src/components/Profile'
import Header from '../src/components/Header'
import Navbar from '../src/components/Navbar'
import Head from '../src/components/HeaderHtml'

export default class Home extends Component {
  render() {
    return (
        <div>
            <Head />
            <Navbar />
            <Header />
            <Profile />
        </div>
    )
  }
}