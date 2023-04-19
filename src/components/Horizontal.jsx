import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import xss from "/src/assets/xss.svg";
import sql from "/src/assets/sql.svg";
import dos from "/src/assets/dos.svg";

function Horizontal() {
  const container = useRef();
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const sections = gsap.utils.toArray(".section__page");
    gsap.to(sections, {
      xPercent: -100 * (sections.length - 1),
      ease: "none",
      scrollTrigger: {
        trigger: ".section",
        markers: true,
        pin: true,
        scrub: 1,
        snap: 1 / (sections.length - 1),
        end: () => "+=" + container.current.offsetWidth,
      },
    });
  }, []);

  return (
    <div ref={container} className="section">
      <section className="section__page section__page--1">
        <h2 className="section__heading grad-text">
          Most Common Web Attacks
        </h2>
        <p className="section__heading--desc">
          There are various types of attacks that target websites and web
          applications, each with its own set of risks and consequences. Cyber
          attackers use a range of techniques to exploit vulnerabilities in web
          systems, steal sensitive information, or take control of systems.
          Understanding these types of attacks is crucial to developing
          effective web security strategies to mitigate risk and protect against
          cyber threats. In this context, it is important to be aware of the
          ways in which these attacks can be executed, the potential damage they
          can cause, and the measures that can be taken to prevent them.
        </p>
      </section>
      <section className="section__page section__page--2">
        <img className="section__img" src={xss} />
        <h2 className="section__title grad-text">
          #1 Cross Site Scripting
        </h2>
        <p className="section__description">
          This attack involves injecting malicious scripts into a web page
          viewed by other users. These scripts can steal sensitive information,
          redirect users to malicious sites, or perform unauthorized actions on
          the user's behalf.
        </p>
      </section>
      <section className="section__page section__page--2">
        <img className="section__img" src={sql} />
        <h2 className="section__title grad-text">
          #2 SQL Injection
        </h2>
        <p className="section__description">
          In this attack, an attacker uses malicious SQL statements to gain
          unauthorized access to a website's database, allowing them to steal,
          modify, or delete sensitive data.
        </p>
      </section>
      <section className="section__page section__page--2">
        <img className="section__img" src={dos} />
        <h2 className="section__title grad-text">
          #3 Distributed Denial of Service
        </h2>
        <p className="section__description">
          This type of attack involves overwhelming a website or web application
          with traffic from multiple sources to make it inaccessible to users.
          DDoS attacks can cause significant damage to a business's reputation
          and revenue by preventing users from accessing critical resources.
        </p>
      </section>
    </div>
  );
}

export default Horizontal;
