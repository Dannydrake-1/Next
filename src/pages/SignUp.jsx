import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./SignUp.css";
import supabase from "../helper/supabaseClient";
import { Link } from "react-router-dom";

export const SignUp = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [msg, setMsg] = useState(null);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMsg(null);

    if (!name.trim() || !email.trim() || !password) {
      setMsg("Please fill all fields.");
      setLoading(false);
      return;
    }

    try {
      const { data, error: signUpError } = await supabase.auth.signUp({
        email,
        password,
      });

      if (signUpError) throw signUpError;

      const authUserId = data?.user?.id ?? null;

      const profileRow = authUserId
        ? { auth_id: authUserId, name: name.trim(), email: email.trim() }
        : { name: name.trim(), email: email.trim() };

      const { error: insertError } = await supabase
        .from("User")
        .insert([profileRow]);

      if (insertError) throw insertError;

      setMsg(
        "Sign up successful! Check your email if confirmation is required. You can now log in."
      );
      setTimeout(() => navigate("/login"), 2000);
      setName("");
      setEmail("");
      setPassword("");
    } catch (err) {
      setMsg(err?.message ?? "Sign up failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <div className="login-full flex h-screen justify-center items-center">
        <form
          className="login w-full  obi max-w-md p-8 rounded-3xl backdrop-blur-lg bg-white/10 border border-white/20 shadow-2xl shadow-black/10"
          onSubmit={handleSubmit}
        >
          <div className="mb-4">
            <h1 className=" text-center text-3xl mb-2.5 mt-2.5 text-[#ee046d] font-bold">
              Welcome
            </h1>
          </div>

          <div className=" pb-4">
            <h4 className="text-white">Welcome, Please enter your details</h4>
          </div>

          <div className="epass mb-4">
            <input
              className="w-full px-4 py-3 rounded-2xl bg-white/8 backdrop-blur-sm border border-white/10 placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-[#ee046d]/30 transition-shadow duration-200"
              placeholder="Name"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>

          <div className="epass mb-4">
            <input
              className="w-full px-4 py-3 rounded-2xl bg-white/8 backdrop-blur-sm border border-white/10 placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-[#ee046d]/30 transition-shadow duration-200"
              type="email"
              placeholder="Email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="epass mb-4">
            <input
              className="w-full px-4 py-3 rounded-2xl bg-white/8 backdrop-blur-sm border border-white/10 placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-[#ee046d]/30 transition-shadow duration-200"
              type="password"
              placeholder="Password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <div className="btn-1 mb-6">
            <button
              type="submit"
              disabled={loading}
              className="w-full rounded-full py-3 text-white font-extrabold hover:bg-linear-to-r from-[#ee046d] to-[#ff74a7] shadow-md transform transition-transform duration-300 hover:scale-105 disabled:opacity-60"
            >
              <b className="font-extrabold text-white">
                {loading ? "Signing up..." : "Sign up"}
              </b>
            </button>
          </div>

          {msg && (
            <p
              style={{
                color: msg.toLowerCase().includes("successful")
                  ? "green"
                  : "red",
              }}
            >
              {msg}
            </p>
          )}

          <div className="mt-4 text-sm text-white">
            <p>
              Have an account? <br />
              <Link
                to="/login"
                className="font-extrabold hover:text-[#ee046d] active:text-[#ee046d] duration-300"
              >
                <b>Login now!</b>
              </Link>
            </p>
          </div>
        </form>
      </div>
    </>
  );
};

export default SignUp;
