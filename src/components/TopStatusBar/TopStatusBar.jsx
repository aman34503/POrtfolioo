import React from "react";
import { CurrentlyData } from "../../data/SiteData";
import SpotifyNowPlaying from "../SpotifyNowPlaying/SpotifyNowPlaying";
import "./TopStatusBar.css";

const TopStatusBar = () => {
  return (
    <aside className="top-status-bar" aria-label="Current status and Spotify">
      <div className="top-status-inner">
        <div className="status-live-group">
          <span className="live-indicator">
            <span className="live-pulse"></span>
            <span className="live-core"></span>
          </span>
          <span className="status-mono-label">currently</span>
        </div>

        <div className="status-items-wrap">
          <div className="status-item">
            <span className="item-key">building</span>
            <span className="item-value">{CurrentlyData.building}</span>
          </div>

          <span className="status-sep">/</span>

          <div className="status-item">
            <span className="item-key">reading</span>
            <span className="item-value">{CurrentlyData.reading}</span>
          </div>

          <span className="status-sep">/</span>

          <div className="status-item status-spotify-item">
            <SpotifyNowPlaying compact={true} />
          </div>
        </div>
      </div>
    </aside>
  );
};

export default TopStatusBar;
