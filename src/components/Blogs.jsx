import React, { useState, useEffect } from 'react'
import Card from './Card'
import axios from 'axios'

const Blogs = () => {
  const [blogs, setBlogs] = useState([])
  //make api call save response data to local state 


  useEffect(() => {
    try {
      const apiCall = async () => {
        const { data } = await axios.get('http://localhost:1337/blogs')
        setBlogs(data)
      }
      apiCall()
    } catch (error) {
      console.log(error)
    }
  }, [])


  return (
    <div class="grid grid-flow-col grid-cols-3 grid-rows-3 gap-4">
      {blogs?.map(item => {
        return (
          <Card key={item.id} title={item.title} content={item.content} author={item.author} date={item.date} image={`http://localhost:1337${item.image.url}`} />
        )
      })}
    </div>
  )
}

export default Blogs
