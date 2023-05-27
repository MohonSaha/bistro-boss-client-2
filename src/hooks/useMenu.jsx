import { useEffect, useState } from "react";

const useMenu = () =>{
    const [menu, setMenu] = useState([])
    const [loading, setLoading] = useState(true)
    useEffect(() => {
        fetch('http://localhost:5000/menu')
            .then(res => res.json())
            .then(data => {
                setMenu(data);
                setLoading(false)
            })
    }, [])

    return [menu, loading]
}

export default useMenu;



/*

** The person who use this useMenu (Custom Hook) will get the return value like [menu].


*/