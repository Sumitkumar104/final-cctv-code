import React from "react";
import ReactPlayer from "react-player";
import Navbar from "./Navbar";
import { useNavigate } from "react-router-dom";

const Item = ({ title, content }) => {
  return (
    <div className="mx-2 my-3 p-2 bg-[#FFFFFF] rounded-xl drop-shadow-xl">
      <h2 className="text-lg font-semibold mb-2">{title}</h2>
      <div className="border-t border-gray-300 mb-2"></div>
      <p>{content}</p>
    </div>
  );
};


const Analysis = () => {
  const data = [
    "Item 1",
    "Item 2",
    "Item 3",
    "Item 4",
    "Item 4",
    "Item 4",
    "Item 4",
    "Item 4",
    "Item 4",
    "Item 4",
  ];
  const videoUrl = "https://www.youtube.com/watch?v=_qDML_BCju8";
  const videoTimestamps = [
    { start: 0, end: 10 },
    { start: 15, end: 25 },
    { start: 30, end: 40 },
    { start: 45, end: 55 },
    { start: 30, end: 40 },
    { start: 45, end: 55 },
    { start: 30, end: 40 },
    { start: 45, end: 55 },
    { start: 30, end: 40 },
    { start: 45, end: 55 },
  ];

  const navigate = useNavigate();
  function showfullviewhandler(){

   return navigate("/transcript");

  }

  return (
    <>
      <Navbar active={4}/>
      <div className=" ml-10">
        <div className=" mb-2 flex justify-between h-[390px]">
          <div className=" mt-5">
            <h1 className="mb-3 text-medium text-[25px]">Uploaded Video</h1>
            <div className="rounded-3xl overflow-hidden drop-shadow-xl">
              <ReactPlayer
                url={videoUrl}
                controls
                width="539px"
                height="292px"
              />
            </div>
          </div>
          <div className=" bg-[#ECD3FF] w-[869px]  top-[80px] p-8 overflow-y-auto scrollbar-hide">

             <div className="flex justify-end"> 
            <button  onClick={showfullviewhandler} className=" bg-purple-700 bg-opacity-200 hover:bg-purple-700 hover:bg-opacity-80 text-white font-bold py-2 px-3 rounded-lg ">View all</button>
            </div>
            {data.map((item, index) => (
              <Item
                key={index}
                title={`Title ${index + 1}`}
                content={`Content for ${item}`}
              />
            ))}

          </div>
        </div>
        <div>
          <h1 className="text-medium text-[25px] mb-2">
            Recorded Unusal Activities
          </h1>
          <div className="flex overflow-x-auto">
            {videoTimestamps.map((timestamps, index) => (
              <div key={index} className="rounded-3xl mx-2 my-2 ">
                <div className="rounded-3xl overflow-hidden drop-shadow-xl">
                  <ReactPlayer
                    url={`${videoUrl}#t=${timestamps.start},${timestamps.end}`}
                    controls
                    width="250px"
                    height="148px"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Analysis;
