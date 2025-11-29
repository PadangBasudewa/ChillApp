import AuthLayout from "../layouts/AuthLayout";
import AuthForm from "../components/organism/AuthForm";
import bgRegister from "../assets/images/bg-register.jpg";

export default function Register() {
  return (
    <AuthLayout bg={bgRegister}>
      <AuthForm mode="register" />
    </AuthLayout>
  );
}
