import { LogoType, NavbarType } from "../src/shared/enums";
import { IAuthor, iNavSetup, iSEO } from "../src/shared/interfaces";
import { AiFillGithub, AiOutlineTwitter, AiFillLinkedin, AiFillInstagram, AiFillFacebook, AiFillApple } from "react-icons/ai";





export const Pcarena: IAuthor = {
    name: "PCArena",
    designation: " Admin ",
    bio: "",
    profilePic: "",
    social: [
        {
            icon: <AiFillApple />,
            link: '#'
        },
        
    ]
}

export const Apple: IAuthor = {
    name: "Apple",
    designation: " Inc ",
    bio: "Apple Inc. is a pioneering technology company renowned for its iconic products, design excellence, and commitment to user privacy.",
    profilePic: "https://th.bing.com/th/id/OIP.HsEahpOEvF5ZYlusObagmQHaHa?rs=1&pid=ImgDetMain",
   
}

export const Dell: IAuthor = {
    name: "Dell ",
    designation: "Inc",
    bio: "Dell Technologies is a multinational technology company known for its range of hardware, software, and IT services.",
    profilePic: "https://snpi.dell.com/snp/images/products/large/en-us~Dell_Logo_v_2021/Dell_Logo_v_2021.jpg",
    
}

export const Asus: IAuthor = {
    name: "Asus",
    designation: "ROG",
    bio: "ASUS is a multinational technology company known for producing a wide range of hardware and electronics, including laptops, desktops, motherboards, graphics cards, monitors, networking equipment, and more.",
    profilePic: "https://seeklogo.com/images/A/asus-republic-of-gamers-logo-8B94B18AD7-seeklogo.com.png",
    
}

export const Acer: IAuthor = {
    name: "Acer",
    designation: " Tech ",
    bio: "Acer is a global technology company renowned for its range of computing products, including laptops, desktops, monitors, and peripherals, catering to both consumer and business markets.",
    profilePic: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/00/Acer_2011.svg/440px-Acer_2011.svg.png",
    
}

export const Razer: IAuthor = {
    name: "Razer",
    designation: " Tech ",
    bio: "Razer is a leading gaming hardware and lifestyle brand, specializing in gaming laptops, peripherals, and accessories, known for its high-performance products tailored to gamers' needs.",
    profilePic: "https://assets2.razerzone.com/images/phoenix/razer-ths-logo.svg",
   
}

export const MSI: IAuthor = {
    name: "MSI",
    designation: " Tech ",
    bio: "MSI (Micro-Star International) is a global technology company specializing in the design and manufacture of gaming laptops, desktops, motherboards, graphics cards, monitors, and other gaming peripherals.",
    profilePic: "https://storage-asset.msi.com/frontend/imgs/logo.png",
   
}

// This can your company name / your name etc for SEO purposes
export const WEBSITE_NAME: string = 'PCArena';
export const WEBSITE_URL: string = 'https://www.pcarena.co';

/**
 * This is the main navigation setup.
 * This includes the main navbar and the side drawer.
 */
export const PRIMARY_NAV: iNavSetup = {
    type: NavbarType.DEFAULT,
    // max logo image height 40px
    // you can add logo light version if using image
    // logo: {
    //     type: LogoType.IMAGE,
    //     logo: '/images/logo.png',
    //     logoLight: '/images/logo-light.png'
    // },
    logo: {
        type: LogoType.TEXT,
        logo: 'PCArena',
    },
    // navLinks are the main navbar links that apper on top of every page
    navLinks: [
        {
            label: 'Home',
            path: '/'
        },
        {
            // for categories don't add path and add type: dropdown and pass path empty
            label: 'Pcs',
            type: 'dropdown',
            path: ''
        },
        {
            label: 'About Us',
            path: '/about-us'
        },
        
        {
            label: 'Contact Us',
            path: '/contact-us'
        }
    ],
    // sideNavLinks are the links which appear when you open the side menu after clicking the burger menu icon.
    sideNavLinks: [
        {
            label: 'Home',
            path: '/'
        },
        {
            // for categories dont add path and add type: dropdown
            label: 'PCs',
            type: 'dropdown',
            path: ''
        },
        {
            label: 'About Us',
            path: '/about-us'
        },
        
        {
            label: 'Contact Us',
            path: '/contact-us'
        }
    ],
    socials: [
        {
            link: 'https://www.facebook.com/profile.php?id=61557404271545',
            icon: <AiFillFacebook />
        },
        {
            link: 'https://www.instagram.com/',
            icon: <AiFillInstagram />
        },
        {
            link: 'https://twitter.com/',
            icon: <AiOutlineTwitter />
        },
    ]
}

export const DEFAULT_SEO: iSEO = {
    title: "Home",
    description: "PC Arena is a popular online platform that provides information about laptops and related technologies.",
    keywords: "Laptop reviews, notebook evaluations, tech specifications, performance analysis, design features, user experience, battery life, display quality, processor benchmarks, graphics performance, storage options, portability, build quality, keyboard and trackpad, connectivity options, gaming capabilities, multimedia performance, price-to-performance ratio, operating system compatibility, customer ratings and feedback.",
    url: WEBSITE_URL,
    author: Pcarena.name,
    twitterHandle: '#',
   
}