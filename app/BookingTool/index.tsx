import Image from "next/image";
import React from "react";

const BookingTool = () => {
  return (
    <div className="text-white mb-[10vh] h-full mb-[10vh]">
      <h1 className="text-xl md:text-2xl font-black mb-[30px]">
        Website booking tool
      </h1>

      <div className="flex flex-col md:flex-row justify-center gap-[30px]">
        <div className="flex flex-col gap-[30px] items-center text-left w-full md:w-[585px]">
          <Image
            src="/images/bookingTool1.webp"
            alt="Booking page image"
            style={{ width: "100%" }}
            width={100}
            height={100}
            loading="lazy"
          />

          <h3 className="text-lg font-medium text-start md:text-center w-full">
            Booking widget
          </h3>
        </div>
        <div className="flex flex-col gap-[30px] items-center text-left w-full md:w-[585px]">
          <Image
            src="/images/bookingTool2.webp"
            alt="Booking page image"
            style={{ width: "100%" }}
            width={100}
            height={100}
            loading="lazy"
          />
          <h3 className="text-lg font-medium mb-[10px] text-start md:text-center w-full">
            Booking page
          </h3>
        </div>
      </div>
      <div className="w-full flex justify-center">
        <p className="text-base w-full md:w-2/3 text-start md:text-center">
          Already have your own business website? We have good news for you!
          We’ve created the Bookinglane customized widget and booking page that
          will integrate your website with our app based on your preference, so
          you could easily accept reservations on both ends. It’s a win-win for
          you and your clients.
        </p>
      </div>
    </div>
  );
};

export default BookingTool;
