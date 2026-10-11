import React, { useEffect } from 'react';
import { EXPERIENCES } from '../data/experience.js';

export default function ExperienceDetail({ index, onBack }) {
  const e = EXPERIENCES[index];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [index]);

  if (!e) {
    return (
      <section className="section" style={{ minHeight: '80vh', display: 'flex', alignItems: 'center' }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <p style={{ fontFamily: 'var(--mono)', color: 'var(--muted)', marginBottom: 24 }}>404 — 实习经历不存在</p>
          <button className="btn" onClick={onBack}>← 返回实习经历</button>
        </div>
      </section>
    );
  }

  const prev = EXPERIENCES[index - 1];
  const next = EXPERIENCES[index + 1];

  return (
    <section className="section" style={{ paddingTop: 'clamp(96px,12vw,160px)', paddingBottom: 'clamp(72px,9vw,140px)' }}>
      <div className="container">
        {/* 返回 */}
        <a
          href="#experience"
          onClick={(ev) => {
            ev.preventDefault();
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
            marginBottom: 'clamp(36px,4.5vw,64px)',
            padding: '8px 0',
          }}
        >
          <span style={{ display: 'inline-block', transition: 'transform .3s var(--ease)' }} className="back-arr">←</span> 返回实习经历
        </a>

        {/* 标题区：职位 + 公司 | 时间 */}
        <div style={{ paddingTop: 'clamp(28px,3vw,44px)', marginBottom: 'clamp(26px,3vw,40px)' }}>
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'baseline',
              flexWrap: 'wrap',
              gap: '10px 32px',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'baseline', flexWrap: 'wrap', gap: 'clamp(14px,2vw,28px)' }}>
              <h1
                style={{
                  fontFamily: 'var(--serif)',
                  fontWeight: 700,
                  fontSize: 'clamp(34px,4.2vw,60px)',
                  lineHeight: 1.08,
                  letterSpacing: '0.01em',
                  margin: 0,
                  color: e.accent || 'inherit',
                }}
              >
                {e.role}
              </h1>
              <span style={{ fontSize: 'clamp(15px,1.4vw,20px)', fontWeight: 500, color: 'var(--body)' }}>
                {e.company}
              </span>
            </div>
            <span style={{ fontFamily: 'var(--mono)', fontSize: 14, letterSpacing: '0.06em', color: 'var(--muted)' }}>
              {e.time}
            </span>
          </div>

          {/* 副标题 + 品牌 Logo */}
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              gap: 'clamp(20px,3vw,48px)',
              flexWrap: 'wrap',
              marginTop: 'clamp(16px,2vw,26px)',
            }}
          >
            <p
              style={{
                fontSize: 'clamp(15px,1.35vw,18px)',
                lineHeight: 1.85,
                color: 'var(--body)',
                maxWidth: '72ch',
                margin: 0,
                textWrap: e.descNowrap ? 'unset' : 'balance',
                whiteSpace: e.descNowrap ? 'nowrap' : 'normal',
              }}
            >
              {e.desc}
            </p>
            {e.logo && (
              <img
                src={e.logo}
                alt={e.company}
                style={{ height: 'clamp(40px,4.6vw,64px)', width: 'auto', maxWidth: '34vw', objectFit: 'contain', flexShrink: 0 }}
              />
            )}
          </div>
        </div>

        {/* # What I Did */}
        <div style={{ marginBottom: 'clamp(26px,3.2vw,44px)' }}>
          <span className="chip">
            <span className="hash">#</span>&nbsp;What I Did
          </span>
        </div>

        {/* 三列工作内容卡片 */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: 'clamp(24px,3vw,48px)',
            alignItems: 'start',
          }}
        >
          {e.cards.map((c, i) => (
            <div key={i}>
              <h3
                style={{
                  fontFamily: 'var(--serif)',
                  fontWeight: 700,
                  fontSize: 'clamp(19px,1.7vw,24px)',
                  lineHeight: 1.4,
                  letterSpacing: '0.01em',
                  margin: '0 0 12px',
                  textWrap: 'balance',
                }}
              >
                {c.title}
              </h3>
              <p style={{ fontSize: 15, lineHeight: 1.85, color: 'var(--body)', margin: '0 0 clamp(20px,2.4vw,30px)', textWrap: 'balance', minHeight: 'calc(1.85em * 2)' }}>
                {c.text}
              </p>

              {/* 工作内容图片位：有图原样展示，暂无图显示灰色圆角矩形占位 */}
              {c.img ? (
                <img
                  src={c.img}
                  alt={c.title}
                  style={{ display: 'block', width: '100%', aspectRatio: '16 / 9', objectFit: 'cover', objectPosition: 'center', borderRadius: 14 }}
                />
              ) : (
                <div
                  aria-hidden="true"
                  style={{
                    width: '100%',
                    aspectRatio: '16 / 9',
                    borderRadius: 14,
                    background: '#999999',
                  }}
                />
              )}
            </div>
          ))}
        </div>

        {/* 上/下一段实习 */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            marginTop: 'clamp(56px,7vw,104px)',
          }}
        >
          {prev ? (
            <a
              href={`#/experience/${index - 1}`}
              style={{ padding: 'clamp(24px,3vw,40px) clamp(16px,2vw,32px) 0 0', textDecoration: 'none', color: 'inherit' }}
            >
              <span style={{ fontFamily: 'var(--mono)', fontSize: 12, color: 'var(--muted)', display: 'block', marginBottom: 10 }}>
                ← 上一段
              </span>
              <span style={{ fontFamily: 'var(--serif)', fontSize: 'clamp(18px,2vw,26px)', fontWeight: 700 }}>{prev.role}</span>
            </a>
          ) : (
            <div />
          )}
          {next && (
            <a
              href={`#/experience/${index + 1}`}
              style={{
                padding: 'clamp(24px,3vw,40px) 0 0 clamp(16px,2vw,32px)',
                textDecoration: 'none',
                color: 'inherit',
                textAlign: 'right',
              }}
            >
              <span style={{ fontFamily: 'var(--mono)', fontSize: 12, color: 'var(--muted)', display: 'block', marginBottom: 10 }}>
                下一段 →
              </span>
              <span style={{ fontFamily: 'var(--serif)', fontSize: 'clamp(18px,2vw,26px)', fontWeight: 700 }}>{next.role}</span>
            </a>
          )}
        </div>
      </div>
    </section>
  );
}
