import { useContext } from "react";
import { AuthContext } from "../../authentication/Provider/AuthProvider";

const AdminHome = () => {
  const { user } = useContext(AuthContext);
  return (
    <div>
      <h2 className="text-center text-3xl font-semibold mt-5">
        <span>Hi, Welcome </span>
        {user?.displayName ? user.displayName : "Back"}
      </h2>
    </div>
  );
};

export default AdminHome;
