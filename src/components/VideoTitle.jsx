import { IoPlay } from 'react-icons/io5';
import { IoMdInformationCircleOutline } from 'react-icons/io';

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="w-screen aspect-video bg-gradient-to-r from-black absolute ">
      <div className="w-1/3 pl-24 absolute top-1/3">
        <h1 className="text-6xl font-bold text-white ">{title}</h1>
        <h3 className="text-lg text-white  py-7 font-base tracking-tight ">
          {overview}
        </h3>

        <div className="flex gap-3">
          <button className="text-black hover:bg-slate-300 transition-all flex items-center gap-2 text-xl bg-white  rounded-lg px-14 py-3 ">
            <IoPlay /> Play
          </button>
          <button className="text-white bg-opacity-70 text-xl bg-gray-500 flex items-center gap-2 rounded-lg px-10 py-3 ">
            <IoMdInformationCircleOutline size={23} />
            More Info
          </button>
        </div>
      </div>
    </div>
  );
};

export default VideoTitle;
