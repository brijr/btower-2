import React from "react";
import { DocsThemeConfig } from "nextra-theme-docs";
import { useRouter } from "next/router";
import { useConfig } from "nextra-theme-docs";

const config: DocsThemeConfig = {
  logo: (
    <>
      <svg width="24" height="24" fill="none" viewBox="0 0 24 24">
        <rect
          width="14.5"
          height="14.5"
          x="4.75"
          y="4.75"
          stroke="currentColor"
          strokeWidth="1.5"
          rx="2"
        />
        <path
          stroke="currentColor"
          strokeWidth="1.5"
          d="M8.75 10.75L11.25 13L8.75 15.25"
        />
      </svg>

      <span>Bridger Tower / Designer and Developer</span>
    </>
  ),
  // SEO Title Template
  useNextSeoProps() {
    return {
      titleTemplate: "%s | Bridger Tower",
    };
  },
  // SEO Head Tags
  head: () => {
    const { asPath } = useRouter();
    const { frontMatter } = useConfig();
    return (
      <>
        <meta property="og:url" content={`https://btower.dev${asPath}`} />
        <meta
          property="og:title"
          content={frontMatter.title || "Bridger Tower | btower.dev"}
        />
        <meta
          property="og:description"
          content={
            frontMatter.description ||
            "Bridger Tower is a Designer and Developer"
          }
        />
      </>
    );
  },
  // Navbar Links
  project: {
    link: "https://github.com/brijr",
  },
  chat: {
    link: "https://discord.gg/BsjuJu6G",
  },
  // Footer Text
  footer: {
    text: "© Bridger Tower 1998-Present | Thanks for visiting",
  },
};

// Exports the Config above
export default config;
