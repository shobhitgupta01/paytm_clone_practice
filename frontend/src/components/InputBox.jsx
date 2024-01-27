export default function InputBox({label, placeholder, type = 'text'}){
    return(
        <div>
            <div className="text-lg font-semibold mb-2">
                {label}
            </div>
            <div className="mb-6">
                <input 
                className="border border-slate-300 text-gray-500 rounded-md w-full h-9 p-3" 
                type={type}
                placeholder={placeholder}
                />
            </div>
        </div>
    )
}