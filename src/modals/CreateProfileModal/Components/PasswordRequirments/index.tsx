import React from 'react'
import x from '/assets/x_Icon.svg'
import check from '/assets/Check_MarkIcon.svg'

const index = React.memo(({reqs}: {reqs:Record<string,Boolean>}) => {
  return (
    <div>
      <p className='
      font-normal mb-2
      text-lg leading-tight'>Requirements:</p>
      <div className='flex gap-7'>
        <div className='flex flex-col gap-1'>
          <div className='flex gap-3'>
            <img className='w-4' src={reqs.charLimit ? check : x} alt="" />
            <p className='text-base'>12 Characters</p>
          </div>
          <div className='flex gap-3'>
            <img className='w-4' src={reqs.numReq ? check : x} alt="" />
            <p className='text-base'>Least 1 number</p>
          </div>
        </div>
        <div className='flex flex-col gap-1'>
          <div className='flex gap-3'>
            <img className='w-4' src={reqs.specialChar ? check : x} alt="" />
            <p className='text-base'>Least 1 special character</p>
          </div>
        </div>
      </div>
    </div>
  )
})

export default index