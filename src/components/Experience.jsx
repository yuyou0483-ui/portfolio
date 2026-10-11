import React, { useEffect, useState } from 'react';
import { useReveal } from '../hooks/useReveal.js';
import Folder from './Folder.jsx';
import { EXPERIENCES } from '../data/experience.js';

// 文件夹是 transform: scale 的，不改变布局占位，容器需按缩放倍率预留空间。
// 三档：窄屏 / 中等屏 / 桌面，倍率与容器高度、底部留白一一对应（数值按 scale 后
// 打开状态的视觉范围 box顶-480*(size/5) ~ box顶+240*(size/5) 反推）。
const LAYOUT = {
  narrow: { size: 2.6, height: 620, padBottom: 72 },
  medium: { size: 3.6, height: 680, padBottom: 120 },
  wide: { size: 5, height: 800, padBottom: 220 },
};
const pickLayout = (vw) => (vw < 900 ? LAYOUT.narrow : vw < 1200 ? LAYOUT.medium : LAYOUT.wide);

export default function Experience() {
  const ref = useReveal();
  const [vw, setVw] = useState(() => window.innerWidth);

  useEffect(() => {
    const onResize = () => setVw(window.innerWidth);
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  const layout = pickLayout(vw);

  const go = (i) => {
    window.location.hash = `#/experience/${i}`;
  };

  return (
    <section id="experience" className="section" style={{ paddingTop: 'clamp(72px,9vw,160px)', paddingBottom: 'clamp(72px,9vw,160px)' }}>
      <div className="container" ref={ref}>
        {/* section head */}
        <div className="section-head reveal">
          <div>
            <h2 className="section-title">
              实习经历
            </h2>
          </div>
        </div>

        <p className="lead reveal" style={{ maxWidth: 'none', marginBottom: 'clamp(40px,4vw,64px)' }}>
          从产品理解到品牌表达，探索设计如何在真实商业场景中连接用户与价值。
        </p>

        {/* 文件夹 */}
        <div
          className="reveal"
          style={{
            position: 'relative',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'flex-end',
            height: layout.height,
            paddingBottom: layout.padBottom,
          }}
        >
          <Folder
            size={layout.size}
            color="#81CCEA"
            onPaperClick={go}
            items={EXPERIENCES.map((e, i) => {
              // 字号按职位名字符数自适应，公司简称与职位名同字号（不大于职位名）
              const nameSize = e.short.length >= 7 ? 9.5 : e.short.length >= 5 ? 11 : 13;
              return (
                <div key={i} className="paper__label">
                  {e.companyShort && (
                    <span className="paper__company" style={{ fontSize: nameSize }}>{e.companyShort}</span>
                  )}
                  <span className="paper__name" style={{ fontSize: nameSize }}>{e.short}</span>
                </div>
              );
            })}
          />
        </div>
      </div>
    </section>
  );
}
