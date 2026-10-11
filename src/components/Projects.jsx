import React, { useState } from 'react';
import { useReveal } from '../hooks/useReveal.js';
import CircularCarousel from './CircularCarousel.jsx';
import { PROJECTS } from '../data/projects.js';

export default function Projects() {
  const ref = useReveal();
  // 记录当前转到正面的项目，只有再次点击正面的封面才进入详情页
  const [active, setActive] = useState(0);

  const items = PROJECTS.map((p) => ({
    src: p.img,
    alt: p.title,
    title: p.title,
    subtitle: `${p.num} · ${p.zh} · ${p.year}`,
  }));

  const openProject = (item, index) => {
    if (index !== active) return; // 侧面卡片：组件已自动把它转到正面
    window.location.hash = `#/project/${index}`;
  };

  return (
    <section id="projects" className="section" style={{ paddingBottom: 'clamp(72px,9vw,160px)' }}>
      <div className="container" ref={ref}>
        <div className="section-head reveal">
          <div>
            <h2 className="section-title">
              项目展示
            </h2>
          </div>
        </div>

        <p className="lead reveal" style={{ maxWidth: 52 + 'ch', marginBottom: 'clamp(40px,4vw,64px)' }}>
          从用户需求出发，将洞察转化为产品创新，让设计回归真实使用场景。
        </p>

        <div className="reveal projects-ring">
          <CircularCarousel
            items={items}
            preset="orbit"
            intro="rise"
            cardWidth={740}
            aspectRatio={1.7778}
            gap={48}
            speed={14}
            captions
            tilt={-16}
            curve={0}
            perspective={2400}
            fadeColor="#ffffff"
            innerShade={0.42}
            onChange={setActive}
            onItemClick={openProject}
          />
        </div>
      </div>
    </section>
  );
}
