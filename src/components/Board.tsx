import { Link } from 'react-router-dom';

import { IBoard } from '../models';
import { Saved } from './Saved';
import { Star } from './Star';

import point from '../images/point.svg';

interface BoardProps {
    board: IBoard;
}

export function Board({ board }: BoardProps) {
    return (
        <div className="w-full border py-6 px-4 bg-white flex mb-2 rounded-lg shadow-lg justify-between cursor-pointer hover:border hover:border-slate-400  lg:flex-col sm:bg-[#EFF0F5] sm:border-b-slate-400 sm:py-3">
            <div className="flex">
                <div className="w-20 h-20 rounded-full bg-gray-400 border-solid">
                    <img
                        className="w-20 h-20 rounded-full"
                        src={board.pictures[0]}
                        alt={board.name}
                    />
                </div>
                <Link to="/detail">
                    <div className="h-full flex flex-col justify-between pl-5">
                        <p className="max-w-[730px] 2xl:max-w-[500px] xl:max-w-[350px] m:max-w-[250px] text-xl font-bold text-gray-700 mb-2 hover:text-blue-700 sm:text-lg  m:font-normal">
                            {board.title}
                        </p>
                        <span className="text-gray-400 text-base ">
                            Department name • Allgemeines
                            <br />
                            Krankenhaus der Stadt Wien - AKH
                        </span>
                        <div className="flex">
                            <img
                                className="w-3 h-3 mr-2 mt-2 "
                                src={point}
                                alt="point"
                            />
                            <p className="text-gray-400 text-base mt-1">
                                {board.address}
                            </p>
                        </div>
                    </div>
                </Link>
            </div>
            <div className="flex lg:-order-1 lg:justify-between lg:ml-[6.2rem] lg:mb-[1rem]">
                <Star />

                <div className="flex justify-between items-end flex-col lg:flex-row">
                    <span className="sm:hidden">
                        <Saved />
                    </span>
                    <p className="text-gray-400 text-base lg:mr-[2rem] lg:-order-2 m:text-sm">
                        Posted{' '}
                        {board.createdAt
                            .substring(0, 10)
                            .split('-')
                            .reverse()
                            .join('-')}
                    </p>
                </div>
            </div>
        </div>
    );
}
