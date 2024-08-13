export default function Card3() {
    const imgUrl = "https://static.vecteezy.com/system/resources/previews/002/027/488/large_2x/illustration-of-sign-in-page-login-website-page-and-form-people-with-smartphone-screen-vector.jpg";
    
    return (
        <div className="flex-col align-center justify-center">
            <div className="w-[20rem] h-[35rem] bg-black ml-4 box-border mt-10 mb-2 rounded-[40px] overflow-hidden">
                <img
                    src={imgUrl}
                    alt="Geese"
                    className="w-full  h-full object-cover rounded-t-[50px] transition-transform duration-300 ease-in-out hover:scale-150"
                     />
            </div>
            <p className="font-machina text-4xl ml-10">Python HTTP API for Use</p>
            <p className="ml-10">Python HTTP, Github Codespaces</p>
        </div>
    );
}
