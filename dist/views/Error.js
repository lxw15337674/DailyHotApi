import { jsx as _jsx, jsxs as _jsxs } from "hono/jsx/jsx-runtime";
import { html } from "hono/html";
import Layout from "./Layout.js";
const Error = (props) => {
    return (_jsxs(Layout, { title: "Error | DailyHot API", children: [_jsxs("main", { className: "error", children: [_jsx("div", { className: "img", children: _jsxs("svg", { xmlns: "http://www.w3.org/2000/svg", width: "32", height: "32", viewBox: "0 0 36 36", children: [_jsx("path", { fill: "currentColor", d: "M30 13.5a7.49 7.49 0 0 1-6.78-4.3H4V7h18.57a7.52 7.52 0 0 1-.07-1a7.52 7.52 0 0 1 .07-1H4a2 2 0 0 0-2 2v22a2 2 0 0 0 2 2h28a2 2 0 0 0 2-2V12.34a7.46 7.46 0 0 1-4 1.16m-13.2 6.33l-10 4.59v-2.64l6.51-3l-6.51-3v-2.61l10 4.59Zm6.6 5.57H17V23h6.4Z", class: "clr-i-solid--badged clr-i-solid-path-1--badged" }), _jsx("circle", { cx: "30", cy: "6", r: "5", fill: "currentColor", class: "clr-i-solid--badged clr-i-solid-path-2--badged clr-i-badge" }), _jsx("path", { fill: "none", d: "M0 0h36v36H0z" })] }) }), _jsxs("div", { className: "title", children: [_jsx("h1", { className: "title-text", children: "Looks like something went wrong" }), _jsx("span", { className: "title-tip", children: "\u7A0B\u5E8F\u6267\u884C\u51FA\u9519" }), props?.error ? _jsx("p", { className: "content", children: props.error }) : null] }), _jsx("div", { class: "control", children: _jsxs("button", { id: "reload-button", children: [_jsx("svg", { className: "btn-icon", xmlns: "http://www.w3.org/2000/svg", width: "32", height: "32", viewBox: "0 0 24 24", children: _jsx("path", { fill: "currentColor", d: "M17.65 6.35a7.95 7.95 0 0 0-6.48-2.31c-3.67.37-6.69 3.35-7.1 7.02C3.52 15.91 7.27 20 12 20a7.98 7.98 0 0 0 7.21-4.56c.32-.67-.16-1.44-.9-1.44c-.37 0-.72.2-.88.53a5.994 5.994 0 0 1-6.8 3.31c-2.22-.49-4.01-2.3-4.48-4.52A6.002 6.002 0 0 1 12 6c1.66 0 3.14.69 4.22 1.78l-1.51 1.51c-.63.63-.19 1.71.7 1.71H19c.55 0 1-.45 1-1V6.41c0-.89-1.08-1.34-1.71-.71z" }) }), _jsx("span", { className: "btn-text", children: "\u5237\u65B0\u91CD\u8BD5" })] }) })] }), html `
        <script>
          document.getElementById("reload-button").addEventListener("click", () => {
            window.location.reload();
          });
        </script>
      `] }));
};
export default Error;
