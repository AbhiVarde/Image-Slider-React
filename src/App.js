import ImageSlider from "./ImageSlider";

const App = () => {
    const slides = [
        { url: "http://localhost:3000/image1.jpg", title: "image1" },
        { url: "http://localhost:3000/image2.jpg", title: "image2" },
        { url: "http://localhost:3000/image3.jpg", title: "image3" },
        { url: "http://localhost:3000/image4.jpg", title: "image4" },
        { url: "http://localhost:3000/image5.jpg", title: "image5" },

    ];

    const containerStyles = {
        width: "500px",
        height: "280px",
        margin: "0 auto",
    };

    const h1 = {

    };

    return (
        <div>
            <center><h2 style={{fontFamily: "sans-serif"}}>Hi, ImageSlider !</h2></center>
            <div style = {containerStyles}>
                <ImageSlider slides = {slides} />
            </div>
            <br></br>
            <center><footer style={{fontFamily: "sans-serif",paddingTop:"44%"}}>&#169; Abhi Varde. All rights reserved.</footer></center>
        </div>
    );
};

export default App;