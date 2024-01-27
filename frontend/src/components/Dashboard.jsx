export default function Dashboard(){
    return(
        <div>
            <Navbar/>
            <DashboardContent/>
        </div>
    )
}

function Navbar(){
    return(
        <div className="w-full h-20 p-4 mb-10 border border-slate-300 flex justify-between items-center">
            <div className="text-3xl font-bold">
                Payments App
            </div>
            <div className="text-xl flex justify-between items-center">
                <div className="mr-2">Hello, User</div>
                <div className="rounded-full bg-slate-300 h-10 w-10 p-4 flex items-center justify-center">
                    U
                </div>
            </div>
            
        </div>
    )
}

function DashboardContent(){
    return (
        <div>
            Dashboard Content
        </div>
    )
}