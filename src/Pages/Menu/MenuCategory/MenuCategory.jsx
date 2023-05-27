import { Link } from "react-router-dom";
import Cover from "../../Shared/Cover/Cover";
import MenuItem from "../../Shared/MenuItem/MenuItem";


const MenuCategory = ({ items, title, coverImg }) => {
    return (
        <div className="pt-16">
            {title && <Cover image={coverImg} title={title}></Cover>}

            <div className="grid md:grid-cols-2 gap-10 mt-10">
                {
                    items.map(item => <MenuItem
                        key={item._id}
                        item={item}
                    ></MenuItem>)
                }
            </div>
            <Link to={`/orderItem/${title}`}><button className="btn btn-outline border-yellow-600 border-0 border-b-4 hover:bg-yellow-600 hover:text-black text-black hover:border-yellow-600 hover:font-semibold mt-4">Order Now</button></Link>
        </div>
    );
};

export default MenuCategory;