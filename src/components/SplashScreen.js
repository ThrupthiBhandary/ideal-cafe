import React, { useEffect, useState } from 'react';
import './SplashScreen.css'; // optional for custom styling

const SplashScreen = ({ onFinish }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onFinish(); // notify parent when video ends
    }, 5000); // duration of your video in ms

    return () => clearTimeout(timer);
  }, [onFinish]);

  return (
    <div className="splash-screen">
      <video autoPlay muted playsInline className="splash-video">
        <source src="/your-video.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default SplashScreen;
