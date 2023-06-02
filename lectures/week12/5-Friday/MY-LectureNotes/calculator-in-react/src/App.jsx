import React from 'react'

function App() {
  return (
    <div className='w-full p-2'>
        <div className='max-w-[1240px] mx-auto flex flex-col justify-center h-full mt-20'>
            
            <div className='w-[444px] mx-auto grid-cols-4 gap-4 border-8 border-gray flex flex-col p-2 rounded-md'>
                <input type="text" className='bg-gray border-2 border-black w-auto h-20 text-4xl p-2 rounded-md' readOnly/>
                <div className='flex justify-between items-center text-2xl font-semibold'>
                  <a className='p-8 cursor-pointer w-1/4 flex justify-center bg-orange-400 mx-1 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>AC</a>
                  <a className='p-8 cursor-pointer w-1/4 flex justify-center bg-orange-400 mx-1 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>+/-</a>
                  <a className='p-8 cursor-pointer w-1/4 flex justify-center bg-orange-400 mx-1 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>%</a>
                  <a className='p-8 cursor-pointer w-1/4 flex justify-center bg-orange-400 mx-1 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>/</a>
                </div>
                <div className='flex justify-between items-center text-2xl font-semibold'>
                  <a className='p-8 cursor-pointer w-1/4 flex justify-center bg-gray-300 mx-1 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>7</a>
                  <a className='p-8 cursor-pointer w-1/4 flex justify-center bg-gray-300 mx-1 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>8</a>
                  <a className='p-8 cursor-pointer w-1/4 flex justify-center bg-gray-300 mx-1 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>9</a>
                  <a className='p-8 cursor-pointer w-1/4 flex justify-center bg-orange-400 mx-1 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>x</a>
                </div>
                <div className='flex justify-between items-center text-2xl font-semibold'>
                  <a className='p-8 cursor-pointer w-1/4 flex justify-center bg-gray-300 mx-1 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>4</a>
                  <a className='p-8 cursor-pointer w-1/4 flex justify-center bg-gray-300 mx-1 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>5</a>
                  <a className='p-8 cursor-pointer w-1/4 flex justify-center bg-gray-300 mx-1 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>6</a>
                  <a className='p-8 cursor-pointer w-1/4 flex justify-center bg-orange-400 mx-1 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>-</a>
                </div>
                <div className='flex justify-between items-center text-2xl font-semibold'>
                  <a className='p-8 cursor-pointer w-1/4 flex justify-center bg-gray-300 mx-1 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>1</a>
                  <a className='p-8 cursor-pointer w-1/4 flex justify-center bg-gray-300 mx-1 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>2</a>
                  <a className='p-8 cursor-pointer w-1/4 flex justify-center bg-gray-300 mx-1 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>3</a>
                  <a className='p-8 cursor-pointer w-1/4 flex justify-center bg-orange-400 mx-1 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>+</a>
                </div>
                <div className='flex justify-between items-center text-2xl font-semibold'>
                  <a className='p-8 cursor-pointer w-1/2 flex justify-center bg-gray-300 mx-1 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>0</a>
                  <a className='p-8 cursor-pointer w-1/4 flex justify-center bg-gray-300 mx-1 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>.</a>
                  <a className='p-8 cursor-pointer w-1/4 flex justify-center bg-orange-400 mx-1 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>=</a>
                </div>
            </div>
        </div>
    </div>
  )
}

export default App