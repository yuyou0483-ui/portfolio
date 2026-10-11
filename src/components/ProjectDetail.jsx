import React, { useEffect } from 'react';
import { PROJECTS } from '../data/projects.js';

export default function ProjectDetail({ index, onBack }) {
  const p = PROJECTS[index];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [index]);

  if (!p) {
    return (
      <section className="section" style={{ minHeight: '80vh', display: 'flex', alignItems: 'center' }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <p style={{ fontFamily: 'var(--mono)', color: 'var(--muted)', marginBottom: 24 }}>404 — 项目不存在</p>
          <button className="btn" onClick={onBack}>← 返回目录</button>
        </div>
      </section>
    );
  }

  const prev = PROJECTS[index - 1];
  const next = PROJECTS[index + 1];

  return (
    <section className="section" style={{ paddingTop: 'clamp(96px,12vw,160px)', paddingBottom: 'clamp(72px,9vw,140px)' }}>
      <div className="container">
        {/* 返回 */}
        <a
          href="#projects"
          onClick={(e) => {
            e.preventDefault();
            onBack();
          }}
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: 8,
            fontFamily: 'var(--mono)',
            fontSize: 13,
            letterSpacing: '0.08em',
            color: 'var(--muted)',
            textDecoration: 'none',
            marginBottom: 'clamp(40px,5vw,72px)',
            padding: '8px 0',
          }}
        >
          <span style={{ display: 'inline-block', transition: 'transform .3s var(--ease)' }} className="back-arr">←</span> 返回目录
        </a>

        {/* 标题区 */}
        <div style={{ borderTop: '1px solid var(--hairline)', paddingTop: 'clamp(28px,3vw,44px)', marginBottom: 'clamp(28px,3vw,44px)' }}>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: '80px 1fr 160px',
              gap: 'clamp(20px,3vw,48px)',
              alignItems: 'baseline',
            }}
          >
            <span style={{ fontFamily: 'var(--mono)', fontSize: 14, color: 'var(--muted)' }}>{p.num}</span>
            <h1
              style={{
                fontFamily: 'var(--serif)',
                fontWeight: 700,
                fontSize: 'clamp(34px,5vw,72px)',
                lineHeight: 1.08,
                letterSpacing: '0.01em',
                margin: 0,
              }}
            >
              {p.title}
            </h1>
            <span style={{ textAlign: 'right', fontFamily: 'var(--mono)', fontSize: 14, color: 'var(--muted)' }}>{p.year}</span>
          </div>
          <p style={{ fontFamily: 'var(--mono)', fontSize: 13, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--muted)', marginTop: 16 }}>
            {p.zh}
          </p>
        </div>

        {/* 大图 */}
        <figure
          style={{
            position: 'relative',
            overflow: 'hidden',
            borderRadius: 10,
            aspectRatio: '16 / 9',
            background: 'var(--paper)',
            border: '1px solid var(--hairline)',
            margin: '0 0 clamp(32px,4vw,56px)',
          }}
        >
          <img src={p.img} alt={p.title} style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
        </figure>

        {/* 案例图片集 */}
        {p.gallery && p.gallery.length > 0 && (
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: 'clamp(32px,4.5vw,72px)',
              marginBottom: 'clamp(48px,6vw,88px)',
            }}
          >
            {p.gallery.map((g, i) => (
              <figure key={i} style={{ margin: 0 }}>
                <img
                  src={g.img}
                  alt={p.title}
                  loading="lazy"
                  style={{ width: '100%', height: 'auto', display: 'block' }}
                />
              </figure>
            ))}
          </div>
        )}

        {/* 正文 */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'minmax(0, 1.6fr) minmax(0, 1fr)',
            gap: 'clamp(32px,5vw,88px)',
            borderTop: '1px solid var(--hairline)',
            paddingTop: 'clamp(28px,3vw,44px)',
          }}
        >
          <div>
            <p className="lead" style={{ marginBottom: 24 }}>{p.desc}</p>
            <p style={{ fontSize: 16, lineHeight: 1.9, color: 'var(--muted)', maxWidth: '62ch' }}>{p.detail}</p>
          </div>
          <div>
            <p style={{ fontFamily: 'var(--mono)', fontSize: 12, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--muted)', marginBottom: 16 }}>
              项目范围
            </p>
            <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap', marginBottom: 40 }}>
              {p.tags.map((t) => (
                <span
                  key={t}
                  style={{
                    border: '1px solid var(--hairline-strong, var(--ink))',
                    borderRadius: 999,
                    padding: '6px 16px',
                    fontSize: 13,
                  }}
                >
                  {t}
                </span>
              ))}
            </div>
            <p style={{ fontFamily: 'var(--mono)', fontSize: 12, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--muted)', marginBottom: 12 }}>
              年份
            </p>
            <p style={{ fontSize: 15 }}>{p.year}</p>
          </div>
        </div>

        {/* 演示视频 */}
        {p.video && (
          <figure style={{ margin: 'clamp(48px,6vw,88px) 0 0' }}>
            <video
              src={p.video}
              poster={p.img}
              controls
              playsInline
              preload="metadata"
              style={{
                width: '100%',
                height: 'auto',
                display: 'block',
                background: '#0d0d0d',
                borderRadius: 10,
              }}
            />
          </figure>
        )}

        {/* 上/下项目 */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            borderTop: '1px solid var(--hairline)',
            marginTop: 'clamp(48px,6vw,88px)',
          }}
        >
          {prev ? (
            <a
              href={`#/project/${index - 1}`}
              style={{ padding: 'clamp(24px,3vw,40px) clamp(16px,2vw,32px) 0 0', textDecoration: 'none', color: 'inherit' }}
            >
              <span style={{ fontFamily: 'var(--mono)', fontSize: 12, color: 'var(--muted)', display: 'block', marginBottom: 10 }}>
                ← 上一个
              </span>
              <span style={{ fontFamily: 'var(--serif)', fontSize: 'clamp(18px,2vw,26px)', fontWeight: 700 }}>{prev.title}</span>
            </a>
          ) : (
            <div />
          )}
          {next && (
            <a
              href={`#/project/${index + 1}`}
              style={{
                padding: 'clamp(24px,3vw,40px) 0 0 clamp(16px,2vw,32px)',
                textDecoration: 'none',
                color: 'inherit',
                textAlign: 'right',
              }}
            >
              <span style={{ fontFamily: 'var(--mono)', fontSize: 12, color: 'var(--muted)', display: 'block', marginBottom: 10 }}>
                下一个 →
              </span>
              <span style={{ fontFamily: 'var(--serif)', fontSize: 'clamp(18px,2vw,26px)', fontWeight: 700 }}>{next.title}</span>
            </a>
          )}
        </div>
      </div>
    </section>
  );
}
