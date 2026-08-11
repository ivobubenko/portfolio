import type { ReactNode } from 'react';
import '../assets/AnimatedBg.css';

function AnimatedBg({ children }: { children: ReactNode }) {
    return (
        <div className="hero-tech-surface">
            <div className="hero-tech-surface__content">{children}</div>
        </div>
    );
}

export default AnimatedBg;
