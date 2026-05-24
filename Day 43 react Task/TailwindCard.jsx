export default function TailwindCard({name,contact}){

    return(


        <div className=" m-4 mt-4 w-64 h-64 shadow-lg">
            <div className="flex flex-col justify-center items-center text-center ">
            <img src="https://picsum.photos/200"  alt="image"/>
            <p> Name:{name} </p>
            <p> Contact:{contact}</p>
            </div>
        </div>

    );
}