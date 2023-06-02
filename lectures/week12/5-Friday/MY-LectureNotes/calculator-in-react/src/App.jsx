import React from 'react'

function App() {
  return (
    <div className='w-full p-2'>
        <div className='max-w-[1240px] mx-auto flex flex-col justify-center h-full mt-20'>
            
            <div className='w-[444px] mx-auto grid-cols-4 gap-4 border-8 border-gray flex flex-col p-2'>
                <input type="text" className='bg-gray border-2 border-black w-auto h-20 text-4xl p-2' readOnly/>
                <div className='flex justify-between items-center text-2xl font-semibold'>
                  <a className='p-8 cursor-pointer w-1/4 flex justify-center bg-orange-400 mx-1'>AC</a>
                  <a className='p-8 cursor-pointer w-1/4 flex justify-center bg-orange-400 mx-1'>+/-</a>
                  <a className='p-8 cursor-pointer w-1/4 flex justify-center bg-orange-400 mx-1'>%</a>
                  <a className='p-8 cursor-pointer w-1/4 flex justify-center bg-orange-400 mx-1'>/</a>
                </div>
                <div className='flex justify-between items-center text-2xl font-semibold'>
                  <a className='p-8 cursor-pointer w-1/4 flex justify-center bg-gray-300 mx-1'>7</a>
                  <a className='p-8 cursor-pointer w-1/4 flex justify-center bg-gray-300 mx-1'>8</a>
                  <a className='p-8 cursor-pointer w-1/4 flex justify-center bg-gray-300 mx-1'>9</a>
                  <a className='p-8 cursor-pointer w-1/4 flex justify-center bg-orange-400 mx-1'>x</a>
                </div>
                <div className='flex justify-between items-center text-2xl font-semibold'>
                  <a className='p-8 cursor-pointer w-1/4 flex justify-center bg-gray-300 mx-1'>4</a>
                  <a className='p-8 cursor-pointer w-1/4 flex justify-center bg-gray-300 mx-1'>5</a>
                  <a className='p-8 cursor-pointer w-1/4 flex justify-center bg-gray-300 mx-1'>6</a>
                  <a className='p-8 cursor-pointer w-1/4 flex justify-center bg-orange-400 mx-1'>-</a>
                </div>
                <div className='flex justify-between items-center text-2xl font-semibold'>
                  <a className='p-8 cursor-pointer w-1/4 flex justify-center bg-gray-300 mx-1'>1</a>
                  <a className='p-8 cursor-pointer w-1/4 flex justify-center bg-gray-300 mx-1'>2</a>
                  <a className='p-8 cursor-pointer w-1/4 flex justify-center bg-gray-300 mx-1'>3</a>
                  <a className='p-8 cursor-pointer w-1/4 flex justify-center bg-orange-400 mx-1'>+</a>
                </div>
                <div className='flex justify-between items-center text-2xl font-semibold'>
                  <a className='p-8 cursor-pointer w-1/2 flex justify-center bg-gray-300 mx-1'>0</a>
                  <a className='p-8 cursor-pointer w-1/4 flex justify-center bg-gray-300 mx-1'>.</a>
                  <a className='p-8 cursor-pointer w-1/4 flex justify-center bg-orange-400 mx-1'>=</a>
                </div>
            </div>
        </div>
    </div>
  )
}

export default App