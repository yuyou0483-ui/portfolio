import React, { useRef } from 'react';
import { useReveal } from '../hooks/useReveal.js';

export default function About() {
  const ref = useReveal();
  return (
    <section id="about" className="section" style={{ paddingTop: 'clamp(72px,9vw,160px)' }}>
      <div className="container" ref={ref}>
        <div className="section-head reveal">
          <div>
            <h2 className="section-title">
              About me
            </h2>
          </div>
        </div>

        <p
          className="lead reveal"
          style={{
            maxWidth: 'none',
            marginBottom: 'clamp(36px,4vw,60px)',
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            /* 三个标签之间加大间隔 */
            gap: 'clamp(34px, 3.8vw, 76px)',
          }}
        >
          <span>#AI探索派</span>
          <span>#设计迭代永动机</span>
          <span>#灵感收集者</span>
        </p>

        <figure
          className="reveal"
          style={{
            marginLeft: 'calc(var(--pad-x) * -1)',
            marginRight: 'calc(var(--pad-x) * -1)',
          }}
        >
          <img
            src="images/about-resume.webp"
            alt="周晓楠个人介绍"
            style={{ width: '100%', height: 'auto', display: 'block' }}
            loading="lazy"
          />
        </figure>
      </div>
    </section>
  );
}
