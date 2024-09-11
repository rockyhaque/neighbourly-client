import useAuth from "../../hooks/useAuth";
import useRole from "../../hooks/useRole";


const Workers = () => {
    const {user} = useAuth();
    const [role] = useRole();
    console.log(role)



    return (
        <div>
            Workers of {user?.displayName}
        </div>
    );
};

export default Workers;