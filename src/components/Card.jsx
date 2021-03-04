import React from 'react'


const Card = ({ title, content, date, author, image }) => {

  const handleClick = () => {
    console.log(`you clicked`)
  }


  return (
    <div onClick={handleClick} className="px-12 py-4 cursor-pointer">
      <div className="w- m-auto ">
        <div
          className=" grid grid-cols-3 grid-rows-7 grid-flow-row overflow-hidden rounded-lg shadow-md bg-white hover:shadow-xl transition-shadow duration-300 ease-in-out"
        >
          <div className="col-span-3 row-span-4 p-1 m-1">
            <a href="#">
              <img
                src={image}
                alt={title}
                className="rounded-t-xl object-cover h-48 w-full"
              />
            </a>
          </div>
          <div className="col-span-3 row-span-1">
            <div className="flex align-bottom flex-col leading-none p-2 md:p-4">
              <div className="flex flex-row justify-between items-center">
                <span className="ml-2 text-sm">{author}</span>
              </div>
            </div>
          </div>
          <div className="col-span-3 row-span-1">
            <header
              className="flex items-center justify-between leading-tight p-2 md:p-4"
            >
              <h1 className="text-lg">
                <a className="no-underline hover:underline text-black" href="#">
                  {title}
                </a>
              </h1>
              <p className="text-grey-darker text-sm">{date}</p>
            </header>
            <p className="mb-8 p-4 line-clamp-4 text-grey-darker text-sm">{content}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Card
