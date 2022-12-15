import { useContext, useEffect } from "react";
import { AuthContext } from "../../Context/Auth";
import { ProfileTemplate } from "../templates/ProfileTemplate";

export const ProfilePage = () => {
  const { currentUser } = useContext(AuthContext);

  return <ProfileTemplate currentUser={currentUser} />;
};
