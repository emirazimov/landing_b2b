import { Button } from '@/app/UI'
import React, { useState } from 'react'

const Invoices = () => {
  const [tab, setTab] = useState(1);

  return (
    <div
      style={{ fontSize: "13px" }} 
      className="flex items-center gap-[6px] flex-col h-full w-full"
    >
      <div className='flex flex-col justify-between w-full gap-[5px]'>
        <div className='black-gray w-full rounded-lg relative h-[36px] flex cursor-pointer'>
          <Button onClick={() => setTab(1)} className={`w-full ${tab === 1 ? "gray rounded-lg opacity-100" : "opacity-50"} h-full flex gap-[5px] justify-center items-center`}>
            <>
              <span className='text-[12px]'>All</span>
            </>
          </Button>
          <Button onClick={() => setTab(2)} className={`w-full ${tab === 2 ? "gray rounded-lg opacity-100" : "opacity-50"} h-full flex gap-[5px] justify-center items-center`}>
            <>
              <span className='text-[12px]'>Pending</span>
            </>
          </Button>
          <Button onClick={() => setTab(3)} className={`w-full ${tab === 3 ? "gray rounded-lg opacity-100" : "opacity-50"} h-full flex gap-[5px] justify-center items-center`}>
            <>
              <span className='text-[12px]'>Paid</span>
            </>
          </Button>
        </div>

        <div className=''>
          <div className='relative flex items-center justify-between w-full px-[20px] cursor-pointer'>
            <span className='text-lg'>&#8249;</span>
            <span className='font-medium'>mm/yyyy</span>
            <span className='text-lg'>&#8250;</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Invoices