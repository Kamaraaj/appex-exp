import React from 'react'

const Shimmer = () => {
    return (
        <div className='grid grid-cols-5 gap-x-6 gap-y-8  py-6 px-8'>
            {
                [...Array(10)].map((_, index) => (
                    <div className='shadow-xl' key={index}>
                        <div className='border rounded-[8px]'>
                            <div className='h-[240px] animate-pulse bg-gray-300'>
                            </div>
                            <div className='flex flex-col space-y-1 p-2 rounded-b-[8px] bg-[#FFF]'>
                                <p className='animate-pulse  bg-gray-300 w-[90%] rounded-md h-4'></p>
                                <div className='flex justify-between items-center'>
                                    <p className=' animate-pulse  bg-gray-300 h-4 w-[30%] rounded-md'></p>
                                    <button type='button' className='animate-pulse  bg-gray-300 w-[30%] h-4 rounded-md'></button>
                                </div>
                                <p className='animate-pulse  bg-gray-300 h-5 w-[80%] rounded-md'></p>
                            </div>
                        </div>
                    </div>
                ))
            }

        </div>
    )
}

export default Shimmer
