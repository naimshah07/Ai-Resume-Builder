import { Lock, Mail, User2Icon } from "lucide-react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import api from "../configs/api";
import { login } from "../app/features/authSlice";
import toast from "react-hot-toast";

const Login = () => {
  const query = new URLSearchParams(window.location.search);
  const urlState = query.get("state");
  const [state, setState] = useState(urlState || "login");

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const dispatch = useDispatch();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await api.post(`/api/users/${state}`, formData);

      dispatch(login(data));

      localStorage.setItem("token", data.token);

      toast.success(data.message);
    } catch (error) {
      toast(error?.response?.data?.message || error.message);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-cream-50">
      <form
        onSubmit={handleSubmit}
        className="sm:w-[350px] w-full text-center border border-luxury-200/60 rounded-2xl px-8 bg-white shadow-luxury"
      >
        <h1 className="font-serif text-ink-900 text-3xl mt-10 font-medium">
          {state === "login" ? "Login" : "Sign up"}
        </h1>
        <p className="text-ink-500 text-sm mt-2">Please {state} to continue</p>
        {state !== "login" && (
          <div className="flex items-center mt-6 w-full bg-white border border-ink-200 h-12 rounded-full overflow-hidden pl-6 gap-2">
            <User2Icon size={16} color="#6D7883" />
            <input
              type="text"
              name="name"
              placeholder="Name"
              className="border-none outline-none ring-0 w-full"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
        )}
        <div className="flex items-center w-full mt-4 bg-white border border-ink-200 h-12 rounded-full overflow-hidden pl-6 gap-2">
          <Mail size={13} color="#6D7883" />
          <input
            type="email"
            name="email"
            placeholder="Email id"
            className="border-none outline-none ring-0 w-full"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="flex items-center mt-4 w-full bg-white border border-ink-200 h-12 rounded-full overflow-hidden pl-6 gap-2">
          <Lock size={13} color="#6D7883" />
          <input
            type="password"
            name="password"
            placeholder="Password"
            className="border-none outline-none ring-0 w-full"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </div>

        <button
          type="submit"
          className="mt-4 w-full h-11 rounded-full text-luxury-50 bg-emerald-900 hover:bg-emerald-950 border border-luxury-400/30 transition-all active:scale-[0.98]"
        >
          {state === "login" ? "Login" : "Sign up"}
        </button>
        <p
          onClick={() =>
            setState((prev) => (prev === "login" ? "register" : "login"))
          }
          className="text-ink-500 text-sm mt-3 mb-11"
        >
          {state === "login"
            ? "Don't have an account?"
            : "Already have an account?"}{" "}
          <a href="#" className="text-luxury-600 hover:underline">
            click here
          </a>
        </p>
      </form>
    </div>
  );
};

export default Login;
