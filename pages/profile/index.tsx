import { ProfilePage } from "../../components/pages/ProfilePage";
import { AuthProvider } from "../../Context/Auth";

export default function Profile() {
  return (
    <AuthProvider>
      <ProfilePage />
    </AuthProvider>
  );
}
