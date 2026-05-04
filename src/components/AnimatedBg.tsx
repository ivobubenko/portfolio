import { Dithering } from "@paper-design/shaders-react";
import { Component, type ErrorInfo, type ReactNode } from "react";

class ShaderErrorBoundary extends Component<{ children: ReactNode }, { failed: boolean }> {
    state = { failed: false };

    static getDerivedStateFromError() {
        return { failed: true };
    }

    componentDidCatch(error: Error, info: ErrorInfo) {
        if (import.meta.env.DEV) {
            console.warn("Animated background shader failed; using CSS fallback.", error, info);
        }
    }

    render() {
        if (this.state.failed) {
            return null;
        }

        return this.props.children;
    }
}

function AnimatedBg({ children }: { children: ReactNode }) {
    const reduceMotion =
        typeof window !== "undefined" &&
        window.matchMedia?.("(prefers-reduced-motion: reduce)")?.matches;

    return (
        <div
            style={{
                position: "relative",
                overflow: "hidden",
                borderRadius: 16,
                padding: 6,
                background:
                    "radial-gradient(circle at 16% 12%, rgba(37, 140, 188, 0.42), transparent 30%), radial-gradient(circle at 86% 18%, rgba(245, 158, 11, 0.28), transparent 28%), linear-gradient(135deg, #050816 0%, #0a1730 44%, #09283b 100%)",
                boxShadow: "0 24px 70px rgba(5, 8, 22, 0.22)",
            }}
        >
            <div
                aria-hidden
                style={{
                    position: "absolute",
                    inset: 0,
                    pointerEvents: "none",
                    background:
                        "linear-gradient(115deg, rgba(255,255,255,0.11), transparent 34%), repeating-linear-gradient(90deg, rgba(255,255,255,0.07) 0 1px, transparent 1px 72px), repeating-linear-gradient(0deg, rgba(255,255,255,0.05) 0 1px, transparent 1px 72px)",
                    opacity: 0.58,
                }}
            />
            <div
                aria-hidden
                style={{
                    position: "absolute",
                    inset: "auto -18% -44% 28%",
                    height: "70%",
                    pointerEvents: "none",
                    background:
                        "radial-gradient(ellipse at center, rgba(37, 140, 188, 0.46), rgba(37, 140, 188, 0.14) 38%, transparent 70%)",
                    filter: "blur(8px)",
                }}
            />
            {!reduceMotion && (
                <ShaderErrorBoundary>
                    <Dithering
                        style={{ position: "absolute", inset: 0, pointerEvents: "none", opacity: 0.88 }}
                        width="fill"
                        height="fill"
                        colorBack="#050816"
                        colorFront="#258cbc"
                        shape="warp"
                        type="8x8"
                        size={4.2}
                        speed={0.12}
                    />
                </ShaderErrorBoundary>
            )}
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
