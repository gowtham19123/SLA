export default function TailwindNav(){
    return(
        <nav className="  bg-green-600 text-white w-full h-14 px-4 flex flex-col items-start sm:flex-row sm:justify-between sm:justify-start sm:items-center sm:h-14 sm:px-6">
        
                <h1 className="ml-4"> logo </h1>
                
                <div className=" flex flex-col sm:flex-row gap-4  items-left">
                    <div className="hover:text-blue-600">Home</div>
                    <div className="hover:text-blue-600">About</div>
                    <div className="hover:text-blue-600">Services</div>
                 </div>

        </nav>
    );
}