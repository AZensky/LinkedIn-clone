import React from "react";
import "./Widgets.css";
import InfoIcon from "@mui/icons-material/Info";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";

function Widgets() {
  const newsArticle = (heading, subtitle) => (
    <div className="widgets__article">
      <div className="widgets__articleLeft">
        <FiberManualRecordIcon />
      </div>
      <div className="widgets__articleRight">
        <h4>{heading}</h4>
        <p>{subtitle}</p>
      </div>
    </div>
  );
  return (
    <div className="widgets">
      <div className="widgets__header">
        <h2>LinkedIn News</h2>
        <InfoIcon />
      </div>
      {newsArticle("PAPA React is back", "Top news - 9999+ readers")}
      {newsArticle("Coronavirus US updatesk", "Top news - 920 readers")}
      {newsArticle("Dogecoin hits new highs", "Crypto - 9999+ readers")}
      {newsArticle("Facebook hits all time low", "Tech - 4376 readers")}
      {newsArticle(
        "UC Davis moves up to 4th best public university",
        "Colleges - 439 readers"
      )}
    </div>
  );
}

export default Widgets;
