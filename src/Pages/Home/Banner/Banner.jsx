import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import slider1 from '../../../assets/home/01.jpg'
import slider2 from '../../../assets/home/02.jpg'
import slider3 from '../../../assets/home/03.png'
import slider4 from '../../../assets/home/04.jpg'
import slider5 from '../../../assets/home/05.png'
import slider6 from '../../../assets/home/06.png'

const Banner = () => {
    return (
        <div >
            <Carousel className="text-center" autoPlay={true} infiniteLoop={1} interval={3000}>
                <div>
                    <img src={slider1} alt="" />
                </div>
                <div>
                    <img src={slider2} alt="" />
                </div>
                <div>
                    <img src={slider3} alt="" />
                </div>
                <div>
                    <img src={slider6} alt="" />
                </div>
                <div>
                    <img src={slider5} alt="" />
                </div>
                <div>
                    <img src={slider4} alt="" />
                </div>
            </Carousel>

        </div>
    );
};

export default Banner;