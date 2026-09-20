"use client";

import { useEffect, useSyncExternalStore } from "react";

export default function ThemeToggle() {
  const theme = useSyncExternalStore(subscribe, readTheme, () => "light");
  useEffect(() => { document.documentElement.dataset.theme = theme; }, [theme]);
  function toggle() { const next = theme === "light" ? "dark" : "light"; window.localStorage.setItem("theme", next); document.documentElement.dataset.theme = next; window.dispatchEvent(new Event("razeen-theme-change")); }
  return <button className="theme-toggle" type="button" onClick={toggle} aria-label={`Switch to ${theme === "light" ? "dark" : "light"} theme`}>{theme === "light" ? "Dark" : "Light"}</button>;
}

function subscribe(callback: () => void) { window.addEventListener("razeen-theme-change", callback); return () => window.removeEventListener("razeen-theme-change", callback); }
function readTheme(): "light" | "dark" { const saved = window.localStorage.getItem("theme"); return saved === "dark" || saved === "light" ? saved : window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light"; }
