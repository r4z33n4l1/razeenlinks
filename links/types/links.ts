export interface LinkItem {
  title: string;
  url: string;
  description?: string;
  emoji?: string;
  slug?: string;
}

export interface LinkSection {
  id: string;
  title: string;
  color: "yellow" | "pink" | "blue";
  items: LinkItem[];
}

export interface Profile {
  name: string;
  tagline: string;
}

export interface LinksData {
  profile: Profile;
  sections: LinkSection[];
}
