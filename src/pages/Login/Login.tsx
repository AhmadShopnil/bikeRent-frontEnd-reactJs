import { useState } from "react";
import { useLoginMutation } from "../../redux/api/userApi";
import { saveUserInfo } from "../../services/authServices";
import { useNavigate } from "react-router-dom";

interface LoginData {
  email: string;
  password: string;
}

const Login = () => {
  const navigate = useNavigate();
  const [loginData, setLoginData] = useState<LoginData>({
    email: "",
    password: "",
  });
  const [login, { error }] = useLoginMutation();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLoginData({
      ...loginData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      // Send a POST request to log in the user (use your own API endpoint)
      const response = await login(loginData).unwrap();

      const accessToken = response?.token;

      if (accessToken) {
        saveUserInfo({ accessToken });
        navigate("/");
      }
    } catch (error) {
      console.error("Login failed:", error);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center">
      <form onSubmit={handleSubmit} className="space-y-6">
        <h2 className="text-xl font-bold">Login</h2>
        <span className="text-red-400">{error?.data?.message}</span>
        <input
          type="email"
          name="email"
          value={loginData.email}
          onChange={handleChange}
          placeholder="Email"
          className="input input-bordered w-full"
          required
        />
        <input
          type="password"
          name="password"
          value={loginData.password}
          onChange={handleChange}
          placeholder="Password"
          className="input input-bordered w-full"
          required
        />
        <button type="submit" className="btn btn-primary w-full">
          Log In
        </button>
      </form>
    </div>
  );
};

export default Login;
