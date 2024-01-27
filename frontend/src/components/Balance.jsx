export default function Balance({value}){
    return(
        <div className="flex items-center mb-10 p-5">
        <div className="text-2xl font-semibold mr-5">Your Balance</div>
        <span className="text-2xl">&#8377; {value}</span>
      </div>
    )
}