export default function Card() {
    const imgUrl = "https://wallpaperaccess.com/full/696176.jpg";
    
    return (
        <div className="flex-col align-center justify-center">
            <div className="w-[40rem] h-[50rem] bg-black ml-10 box-border mt-10 mb-2 rounded-[40px] overflow-hidden">
                <img
                    src={imgUrl}
                    alt="Geese"
                    className="w-full h-full object-cover rounded-t-[50px] transition-transform duration-300 ease-in-out hover:scale-150"
                    />
            </div>
            <p className="font-machina text-4xl ml-10">De Online Psycholoog</p>
            <p className="ml-10">Website, Logo design, Photography</p>
        </div>
    );
}
