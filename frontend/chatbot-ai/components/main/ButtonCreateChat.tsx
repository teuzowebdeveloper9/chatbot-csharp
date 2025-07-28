export function ButtonCreateChat({onClick} : {onClick : () => void}){
  return(
    <div onClick={onClick} className="bg-black rounded-lg px-5 py-4 mt-4 h-[50px] w-[150px]">
        <p className="text-white font-bold text-center">create chat</p>
    </div>
  )
}