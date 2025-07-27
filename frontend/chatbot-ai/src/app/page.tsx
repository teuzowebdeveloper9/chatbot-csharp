import { FaBrain } from "react-icons/fa";


export default function Home() {
  return (
    <div className="relative flex min-h-screen w-screen overflow-x-hidden flex-col items-center justify-start bg-gradient-to-r from-[#1005d8] via-[#03015c] to-[#000000] text-stone-200">
      <div
        className="absolute w-[300px] h-[300px] rounded-full blur-[80px] z-0 hidden md:block 
    top-[70%] -left-[100px] -translate-y-1/2 
        bg-[radial-gradient(circle,_#1005d8_0%,_#1005d8_40%,_transparent_100%)]"
      ></div>

      <div
        className="absolute w-[300px] h-[300px] rounded-full blur-[80px] z-0 hidden md:block 
         top-[10%] -right-[100px] -translate-y-1/2 
         bg-[radial-gradient(circle,_#1005d8_0%,_#1005d8_40%,_transparent_100%)]"
      ></div>
      <h1 className="flex flex-row gap-4 text-3xl font-bold mt-6 mb-4">chat bot AI <FaBrain /></h1>
      <div className="flex break-words w-[350px] h-[400px] p-3 justify-start items-center border-solid border-2 border-stone-200 rounded-lg m-4">
        <p className="font-bold text-xl">
          Make your chat bot your way so it can help you in a personalized way,
          give the chat name the context of what it will do and start enjoying
          the help it can provide you
        </p>
      </div>
    </div>
  );
}
