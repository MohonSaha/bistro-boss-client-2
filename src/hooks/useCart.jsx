import { useQuery } from '@tanstack/react-query'
import useAuth from './useAuth';
import useAxiosSecure from './useAxiosSecure';


const useCart = () => {
    const { user } = useAuth()
    // const token = localStorage.getItem('access-token');
    const [axiosSecure] = useAxiosSecure()



    const { refetch, data: cart = [] } = useQuery({
        queryKey: ['carts', user?.email],
        // queryFn: async () =>{
        //     const res = await fetch(`http://localhost:5000/carts?email=${user?.email}`, {headers: {
        //         authorization: `bearer ${token}`
        //     }})
        //     return res.json()
        // },


        
        queryFn: async () =>{
            const res = await  axiosSecure(`/carts?email=${user?.email}`)
            console.log('Response From axios', res);
            return res.data;
        },

    })
    return [cart, refetch]

}

export default useCart;