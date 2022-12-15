import { SignUpPage } from "../components/pages/SignUpPage";
import { AuthProvider } from "../Context/Auth";

export default function SignUp() {
  return (
    <AuthProvider>
      <SignUpPage />
    </AuthProvider>
  );
}
