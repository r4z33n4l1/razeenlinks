import { Profile } from "@/types/links";

export default function Header({ profile }: { profile: Profile }) {
  return (
    <header className="mb-12">
      <h1 className="font-display text-5xl sm:text-7xl font-bold uppercase tracking-tight leading-none">
        {profile.name}
      </h1>
      <p className="mt-3 font-mono text-lg sm:text-xl text-brutal-black/70">
        {profile.tagline}
      </p>
    </header>
  );
}
