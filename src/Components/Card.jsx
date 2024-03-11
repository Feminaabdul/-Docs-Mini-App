import React from 'react'

import { FaRegFileAlt } from "react-icons/fa";
import { IoDownloadOutline } from "react-icons/io5";
import { IoIosClose } from "react-icons/io";
import { motion } from "framer-motion"
function Card({data,Reference}) {
  return (
 
 <motion.div drag dragConstraints={Reference}  whileDrag={{ scale: 1.1}} dragElastic={.1} dragTransition={{ bounceStiffness: 100, bounceDamping: 30 }} className='flex-shrink-0 relative w-60 h-72 rounded-[45px] px-8 py-10 text-white bg-zinc-900/90  overflow-hidden'>
<FaRegFileAlt/>
<p className=' font-semibold leading-tight text-sm mt-5'>{data.desc}</p>
  <div className='footer absolute bottom-0 w-full h-10 left-0'>
     <div className='flex items-center py-4 px-8  justify-between -mt-14'>
        <h5>{data.filesize}</h5>
        <span className='w-7 h-7 bg-zinc-600 rounded-full flex items-center justify-center'>
             {data.close?<IoIosClose/>:<IoDownloadOutline size={".7em"} color='#fff'/>}
             
             </span>
       
        </div>
        {data.tag.isOpen&&(
        <div className= {`tag ${data.tag.tagColor==="blue"?"bg-blue-600":"bg-green-600"}  w-full p-4  flex items-center justify-center `} >
             <h3 className='text-sm  -mt-2 font-semibold'>{data.tag.tagTitle}</h3>
        </div>
        )
        }
        
  </div>
</motion.div>
 
  )
}

export default Card