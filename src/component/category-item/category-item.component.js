import React from 'react'
import '../category-item/category-item.styles.scss'

const CategoryItem =({category}) => {
    const {imageUrl,title}=category
    return(
        <div className='category-container' style={{
          backgroundImage: `url(${imageUrl})`
        }}>
          {/* <div className='background-image' style={{
            backgroundImage: `url(${imageUrl})`
          }}></div> */}
          {/* <img src={imageUrl} alt={title}  /> */}
          {/* <div className='category-body-container' > */}
            <h2 >{title}</h2>
            <p>Shop Now</p>
          {/* </div> */}
        </div>
    )
}

export default CategoryItem