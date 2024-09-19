import { useState } from "react";
import { useSignUpMutation } from "../../redux/api/userApi";
import { saveUserInfo } from "../../services/authServices";
import { useNavigate } from "react-router-dom";

interface SignupData {
  name: string;
  email: string;
  password: string;
  phone: string;
  address: string;
  role: string;
}

const Signup = () => {
  const [signupData, setSignupData] = useState<SignupData>({
    name: "",
    email: "",
    password: "",
    phone: "",
    address: "",
    role: "user",
  });
  const navigate = useNavigate();
  const [signup, { error }] = useSignUpMutation();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSignupData({
      ...signupData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      // Send a POST request to createtoken a new user (use your own API endpoint)
      const response = await signup(signupData).unwrap();
      const accessToken = response?.token;

      console.log("login:", accessToken);
      if (accessToken) {
        saveUserInfo({ accessToken });
        navigate("/");
      }
    } catch (error) {
      console.error("Signup failed:", error);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center">
      <form onSubmit={handleSubmit} className="space-y-6">
        <h2 className="text-xl font-bold">Signup</h2>
        <span className="text-red-400">{error?.data?.message}</span>
        <input
          type="text"
          name="name"
          value={signupData.name}
          onChange={handleChange}
          placeholder="Name"
          className="input input-bordered w-full"
          required
        />
        <input
          type="email"
          name="email"
          value={signupData.email}
          onChange={handleChange}
          placeholder="Email"
          className="input input-bordered w-full"
          required
        />
        <input
          type="password"
          name="password"
          value={signupData.password}
          onChange={handleChange}
          placeholder="Password"
          className="input input-bordered w-full"
          required
        />
        <input
          type="text"
          name="phone"
          value={signupData.phone}
          onChange={handleChange}
          placeholder="Phone"
          className="input input-bordered w-full"
          required
        />
        <input
          type="text"
          name="address"
          value={signupData.address}
          onChange={handleChange}
          placeholder="Address"
          className="input input-bordered w-full"
          required
        />
        <button type="submit" className="btn btn-primary w-full">
          Sign Up
        </button>
      </form>
    </div>
  );
};

export default Signup;
