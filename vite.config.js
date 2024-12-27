import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import * as path from "path";
import { createSvgIconsPlugin } from "vite-plugin-svg-icons";
// https://vite.dev/config/
export default defineConfig({
    plugins: [react(), createSvgIconsPlugin({
            iconDirs: [path.resolve(process.cwd(), "src/shared/assets/images/icons")],
            symbolId: "icon-[dir]-[name]",
            inject: "body-last",
            customDomId: "__svg__icons__dom__",
        })],
    resolve: {
        alias: [
            { find: "@", replacement: path.resolve(__dirname, "src") }
        ]
    }
});
