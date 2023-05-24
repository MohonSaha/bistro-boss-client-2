import Cover from "../../Shared/Cover/Cover";
import TitlePage from "../../Shared/TitlePage/TitlePage";
import menuImg from '../../../assets/menu/banner3.jpg'
import PopularMenu from "../../Home/PopularMenu/PopularMenu";

const Menu = () => {
    return (
        <div>
            <TitlePage title="Bistro Boss | Menu"></TitlePage>
            <Cover image={menuImg} title="Our Menu"></Cover>
            <PopularMenu></PopularMenu>
            <Cover image={menuImg} title="Our Menu"></Cover>
            <PopularMenu></PopularMenu>
            <Cover image={menuImg} title="Our Menu"></Cover>
            <PopularMenu></PopularMenu>
        </div>
    );
};

export default Menu;