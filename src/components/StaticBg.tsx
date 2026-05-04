import { Metaballs } from '@paper-design/shaders-react';
import type { JSX } from "@emotion/react/jsx-runtime";


function StaticBg({ children }: { children: JSX.Element }) {
    return <div style={{ position: "relative", overflow: "hidden", borderRadius: 16, padding: 6 }}>
        <Metaballs
            style={{ position: "absolute", inset: 0, pointerEvents: "none" }}
            width="100%"
            height={720}
            colors={["#6e33cc", "#ff5500", "#ffc105", "#ffc800"]}
            colorBack="#ffffff"
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