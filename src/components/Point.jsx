import React, { useRef, useEffect } from "react";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

function Point(props) {
  // gsap.registerPlugin(ScrollTrigger);
  // const ref = useRef(null);

  // useEffect(() => {
  //   const element = ref.current;
  //   gsap.fromTo(
  //     element.querySelector(".protection__sec--list *"),
  //     {
  //       opacity: 0,
  //       scale: 0.2,
  //       y: -20,
  //     },
  //     {
  //       opacity: 1,
  //       y: 0,
  //       scale: 1,
  //       duration: 1,
  //       ease: "none",
  //       scrollTrigger: {
  //         trigger: element.querySelector(".ps" + props.index),
  //         start: "top top",
  //         end: "bottom bottom",
  //         scrub: true,
  //       },
  //     }
  //   );
  // }, []);

  return (
    <div className={`protection__sec ps${props.index}`}>
      <h3 className="protection__sec--title grad-text">&rarr; {props.title}</h3>
      <ul className="protection__sec--list">
        {props.points.map((point) => {
          return <li className="protection__sec--item">{point}</li>;
        })}
      </ul>
    </div>
  );
}

export default Point;
