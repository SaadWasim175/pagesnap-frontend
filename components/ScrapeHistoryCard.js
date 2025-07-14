"use client";
import { useState } from "react";
import "@/styles/ScrapeHistoryCard.css";

export default function ScrapeHistoryCard({ data }) {
  const [isDeleted, setIsDeleted] = useState(false);

  if (isDeleted) return null;

  const downloadHTML = (code) => {
  const blob = new Blob([code], { type: "text/html" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = "scraped-code.html";
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  URL.revokeObjectURL(url);
};

  const handleDelete = () => {
    const existing = JSON.parse(localStorage.getItem("scrapeHistory") || "[]");
    const updated = existing.filter((item) => item.id !== data.id);
    localStorage.setItem("scrapeHistory", JSON.stringify(updated));
    setIsDeleted(true);
  };

  return (
    <div className="history-card">
      <div className="screenshot-preview">
        {data.screenshot ? (
          <img src={`data:image/png;base64,${data.screenshot}`} alt="Screenshot" />
        ) : (
          <div className="no-screenshot">No Screenshot</div>
        )}
      </div>

      <div className="history-info">
        <h3>{data.metadata?.title || "Untitled"}</h3>
        <p className="meta-desc">{data.metadata?.description || "No description found."}</p>
        <p className="meta-url"><strong>URL:</strong> {data.url}</p>
        <p className="meta-date"><strong>Scraped on:</strong> {new Date(data.date).toLocaleString()}</p>
        {data.techStack?.length > 0 && (
          <p className="meta-stack"><strong>Tech Stack:</strong> {data.techStack.join(", ")}</p>
        )}

        <div className="history-actions">
          <button onClick={()=> downloadHTML(data.html)}>Download Code</button>
          <button onClick={handleDelete} className="delete-btn">🗑 Delete</button>
        </div>
      </div>
    </div>
  );
}
