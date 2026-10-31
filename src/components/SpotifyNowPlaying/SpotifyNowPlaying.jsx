import React, { useState } from "react";
import { SpotifyData } from "../../data/SiteData";
import "./SpotifyNowPlaying.css";

const SpotifyNowPlaying = ({ compact = false }) => {
  const [isPlaying, setIsPlaying] = useState(true);
  const [showEmbed, setShowEmbed] = useState(false);

  const togglePlayback = (e) => {
    e.stopPropagation();
    setIsPlaying((prev) => !prev);
  };
  const data = SpotifyData || {
    track: "Nights",
    artist: "Frank Ocean",
    album: "Blonde",
    albumArt: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=120&auto=format&fit=crop&q=80",
    spotifyUrl: "https://open.spotify.com/track/7eqoqGkKwgOaW1Jhfn91Pf",
    embedUri: "https://open.spotify.com/embed/track/7eqoqGkKwgOaW1Jhfn91Pf?utm_source=generator&theme=0",
  };

  return (
    <div className={`spotify-container ${compact ? "spotify-compact" : ""}`}>
      <div className="spotify-badge" onClick={() => setShowEmbed(!showEmbed)} title="Click to toggle Spotify player">
        <div className="spotify-icon-wrap" aria-hidden="true">
          <svg className="spotify-svg-icon" viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
            <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z" />
          </svg>
        </div>

        <div
          className="spotify-equalizer"
          aria-hidden="true"
          onClick={togglePlayback}
          title={isPlaying ? "Pause visualizer" : "Play visualizer"}
        >
          <span className={`eq-bar eq-bar-1 ${isPlaying ? "playing" : ""}`}></span>
          <span className={`eq-bar eq-bar-2 ${isPlaying ? "playing" : ""}`}></span>
          <span className={`eq-bar eq-bar-3 ${isPlaying ? "playing" : ""}`}></span>
          <span className={`eq-bar eq-bar-4 ${isPlaying ? "playing" : ""}`}></span>
        </div>

        <div className="spotify-track-info">
          <span className="spotify-label-mono">listening to</span>
          <span className="spotify-song-title">
            <span className="track-name">{data.track}</span>
            <span className="track-divider">·</span>
            <span className="track-artist">{data.artist}</span>
          </span>
        </div>

        <a
          href={data.spotifyUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="spotify-link-out"
          onClick={(e) => e.stopPropagation()}
          aria-label={`Open ${data.track} on Spotify`}
          title="Open in Spotify"
        >
          ↗
        </a>
      </div>

      {showEmbed && (
        <div className="spotify-embed-wrapper">
          <iframe
            title="Spotify Embed Player"
            src={data.embedUri}
            width="100%"
            height="152"
            frameBorder="0"
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            loading="lazy"
          ></iframe>
        </div>
      )}
    </div>
  );
};

export default SpotifyNowPlaying;
