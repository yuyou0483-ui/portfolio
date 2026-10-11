import React, { useEffect, useState } from 'react';
import ShinyText from './ShinyText.jsx';

export default function Hero() {
  const [ready, setReady] = useState(false);
  useEffect(() => {
    const t = setTimeout(() => setReady(true), 120);
    return () => clearTimeout(t);
  }, []);

  return (
    <section
      id="hero"
      className="hero"
      style={{ position: 'relative', minHeight: '100vh', background: 'var(--bg)', overflow: 'hidden' }}
    >
      {/* 右中 · 大年份 */}
      <div
        className="hero-year"
        style={{
          position: 'absolute',
          top: '44%',
          right: 'clamp(24px, 6vw, 120px)',
          transform: `translateY(${ready ? '-50%' : '-30%'})`,
          fontFamily: 'var(--sans)',
          fontWeight: 800,
          fontSize: 'clamp(72px, 12vw, 190px)',
          lineHeight: 1,
          letterSpacing: '-0.04em',
          color: 'var(--ink)',
          opacity: ready ? 1 : 0,
          transition: 'opacity 1s var(--ease) .3s, transform 1s var(--ease) .3s',
          userSelect: 'none',
        }}
      >
        2026
      </div>

      {/* 左侧 · 斜置描边 pill */}
      <div
        className="hero-chips"
        style={{
          position: 'absolute',
          left: 'clamp(24px, 6vw, 120px)',
          bottom: '26%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
          gap: 14,
          transform: 'rotate(-7deg) scale(1.4)',
          transformOrigin: 'left bottom',
          opacity: ready ? 1 : 0,
          transition: 'opacity 1s var(--ease) .5s',
        }}
      >
        <span className="chip" style={{ transform: 'translateX(30px)' }}><span className="hash">#</span>Zhou Xiaonan</span>
        <span className="chip"><span className="hash">#</span>Industrial Design</span>
      </div>

      {/* 左下 · PORTfolio 大字 + 延伸细线 */}
      <div
        className="hero-logo"
        style={{
          position: 'absolute',
          left: 'clamp(24px, 6vw, 120px)',
          bottom: 'clamp(36px, 7vh, 70px)',
          display: 'flex',
          alignItems: 'center',
          gap: 'clamp(20px, 3vw, 48px)',
          width: 'calc(100% - 2 * clamp(24px, 6vw, 120px))',
          opacity: ready ? 1 : 0,
          transform: ready ? 'translateY(0)' : 'translateY(28px)',
          transition: 'opacity 1s var(--ease) .55s, transform 1s var(--ease) .55s',
        }}
      >
        <h1
          style={{
            fontFamily: 'var(--sans)',
            fontSize: 'clamp(64px, 12vw, 176px)',
            lineHeight: 0.86,
            letterSpacing: '-0.05em',
            fontWeight: 900,
            color: 'var(--ink)',
            whiteSpace: 'nowrap',
            userSelect: 'none',
          }}
        >
          <ShinyText
            color="#3b3b3f"
            shineColor="#06B6D4"
            speed={2}
            shineWidth={40}
            softness={0.8}
            trigger="loop"
            /* background-clip:text 只把渐变画在盒子内。h1 的 line-height 0.86 与
               letter-spacing -0.05em 都小于字形实际外扩，末尾斜体 o 的右缘会露白缺角。
               padding 撑开背景盒、负 margin 抵消布局占位，字形位置与宽度都不变。 */
            style={{ padding: '0.2em 0.12em', margin: '-0.2em -0.12em' }}
          >
            <span>PORT</span>
            <span
              style={{
                fontFamily: 'var(--lora)',
                fontStyle: 'italic',
                fontWeight: 500,
                letterSpacing: '-0.01em',
                marginLeft: '-0.05em',
              }}
            >
              folio
            </span>
          </ShinyText>
        </h1>
        {/* 延伸细线 */}
        <span
          className="hero-line"
          style={{
            flex: '1 1 auto',
            height: 1,
            background: 'var(--line-strong)',
            minWidth: 60,
            marginTop: 'clamp(8px, 2vw, 20px)',
          }}
        />
      </div>
    </section>
  );
}
