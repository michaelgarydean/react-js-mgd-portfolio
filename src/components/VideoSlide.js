import React, { useState } from 'react';
// import './VideoSlide.scss'; // Create an empty file if no component-specific styles are needed

function VideoSlide({ mp4Src, webmSrc }) {
  const [muted, setMuted] = useState(true);

  const toggleSound = () => {
    setMuted(!muted);
  };

  return (
    <div className="media-slide video-slide">
      <video autoPlay muted={muted} loop playsInline id="animated-video">
        <source src={mp4Src} type="video/mp4" />
        <source src={webmSrc} type="video/webm" />
        Your browser does not support the video tag.
      </video>
      <button
        id="toggle-sound"
        className="video-sound-toggle"
        aria-label="Toggle sound"
        onClick={toggleSound}
        style={{
          backgroundImage: muted
            ? 'url("/assets/icons/video-player/icon-mute.svg")'
            : 'url("/assets/icons/video-player/icon-volume.svg")'
        }}
      ></button>
    </div>
  );
}

export default VideoSlide;
