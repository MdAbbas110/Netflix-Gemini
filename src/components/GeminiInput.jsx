import lang from '../utils/languageConstants';

const GeminiInput = () => {
  return (
    <div className="pt-[10%]  mx-auto flex justify-center">
      <form className="bg-black grid w-1/2 grid-cols-4">
        <input
          type="text"
          className="p-4 m-4 col-span-3 rounded-xl"
          placeholder={lang.arabic.placeholder}
        />
        <button className="py-2 px-3 m-4 text-white text-xl font-medium bg-red-800 rounded-xl">
          {lang.arabic.search}
        </button>
      </form>
    </div>
  );
};

export default GeminiInput;
