"use client";
import React from "react";
import "@/styles/FeatureSection.css";
import { FolderSearch, FileJson, File, WebhookIcon } from "lucide-react";

const FeatureSection = () => {
  return (
    <>
    <h1 className="title">Features you do NOT want to miss out on</h1>
    <div className="cards" >
      <div className="nft">
        <div className="main">
          <File size={48} />
          <h2>Smart HTML Scraper</h2>
          <p className="description">
            Drop a link, and we’ll extract clean, readable HTML — fast and easy.
          </p>
          <p className="mini-footer">Ready-made HTML, just works.</p>
        </div>
      </div>

      <div className="nft">
        <div className="main">
          <FolderSearch size={48} />
          <h2>Targeted Extraction</h2>
          <p className="description">
            Scrape only what you need — by class, ID, or tag. No fluff.
          </p>
          <p className="mini-footer">No clutter. Just code.</p>
        </div>
      </div>

      <div className="nft">
        <div className="main">
          <WebhookIcon size={48} />
          <h2>Cleaned and Minified</h2>
          <p className="description">
            No tracking scripts, ads, or messy inline styles.
          </p>
          <p className="mini-footer">No need to manage trackers.</p>
        </div>
      </div>

            <div className="nft">
        <div className="main">
          <FileJson size={48} />
          <h2>JSON Output Mode</h2>
          <p className="description">
            Prefer structure over chaos? Get JSON-ready data in one click.
          </p>
          <p className="mini-footer">JSON when you need it.</p>
        </div>
      </div>
      </div>
    </>
  );
};

export default FeatureSection;
