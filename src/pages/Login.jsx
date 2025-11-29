import AuthForm from "../components/organism/AuthForm";
import AuthLayout from "../layouts/AuthLayout";
import bgLogin from "../assets/images/bg-login.jpg";

export default function Login() {
  return (
    <AuthLayout bg={bgLogin}>
      <AuthForm mode="login" />
    </AuthLayout>
  );
}
