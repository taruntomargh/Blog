import React from 'react'

const Navbar = () => {
  return (
    <nav className='flex justify-between border-2 border-red-800'>
        <h1 className='text-4xl font-bold'>Blog</h1>
        <div>
          <ul className='flex gap-4'>
            <li>Home</li>
            <li>Design</li>
            <li>Art</li>
            <li>Science</li>
          </ul>
        </div>
        <div className='flex gap-4'>
          <input type="text" />
          <img src="" alt="Search image" />
          <button>Sign Up</button>
        </div>
      </nav>
  )
}

export default Navbar