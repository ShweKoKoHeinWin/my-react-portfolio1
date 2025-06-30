import { Link } from "react-router-dom";

const NavLink = ({link = '', label = '', isActive = false}) => {
    return (
        <Link to={link}
            className={`${isActive && 'translate-y-[-10%] shadow-light shadow-lg'} relative z-20 cursor-pointer relative px-4 py-1 ring-bottom-2 ring-light  overflow-hidden rounded-lg inline-flex justify-center items-center group hover:translate-y-[-10%] hover:shadow-md hover:shadow-light active:scale-[0.95] active:shadow-full active:translate-y-0 transition-all duration-300`}
        >
            <div
                className={`absolute left-0 top-0 w-full h-full z-0 bg-light ${isActive ? 'translate-0' : "-translate-x-3/2"} -translate-y-2/5 group-hover:translate-0 transition-all duration-500`}
            ></div>
            <div
                className={`absolute left-0 bottom-0 w-full h-full z-0 bg-light ${isActive ? 'translate-0' : "translate-x-3/2"} translate-y-2/5 group-hover:translate-0 transition-all duration-500`}
            ></div>
            <span
                className={`${isActive ? 'text-orange' : "text-skin"}  text-md font-bold z-1 group-hover:text-orange`}
            >
                {label}
            </span>
        </Link>
    );
};

export default NavLink;
