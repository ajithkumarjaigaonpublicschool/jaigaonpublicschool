import React from 'react';

const BoardMeeting = () => {
  return (
    <section className="bg-secondary w-full md:px-32">
      <div className="container mx-auto py-10 md:py-20 px-4 md:px-0 flex flex-col lg:flex-row items-center justify-between gap-4">
        <div className="w-full lg:w-1/2 text-center md:text-left">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4 md:mb-6">
            Missed the latest board meeting?
          </h2>
          <p className="text-lg mb-8">
            All Cotati-Rohnert Park Unified School District board meetings are recorded and archived on the CPRUSD Youtube channel. Click on the button below to access district board meetings and events.
          </p>
          <div className="flex flex-col justify-between gap-4 lg:justify-start lg:flex-row">
            <a
              href="#"
              className="bg-primary text-white px-6 py-3 rounded-md hover:bg-customDarkBlue-100 transition-colors"
            >
              WATCH ON YOUTUBE
            </a>
            <a
              href="#"
              className="bg-primary text-white px-6 py-3 rounded-md hover:bg-customDarkBlue-100 transition-colors"
            >
              BOARD MEETING CALENDAR
            </a>
          </div>
        </div>
        <div className="w-full lg:w-1/2 mt-8 md:mt-0">
          <div className="relative w-full h-full pb-[56.25%]">
            <iframe
              src="https://www.youtube.com/embed/YOUR_VIDEO_ID"
              title="November 19, 2024 Regular School Board Meeting"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="absolute top-0 left-0 w-full h-full rounded-md"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BoardMeeting;