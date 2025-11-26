import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import supabase from "../helper/supabaseClient";

function Profile() {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const getUser = async () => {
      const {
        data: { session },
      } = await supabase.auth.getSession();
      if (!session) {
        navigate("/login");
      } else {
        setUser(session.user);
      }
    };

    getUser();

    const { data: listener } = supabase.auth.onAuthStateChange(
      (_event, session) => {
        if (!session) {
          navigate("/login");
        } else {
          setUser(session.user);
        }
      }
    );

    return () => listener.subscription.unsubscribe();
  }, [navigate]);

  const handleLogout = async () => {
    await supabase.auth.signOut();
    navigate("/login");
  };

  if (!user) return <p>Loading...</p>;

  return (
    <div className="profile-page flex flex-col items-center justify-center h-screen bg-gray-100">
      <div className="profile-card p-8 rounded-2xl shadow-lg bg-white/80 backdrop-blur-md border border-white/20">
        <h1 className="text-2xl font-bold mb-4">Profile</h1>
        <p className="mb-2">
          <strong>Email:</strong> {user.email}
        </p>
        {user.user_metadata?.full_name && (
          <p className="mb-4">
            <strong>Name:</strong> {user.user_metadata.full_name}
          </p>
        )}
        <button
          onClick={handleLogout}
          className="px-6 py-2 rounded-full bg-linear-to-r from-[#ee046d] to-[#ff74a7] text-white font-bold hover:scale-105 transform transition-transform duration-200"
        >
          Log Out
        </button>
      </div>
    </div>
  );
}

export default Profile;
