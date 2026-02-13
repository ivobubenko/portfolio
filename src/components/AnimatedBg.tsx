import { Dithering } from "@paper-design/shaders-react";
import type { JSX } from "@emotion/react/jsx-runtime";

function AnimatedBg({ children }: { children: JSX.Element }) {
    const reduceMotion =
        typeof window !== "undefined" &&
        window.matchMedia?.("(prefers-reduced-motion: reduce)")?.matches;

    return (
        <div style={{ position: "relative", overflow: "hidden", borderRadius: 16, padding: 6 }}>
            <Dithering
                style={{ position: "absolute", inset: 0, pointerEvents: "none" }}
                width="fill"
                height="fill"
                colorBack="#050816"
                colorFront="#258cbc"
                shape="warp"
                type="8x8"
                size={4.2}
                speed={reduceMotion ? 0 : 0.12}
            />
            <div
                aria-hidden
                style={{
                    position: "absolute",
                    inset: 0,
                    pointerEvents: "none",
                    background:
                        "linear-gradient(180deg, rgba(0,0,0,0.58) 0%, rgba(0,0,0,0.18) 55%, rgba(0,0,0,0.58) 100%)",
                }}
            />
            <div
                style={{
                    position: "relative",
                    zIndex: 1,
                    color: "#EAF2FF",
                    textShadow: "0 2px 14px rgba(0,0,0,0.65)",
                }}
            >
                {children}
            </div>
        </div>
    );
}

export default AnimatedBg;
