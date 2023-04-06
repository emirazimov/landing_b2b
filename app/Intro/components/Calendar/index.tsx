import React, { FC, useEffect, useMemo, useState } from 'react';

//UI
import { Button } from '@/app/UI';

//Helpers
import { doMonthWithNumber, useMobile } from '@/helpers/responsive.helper';

//Types
import { CalendarTypes } from './calendar.types';

const Calendar: FC<CalendarTypes> = ({ tab }) => {
    const [dateArr, setDateArr] = useState<any[]>([]);
    const [dateOne, setDateOne] = useState<number | null>(0);
    const [dateTwo, setDateTwo] = useState<number | null>(0);
    const { mobile, width } = useMobile(1300);

    useMemo(() => {
        let arr: any[] = [];
        doMonthWithNumber().forEach((month, i) => {
            arr.push({
                id: i + 1,
                active: false,
                num: month,
                afterMonth: i >= 31,
                betweenNum: false,
            });
        });
        setDateArr(arr);
    }, []);

    useMemo(() => {
        if (dateOne || dateTwo) {
            setDateArr(() => {
                let firstBetweemNum = false
                const arr: Record<string, string>[] = []
                dateArr?.forEach((month, i) => {
                    if (dateOne === month.id && dateTwo) {
                        firstBetweemNum = true
                    }

                    if (dateTwo === month.id) {
                        firstBetweemNum = false
                    }

                    arr.push({
                        ...month,
                        id: i + 1,
                        active: dateOne === month.id ? true : dateTwo === month.id ? true : false,
                        num: month.num,
                        betweenNum: firstBetweemNum
                    })
                });
    
                return arr;
            });
        } else {
            let arr: any[] = [];
            doMonthWithNumber().forEach((month, i) => {
                arr.push({
                    id: i + 1,
                    active: false,
                    num: month,
                    afterMonth: i >= 31,
                    betweenNum: false,
                });
            });
            setDateArr(arr);
        }
    }, [dateOne, dateTwo]);

    const handleClick = (num: number) => {
        if (!dateOne) {
            setDateOne(num);
        } else if (dateOne === num) {
            setDateOne(null)
        } else if (!dateTwo && dateOne && num > dateOne) {
            setDateTwo(num);
        } else if (dateTwo === num) {
            setDateTwo(null)
        }
    }

    return (
        <div
            style={{ top: "170px", right: mobile ? width < 500 ? "-50px" : "-150px" : "-200px", fontSize: "13px", borderColor: "#5B6267", zIndex: 30 }} 
            className={`border-[3px] black-gray flex items-center gap-[6px] absolute rounded-xl py-[5px] px-[5px] md:px-[12px] md:py-[20px] transition-all duration-500 flex-col ${
                tab ? "mr-[-40px] opacity-0" : "mr-0 opacity-100"
            }`}
        >
            <div className='relative flex items-center justify-between w-full px-[5px] md:px-[20px]'>
                <span className='text-lg'>&#8249;</span>
                <span className='font-medium'>mm/yyyy</span>
                <span className='text-lg'>&#8250;</span>
            </div>  
            <div className='flex text-center font-medium text-[8px] md:text-[12px]'>
                <span className='w-[22px] md:w-[35px]'>
                    Sun
                </span>
                <span className='w-[22px] md:w-[35px]'>
                    Mon
                </span>
                <span className='w-[22px] md:w-[35px]'>
                    Tue
                </span>
                <span className='w-[22px] md:w-[35px]'>
                    Wed
                </span>
                <span className='w-[22px] md:w-[35px]'>
                    Thu
                </span>
                <span className='w-[22px] md:w-[35px]'>
                    Fri
                </span>
                <span className='w-[22px] md:w-[35px]'>
                    Sat
                </span>
            </div>
            <div className='w-[170px] md:w-[260px] flex flex-wrap justify-center'>
                {
                    dateArr?.map((month, i) => (
                        <span 
                            key={i+1}
                            className={`text-[10px] md:text-[14px] w-[15px] h-[15px] md:w-[35px] md:h-[35px] p-[11px] md:p-[13px] flex justify-center items-center hover:bg-gray-600 transition duration-500 rounded font-medium cursor-pointer ${
                                month.active ? "bg-blue-500 rounded-lg" : "bg-transparent"
                            } ${
                                month.afterMonth && !month.active ? "opacity-50" : ""
                            } ${
                                month.betweenNum && !month.active ? "gray rounded-0" : ""
                            }`
                        }
                            onClick={() => handleClick(month.id)}
                        >
                            {month.num}
                        </span>
                    ))
                }
            </div>
            <Button className={`
                rounded-lg py-[5px] w-full md:py-[12px] blue md:px-[30px] transition duration-500 font-medium hover:bg-gray-600
            `}>
                Choose
            </Button>
        </div>
    )
}

export default Calendar