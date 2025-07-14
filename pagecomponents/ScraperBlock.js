"use client";
import { useState } from "react";
import "@/styles/ScraperBlock.css";

export default function ScraperBlock() {
  const [url, setUrl] = useState("");
  const [selector, setSelector] = useState("");
  const [cleanMode, setCleanMode] = useState(false);
  const [htmlCode, setHtmlCode] = useState("");
  const [loading, setLoading] = useState(false);
  const [metadata, setMetadata] = useState({});
  const [screenshot, setScreenshot] = useState("");
  const [techStack, setTechStack] = useState([]);
  const [assets, setAssets] = useState({ images: [], videos: [], fonts: [] });

  const saveToLocal = (scrapeData) => {
    const existing = JSON.parse(localStorage.getItem("scrapeHistory") || "[]");
    const updated = [
      ...existing,
      {
        ...scrapeData,
        id: Date.now(),
        date: new Date().toISOString(),
      },
    ];
    localStorage.setItem("scrapeHistory", JSON.stringify(updated));
  };

  const scrapeWebsite = async () => {
    if (!url) return;
    setLoading(true);
    setHtmlCode("");

    try {
      const res = await fetch("https://d37aa7df2c0d.ngrok-free.app/scrape", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          url,
          selector: selector.trim() || null,
          clean: cleanMode,
        }),
      });

      const data = await res.json();
      setHtmlCode(data.html || "No HTML found.");
      setScreenshot(data.screenshot || "");
      setMetadata(data.metadata || {});
      setTechStack(data.techStack || []);
      setAssets(data.assets || { images: [], videos: [], fonts: [] });
    } catch (err) {
      setHtmlCode("Failed to fetch HTML.");
    }

    setLoading(false);
  };

  const downloadJSON = () => {
    try {
      const exportData = {
        url,
        selector,
        html: htmlCode,
        screenshot,
        metadata,
        techStack,
        date: new Date().toISOString(),
      };

      const blob = new Blob([JSON.stringify(exportData, null, 2)], {
        type: "application/json",
      });
      const urlBlob = URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.href = urlBlob;
      link.download = "scrape.json";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      URL.revokeObjectURL(urlBlob);
    } catch (err) {
      console.error("❌ JSON Export Failed:", err);
      alert("Failed to download JSON.");
    }
  };

  const downloadHTML = () => {
    const blob = new Blob([htmlCode], { type: "text/html" });
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = "scraped.html";
    link.click();
  };

  const copyHTML = () => {
    navigator.clipboard.writeText(htmlCode);
    alert("Copied HTML to clipboard!");
  };

  return (
    <div className="scraper-wrapper">
      <h2 className="scraper-heading">Scrape Website HTML</h2>

      <div className="scraper-input-group">
        <input
          type="text"
          placeholder="https://example.com"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          className="scraper-input"
        />
        <input
          type="text"
          placeholder="Optional CSS selector (e.g. #main, .content)"
          value={selector}
          onChange={(e) => setSelector(e.target.value)}
          className="scraper-input"
        />
      </div>

      <label className="scraper-clean-toggle">
        <input
          type="checkbox"
          checked={cleanMode}
          onChange={() => setCleanMode(!cleanMode)}
        />
        Clean-up Mode (remove scripts, comments, may take longer to scrape)
      </label>

      <button
        onClick={scrapeWebsite}
        disabled={loading}
        className={`scraper-button ${loading ? "disabled" : ""}`}
      >
        {loading ? "Scraping..." : "Scrape"}
      </button>

      {htmlCode && (
        <>
          <div className="scraper-output">{htmlCode}</div>

          {techStack.length > 0 && (
            <h3 className="tech-stack-info">
              Tech stack detected: {techStack.join(", ")}
            </h3>
          )}

          <div className="scraper-actions">
            <button onClick={downloadHTML} className="scraper-secondary-button">
              Download HTML
            </button>
            <button onClick={copyHTML} className="scraper-secondary-button">
              Copy HTML
            </button>
            <button className="scraper-secondary-button" onClick={downloadJSON}>
              Export as JSON
            </button>
            <button
              className="scraper-secondary-button"
              onClick={() => {
                saveToLocal({
                  html: htmlCode,
                  metadata,
                  screenshot,
                  techStack,
                  url,
                });
                alert("✅ Saved to history!");
              }}
            >
              Save to History
            </button>
          </div>

          {(assets.images.length > 0 ||
            assets.videos.length > 0 ||
            assets.fonts.length > 0) && (
            <div className="scraper-assets">
              <h3>Assets Found</h3>

              {assets.images.length > 0 && (
                <div>
                  <h4>🖼 Images:</h4>
                  <ul>
                    {assets.images.map((img, idx) => (
                      <li key={idx}>
                        <a href={img.src} target="_blank">
                          {img.src}
                        </a>
                        {img.alt && <span> — alt: {img.alt}</span>}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {assets.videos.length > 0 && (
                <div>
                  <h4>📹 Videos:</h4>
                  <ul>
                    {assets.videos.map((vid, idx) => (
                      <li key={idx}>
                        <a href={vid.src} target="_blank">
                          {vid.src}
                        </a>{" "}
                        ({vid.type})
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {assets.fonts.length > 0 && (
                <div>
                  <h4>🔤 Fonts:</h4>
                  <ul>
                    {assets.fonts.map((font, idx) => (
                      <li key={idx}>
                        <a href={font} target="_blank">
                          {font}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          )}
        </>
      )}
    </div>
  );
}
