import { SignUpPage } from "../../components/pages/SignUpPage";
import { SignUpTemplate } from "../../components/templates/SignUpTemplate";
import { AuthProvider } from "../../Context/Auth";

export default function SignUp() {
  return (
    <AuthProvider>
      <SignUpPage />
    </AuthProvider>
  );
}
