export default function Hero() {
    return(
        <div className="flex flex-col items-center">
      <div className="absolute top-0 left-0 w-full h-96 bg-gradient-to-br from-pink-400 to-[#0055D1] rounded-md filter blur-3xl opacity-50 -z-50"></div>
      <div className="flex flex-col max-w-6xl sm:flex-row sm:px-5 items-center">
      <div className="px-5 sm:w-[50%] py-3">
      <p className="pl-6 sm:pl-2 font-bold">pono</p>
      <p className="pl-6 sm:pl-2 text-gray-600">Hawaiian word</p>
      <div className="text-center">
      <p className="text-gray-600"> “sense of being and a way to work, act, respect, and treat people and the land to create balance and harmony.”</p>
      </div>
     
    </div>
    <div className="sm:w-[50%] flex justify-center">
       <h3 className="text-center my-5 text-gray-600"><span className="font-bold text-black">pono piece</span> is a local writers group to help each other create thier masterpiece</h3>
    </div>
      </div>
      <div className="bg-white px-3 py-2 sm:mt-10 rounded-md shadow-md text-blue-300 hover:scale-105 cursor-pointer hover:text-white hover:bg-blue-300">start the journey</div>
    </div>
    );
}