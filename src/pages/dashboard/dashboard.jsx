import {Link} from 'react-router-dom'
import SpaceModal from '../../components/modals/SpaceModal/SpaceModal'
import Space from '../../components/Space'
import {FaBriefcase, FaPencilAlt, FaVideo} from 'react-icons/fa'
import useSpaceModal from '../../hooks/useSpaceModal'
import { useState } from 'react'
const Dashboard = () => {
  const spaceModal = useSpaceModal();
  const handleClick = () =>{
    spaceModal.onOpen()
  }
  const [videoCount, setVideoCount] = useState(0);
  const [plan, setPlan] = useState("Free Plan")
  const [textCount, setTextCount] = useState(0);  
  return (
    <div className='lg:mx-40 mx-2 my-10'> 
      <div className='text-5xl tracking-wide p-4 font-semibold'>Welcome Back👋</div>
          <div className='py-8'>
            <h1 className='text-4xl tracking-wider p-4 font-semibold'>Overview</h1>
            <hr className='border-dotted border-slate-600'/>
            <div className='flex items-center my-16 lg:flex-row sm:flex-col gap-10 lg:justify-between'>
              <div className='flex gap-10 items-center rounded-lg px-8 py-6 bg-slate-500 bg-opacity-20 w-1/3'>
                <FaVideo size={25}/>
                <div className='flex flex-col '>
                <p className='text-lg'>Videos</p>
                <p className='font-bold text-lg'>{videoCount}</p>
                </div>
              </div>
              <div className=' flex gap-10 items-center rounded-lg px-8 py-6 bg-slate-500 bg-opacity-20 w-1/3'>
                <FaPencilAlt size={22}/>
                <div className='flex flex-col '>
                <p className='text-lg'>Texts</p>
                <p className='font-bold text-lg'>{textCount}</p>
                </div>
              </div>
              <div className=' flex gap-10 items-center rounded-lg px-8 py-6 bg-slate-500 bg-opacity-20 w-1/3'>
                <FaBriefcase size={25}/>
                <div className='flex flex-col'>
                <p className='text-lg'>Plan</p>
                <p className='font-bold text-lg '>{plan}</p>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className='flex justify-between py-2'>
              <h1 className='text-4xl tracking-wider font-semibold'>Spaces</h1>
              <button className='bg-green-900 px-3 hover:opacity-70' onClick={handleClick}>
                <b>+</b> Create a new space
              </button>
            </div>
            {/* <hr className='border-dotted my-3 border-slate-600' /> */}
            <div className='my-10 py-5'>
              <Link to="/products/aman">
              <Space/>
            </Link>
            </div>
          </div>
      <SpaceModal/>
  </div>
  )
}

export default Dashboard
