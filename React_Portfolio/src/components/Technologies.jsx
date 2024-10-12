import { FaNodeJs, FaPhp } from 'react-icons/fa'
import {RiNextjsLine, RiReactjsLine} from 'react-icons/ri'
import {SiJavascript,SiPython, SiCsharp} from 'react-icons/si'
import {BiLogoPostgresql} from 'react-icons/bi'
import {motion} from 'framer-motion'

function iconVariants(duration) {
    return {
        initial: { y: -10 },
        animate: {
            y: [10, -10],
            transition: {
                duration: duration,
                ease: 'linear',
                repeat: Infinity,
                repeatType: 'reverse'
            }
        }
    };
}


const Technologies = () => {
  return (
    <div className='border-b border-neutral-800 pb-24'>
        <motion.h1 whileInView={{opacity: 1, y:0}}
        initial={{opacity: 0, y:-100}}
        transition={{duration:1.5}}
        className='my-20 text-center text-4xl'>
            Technologies
        </motion.h1>
        <motion.div whileInView={{opacity: 1, x:0}}
        initial={{opacity: 0, x:-100}}
        transition={{duration:1.5}}
        className='flex flex-wrap items-center justify-center'>
            <motion.div variants={iconVariants(2)}
            initial='initial'
            animate='animate'
            className='rounded-2xl border-4 border-neutral-800 p-4'>
                <RiReactjsLine className='text-7xl text-cyan-400'/>
            </motion.div>
            
            <motion.div variants={iconVariants(3)}
            initial='initial'
            animate='animate'
            className='rounded-2xl border-4 border-neutral-800 p-4'>
                <RiNextjsLine className='text-7xl'/>
            </motion.div>
            <motion.div variants={iconVariants(5)}
            initial='initial'
            animate='animate'
            className='rounded-2xl border-4 border-neutral-800 p-4'>
                <SiJavascript className='text-7xl text-yellow-400'/>
            </motion.div>
            <motion.div variants={iconVariants(2)}
            initial='initial'
            animate='animate' className='rounded-2xl border-4 border-neutral-800 p-4'>
                <SiPython className='text-7xl text-yellow-400'/>
            </motion.div>
            <motion.div variants={iconVariants(6)}
            initial='initial'
            animate='animate' className='rounded-2xl border-4 border-neutral-800 p-4'>
                <BiLogoPostgresql className='text-7xl text-blue-400'/>
            </motion.div>
            <motion.div variants={iconVariants(4)}
            initial='initial'
            animate='animate' className='rounded-2xl border-4 border-neutral-800 p-4'>
                <FaNodeJs className='text-7xl text-green-500'/>
            </motion.div>
            <motion.div variants={iconVariants(2)}
            initial='initial'
            animate='animate' className='rounded-2xl border-4 border-neutral-800 p-4'>
                <SiCsharp className='text-7xl text-purple-700'/>
            </motion.div>
            <motion.div variants={iconVariants(4)}
            initial='initial'
            animate='animate' className='rounded-2xl border-4 border-neutral-800 p-4'>
                <FaPhp className='text-7xl text-gray-400'/>
            </motion.div>
        </motion.div>
    </div>
  )
}

export default Technologies