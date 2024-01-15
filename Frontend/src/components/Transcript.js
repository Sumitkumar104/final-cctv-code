import React from "react";
import ReactPlayer from "react-player";
import Navbar from "./Navbar";
import { useNavigate } from "react-router-dom";

const Item = ({ title, content }) => {
  return (
    <div className="mx-2 my-3 p-3 bg-[#FFFFFF] rounded-xl drop-shadow-xl">
      <h2 className="text-lg font-semibold mb-2">{title}</h2>
      <div className="border-t border-gray-300 mb-2"></div>
      <p>{content}</p>
    </div>
  );
};

function Transcript() {
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
  const navigate = useNavigate();
  function showfullviewhandler() {
    return navigate("/analysis");
  }
  const videoUrl = "https://www.youtube.com/watch?v=_qDML_BCju8";
  return (
    <>
      <Navbar active={4} />
      <div className=" ">
        <div className=" mb-2 flex justify-center h-[89vh] w-[100%]">
          <div className="bg-[#ECD3FF] w-[100%]  top-[50px] p-8 overflow-y-auto scrollbar-hide">
            <button
              onClick={showfullviewhandler}
              className=" w-[120px] h-[40px] bg-purple-700 bg-opacity-100 hover:bg-purple-700 hover:bg-opacity-80 text-white font-bold py-2 px-2 rounded-xl "
            >
              Back
            </button>

            {data.map((item, index) => (
              <Item
                key={index}
                title={`Title ${index + 1}`}
                content={`Content for ${item}`}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default Transcript;
