import SubNavbar from "./SubNavbar";
import FullCard from "./Cards/FullCard";
import Footer from "./Footer/Footer";
import Animation from "./Animation";
import Text from './components/Text';
import Line from './components/Line';
import Navbar from "./Harman/Navbar";
import Main from "./Harman/Main";
// import CustomCursor from "./CustomCursor";

export default function Full() {
    return (
        <>
        {/* <CustomCursor/> */}
        <Navbar/>
        <Main/>
        <Text/>
        <Line/>
        <Animation/>
        <FullCard/>
        <SubNavbar />
        <Footer/>
        </>
    );
}