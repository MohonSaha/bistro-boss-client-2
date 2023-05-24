import { useEffect, useState } from "react";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import MenuItem from "../../Shared/MenuItem/MenuItem";


const PopularMenu = () => {

    const [menu, setMenu] = useState([])
    useEffect(() => {
        fetch('menu.json')
            .then(res => res.json())
            .then(data => {

                const popularItem = data.filter(item => item.category === "popular");

                setMenu(popularItem)
            })
    }, [])

    return (
        <section className="mb-12">
            <SectionTitle
                heading={"From Out Menu"}
                subHeading={"popular Items"}
            ></SectionTitle>
            <div className="grid md:grid-cols-2 gap-10">
                {
                    menu.map(item => <MenuItem
                        key={item._id}
                        item={item}
                    ></MenuItem>)
                }
            </div>
            <div className="text-center w-full">
                <button className="btn btn-outline border-black border-0 border-b-4 hover:bg-black hover:text-white text-black hover:border-black  hover:font-semibold mt-4">View Full Menu</button>
            </div>
        </section>
    );
};

export default PopularMenu;