import React, { FC, useEffect, useState } from 'react';

//Types
import { SelectProps } from './select.types';

const Select: FC<SelectProps> = ({ arr = [], defaultOption, onChange }) => {
  const [toggle, setToggle] = useState(false);

  const handleClick = (e: any) => {
    onChange(JSON.parse(e.target.value));
    setToggle(!toggle)
  };

  return (
    <div className='w-full h-full relative flex items-center justify-end'>
      <div className="absolute text-lg w-[20px] h-[30px] gray rotate-90 flex items-center justify-center text-[#A5A5A5]" style={{ right: 8 }}>&#8250;</div>
      <select className='text-[13px] w-full h-full rounded-lg text-white gray focus:outline-0 px-[20px] z-10rounded-lg py-[15px]' onChange={handleClick}>
        <>
          <option value="" disabled selected>{defaultOption}</option>
          {arr?.length ? arr?.map((item, index) => {

            return (
              <option key={index} value={JSON.stringify(item)}>
                {item?.name}
              </option>
            )
          }) : null}
        </>
      </select>
    </div>
  );
};

export default Select;