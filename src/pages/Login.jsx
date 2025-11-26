import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";
import supabase from "../helper/supabaseClient";
import { Link } from "react-router-dom";

function Login() {
  const [nameInput, setNameInput] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [msg, setMsg] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMsg(null);
    setErrorMsg(null);

    if (!email.trim() || !password) {
      setErrorMsg("Please enter both email and password.");
      return;
    }

    try {
      setLoading(true);
      const { data, error } = await supabase.auth.signInWithPassword({
        email: email.trim(),
        password,
      });

      if (error) {
        throw error;
      }

      const authUserId = data?.user?.id ?? null;

      let profile = null;
      if (authUserId) {
        const { data: profileData, error: profileErr } = await supabase
          .from("User")
          .select("*")
          .eq("auth_id", authUserId)
          .maybeSingle();

        if (profileErr) {
          console.warn("Could not fetch profile:", profileErr.message);
        } else {
          profile = profileData;
        }
      }

      setMsg("Login successful!");

      navigate("/");
    } catch (err) {
      setErrorMsg(
        err?.message ?? "Login failed. Check credentials and try again."
      );
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
            <h1 className="text-center text-3xl mb-2 text-[#ee046d] font-bold">
              Welcome
            </h1>
          </div>

          <div className="pb-4">
            <h4 className=" text-white">
              Welcome back! Please enter your details
            </h4>
          </div>

          <div className="mb-4">
            <input
              className="w-full px-4 py-3 rounded-2xl bg-white/8 backdrop-blur-sm border border-white/10 placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-[#ee046d]/30 transition-shadow duration-200"
              type="text"
              placeholder="Name"
              id="name"
              value={nameInput}
              onChange={(e) => setNameInput(e.target.value)}
            />
          </div>

          <div className="mb-4">
            <input
              className="w-full px-4 py-3 rounded-2xl bg-white/8 backdrop-blur-sm border border-white/10 placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-[#ee046d]/30 transition-shadow duration-200"
              type="email"
              placeholder="Email"
              required
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="mb-6">
            <input
              className="w-full px-4 py-3 rounded-2xl bg-white/8 backdrop-blur-sm border border-white/10 placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-[#ee046d]/30 transition-shadow duration-200"
              type="password"
              placeholder="Password"
              required
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <div className="mb-8">
            <button
              type="submit"
              disabled={loading}
              className="w-full rounded-full py-3 text-white font-extrabold  shadow-md transform hover:bg-linear-to-r from-[#ee046d] to-[#ff74a7] hover:duration-700 transition-transform duration-700 hover:scale-105 disabled:opacity-60"
            >
              {loading ? "Logging in..." : "Login"}
            </button>
          </div>

          {errorMsg && <p className="text-sm text-red-400">{errorMsg}</p>}
          {msg && <p className="text-sm text-green-400">{msg}</p>}

          <div className="mt-4 text-sm text-white">
            <p>
              Don't have an account? <br />
              <Link
                to="/signup"
                className="font-extrabold hover:text-[#ee046d] active:text-[#ee046d] duration-300"
              >
                <b>Sign up for free</b>
              </Link>
            </p>
          </div>
        </form>
      </div>
    </>
  );
}

export default Login;
