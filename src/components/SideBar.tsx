import React from 'react';

const SideBar = () => {
  return (
    <div className="bg-white shadow-md p-8 rounded-lg flex flex-col space-y-8">

      <div className="flex items-center space-x-4 my-4">
        <img src="/images/Chart.svg" alt="Icon 1" className="w-10 h-10" />
        <span className="text-3xl font-medium my-2">Analysis</span>
      </div>
      <div className="border-t border-gray-400 w-full my-6" />

      <div className="flex items-center space-x-4 my-4">
        <img src="/images/Chatbot.svg" alt="Icon 2" className="w-10 h-10" />
        <span className="text-3xl font-medium">ChatBot</span>
      </div>
      <div className="border-t border-gray-400 w-full my-6" />

      <div className="flex items-center space-x-4 my-4">
        <img src="/images/Schedule.svg" alt="Icon 3" className="w-10 h-10" />
        <span className="text-3xl font-medium">Schedule</span>
      </div>
      <div className="border-t border-gray-400 w-full my-6" />

      <div className="flex items-center space-x-4 my-4">
        <img src="/images/Idea.svg" alt="Icon 4" className="w-10 h-10" />
        <span className="text-3xl font-medium my-2">Tips</span>
      </div>
    </div>
  );
};

export default SideBar;
