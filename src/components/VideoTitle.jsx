import { IoPlay } from 'react-icons/io5';
import { IoMdInformationCircleOutline } from 'react-icons/io';

const VideoTitle = ({ title, overview }) => {
  return (
    <div className=" absolute top-1/2">
      <div className="w-1/3 px-10">
        <h1 className="text-6xl font-bold ">{title}</h1>
        <h3 className="text-lg py-7 font-base tracking-tight ">{overview}</h3>

        <div className="flex gap-3">
          <button className="text-black flex items-center gap-2 text-xl bg-white border rounded-lg px-14 py-3 ">
            <IoPlay /> Play
          </button>
          <button className="text-white bg-opacity-70 text-xl bg-gray-500 flex items-center gap-2 border rounded-lg px-10 py-3 ">
            <IoMdInformationCircleOutline size={23} />
            More Info
          </button>
        </div>
      </div>
    </div>
  );
};

export default VideoTitle;
