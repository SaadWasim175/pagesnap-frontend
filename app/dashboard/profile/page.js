"use client";
import { useEffect, useState } from "react";
import Sidebar from "@/components/Sidebar";
import { getUserProfile } from "@/lib/supabase-browser";
import "@/styles/ProfilePage.css";
import { LogOut, User2 } from "lucide-react";

export default function ProfilePage() {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    async function fetchData() {
      const user = await getUserProfile();
      setUserData(user);
    }
    fetchData();
  }, []);

  const handleLogout = async () => {
    const { supabase } = await import("@/lib/supabase-browser");
    await supabase.auth.signOut();
    window.location.href = "/";
  };

  if (!userData) return <div className="profile-loading">Loading...</div>;

  return (
    <div className="profile-dashboard">
      <Sidebar />
      <div className="profile-main">
        <div className="header">
            <User2 className="icon1"  size={40} />
            <h2 className="profile-heading">Your Profile</h2>
        </div>
        <div className="profile-card">
          <p><strong>Username:</strong> {userData.username || "Unnamed"}</p>
          <p><strong>Email:</strong> {userData.email}</p>
          <p><strong>Account Tier:</strong> {userData.tier || "Free"}</p>
          <p><strong>Joined:</strong> {new Date(userData.created_at).toLocaleDateString()}</p>
          {userData.cardLast4 && (
            <p><strong>Payment Method:</strong> **** **** **** {userData.cardLast4} ({userData.cardBrand})</p>
          )}
          <button onClick={handleLogout} className="logout-btn"><span className="logoutplace" ><LogOut className="logouticon" size={20}/><p>Logout</p></span></button>
        </div>
      </div>
    </div>
  );
}
