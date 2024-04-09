import { IoPlay } from 'react-icons/io5';
import { IoMdInformationCircleOutline } from 'react-icons/io';

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="w-screen aspect-video bg-gradient-to-r from-black absolute ">
      <div className="md:w-1/3 w-2/4 pl-24 absolute top-1/3">
        <h1 className="md:text-6xl text-xl font-bold text-white ">{title}</h1>
        <h3 className="text-lg hidden md:block text-white  py-7 font-base tracking-tight ">
          {overview}
        </h3>

        <div className="flex pt-5 md:pt-0 gap-3">
          <button className="text-black hover:bg-slate-300 transition-all px-3 flex items-center gap-2 text-xl bg-white  rounded-lg md:px-14 md:py-3 ">
            <IoPlay /> Play
          </button>
          <button className="text-white bg-opacity-70 text-xl bg-gray-500 flex items-center gap-2 rounded-lg md:px-10 px-3 md:py-3 ">
            <div className="hidden md:block">
              <IoMdInformationCircleOutline size={23} />
            </div>
            More Info
          </button>
        </div>
      </div>
    </div>
  );
};

export default VideoTitle;
