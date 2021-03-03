import React, { useState } from 'react'

export default function Form() {
  const [formData, setFormData] = useState({
    title: "",
    content: ""
  })

  const handleChange = e => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = e => {

    e.preventDefault()
    console.log(formData)
    setFormData({
      title: '',
      content: ''
    })
  }

  const handleKeyPress = e => {
    console.log(e.key)

  }



  return (
    <div className="flex mx-auto items-center justify-center shadow-lg mt-56 mx-8 mb-4 max-w-lg">
      <form onSubmit={handleSubmit} className="w-full max-w-xl bg-white rounded-lg px-4 pt-2">
        <div className="flex flex-wrap -mx-3 mb-6">
          <h2 className="px-4 pt-3 pb-2 text-gray-800 text-lg">Add blog article</h2>
          <div className="w-full md:w-full px-3 mb-2 mt-2">
            <input onKeyPress={handleKeyPress} type="text" className="bg-gray-100 rounded border border-gray-400 leading-normal resize-none w-full py-2 px-3 font-medium placeholder-gray-700 focus:outline-none focus:bg-white" onChange={handleChange} name="title" value={formData.title} placeholder='enter Title...' required />
          </div>
          <div className="w-full md:w-full px-3 mb-2 mt-2">
            <textarea type="text" className="bg-gray-100 rounded border border-gray-400 leading-normal resize-none w-full h-20 py-2 px-3 font-medium placeholder-gray-700 focus:outline-none focus:bg-white" name="content" placeholder='blog content...' value={formData.content} onChange={handleChange} required></textarea>
          </div>
          <div className="w-full md:w-full flex items-start md:w-full px-3">
            <div className="-mr-1">
              <input type='submit' className="bg-black text-white font-medium py-1 px-4 border border-gray-400 rounded-lg tracking-wide mr-1 hover:bg-gray-100 hover:text-black" value='submit' />
            </div>
          </div>
        </div>
      </form>
    </div>
  )
}

