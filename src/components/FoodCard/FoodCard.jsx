import { useContext } from "react";
import { AuthContext } from "../../providers/authProvider";
import Swal from "sweetalert2";
import { useLocation, useNavigate } from "react-router-dom";
import useCart from "../../hooks/useCart";


const FoodCard = ({item}) => {

    const {name, image, price, recipe} = item;
    const {user} = useContext(AuthContext)
    const navigate = useNavigate()
    const location = useLocation()
    const [, refetch] = useCart()

    const handleAddToCart = item => {
        const {name, image, price, _id} = item;
        if(user && user.email){
            const cartItem = {menuItemId: _id, name, image, price, email: user.email};
            // console.log(cartItem);
            fetch('http://localhost:5000/carts', {
                method: 'POST',
                headers: {
                    'content-type' : 'application/json'
                },
                body: JSON.stringify(cartItem)
            })
            .then(res => res.json())
            .then(data =>{
                if(data.insertedId){
                    refetch();  // Refetch cart to upddate the number of items in the cart
                    Swal.fire({
                        icon: 'success',
                        title: 'Food Added to the cart',
                        showConfirmButton: false,
                        timer: 1500
                      })
                }
            })
        }
        else{
            Swal.fire({
                title: 'Error!',
                text: 'Please Login First',
                icon: 'error',
                confirmButtonText: 'Cool'
              })

              navigate("/login", {state:{from: location}})
        }
    }

    return (
        <div>
            <div className="card w-96 bg-base-100 shadow-xl">
                <figure><img src={image} alt="Shoes" /></figure>
                <p className="bg-slate-900 text-white absolute right-0 mr-4 mt-4 px-3 py-2 rounded-lg">${price}</p>
                <div className="card-body">
                    <h2 className="card-title">{name}</h2>
                    <p>{recipe}</p>
                    <div className="card-actions justify-end">
                    <button onClick={() => handleAddToCart(item)} className="btn btn-outline bg-slate-200 border-yellow-600 border-0 border-b-4 hover:bg-zinc-800 hover:text-white text-yellow-600 hover:border-yellow-600 hover:font-semibold mt-4">Add to cart</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FoodCard;