import Logo from "../atoms/Logo";
import Button from "../atoms/button";
import Seperator from "../atoms/Separator";
import FormInput from "../molecules/FormInput";
import AuthLinksRow from "../molecules/AuthLinksRow";
import GoogleButton from "../molecules/GoogleButton";
import { useState } from "react";
import { registerSchema, loginSchema } from "../../schemas/authSchema";
import { z } from "zod";
import toast from "react-hot-toast";
import { useUserStore } from "../../store/useUserStore";
import { useNavigate } from "react-router-dom";

export default function AuthForm({ mode }) {
  const isRegister = mode === "register";

  const registerUser = useUserStore((state) => state.register);
  const loginUser = useUserStore((state) => state.login);
  const navigate = useNavigate();

  const [form, setForm] = useState({
    username: "",
    password: "",
    confirmPassword: "",
  });

  const [errors, setErrors] = useState({});

  // =====================================
  // REAL-TIME VALIDATION
  // =====================================
  const handleChange = (e) => {
    const { name, value } = e.target;

    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));

    // hapus error general saat user mengetik ulang
    setErrors((prev) => ({
      ...prev,
      general: "",
    }));

    try {
      if (name === "username") {
        z.string().min(3, "Username minimal 3 karakter").parse(value);
      }

      if (name === "password") {
        z.string().min(6, "Password minimal 6 karakter").parse(value);
      }

      if (name === "confirmPassword") {
        z.string()
          .min(6, "Konfirmasi password minimal 6 karakter")
          .parse(value);
      }

      setErrors((prev) => ({
        ...prev,
        [name]: "",
      }));
    } catch (err) {
      const message = err.issues?.[0]?.message || "Input tidak valid";
      setErrors((prev) => ({
        ...prev,
        [name]: message,
      }));
    }

    // VALIDASI PASSWORD MATCH
    if (isRegister) {
      const newPassword = name === "password" ? value : form.password;
      const newConfirm =
        name === "confirmPassword" ? value : form.confirmPassword;

      if (newConfirm && newPassword !== newConfirm) {
        setErrors((prev) => ({
          ...prev,
          confirmPassword: "Password tidak cocok",
        }));
      } else {
        setErrors((prev) => ({
          ...prev,
          confirmPassword: "",
        }));
      }
    }
  };

  // =====================================
  // HANDLE SUBMIT
  // =====================================
  const handleSubmit = () => {
    // -------------------------------
    // REGISTER MODE
    // -------------------------------
    if (isRegister) {
      const result = registerSchema.safeParse(form);

      if (!result.success) {
        const fieldErrors = {};
        result.error.issues.forEach((err) => {
          fieldErrors[err.path[0]] = err.message;
        });
        setErrors(fieldErrors);
        toast.error("Periksa kembali data yang kamu isi");
        return;
      }

      const resultRegister = registerUser({
        username: form.username,
        password: form.password,
      });

      if (resultRegister.error) {
        toast.error(resultRegister.error);
        return;
      }

      toast.success("Pendaftaran berhasil!");

      setForm({
        username: "",
        password: "",
        confirmPassword: "",
      });

      setErrors({});
      return;
    }

    // -------------------------------
    // LOGIN MODE
    // -------------------------------
    const result = loginSchema.safeParse(form);

    if (!result.success) {
      const fieldErrors = {};
      result.error.issues.forEach((err) => {
        fieldErrors[err.path[0]] = err.message;
      });
      setErrors(fieldErrors);
      toast.error("Input login tidak valid");
      return;
    }

    const resultLogin = loginUser({
      username: form.username,
      password: form.password,
    });

    if (resultLogin.error) {
      setErrors({ general: resultLogin.error });
      setTimeout(() => {
        setErrors((prev) => ({
          ...prev,
          general: "",
        }));
      }, 2500);
      return;
    }

    toast.success("Login berhasil 🎉");
    console.log("navigating...");
    navigate("/home");

    // setTimeout(() => {
    //   navigate("/home");
    // }, 800);
  };

  return (
    <div className="w-full max-w-xs mx-auto text-center md:max-w-sm lg:max-w-md">
      <Logo />

      <h2 className="text-white font-bold text-lg mb-2 md:text-2xl lg:text-3xl">
        {isRegister ? "Daftar" : "Masuk"}
      </h2>

      <p className="text-white text-sm mb-6 md:text-base lg:text-lg">
        {isRegister ? "Selamat Datang!" : "Selamat datang kembali!"}
      </p>

      <div className="space-y-4 md:space-y-5 lg:space-y-6">
        <FormInput
          label="Username"
          placeholder="Masukkan Username"
          name="username"
          type="text"
          value={form.username}
          onChange={handleChange}
          error={errors.username}
        />

        <FormInput
          label="Password"
          name="password"
          placeholder="Masukkan Kata Sandi"
          type="password"
          value={form.password}
          onChange={handleChange}
          error={errors.password}
        />

        {isRegister && (
          <FormInput
            label="Konfirmasi Password"
            name="confirmPassword"
            placeholder="Masukkan Kata Sandi"
            type="password"
            value={form.confirmPassword}
            onChange={handleChange}
            error={errors.confirmPassword}
          />
        )}
      </div>

      {/* Error Login (general) */}
      {errors.general && (
        <p className="text-start text-red-400 text-sm mt-2 mb-2">
          {errors.general}
        </p>
      )}

      <AuthLinksRow hideForgot={isRegister} isRegister={isRegister} />

      <Button
        onClick={handleSubmit}
        className="md:mt-3 md:py-3 md:px-5 md:text-base md:font-semibold"
      >
        {isRegister ? "Daftar" : "Masuk"}
      </Button>

      <Seperator text="Atau" />

      <GoogleButton />
    </div>
  );
}
