/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react";
import { useSignUpMutation } from "../../redux/api/userApi";
import { saveUserInfo } from "../../services/authServices";
import { useNavigate } from "react-router-dom";
import { TUserJwtPayload } from "../../interfaces/user.interface";
import { setUser } from "../../redux/api/slices/authSlice";
import { decodedToken } from "../../utils/jwt";
import { useAppDispatch } from "../../redux/hooks";

interface SignupData {
  name: string;
  email: string;
  password: string;
  phone: string;
  address: string;
  role: string;
}

const Signup = () => {
  const dispatch = useAppDispatch();
  const [signupError,setSignupError]=useState('')
  const [signupData, setSignupData] = useState<SignupData>({
    name: "",
    email: "",
    password: "",
    phone: "",
    address: "",
    role: "user",
  });
  const navigate = useNavigate();
  const [signup] = useSignUpMutation();

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

      if (accessToken) {
        saveUserInfo({ accessToken });
        const user= decodedToken(accessToken) as TUserJwtPayload ;
        dispatch(setUser({ user: user, token:accessToken }));
        navigate(`/dashboard/${user?.role}`);
      }
    } catch (error:any) {
      setSignupError(error?.data?.message)
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center">
      <form onSubmit={handleSubmit} className="space-y-6">
        <h2 className="text-xl font-bold">Signup</h2>
        <span className="text-red-400">{signupError}</span>
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
