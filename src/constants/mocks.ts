import { Pcarena, } from "../../BLOG_CONSTANTS/_BLOG_SETUP";
import { iArticle } from "../shared/interfaces";

export const MOCK_ARTICLES_LIST: iArticle[] = [
    {
        path: '/pages/tutorial/how-to-setup-blog.tsx',
        featureArticle: true,
        preview: {
            author: Pcarena,
            date: "August 08 2022",
            articleTitle: "PCArena",
            tags: "laptop, review",
            thumbnail: "",
            shortIntro: "These are the best laptops for gaming, coding",
            category: 'apple'
        },
        seo: {
            title: "PCArena",
            description: "Top Laptop review website",
            keywords: "laptop , review",
            ogImage: "",
            twitterHandle: "",
            author: Pcarena.name
        }
    }
]