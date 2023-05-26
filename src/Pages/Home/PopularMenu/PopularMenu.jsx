import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import MenuItem from "../../Shared/MenuItem/MenuItem";
import useMenu from "../../../hooks/useMenu";


const PopularMenu = () => {

    const [menu] = useMenu();
    const popularItem = menu.filter(item => item.category === "popular")

    

    return (
        <section className="mb-12">
            <SectionTitle
                heading={"From Our Menu"}
                subHeading={"popular Items"}
            ></SectionTitle>
            <div className="grid md:grid-cols-2 gap-10">
                {
                    popularItem.map(item => <MenuItem
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