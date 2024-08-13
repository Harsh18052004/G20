export default function Card4() {
    const imgUrl = "https://th.bing.com/th/id/OIP.qaegz7o6karzSi4h6RvQgQHaKo?w=557&h=800&rs=1&pid=ImgDetMain";
    
    return (
        <div className="flex-col align-center justify-center">
            <div className="w-[20rem] h-[35rem] bg-black mr-5 box-border mt-10 mb-2 rounded-[40px] overflow-hidden">
                <img
                    src={imgUrl}
                    alt="Geese"
                    className="w-full h-full object-cover rounded-t-[50px] transition-transform duration-300 ease-in-out hover:scale-150"
                    />
            </div>
            <p className="font-machina text-4xl ml-10"> Introduction to Azure</p>
            <p className="ml-10">Azure, AWS, Firebase</p>
        </div>
    );
}
