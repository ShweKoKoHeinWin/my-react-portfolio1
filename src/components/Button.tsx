const Button = ({
    label = "Click Me!",
    color = "secondary",
    size,
}: {
    color: "secondary" | "primary";
    label?: string;
    size: "small" | "medium" | "large";
}) => {
    let textSizes = "text-extra-small sm:text-small";
    if (size === "medium") {
        textSizes = "text-small sm:text-medium";
    } else if (size === "large") {
        textSizes = "text-medium sm:text-large";
    }

    if (color === "secondary")
        return (
            <button
                className={`cursor-pointer relative px-4 py-2 ring-2 ring-secondary  overflow-hidden rounded-lg inline-flex justify-center items-center group hover:translate-y-[-10%] hover:shadow-lg hover:shadow-secondary active:scale-[0.9] active:translate-y-0 active:shadow-2xl active:shadow-secondary transition-all duration-300`}
            >
                <div
                    className={`absolute left-0 top-0 w-full h-full z-0 bg-secondary -translate-x-full -translate-y-1/2 group-hover:translate-0 transition-all duration-300`}
                ></div>
                <div
                    className={`absolute left-0 bottom-0 w-full h-full z-0 bg-secondary translate-x-full translate-y-1/2 group-hover:translate-0 transition-all duration-300`}
                ></div>
                <span
                    className={`text-secondary ${textSizes} font-bold group-hover:text-light z-10`}
                >
                    {label}
                </span>
            </button>
        );

    if (color === "primary")
        return (
            <button
                className={`cursor-pointer relative px-4 py-2 ring-2 ring-primary  overflow-hidden rounded-lg inline-flex justify-center items-center group hover:translate-y-[-10%] hover:shadow-lg hover:shadow-primary active:scale-[0.9] active:translate-y-0 active:shadow-2xl active:shadow-primary transition-all duration-300`}
            >
                <div
                    className={`absolute left-0 top-0 w-full h-full z-0 bg-primary -translate-x-full -translate-y-1/2 group-hover:translate-0 transition-all duration-300`}
                ></div>
                <div
                    className={`absolute left-0 bottom-0 w-full h-full z-0 bg-primary translate-x-full translate-y-1/2 group-hover:translate-0 transition-all duration-300`}
                ></div>
                <span
                    className={`text-primary ${textSizes} font-bold drop-shadow-xs drop-shadow-dark group-hover:text-light`}
                >
                    {label}
                </span>
            </button>
        );

    return (
        <>
            {/* <button
                className={`cursor-pointer relative px-4 py-2 ring-2 ring-${color}  overflow-hidden rounded-lg inline-flex justify-center items-center group hover:translate-y-[-10%] hover:shadow-lg hover:shadow-${color} active:scale-[0.9] active:translate-y-0 active:shadow-2xl active:shadow-${color} transition-all duration-300`}
            >
                <div
                    className={`absolute left-0 top-0 w-full h-full z-0 bg-${color} -translate-x-full -translate-y-1/2 group-hover:translate-0 transition-all duration-300`}
                ></div>
                <div
                    className={`absolute left-0 bottom-0 w-full h-full z-0 bg-${color} translate-x-full translate-y-1/2 group-hover:translate-0 transition-all duration-300`}
                ></div>
                <span
                    className={`text-${color} text-lg font-bold group-hover:text-light z-1`}
                >
                    Click Me
                </span>
            </button> */}
        </>
    );
};

export default Button;
