import React, {useRef, useEffect} from "react";
import Point from "./Point";
import { xss, sql, dos } from "../assets/info";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

function Protection() {

  return (
    <div>
    <div className="protection">
      <h2 className="protection__heading grad-text">
        How to prevent these attacks
      </h2>
      <p className="protection__description">
        Preventing web attacks requires a combination of technical and
        non-technical measures. It is also important to regularly monitor web
        traffic and logs to detect and respond to security incidents in a timely
        manner. This can involve implementing intrusion detection and prevention
        systems, using security information and event management (SIEM) tools,
        and conducting regular security audits and penetration testing to
        identify vulnerabilities and weaknesses. Here are some strategies that
        can be used to prevent the top three types of attacks:
      </p>
      <Point title="Cross-Site Scripting (XSS) prevention:" points={xss} index={1}/>
      <Point title="SQL Injection prevention:" points={sql} index={2}/>
      <Point title="Distributed Denial of Service (DDoS) prevention:" points={dos} index={3}/>
      
      <p className="protection__description">
        In addition to these technical measures, regular security audits, staff
        training, and keeping software up-to-date are important to maintain a
        strong security posture. By implementing these strategies, organizations
        can reduce the risk of web attacks and protect their assets and users
        from harm.
      </p>
    </div>
    </div>
  );
}

export default Protection;
