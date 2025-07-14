"use client";
import { useEffect, useState } from "react";
import Sidebar from "@/components/Sidebar";
import ScrapeHistoryCard from "@/components/ScrapeHistoryCard";
import "@/styles/ScrapeHistoryCard.css";
import { Archive } from "lucide-react";

export default function SavedScrapesPage() {
  const [scrapeHistory, setScrapeHistory] = useState([]);

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("scrapeHistory") || "[]");
    setScrapeHistory(data.reverse());
  }, []);

  return (
    <div className="saved-dashboard">
      <Sidebar />
      <div className="saved-main">
        <div className="snow-bg" />

        <h2 className="page-heading"><Archive size={20} /> Saved Scrapes</h2>

        {scrapeHistory.length === 0 ? (
          <p className="empty-msg">No saved scrapes found.</p>
        ) : (
          <div className="scrape-history-grid">
            {scrapeHistory.map((item) => (
              <ScrapeHistoryCard key={item.id} data={item} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
