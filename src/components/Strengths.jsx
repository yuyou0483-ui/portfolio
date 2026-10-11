import React, { useRef } from 'react';
import { useReveal } from '../hooks/useReveal.js';

const ITEMS = [
  {
    num: '01',
    title: '产品概念',
    en: 'Product Concept',
    desc: '从用户研究与场景分析出发，提出可落地的产品概念与解决方案。',
  },
  {
    num: '02',
    title: '用户体验',
    en: 'User Experience',
    desc: '梳理用户旅程与交互逻辑，让功能以更自然的方式被使用。',
  },
  {
    num: '03',
    title: '材料与工艺',
    en: 'Materials & CMF',
    desc: '关注材料、结构与制造工艺，让造型与功能相互支撑。',
  },
  {
    num: '04',
    title: '3D 表现',
    en: '3D Visualization',
    desc: '用 Rhino 与 KeyShot 完成高质量建模、渲染与视觉表达。',
  },
  {
    num: '05',
    title: 'AI 辅助设计',
    en: 'AI-aided Design',
    desc: '以 AI 工作流加速概念探索与可视化，放大前期创意效率。',
  },
];

export default function Strengths() {
  const ref = useReveal();
  return (
    <section id="strengths" className="section" style={{ background: 'var(--bg)' }}>
      <div className="container" ref={ref}>
        <div className="section-head reveal">
          <div>
            <span className="kicker" style={{ marginBottom: 18 }}>03 — 个人优势</span>
            <h2 className="section-title">
              我的能力<span className="dot">。</span>
            </h2>
          </div>
          <div className="section-note">五项核心能力</div>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 0, border: '1px solid var(--hairline)', borderRadius: 8, overflow: 'hidden' }}>
          {ITEMS.map((it, i) => (
            <div
              key={it.num}
              className="strength-card reveal"
              style={{
                padding: 'clamp(28px,3.5vw,52px)',
                borderRight: i % 2 === 0 ? '1px solid var(--hairline)' : 'none',
                borderBottom: i < ITEMS.length - 2 ? '1px solid var(--hairline)' : 'none',
                background: 'var(--bg)',
                position: 'relative',
                transition: 'background .4s var(--ease)',
                ['--d']: `${(i % 2) * 80 + Math.floor(i / 2) * 60}ms`,
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 18 }}>
                <span style={{ fontFamily: 'var(--mono)', fontSize: 13, color: 'var(--muted)' }}>{it.num}</span>
                <span style={{ fontFamily: 'var(--mono)', fontSize: 11, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--accent)' }}>{it.en}</span>
              </div>
              <h3 style={{ fontFamily: 'var(--serif)', fontWeight: 700, fontSize: 'clamp(22px,2.4vw,32px)', marginBottom: 14 }}>{it.title}</h3>
              <p style={{ color: 'var(--body)', fontSize: 15, lineHeight: 1.8, maxWidth: 42 + 'ch' }}>{it.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
