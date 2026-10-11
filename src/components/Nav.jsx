import React, { useEffect, useState } from 'react';

const LINKS = [
  { label: '主页', href: '#hero' },
  { label: '关于我', href: '#about' },
  { label: '项目展示', href: '#projects' },
  { label: '实习经历', href: '#experience' },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className="nav"
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        height: 'var(--nav-h)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 100,
        transition: 'all .4s var(--ease)',
        background: scrolled ? 'rgba(255,255,255,0.86)' : 'transparent',
        backdropFilter: scrolled ? 'blur(14px)' : 'none',
        borderBottom: scrolled ? '1px solid var(--hairline)' : '1px solid transparent',
      }}
    >
      <nav
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: 'clamp(36px, 6vw, 76px)',
          fontFamily: 'var(--sans)',
          fontSize: 'clamp(15px, 1.5vw, 22px)',
          fontWeight: 500,
          letterSpacing: '0.1em',
        }}
      >
        {LINKS.map((l) => (
          <a
            key={l.href}
            href={l.href}
            style={{
              position: 'relative',
              paddingBottom: 4,
              color: 'var(--ink)',
              transition: 'color .3s var(--ease)',
            }}
          >
            {l.label}
            <span
              style={{
                position: 'absolute',
                left: 0,
                bottom: 0,
                height: 1,
                width: 0,
                background: 'var(--ink)',
                transition: 'width .3s var(--ease)',
              }}
            />
          </a>
        ))}
      </nav>
    </header>
  );
}
