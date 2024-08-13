export default function Card() {
    const imgUrl = "https://thumbs.dreamstime.com/b/vector-graphics-mobile-infographics-three-options-template-creating-applications-workflow-layout-diagram-banner-web-194947270.jpg";
    
    return (
        <div className="flex-col align-center justify-center">
            <div className="w-[20rem] h-[35rem] bg-black ml-10 box-border mt-10 mb-2 rounded-[40px] overflow-hidden">
                <img
                    src={imgUrl}
                    alt="Geese"
                    className="w-full h-full object-cover rounded-t-[50px] transition-transform duration-300 ease-in-out hover:scale-150"
                    />
            </div>
            <p className="font-machina text-4xl ml-10">Season of Solutions</p>
            <p className="ml-10">Prestigious, Prototyping and Presentation</p>
        </div>
    );
}
