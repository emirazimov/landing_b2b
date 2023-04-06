import { Button } from "@/app/UI";
import { doMonthWithNumber } from "@/helpers/responsive.helper";
import { leftDates, rightDates } from "@/utils/constants";
import React, { useEffect, useState } from "react";

const Calendar = () => {
  const [dateArr, setDateArr] = useState<any[]>([]);
  const [dateOne, setDateOne] = useState<number | null>(0);
  const [dateTwo, setDateTwo] = useState<number | null>(0);
  const [toggle, setToggle] = useState<boolean>(false);

  useEffect(() => {
    if (dateOne || dateTwo) {
      setDateArr(() => {
        let firstBetweemNum = false;
        const arr: Record<string, string>[] = [];
        dateArr?.map((month, i) => {
          if (dateOne === month.id && dateTwo) {
            firstBetweemNum = true;
          }

          if (dateTwo === month.id) {
            firstBetweemNum = false;
          }

          arr.push({
            ...month,
            id: i + 1,
            active:
              dateOne === month.id ? true : dateTwo === month.id ? true : false,
            num: month.num,
            betweenNum: firstBetweemNum,
          });
        });

        return arr;
      });
    } else {
      let arr: any[] = [];
      doMonthWithNumber(31).forEach((month, i) => {
        arr.push({
          id: i + 1,
          active: false,
          num: month,
          afterMonth: i >= 31,
          betweenNum: false,
          afterWeek: leftDates.includes(month) || rightDates.includes(month),
        });
      });
      setDateArr(arr);
    }
  }, [dateOne, dateTwo]);

  const handleClick = (num: number) => {
    if (!dateOne) {
      setDateOne(num);
    } else if (dateOne === num) {
      setDateOne(null);
    } else if (!dateTwo && dateOne && num > dateOne) {
      setDateTwo(num);
    } else if (dateTwo === num) {
      setDateTwo(null);
    }
  };

  return (
    <div
      style={{ fontSize: "13px" }}
      className="flex items-center gap-[6px] flex-col h-full justify-between"
    >
      <div className="relative flex items-center justify-between w-full px-[20px] cursor-pointer">
        <span className="text-lg">&#8249;</span>
        <span className="font-medium">mm/yyyy</span>
        <span className="text-lg">&#8250;</span>
      </div>
      <div className="flex text-center">
        <span className="text-pink w-[35px]">Sun</span>
        <span className="w-[35px]">Mon</span>
        <span className="w-[35px]">Tue</span>
        <span className="w-[35px]">Wed</span>
        <span className="w-[35px]">Thu</span>
        <span className="w-[35px]">Fri</span>
        <span className="text-pink w-[35px]">Sat</span>
      </div>
      <div className="w-full flex flex-wrap justify-start">
        {dateArr?.map((month, i) => (
          <span
            key={i + 1}
            style={{ width: "35px", height: "35px" }}
            className={`
                                p-[13px] relative flex justify-center items-center hover:bg-gray-600 transition duration-500 rounded-[50%] font-medium cursor-pointer
                                ${month.afterWeek ? "text-pink" : ""}
                            `}
            onClick={() => handleClick(month.id)}
          >
            {month.num}
            {month.active ? (
              <span
                style={{ background: "#EE3757", top: 25 }}
                className="w-[8px] h-[8px] absolute rounded-[50%]"
              ></span>
            ) : null}
          </span>
        ))}
      </div>
      <div className="flex justify-between w-full black-gray rounded-lg">
        <Button
          className={`w-full py-[10px] hover:bg-gray-600 rounded-lg transition-all duration-500 ${
            !toggle ? "gray" : ""
          }`}
          onClick={() => setToggle(false)}
        >
          <span>Reservations</span>
        </Button>
        <Button
          className={`w-full py-[10px] hover:bg-gray-600 rounded-lg transition-all duration-500 ${
            toggle ? "gray" : ""
          }`}
          onClick={() => setToggle(true)}
        >
          <span>Notes</span>
        </Button>
      </div>

      <div className="flex flex-col justify-between w-full black-gray rounded-lg p-[16px] gap-[5px]">
        <span>Reservation #0001234789</span>
        <span className="flex items-center gap-[5px]">
          <span style={{ color: "#A5A5A5" }}>Trip status:</span>
          <span
            style={{
              top: "140px",
              left: "-120px",
              background: "#2A2D2E",
              fontSize: "8px",
            }}
            className="rounded-xl py-[1px] px-[5px]"
          >
            In progress
          </span>
        </span>
        <span className="flex items-center gap-[5px]">
          <span style={{ color: "#A5A5A5" }}>From:</span>
          <span>123 Hanson St.</span>
        </span>
        <span className="flex items-center gap-[5px]">
          <span style={{ color: "#A5A5A5" }}>To:</span>
          <span>34 Warren Ave</span>
        </span>
        <span className="flex items-center gap-[5px]">
          <span style={{ color: "#A5A5A5" }}>Pick up:</span>
          <span>10/22/2023 at 12:00 PM</span>
        </span>
        <span className="flex items-center gap-[5px]">
          <span style={{ color: "#A5A5A5" }}>Total:</span>
          <span>$123.00</span>
        </span>
      </div>
      <div className="w-full flex items-end">
        <Button
          className={`
                    blue rounded-lg py-[12px] md:py-[8px] px-[30px] w-full transition hover:bg-gray-600 duration-500 w-2/4
                `}
        >
          Add reservation
        </Button>
      </div>
    </div>
  );
};

export default Calendar;
