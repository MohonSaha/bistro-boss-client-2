import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import { Swiper, SwiperSlide } from "swiper/react";
import { Rating } from '@smastrom/react-rating'

import '@smastrom/react-rating/style.css'

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import required modules
import { Navigation } from "swiper";
import { useEffect, useState } from "react";


const Testimonials = () => {

    const [reviews, setReviews] = useState([])
    useEffect(() => {
        fetch('reviews.json')
            .then(res => res.json())
            .then(data => {
                setReviews(data)
            })
    }, [])


    return (
        <section>
            <SectionTitle
                subHeading={"What Out Client Say"}
                heading={"Testimonials"}
            ></SectionTitle>


            <Swiper navigation={true} modules={[Navigation]} className="mySwiper">

                {
                    reviews.map(review => <SwiperSlide
                        key={review._id}
                        review={review}
                    >

                        <div className="mx-44 flex flex-col items-center mb-24 mt-12 text-center">

                            <Rating
                                style={{ maxWidth: 180 }}
                                value={review.rating}
                                readOnly
                            />

                            <p className="my-6">{review.details}</p>
                            <h3 className="text-2xl text-orange-600">{review.name}</h3>

                        </div>

                    </SwiperSlide>)
                }
            </Swiper>
        </section>
    );
};

export default Testimonials;