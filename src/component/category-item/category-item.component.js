import React from 'react'
import './category-item.styles.scss'

const CategoryItem = ({ category }) => {
  const { imageUrl, title } = category
  return (
    <div className='category-container' style={{
      backgroundImage: `url(${imageUrl})`
    }}>
      <h2>{title}</h2>
      <p>Shop Now</p>
    </div>
  )
}

export default CategoryItem