
import { ReactComponent as ArrowLeft } from '../images/ArrowLeft.svg';
import { ReactComponent as ArrowRight } from '../images/ArrowRight.svg';

export function Pagination (){
  return (
    <>
    <ul className="pagination flex justify-center p-2 m-0 my-[3rem] text-[#70778B]  bg-white max-w-[515px] mx-auto rounded-lg text-xl font-bold m:max-w-[350px]">
         <li className=" inline-block py-[9px] px-[17px] cursor-pointer mr-[4.5rem] pr-[1rem] border-r-2 m:hidden">
            <ArrowLeft
            />
        </li>
        <li className="inline-block py-[1px] px-[10px] cursor-pointer border-b-2 border-[#5876C5] text-[#5876C5]">
            1
        </li>
        <li className="inline-block py-[1px] px-[10px] cursor-pointer ">
            2
        </li>
        <li className="inline-block py-[1px] px-[10px] cursor-pointer">
            3
        </li>
        <li className="inline-block py-[1px] px-[10px] cursor-pointer">
            4
        </li>
        <li className="inline-block py-[1px] px-[10px] cursor-pointer">
            5
        </li>
        <li className="inline-block py-[1px] px-[10px] cursor-pointer">
            ...
        </li>
        <li className="inline-block py-[1px] px-[10px] cursor-pointer">
            18
        </li>
        <li className="inline-block py-[9px] px-[17px] cursor-pointer ml-[4.5rem] pl-[1rem] border-l-2 m:hidden">
            <ArrowRight
            />
        </li>
    </ul>

    </>
  )
}