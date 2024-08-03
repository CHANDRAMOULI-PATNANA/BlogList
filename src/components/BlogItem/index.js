// Write your JS code here
import React from 'react'
import './index.css'

const BlogItem = ({blogDetails}) => {
  const {title, description, publishedDate} = blogDetails
  return (
    <li className="blog-item">
      <div className="blog-title-date">
        <h2 className="blog-title">{title}</h2>
        <p className="blog-date">{publishedDate}</p>
      </div>
      <p className="blog-description">{description}</p>
    </li>
  )
}

export default BlogItem
