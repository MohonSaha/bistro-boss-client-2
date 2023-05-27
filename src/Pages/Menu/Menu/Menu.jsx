import Cover from "../../Shared/Cover/Cover";
import TitlePage from "../../Shared/TitlePage/TitlePage";
import menuImg from '../../../assets/menu/banner3.jpg'
import dessertImg from '../../../assets/menu/dessert-bg.jpeg'
import pizzaImg from '../../../assets/menu/pizza-bg.jpg'
import saladImg from '../../../assets/menu/salad-bg.jpg'
import soupImg from '../../../assets/menu/soup-bg.jpg'
import useMenu from "../../../hooks/useMenu";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import MenuCategory from "../MenuCategory/MenuCategory";

const Menu = () => {

    const [menu] = useMenu();
    const salad = menu.filter(item => item.category === "salad");
    const soup = menu.filter(item => item.category === "soup");
    const pizza = menu.filter(item => item.category === "pizza");
    const offered = menu.filter(item => item.category === "offered");
    const dessert = menu.filter(item => item.category === "dessert");

    return (
        <div>
            <TitlePage title="Bistro Boss | Menu"></TitlePage>
            <Cover image={menuImg} title="Our Menu"></Cover>
            
            <SectionTitle heading={"Today's offer"} subHeading={"Don't Miss"}></SectionTitle>

            {/* Offered Menu Items */}
            <MenuCategory items={offered}></MenuCategory>

            {/* Dessert Menu Items */}
            <MenuCategory items={dessert} title={"dessert"} coverImg={dessertImg}></MenuCategory>

            {/* Pizza Menu Items */}
            <MenuCategory items={pizza} title={"pizza"} coverImg={pizzaImg}></MenuCategory>

            {/* salad Menu Items */}
            <MenuCategory items={salad} title={"salad"} coverImg={saladImg}></MenuCategory>

            {/* soup Menu Items */}
            <MenuCategory items={soup} title={"soup"} coverImg={soupImg}></MenuCategory>
        </div>
    );
};

export default Menu;