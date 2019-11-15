import React from 'react'
import PropTypes from 'prop-types'

const Category = ({ onClick, name }) => (
  <a className="nav-link" onClick={(e)=> {
    e.preventDefault();
    onClick();
  }} href="">
    {name}
  </a>
)

export default Category