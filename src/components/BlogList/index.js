// Write your JS code here
import React from 'react'
import BlogItem from '../BlogItem'
import './index.css'

const BlogList = ({blogsList}) => (
  <ul className="blog-list">
    {blogsList.map(blog => (
      <BlogItem key={blog.id} blogDetails={blog} />
    ))}
  </ul>
)

export default BlogList
