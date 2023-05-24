import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import featuredImg from '../../../assets/home/featured.jpg'
import './Featured.css'

const Featured = () => {
    return (
        <div className="featured-item bg-fixed text-white pt-6 my-20">
            <SectionTitle
                subHeading={"Check It Out"}
                heading={"Featured Item"}
            ></SectionTitle>
            <div className="md:flex bg-black bg-opacity-30 ty-25 justify-center items-center pt-12 pb-20 px-36">
                <div>
                    <img src={featuredImg} alt="" />
                </div>
                <div className="md:ml-12">
                    <p>Aug 12, 2023</p>
                    <p className="uppercase">Where can i get some?</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laudantium, iusto? Laborum veniam rerum ipsum labore quam eum, repellendus harum reiciendis quia cum nihil quo libero, eius inventore necessitatibus, tenetur error odit quos consequuntur cupiditate sint at culpa eveniet hic! Enim possimus sapiente esse veritatis libero aliquam voluptatum quibusdam totam eligendi.</p>
                    <button className="btn btn-outline border-white border-0 border-b-4 hover:bg-white hover:text-black text-white hover:border-white hover:font-semibold mt-4">Order Now</button>
                </div>
            </div>
        </div>
    );
};

export default Featured;