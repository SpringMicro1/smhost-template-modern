const config = {
  BASE: {
    SITE_TITLE: "Astro Modern Personal Website Template",
    SITE_DESCRIPTION:
      "Astro Modern Personal Website template with Project Section, CV Section, Paginated Blog, RSS Feed, SEO Friendly, Visual themes and Responsive Design.",
  },
  SIDEBAR: {
    TEXT: {},
    LINKS: {},
    IMAGES: {
      PROFILE: {
        src: "https://avatars.githubusercontent.com/u/30419176?v=4",
        alt: "profile picture",
      },
    },
  },
  HOME: {
    TEXT: {
      SALUTATION: "Continuity test. Hello there 👋",
      H1: "I'm David Buckley",
      SUBTITLE: "CS Teacher and Software Engineer",
      INTRODUCTION:
        "I made this template as a demonstration of loading content from a config file!",
      PARAGRAPHS: { "Paragraph 1": "This is a paragraph" },
    },
    LINKS: {
      "Link 1": {
        href: "https://www.linkedin.com/in/buckldav/",
        content: "Let's connect!",
      },
    },
    IMAGES: {},
  },
};
export const BASE = config.BASE;
export const SIDEBAR = config.SIDEBAR;
export const HOME = config.HOME;
