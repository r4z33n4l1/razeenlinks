import ThemeToggle from "./components/ThemeToggle";
import linksData from "@/data/links.json";
import { LinksData } from "@/types/links";

const data = linksData as LinksData;

export default function Home() {
  return <main className="links-shell"><header className="links-header"><div><a className="wordmark" href="#top">{data.profile.name}</a><p>{data.profile.tagline}</p></div><ThemeToggle /></header><div id="top" className="links-list">{data.sections.map((section) => <section key={section.id} aria-labelledby={section.id}><h2 id={section.id}>{section.title}</h2><ul>{section.items.map((item) => <li key={item.slug}><a href={item.url} target="_blank" rel="noreferrer"><span><strong>{item.title}</strong><small>{item.description}</small></span><span aria-hidden="true">↗</span></a></li>)}</ul></section>)}</div><footer>© {new Date().getFullYear()} Razeen Ali</footer></main>;
}
