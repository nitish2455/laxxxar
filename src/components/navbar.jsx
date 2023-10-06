import Image from 'next/image'
import React from 'react'
import { useState } from 'react'
import Sidebar from './sidebar'
import Table from './table'

const Navbar = () => {
const [open, setOpen] = useState(false)
  return (
    <div>

<nav className="fixed top-0 z-50 w-full bg-white border-b border-gray-200 dark:bg-gray-800 dark:border-gray-700">
  <div className="px-3 py-3 lg:px-5 lg:pl-3">
    <div className="flex items-center justify-between">
      <div className="flex items-center justify-start">
        <button data-drawer-target="logo-sidebar" data-drawer-toggle="logo-sidebar" aria-controls="logo-sidebar" type="button" className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600">
            <span className="sr-only">Open sidebar</span>
            <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
               <path clip-rule="evenodd" fill-rule="evenodd" d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"></path>
            </svg>
         </button>
        <a href="https://flowbite.com" className="flex ml-2 md:mr-24">
          <Image src="/logo.svg" className="h-8 mr-3" alt="FlowBite Logo" width={200} height={400} />
         
        </a>
      </div>
      <a href="" className="flex   gap-3">
      
          <button className='bg-[#F87060] text-white px-4 py-2 rounded-lg font-semibold'><span></span>DOCUMENTATION</button>
         
        <button  class="inline-flex items-center font-medium justify-center px-4 py-2 text-sm text-[#F87060] rounded-lg bg-[#FFF2F1]">
       
        English (US)
      </button>

      <Image src="/pic.svg" className="h-8  mt-1 " alt="FlowBite Logo" width={50} height={100} onClick={()=>setOpen(prev => !prev)}/>
    
      
        </a>
        {open && <div>
      <Image src="/sign.png" className="h-8  mt-1 " alt="FlowBite Logo" width={400} height={100} />
      </div>}
     
    </div>
  </div>
</nav>

<aside id="logo-sidebar" className="fixed top-0 left-0 z-40 w-64 h-screen pt-20 transition-transform -translate-x-full bg-white border-r border-gray-200 sm:translate-x-0 dark:bg-gray-800 dark:border-gray-700" aria-label="Sidebar">
 <Sidebar/>
</aside>
  
<div className="p-6 sm:ml-64 mt-12">
<h1 className='text-3xl font-bold py-4'>Customer</h1>

   <Table/>
</div>
    </div>

  )
}

export default Navbar