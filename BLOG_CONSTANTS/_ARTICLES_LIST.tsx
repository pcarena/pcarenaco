import { iArticle } from "../src/shared/interfaces";

// Import author profiles, just type the name you have set in _BLOG_SETUP inside the curly brackets
import { Acer, Apple, Asus, Dell, MSI, Pcarena, Razer, } from "./_BLOG_SETUP";


const ARTICLES_LIST: iArticle[] = [
  {
    path: "/pages/apple/apple-mac.tsx",
    featureArticle: true,
    preview: {
      author: Apple,
      date: "March 06 2024",
      articleTitle: "Mac mini M1",
      tags: "demo, blog setup",
      thumbnail: "/public/imp_assets/tutorials/how-to-setup-blog.svg",
      shortIntro: "Review of Mac mini M1",
      category: "Apple",
    },
    seo: {
      title: "Mac mini m1",
      description: "Review of mac mini m1",
      keywords: "demo, blog setup",
      ogImage: "https://www.apple.com/v/mac-mini/t/images/overview/versatility_office__eedkqboculw2_large.jpg",
      twitterHandle: "#",
      author: Apple.name,
    },
  },
  {
    path: "/pages/dell/dell.tsx",
    featureArticle: false,
    preview: {
      author: Dell,
      date: "March 06 2024",
      articleTitle: "Dell",
      tags: "demo, blog setup",
      thumbnail: "/public/imp_assets/tutorials/how-to-setup-blog.svg",
      shortIntro: "Review of Mac mini M1",
      category: "Dell",
    },
    seo: {
      title: "About Dell",
      description: "Review of mac mini m1",
      keywords: "demo, blog setup",
      ogImage: "https://www.apple.com/v/mac-mini/t/images/overview/versatility_office__eedkqboculw2_large.jpg",
      twitterHandle: "#",
      author: Dell.name,
    },
  },

  {
    path: "/pages/asus/asus.tsx",
    featureArticle: false,
    preview: {
      author: Asus ,
      date: "January 10 2024",
      articleTitle: "Asus",
      tags: "demo, blog setup",
      thumbnail: "/public/imp_assets/tutorials/how-to-setup-blog.svg",
      shortIntro: "Review of Asus rog",
      category: "Asus",
    },
    seo: {
      title: "About asus",
      description: "Review of mac mini m1",
      keywords: "demo, blog setup",
      ogImage: "https://www.apple.com/v/mac-mini/t/images/overview/versatility_office__eedkqboculw2_large.jpg",
      twitterHandle: "#",
      author: Asus.name,
    },
  },


  {
    path: "/pages/acer/acer.tsx",
    featureArticle: false,
    preview: {
      author: Acer ,
      date: "January 9 2024",
      articleTitle: "Acer",
      tags: "demo, blog setup",
      thumbnail: "/public/imp_assets/tutorials/how-to-setup-blog.svg",
      shortIntro: "Review of Acer",
      category: "Acer",
    },
    seo: {
      title: "About Acer",
      description: "Review of acer",
      keywords: "acer",
      ogImage: "",
      twitterHandle: "#",
      author: Acer.name,
    },
  },

  {
    path: "/pages/razer/razer.tsx",
    featureArticle: false,
    preview: {
      author: Razer ,
      date: "January 8 2024",
      articleTitle: "Razer",
      tags: "demo, blog setup",
      thumbnail: "/public/imp_assets/tutorials/how-to-setup-blog.svg",
      shortIntro: "Review of Razer",
      category: "Razer",
    },
    seo: {
      title: "About Razer",
      description: "Review of razer",
      keywords: "razer",
      ogImage: "",
      twitterHandle: "#",
      author: Razer.name,
    },
  },

  {
    path: "/pages/msi/msi.tsx",
    featureArticle: false,
    preview: {
      author: MSI ,
      date: "January 8 2024",
      articleTitle: "MSI",
      tags: "demo, blog setup",
      thumbnail: "/public/imp_assets/tutorials/how-to-setup-blog.svg",
      shortIntro: "Review of Msi",
      category: "MSI",
    },
    seo: {
      title: "About Msi",
      description: "Review of MSI",
      keywords: "MSI",
      ogImage: "",
      twitterHandle: "#",
      author: MSI.name,
    },
  },

];

export const SORTED_ARTICLES_BY_DATE = ARTICLES_LIST.sort((a, b) =>
  new Date(a.preview.date) > new Date(b.preview.date) ? -1 : 1
);
