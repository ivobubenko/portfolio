import { Metaballs } from '@paper-design/shaders-react';
import type { JSX } from "@emotion/react/jsx-runtime";


function StaticBg({ children }: { children: JSX.Element }) {
    return <div style={{ position: "relative", overflow: "hidden", borderRadius: 8, padding: 6, background: "#102c29" }}>
        <Metaballs
            style={{ position: "absolute", inset: 0, pointerEvents: "none" }}
            width="100%"
            height={720}
            colors={["#176b67", "#d35f42", "#e8b44e", "#78aaa4"]}
            colorBack="#102c29"
            count={10}
            size={0.53}
            speed={0.14}
        />

        <div
            aria-hidden
            style={{
                position: "absolute",
                inset: 0,
                pointerEvents: "none",
                background: "rgba(5, 22, 20, 0.2)",
            }}
        />
        <div
            style={{
                position: "relative",
                zIndex: 1,
                color: "#EAF2FF",

            }}
        >
            {children}
        </div>
    </div>

}

export default StaticBg;
