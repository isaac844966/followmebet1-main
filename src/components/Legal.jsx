import React from 'react'
import Wrapper from '../assets/wrapper/Legal'
import {NavLink } from "react-router-dom"

const Legal = () => {
  return (
    <Wrapper>
      <div className="container">
        <NavLink to="/payment" className="link" >Payment Policy</NavLink>
        <NavLink to="/rules" className="link">Rules</NavLink>
        <NavLink to="/privacy" className="link">Privacy and Policy</NavLink>
        <NavLink to="/terms" className="link">Terms and conditions</NavLink>
      </div>
    </Wrapper>
  )
}

export default Legal