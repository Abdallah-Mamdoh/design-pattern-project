
export function ToastButton({onClick,text,color}){
    return(
        <div onClick={onClick} className="mr-10">
            <button type="button" 
            className={`text-white bg-gradient-to-r
            ${color}font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2`}>
                {text}
            </button>
        </div>
    )
}