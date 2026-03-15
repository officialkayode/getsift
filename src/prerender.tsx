import { renderToString } from "react-dom/server";
import { StaticRouter } from "react-router-dom/server";
import { HelmetProvider } from "react-helmet-async";
import App from "./App";

const routes = [
  "/",
  "/industry/pharma",
  "/about",
  "/privacy",
  "/blog",
  "/blog/temporal-context-beats-search",
  "/blog/sift-launches-major-update-context-aware-ai",
  "/blog/how-sift-powers-proactive-knowledge-delivery",
];

export async function prerender(data: { url?: string }) {
  const url = data?.url || "/";
  const helmetContext: { helmet?: any } = {};

  const html = renderToString(
    <HelmetProvider context={helmetContext}>
      <StaticRouter location={url}>
        <App />
      </StaticRouter>
    </HelmetProvider>
  );

  const { helmet } = helmetContext;
  const head = helmet
    ? [
        helmet.title?.toString() || "",
        helmet.meta?.toString() || "",
        helmet.link?.toString() || "",
        helmet.script?.toString() || "",
      ]
        .filter(Boolean)
        .join("\n")
    : "";

  return {
    html,
    head,
    links: url === "/" ? routes.filter((r) => r !== "/") : [],
  };
}
