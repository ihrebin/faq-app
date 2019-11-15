import React from 'react'
import Category from './Category'

const CategoryList = ({ categories, selectCategory, back, backVisible, current }) => (
  <ul className="nav flex-column">
    {categories.map(cat => (
      <li key={cat.name}>
        <Category  name={cat.name} onClick={() => selectCategory(cat.id)} />
      </li>
    ))}
      {backVisible && (<li> <a className="nav-link" onClick={(e)=> {
        e.preventDefault();
        back(current);
      }} href="">
        back
      </a>
    </li>)}
  </ul>
)


export default CategoryList;