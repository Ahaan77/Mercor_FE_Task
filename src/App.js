import './App.css';
import TopNav from './components/TopNav';
import { useWindowSize } from "@uidotdev/usehooks";
import { useState } from 'react';
import Drawer from 'react-modern-drawer'

//import styles 👇
import 'react-modern-drawer/dist/index.css'

function App() {

  const [isOpen, setIsOpen] = useState(false)
  const toggleDrawer = () => {
    setIsOpen((prevState) => !prevState)
  }

  const size = useWindowSize();

  return (
    <div className='w-full'>
      {size.width >= 420 ? <img className='absolute w-full h-[98%] z-10 ' src="web.svg" alt="web" /> : null}
      <div className='h-20 mt-2 w-full flex justify-between items-center'>
        <img className='ml-10 h-10' src="cash.svg" />
        {size.width >= 640 ? <TopNav /> : null}
        {size.width >= 640 ? <img className='mr-10 h-10' src="eye.svg" /> : <img onClick={toggleDrawer} className='mr-8 h-6' src="hamburger.svg" />}
      </div>
      {size.width >= 640 ? <img className='absolute lg:left-40 md:left-40 sm:left-40 xs:left-2 lg:h-20 h-16 lg:top-14 md:top-14 sm:top-14 xs:top-40  ' src="cube.svg" /> : null}
      {size.width >= 640 ? <img className='absolute lg:right-24 md:right-24 sm:right-24 xs:right-0  lg:h-64 md:h-44 sm:h-44 xs:h-20 lg:top-20 md:top-20 sm:top-20 xs:top-32 ' src="stairs.svg" /> : null}
      <div className='Main w-full z-90 absolute top-[26vh] flex justify-center items-center text-white '>
        <div className='Base'>
          <div>
            CASH
          </div>
          <div className='flex justify-center'>
            <img className='absolute top-[0vh] z-10 lg:h-[56vh] md:h-[40vh] sm:h-[40vh] xs:h-[25vh] ' src="phone.png" />
          </div>
          <div className='lg:-mt-[16vh] md:-mt-[10vh] sm:-mt-[8vh] xs:-mt-[7vh] flex justify-center'>
            <p className='z-10'>APP</p>
          </div>
        </div>
      </div>
      <img className='absolute z-10 lg:left-52 md:left-52 sm:left-52 xs:left-2 lg:bottom-16 md:bottom-16 sm:bottom-16 xs:bottom-0 lg:h-44 md:h-32 sm:h-32 xs:h-20' src="cubes.svg" />
      <img className='absolute lg:right-52 md:right-52 sm:right-52 xs:right-10 lg:bottom-0 md:bottom-0 sm:bottom-0 xs:bottom-0 lg:h-64 md:h-44 sm:h-44 xs:h-24' src="pillar.svg" />
      {size.width > 640 ? <div className='absolute bottom-6 w-full'>
        <div className='w-full flex justify-between items-center'>
          <div className='ml-10 flex gap-4 items-center Base'>
            <button className='px-4 z-30 py-3 border border-white rounded-md bg-black text-white flex items-center gap-4 lg:text-[12px] md:text-[9px] sm:text-[7px] hover:bg-gray-800 hover:transition duration-200'>
              <img src="apple.svg" />
              <p className='mt-1'>APP STORE</p>
            </button>
            <button className='px-4 z-30 py-3 border border-white rounded-md bg-black text-white flex items-center gap-4 lg:text-[12px] md:text-[9px] sm:text-[7px] hover:bg-gray-800 hover:transition duration-200  '>
              <img src="play.svg" />
              <p className='mt-1'>GOOGLE PLAY</p>
            </button>

          </div>
          <div className='mr-12 flex gap-10 items-center Base'>
            <div className='text-[#B6B6B6] lg:text-[12px] md:text-[9px] sm:text-[5px] w-[32vw] disclaimer'>
              <p className=''>Brokerage services by Cash App Investing LLC, member FINRA / SIPC. See our BrokerCheck. Investing involves risk; you may lose money. Bitcoin trading offered by Cash App. Cash App Investing does not trade bitcoin and Cash App is not a member of FINRA or SIPC. Cash App facilitates banking services through Sutton Bank and Lincoln Savings Bank, Members FDIC.</p>
            </div>
            <div className='flex items-center gap-7 '>
              <img src="twitch.svg" />
              <img src="twitter.svg" />
              <img src="insta.svg" />
            </div>
          </div>
        </div>
      </div>
        :
        <div className='absolute bottom-52 w-full'>
          <div className='flex w-full justify-center gap-4 items-center Base '>
            <button className='px-4 z-30 py-3 border border-white rounded-md bg-black text-white flex items-center gap-4 text-[10px] hover:bg-gray-800 hover:transition duration-200'>
              <img src="apple.svg" />
              <p className='mt-1'>APP STORE</p>
            </button>
            <button className='px-4 z-30 py-3 border border-white rounded-md bg-black text-white flex items-center gap-4 text-[10px] hover:bg-gray-800 hover:transition duration-200  '>
              <img src="play.svg" />
              <p className='mt-1'>GOOGLE PLAY</p>
            </button>
          </div>
          <div className='flex w-full mt-10 justify-center gap-4 items-center'>
            <div className='flex items-center gap-7 '>
              <img src="twitch.svg" />
              <img src="twitter.svg" />
              <img src="insta.svg" />
            </div>
          </div>
        </div>}
      <Drawer
        open={isOpen}
        onClose={toggleDrawer}
        direction='right'
        style={{ backgroundColor: '#161616' }}
      >
        <div className='Base text-white text-xs'>
          <button className='w-full flex justify-center px-2 py-2 mt-4'>SIGN IN</button>
          <button className='w-full flex justify-center px-2 py-2 mt-4'>LEGAL</button>
          <button className='w-full flex justify-center px-2 py-2 mt-4'>LICENSES</button>
          <button className='w-full flex justify-center px-2 py-2 mt-4'>SECURITY</button>
          <button className='w-full flex justify-center px-2 py-2 mt-4'>CAREERS</button>
          <button className='w-full flex justify-center px-2 py-2 mt-4'>PRESS</button>
          <button className='w-full flex justify-center px-2 py-2 mt-4'>SUPPORT</button>
          <button className='w-full flex justify-center px-2 py-2 mt-4'>STATUS</button>
          <button className='w-full flex justify-center px-2 py-2 mt-4'>CODEBLOG</button>
        </div>
      </Drawer>
    </div>
  );
}

export default App;
