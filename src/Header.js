import React from 'react'
// import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div>
      <div className="header">
  <a href="#default" className="logo">CompanyLogo</a>
  <div className="header-right">
    <a className="active" href="/">Home</a>
    <a href="#contact">User</a>
    <a href="#about">EventBubbeling</a>
    {/* <Link to = "/bankdetails"> */}
    <a href="/bankdetails">bankDetails</a>
    <a href="/postbankdetails">postbankdetails</a>
    <a href="/verifymobile">verifymobile</a>
    <a href="/dropdown">dropdown</a>
    <a href="/pincode">Pin</a>
    <a href="/formvalidation">FormValidatation</a>
    <a href="/formvalidation2">FormValidatation2</a>
    {/* </Link>  */}
  </div>
</div>


    </div>
  )
}

export default Header
