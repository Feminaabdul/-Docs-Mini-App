import React , { useRef ,useState}from 'react'

import Card from './Card'

function Foreground() {
const ref=useRef(null)
    const data = [
        {
            desc: "beginning ipsum dolor, sit amet consectetur adipisicing elit. In facere veritatis quod natus quis esse eaque. Impedit sequi eius labore minus saepe dolorem delectus",
            filesize: "9mb",
            close: true,
            tag: {
                isOpen: true
                , tagTitle: "Download Now", tagColor: "green"
            }
        },
        {
            desc: "beginning ipsum dolor, sit amet consectetur adipisicing elit. In facere veritatis quod natus quis esse eaque. Impedit sequi eius labore minus saepe dolorem delectus",
            filesize: "9mb",
            close: true,
            tag: {
                isOpen: true
                , tagTitle: "Download Now", tagColor: "blue"
            }
        },
        {
            desc: "beginning ipsum dolor, sit amet consectetur adipisicing elit. In facere veritatis quod natus quis esse eaque. Impedit sequi eius labore minus saepe dolorem delectus",
            filesize: "9mb",
            close: true,
            tag: {
                isOpen: false
                , tagTitle: "UPload", tagColor: "green"
            }
        }
    ]

    return (
        <>
            <div ref={ref} className=' flex gap-10 flex-wrap p-5  fixed  left-0 z-[3] top-0 w-full h-full'>
                {data.map((item, index) => (
                    <Card data={item} Reference={ref} />
                ))}

            </div>

        </>
    )
}

export default Foreground