import Card from "./Card";
import Card2 from "./Card2";    
import Card3 from "./Card3";
import Card4 from "./Card4";

export default function FullCard() {
    return (
        <div className="ml-[-10px] flex justify-center items-center h-screen  ">
            <Card />
            <Card2 />
            <Card3/>
            <Card4 />
        </div>
    );

}