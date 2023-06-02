import { useContext } from "react";
import { FaGoogle } from "react-icons/fa";
import { AuthContext } from "../../../providers/authProvider";
import { useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";


const SocialLogin = () => {
    const { googleSignIn } = useContext(AuthContext)
    const navigate = useNavigate()
    const location = useLocation()

    const from = location.state?.from?.pathname || "/";

    const handleGoogleSignIn = () => {
        googleSignIn()
            .then(result => {
                const loggedInUser = result.user;

                const savedUser = { name: loggedInUser.displayName, email: loggedInUser.email }
                fetch('http://localhost:5000/users', {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(savedUser)
                })
                    .then(res => res.json())
                    .then(() => {
                        Swal.fire(
                            'Good job!',
                            'User created succesfully!',
                            'success'
                        )
                        navigate(from, { replace: true })
                    }
                    )



            })
            .catch(err => console.log(err))
    }


    return (
        <div className="text-center mb-4">
            <div className="divider">OR</div>

            <button onClick={handleGoogleSignIn} className="btn btn-circle btn-outline">
                <FaGoogle></FaGoogle>
            </button>
        </div>
    );
};

export default SocialLogin;