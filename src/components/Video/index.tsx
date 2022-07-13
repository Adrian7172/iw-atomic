

import React from "react";
import "./style.css"

const VideoJs = () => {
  return(
<div className="player">
  <iframe src="https://player.vimeo.com/video/93951774?h=7b0340232e&color=f0d000&badge=0" width="640" height="360" frameBorder="0" allow="autoplay; fullscreen; picture-in-picture" allowFullScreen  className="video"></iframe>
</div>
  );
};

export default VideoJs;
