import React, { useEffect, useState } from "react";

const WhyBookinglane = () => {
  const [video, setVideo] = useState<any>(
    <>
      <div className="w-full h-[500px] gray rounded-xl"></div>
    </>
  );

  useEffect(() => {
    setVideo(
      <>
        <iframe
          loading="lazy"
          title="why bookinglane?"
          width="100%"
          height="500px"
          className="rounded-xl mb-[40px]"
          src={"https://www.youtube.com/embed/uyoRx5hF3rs?autoplay=0&mute=0&controls=1&origin=https%3A%2F%2Fb2b.bookinglane.com&playsinline=1&showinfo=0&rel=0&iv_load_policy=3&modestbranding=1&enablejsapi=1&widgetid=1"}
        ></iframe>
      </>
    );
  }, []);
  
  return (
    <div
      id="whybookinglane"
      className="w-full flex flex-col items-center h-full mb-[10vh]"
    >
      <h2 className="text-xl md:text-2xl font-black text-white mb-[30px] md:text-left w-full">
        Why Bookinglane?
      </h2>

      <div className="w-full md:w-2/3">
        {video}

        <p className="text-white">
          The limousine and executive car service industry has been notoriously
          slow to adopt technological advancements for over 15 years. Limousine
          business are continuously losing out on potential revenue as a result
          of inefficient booking, payment and customer relationship management
          systems. Bookinglane addresses all of these issues and more! Run your
          business from palm of your hand!
          <br />
          <br />
          We help limousine companies like yours to become more visible on the
          market, partner with affiliates and increase profits with maximum
          booking efficiency. Your entire business is in your smartphone. Take
          your business with you anywhere you go!
        </p>
      </div>
    </div>
  );
};

export default WhyBookinglane;
