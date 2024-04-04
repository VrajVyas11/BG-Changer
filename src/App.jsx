import { useState } from 'react'

function App() {
  const [color, setColor] = useState("olive")

  return (
    <>
     <div className="w-full h-screen duration-200" 
style={{backgroundColor:color}}>

  <div className='fixed flex flex-wrap 
  justify-center bottom-12 inset-x-0 px-2'>
<div className='flex flex-wrap 
  justify-center gap-3 shadow-lg bg-white px-3 py-2
  rounded-3xl'>
    <button className='outline px-4 rounded-full '
    style={{backgroundColor:"red"}}
    onClick={()=>setColor("red")}
    >red
    </button>
    <button className='outline px-4 rounded-full '
    style={{backgroundColor:"green"}}
    onClick={()=>setColor("green")}
    >green
    </button>
    <button className='outline px-4 rounded-full '
    style={{backgroundColor:"blue"}}
    onClick={()=>setColor("blue")}
    >blue
    </button>
    <button className='outline px-4 rounded-full '
    style={{backgroundColor:"violet"}}
    onClick={()=>setColor("violet")}
    >violet
    </button>
    <button className='outline px-4 rounded-full '
    style={{backgroundColor:"white"}}
    onClick={()=>setColor("white")}
    >white
    </button>
    <button className='outline px-4 rounded-full '
    style={{backgroundColor:"orange"}}
    onClick={()=>setColor("orange")}
    >orange
    </button>
    </div>
</div>
</div>

    </>
  )
}

export default App
