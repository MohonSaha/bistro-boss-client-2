import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";


// import required modules
import { FreeMode, Pagination } from "swiper";


import img1 from "../../../assets/home/slide1.jpg"
import img2 from "../../../assets/home/slide2.jpg"
import img3 from "../../../assets/home/slide3.jpg"
import img4 from "../../../assets/home/slide4.jpg"
import img5 from "../../../assets/home/slide5.jpg"
import SectionTitle from "../../../components/SectionTitle/SectionTitle";



const Category = () => {
    return (
        <div className="">
            <section>
                <SectionTitle
                    subHeading={"From 11.00am to 10.00pm"}
                    heading={"Order Online"}>
                </SectionTitle>
                <Swiper
                    slidesPerView={4}
                    spaceBetween={10}
                    freeMode={true}
                    pagination={{
                        clickable: true,
                    }}
                    modules={[FreeMode, Pagination]}
                    className="mySwiper mb-20"
                >
                    <SwiperSlide>
                        <img src={img1} />
                        <h3 className="text-4xl uppercase text-center text-white -mt-16 relative bottom-8">Salads</h3>
                    </SwiperSlide>

                    <SwiperSlide>
                        <img src={img2} />
                        <h3 className="text-4xl uppercase text-center text-white -mt-16 relative bottom-8">Desserts</h3>
                    </SwiperSlide>

                    <SwiperSlide>
                        <img src={img3} />
                        <h3 className="text-4xl uppercase text-center text-white -mt-16 relative bottom-8">Pizzas</h3>
                    </SwiperSlide>

                    <SwiperSlide>
                        <img src={img4} />
                        <h3 className="text-4xl uppercase text-center text-white -mt-16 relative bottom-8">Soups</h3>
                    </SwiperSlide>

                    <SwiperSlide>
                        <img src={img5} />
                        <h3 className="text-4xl uppercase text-center text-white -mt-16 relative bottom-8">Salads</h3>
                    </SwiperSlide>
                </Swiper>
            </section>
        </div>
    );
};

export default Category;