import React, { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import { useReveal } from '../hooks/useReveal.js';
import ShinyText from './ShinyText.jsx';

export default function Contact() {
  const ref = useReveal();
  const [resumeOpen, setResumeOpen] = useState(false);

  useEffect(() => {
    if (!resumeOpen) return undefined;
    const onKey = (e) => {
      if (e.key === 'Escape') setResumeOpen(false);
    };
    window.addEventListener('keydown', onKey);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', onKey);
      document.body.style.overflow = prevOverflow;
    };
  }, [resumeOpen]);
  return (
    <section id="contact" className="section tech-grid" ref={ref} style={{ position: 'relative', minHeight: '100vh', display: 'flex', alignItems: 'center', paddingTop: 'clamp(72px,9vw,160px)', paddingBottom: 'clamp(72px,9vw,160px)' }}>
      <div className="container">
        <div
          className="reveal"
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: 'clamp(32px,5vw,80px)',
          }}
        >
          {/* 左栏：文案 + 按钮 */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 'clamp(28px,3vw,44px)', flex: '1 1 420px', minWidth: 0 }}>
            <h2 className="section-title">
              <ShinyText
                color="#81CCEA"
                shineColor="#06B6D4"
                speed={2}
                shineWidth={40}
                softness={0.8}
                trigger="loop"
                /* padding 撑开背景盒、负 margin 抵消布局占位：
                   background-clip:text 只画在盒子内，斜体/负字距的字形外扩部分否则会缺角 */
                style={{ padding: '0.2em 0.12em', margin: '-0.2em -0.12em' }}
              >
                一起探索，
                <br />
                下一种生活方式
              </ShinyText>
            </h2>

            <p className="lead" style={{ maxWidth: 'none' }}>
              一名关注用户需求与产品落地的工业设计师，期待
              <br />
              与更多品牌和团队探索设计可能。
            </p>

            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 16, marginTop: 8 }}>
              <button
                type="button"
                onClick={() => setResumeOpen(true)}
                className="btn btn--solid"
                style={{ padding: '16px 32px', fontSize: 15 }}
              >
                查看简历 <span className="arr">→</span>
              </button>
            </div>
          </div>

          {/* 右栏：兔头 logo */}
          <div style={{ flex: '0 1 clamp(200px, 26vw, 360px)', marginLeft: 'auto' }}>
            <img
              src="images/bunny-logo.jpg"
              alt="周晓楠个人标识 · 兔子"
              style={{ width: '100%', height: 'auto', display: 'block' }}
              loading="lazy"
            />
          </div>
        </div>

        {/* 底部信息 */}
        <div className="reveal" style={{ marginTop: 'clamp(60px,8vw,120px)', paddingTop: 30, borderTop: '1px solid var(--hairline)', display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', gap: 20, fontFamily: 'var(--mono)', fontSize: 12, letterSpacing: '0.06em', color: 'var(--body)' }}>
          <span>© 2026 周晓楠 · PORTfolio</span>
          <span>EMAIL 1572782048@qq.com</span>
          <span>TEL 13543880275</span>
          <span>广州美术学院 · 智能产品教研中心</span>
        </div>
      </div>

      {/* 简历浮层：点「查看简历」打开，点背景或按 Esc 关闭 */}
      {resumeOpen &&
        createPortal(
          <div
            role="dialog"
            aria-modal="true"
            aria-label="周晓楠简历"
            onClick={() => setResumeOpen(false)}
            style={{
              position: 'fixed',
              inset: 0,
              zIndex: 300,
              background: 'rgba(20,18,16,0.86)',
              backdropFilter: 'blur(4px)',
              display: 'flex',
              alignItems: 'flex-start',
              justifyContent: 'center',
              padding: 'clamp(16px,4vw,56px)',
              overflowY: 'auto',
              cursor: 'zoom-out',
            }}
          >
            <img
              src="images/resume.webp"
              alt="周晓楠简历"
              onClick={(e) => e.stopPropagation()}
              style={{
                width: 'min(880px, 100%)',
                height: 'auto',
                display: 'block',
                background: '#fff',
                borderRadius: 6,
                cursor: 'default',
                boxShadow: '0 30px 90px rgba(0,0,0,0.45)',
              }}
            />
            <button
              type="button"
              aria-label="关闭"
              onClick={() => setResumeOpen(false)}
              style={{
                position: 'fixed',
                top: 'clamp(12px,2vw,24px)',
                right: 'clamp(12px,2vw,24px)',
                width: 40,
                height: 40,
                borderRadius: '50%',
                border: '1px solid rgba(255,255,255,0.35)',
                background: 'rgba(255,255,255,0.12)',
                color: '#fff',
                fontSize: 20,
                lineHeight: 1,
                cursor: 'pointer',
              }}
            >
              ×
            </button>
          </div>,
          document.body
        )}
    </section>
  );
}
