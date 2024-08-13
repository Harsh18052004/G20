export default function Card2() {
    const imgUrl = "https://cdn.pixabay.com/photo/2017/01/29/13/21/mobile-devices-2017982_960_720.png";
    
    return (
        <div className="flex-col align-center justify-center">
            <div className="w-[20rem] h-[35rem] bg-black ml-10 box-border mt-10 mb-2 rounded-[40px] overflow-hidden">
                <img
                    src={imgUrl}
                    alt="Geese"
                    className="w-full h-full object-cover rounded-t-[50px] transition-transform duration-300 ease-in-out hover:scale-150"
                    />
            </div>
            <p className="font-machina text-4xl ml-10">Google Cloud Arcade Facilitor</p>
            <p className="ml-10">Arcade Facilitator Program , AI/ML</p>
        </div>
    );
}
