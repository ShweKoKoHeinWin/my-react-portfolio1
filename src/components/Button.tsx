const Button = ({ color = 'orange' }) => {
    return (
        <button
            className={`relative z-20 cursor-pointer">
            <div className="relative px-4 py-2 ring-2 ring-${color}  overflow-hidden rounded-lg inline-flex justify-center items-center group hover:translate-y-[-10%] hover:shadow-lg hover:shadow-${color} active:scale-[0.9] active:translate-y-0 active:shadow-2xl active:shadow-orange transition-all duration-300`}
        >
            <div
                className={`absolute left-0 top-0 w-full h-full z-0 bg-${color} -translate-x-full -translate-y-1/2 group-hover:translate-0 transition-all duration-300`}
            ></div>
            <div
                className={`absolute left-0 bottom-0 w-full h-full z-0 bg-${color} translate-x-full translate-y-1/2 group-hover:translate-0 transition-all duration-300`}
            ></div>
            <span
                className={`text-${color} text-lg font-bold group-hover:text-light z-1 drop-shadow-xs drop-shadow-skin`}
            >
                Click Me
            </span>
        </button>
    );
};

export default Button;
