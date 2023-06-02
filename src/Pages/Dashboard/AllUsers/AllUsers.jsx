import { useQuery } from "@tanstack/react-query";
import TitlePage from "../../Shared/TitlePage/TitlePage";
import { FaTrashAlt, FaUserShield } from "react-icons/fa";


const AllUsers = () => {

    const { data: users = [], refetch } = useQuery(['users'], async () => {
        const res = await fetch('http://localhost:5000/users');
        return res.json()
    });

    const handleDelete = (user) => {
        console.log(user);
    }


    return (
        <div className="w-full px-12">
            <TitlePage title="Bistro Boss | All Users"></TitlePage>

            <h3 className="text-3xl font-semibold my-4">{users.length}</h3>

            <div className="overflow-x-auto">
                <table className="table table-zebra w-full">
                    {/* Head  */}
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Role</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>

                        {
                            users.map((user, index) => <tr key={user._id}>
                                <th>{index + 1}</th>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                                <td>{user.role === 'admin' ? 'admin' : 
                                <button onClick={() => handleDelete(user)} className="btn btn-ghost hover:text-orange-500 bg-orange-500 text-xl btn-circle text-white"><FaUserShield></FaUserShield></button>}

                                </td>
                                <td>
                                    <button onClick={() => handleDelete(user)} className="btn btn-ghost hover:text-red-500 bg-red-500 btn-circle text-white"><FaTrashAlt></FaTrashAlt></button>
                                </td>
                            </tr>)
                        }

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllUsers;