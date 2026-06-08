import logo from '../assets/LeoLogo.png'
import { FaGithub, FaLinkedin, FaYoutube } from 'react-icons/fa'

const Navbar = () => {

  function clickHandler(socialType){
    window.dataLayer = window.dataLayer || []
    window.dataLayer.push({
      'socialView': socialType
    })
  }
  return (
    <nav className='mb-20 flex items-center justify-between py-6'>
        <div className='flex flex-shrink-0 items-center'>
            <img className='mx-2 w-20' src={logo} alt="logo" />
        </div>
        <div className='m-8 flex items-center justify-center gap-4 text-2xl'>
            <a href='https://www.youtube.com/@CrappyCoder2001' target='_blank' className='social' onClick={() => clickHandler('Youtube')}><FaYoutube /></a>
            <a href='https://github.com/Leorev01' target='_blank' className='social' onClick={() => clickHandler('GitHub')}><FaGithub /></a>
            <a href='https://www.linkedin.com/in/leorev01' target='_blank' className='social' onClick={() => clickHandler('LinkedIn')}><FaLinkedin /></a>
        </div>
    </nav>
  )
}

export default Navbar
