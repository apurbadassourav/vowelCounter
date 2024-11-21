import React from 'react'

const Fullpro = () => {
  return (
    <div className='my-[50px] text-white' >
    <div  className='max-w-Container mx-auto bg-red-500'>
    <h1 className='font-extrabold text-5xl flex justify-center mb-[20px]' >Vowel Checker  </h1>
    <input className='py-[100px] px-[400px] flex mx-auto tex-black mb-[20px]' type="text" placeholder='Enter your text here' /> <br />
    <div className='flex items-center justify-center  '>
    <button className='font-bold text-xl bg-green-300 py-[10px] px-[20px]'>Count Vowel</button>
    </div>
    <p className='mt-[40px] flex items-center justify-center font-bold text-xl'>Result :</p>
    </div>
    </div>
    
  )
}

export default Fullpro
