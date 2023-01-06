import star from '../images/star.svg'


export function Star () {
    return (
        <div className='flex items-center mr-[1rem]'>
            <span className='flex w-full'>
                <img className='m:w-[11px] m:h-[10px]' src={star} alt="star" />
                <img className='m:w-[11px] m:h-[10px]' src={star} alt="star" />
                <img className='m:w-[11px] m:h-[10px]' src={star} alt="star" />
                <img className='m:w-[11px] m:h-[10px]' src={star} alt="star" />
                <img className='m:w-[11px] m:h-[10px]' src={star} alt="star" />
               
            </span>
        </div>
    )
}