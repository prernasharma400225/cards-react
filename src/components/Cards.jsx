import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaAt } from "react-icons/fa";

const Cards = (props) => {
    return (
        <div className='card h-90 w-72 border rounded-xl bg-white p-3'>
            <div className='img flex flex-col items-center'>
                <div className='bgimg h-20 w-full '>
                    <img className=' object-cover h-28 w-full rounded-2xl bg-center' src={props.bgimg} alt="" /></div>
                <div className='smallimg h-24 w-24 rounded-full border-3 border-white overflow-hidden '>
                    <img className='object-cover bg-center ' src={props.profile} alt="" /></div>
            </div>
            <div className="text flex flex-col items-center justify-center">
                <h1 className='font-bold text-xl'>{props.name}</h1>
                <h2 className='text-xs text-center text-neutral-500 font-semibold'>{props.details}</h2>
            </div>
            <div className="rates flex items-center justify-between bg-neutral-100  border border-gray-400 rounded-xl p-2 mt-4">
                <div className='flex flex-col items-center'>
                    <h4 className='text-neutral-800 font-semibold'>{props.like}</h4>
                    <p className='text-neutral-500 text-xs'>Likes</p>
                </div>
                <div className='flex flex-col items-center'>
                    <h4 className='text-neutral-800 font-semibold'>{props.post}</h4>
                    <p className='text-neutral-500 text-xs'>Posts</p>
                </div>
                <div className='flex flex-col items-center'>
                    <h4 className='text-neutral-800 font-semibold'>{props.view}</h4>
                    <p className='text-neutral-500 text-xs'>Views</p>
                </div>
            </div>
            <div className="icons flex items-center pt-3 px-1 justify-center gap-2 ">
                <FaInstagram />
                <FaXTwitter />
                <FaAt/>
                </div>
        </div>
    );
}

export default Cards;
