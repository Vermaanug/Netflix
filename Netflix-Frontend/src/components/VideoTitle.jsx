import { FaPlay } from "react-icons/fa";
import { CiCircleInfo } from "react-icons/ci";
const VideoTitle = ({ title, overview }) => {
  return (
    <div className="w-screen aspect-video pt-96 px-36 absolute ">
      <h1 className="text-4xl font-semibold mb-2 text-white">{title}</h1>
      <span className="text-lg inline-block w-5/12 mb-4 text-white">{overview}</span>
      <div className="flex">
        <button className="bg-red-600 text-white px-8 py-3 text-xl flex items-center font-semibold rounded-md cursor-pointer bg-opacity-60 mr-5">
          <FaPlay className="text-lg mt-1 mr-1" />
          Play
        </button>
        <button className="bg-red-600 text-white px-8 py-3 text-xl flex items-center font-semibold rounded-md cursor-pointer bg-opacity-60 mr-5">
          <CiCircleInfo className="text-2xl mt-1 mr-1" />
          More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
