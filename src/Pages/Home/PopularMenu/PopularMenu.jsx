import { useEffect, useState } from "react";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";


const PopularMenu = () => {

    const [menu, setMenu] = useState([])
    useEffect( () =>{
        fetch('menu.json')
        .then(res => res.json())
        .then(data => {
            
            const popularItem = data.filter(item=> item.category === "popular");
            
            setMenu(data)})
    } ,[])

    return (
        <section>
            <SectionTitle
                heading={"From Out Menu"}
                subHeading={"popular Items"}
            ></SectionTitle>
        </section>
    );
};

export default PopularMenu;