import { TuningMode } from '@google/genai'
import { Book, HeartPlus, Menu, MenuIcon, MenuSquare, MessageSquareText, MessagesSquare, Search, SearchIcon, Settings, SquarePen } from 'lucide-react'
import React, { useState, useEffect, useContext } from 'react'

const Siderbar = () => {

  const [extended, setExtended] = useState(true)
  const [showContent, setShowContent] = useState(false)

  useEffect(() => {
    if (!extended) {
      // Show content after sidebar is expanded
      setTimeout(() => setShowContent(true), 150)
    } else {
      setShowContent(false)
    }
  }, [extended])

  return (
    <>
      {extended ? (
        // Collapsed side bar
        <div className='w-20 bg-[#f0f4f9] text-center sm:flex hidden flex-col items-center gap-5 text-gray-600 transition-all duration-300 ease-out'>
          <Menu
            onClick={() => setExtended(false)}
            className='hover:bg-gray-200 p-2 h-5 w-5 box-content rounded-full mt-6 cursor-pointer transition-all duration-200'
          />
          <SquarePen className='hover:bg-gray-200 p-2 h-5 w-5 box-content rounded-full' />
          <Settings className='absolute bottom-9 p-2 h-5 w-5 box-content hover:bg-gray-200 rounded-full' />
        </div>
      ) : (
        // Expanded sidebar
        <div className='w-95 bg-[#f0f4f9] px-4 relative text-gray-600 overflow-hidden transition-all duration-300 ease-out sm:block hidden'>
          <div className='flex justify-between p-1.5 rounded-3xl mt-3'>
            <MenuIcon
              onClick={() => setExtended(true)}
              className='hover:bg-gray-200 p-2 h-5 w-5 box-content rounded-full cursor-pointer transition-all duration-200'
            />
            <SearchIcon className='hover:bg-gray-200 p-2 h-5 w-5 box-content rounded-full cursor-pointer' />
          </div>
          <div className={`transition-opacity duration-200 ease-in ${showContent ? 'opacity-100' : 'opacity-0'}`}>
            <div className='flex rounded-3xl gap-3 mt-6 px-5 py-2 hover:bg-gray-200 cursor-pointer'>
              <SquarePen />
              <p className='w-full'>New chat</p>
              <MessageSquareText />
            </div>
            <div className='rounded-3xl gap-3 mt-3.5 p-2.5'>
              <p className='w-full'>Gems</p>
              <div className=' p-2.5 mt-3 rounded-3xl flex items-center-safe gap-2.5 hover:bg-gray-200 cursor-pointer'>
                <Book className='h-5 w-5' />
                <p>Storybook</p>
              </div>
              <div className=' p-2.5 mt-1 rounded-3xl flex items-center-safe gap-2.5 hover:bg-gray-200 cursor-pointer'>
                <HeartPlus className='h-5 w-5' />
                <p>Explore Gems</p>
              </div>
            </div >
            <div className='gap-3 mt-3.5 p-2.5'>
              <p>Recent</p>
              <div>
                {/* User chats */}
                <p className=' p-2.5 mt-3 rounded-3xl hover:bg-blue-100 cursor-pointer'>Lorem ipsum dolor sit amet ?</p>
              </div>
            </div>

            <div className="absolute bottom-9 left-4 right-4">
              <div className="flex items-center gap-2.5 py-3 px-3 rounded-3xl hover:bg-gray-200 transition cursor-pointer">
                <Settings className='h-5 w-5' />
                <p>Setting and help</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default Siderbar