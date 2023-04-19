import React from "react";

function Landing() {
  const year = new Date().getFullYear();
  return (
    <div className="landing">
      <span className="line1" />
      <span className="line2" />
      <span className="dec1">
        - <span className="dec1__text grad-text">Cybersecurity</span> -
      </span>
      <span className="dec2">
        <span className="dec2__text grad-text">30,000</span> websites
        <br />
        get hacked per day
      </span>
      <div className="landing__header">
        <h1 className="landing__heading grad-text">Web Security</h1>
        <p className="landing__desc">
          Web security is essential to protect websites, web applications, and
          web services from unauthorized access, data theft, and other cyber
          attacks. It involves a range of techniques and technologies to
          maintain the integrity and safety of online assets and information.
        </p>
      </div>
    </div>
  );
}

export default Landing;
