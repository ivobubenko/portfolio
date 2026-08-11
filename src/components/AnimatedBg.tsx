import type { ReactNode } from 'react';
import '../assets/AnimatedBg.css';

function AnimatedBg({ children }: { children: ReactNode }) {
    return (
        <div className="hero-tech-surface">
            <div className="hero-tech-surface__aurora" aria-hidden="true" />
            <div className="hero-tech-surface__beam" aria-hidden="true" />
            <div className="hero-tech-surface__grid" aria-hidden="true" />
            <div className="hero-tech-surface__dither" aria-hidden="true" />
            <div className="hero-tech-surface__shade" aria-hidden="true" />
            <div className="hero-tech-surface__content">{children}</div>
        </div>
    );
}

export default AnimatedBg;
