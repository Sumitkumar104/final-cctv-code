import { React, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useGlobalContext } from '../context/global';
import Navbar from "./Navbar";


function Uploadvideopage() {
  const [fileFormatError, setFileFormatError] = useState(false);
  const navigate = useNavigate();
  const [video, setVideo] = useState(null);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [label, setLabel] = useState('Upload your video...');
  const [loading, setLoading] = useState(false);

  const {getAllVideos} = useGlobalContext()

  const handleVideo = (e) => {
    setVideo(e.target.files[0])
    setLabel('Your Video: ' + e.target.files[0].name)
};

const handleUpload = async (e) => {
  e.preventDefault();
  setLoading(true);

      const formData = new FormData();
      formData.append('video', e.target.video.files[0]);

      const res = await fetch('http://localhost:8000/api/upload', {
          method: 'POST',
          body: formData
      })
  
  setLoading(false)
  getAllVideos()
  setTitle('')
  setDescription('')
  setVideo(null)
  setLabel('Upload your video...')
};

  return (
    <>
    <Navbar active={4}/>
    <div className="flex flex-col justify-center items-center">
      <h1 className="text-4xl font-bold mt-[130px]">Upload Video</h1>

      <div className="flex flex-col w-[1124px] h-[323px] mt-[20px] border-[2px] border-purple-500 rounded-md rounded-10 justify-center items-center bg-purple-200 bg-opacity-100">
        <div className="flex flex-col w-[1110px] h-[310px] border-dotted border-[2px] border-purple-500 rounded-md rounded-10  justify-center items-center bg-purple-200 bg-opacity-100">
          <div className="absolute flex flex-col justify-center items-center ">
            
          <form onSubmit={handleUpload} action="api/upload" method='POST' encType='multipart/form-data'>
                <div className="input-control upload-con">
                    <label htmlFor="video" className="hidden">Video</label>
                    <div className="inner-input">
                        <input 
                            type="file" 
                            name="video" 
                            id="video"
                            accept="video/*"
                            //hidden
                            onChange={handleVideo}
                        />
                    </div>
                    <span className="text-sm">or drop files here</span>

                     {fileFormatError && (
                     <p style={{ color: "red" }}>
                      Invalid file format. Please choose a mp_4 video file.
                    </p>
                     )}

                    <div className="upload-btn">
                        <button
                          name="Upload"
                          type="submit"
                          className=" w-[120px] h-[40px] bg-purple-700 bg-opacity-100 hover:bg-purple-700 hover:bg-opacity-80 text-white font-bold py-2 px-4 rounded mt-[25px]" >
                          Process </button>
                    </div>
                </div>
            </form>
            
          </div>
        </div>
      </div>
    </div>
    </>
  );
}

export default Uploadvideopage;
