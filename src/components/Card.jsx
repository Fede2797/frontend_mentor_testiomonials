
export const Card = ({ props }) => {

    const { name, title, main_quote, second_text, image_name, style } = props;

    return (

        <div className={`flex flex-col rounded-xl p-10 space-y-6 shadow-xl ${ style }`}>

            {/* Avatar & Name */}
            <div className="flex space-x-5 items-center">
                {/* Avatar */}
                <div className="w-[36px]"><img className="rounded-full border-[3px] border-white/[.25]" src={`./images/${image_name}.jpg`} alt="" /></div>
                {/* Name & Title */}
                <div className="flex flex-col space-y-[-2px]">
                <h2 className="">{ name }</h2>
                <p className="text-sm opacity-50">{ title }</p>
                </div>
            </div>

            {/* Main Text */}
            <div className="text-[18px] font-semibold leading-7">
                <h1>{ main_quote }</h1>
            </div>

            {/* Second Text */}
            <div>
                <p className="opacity-[0.7]">{ second_text }</p>
            </div>

        </div>
    )
}
