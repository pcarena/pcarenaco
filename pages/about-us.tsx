/**These are necessary imports / components for the page */
import { ImageSize, TextAlign, ListType } from "../src/shared/enums";
import { PageLayout, Text, List, Image, LinkTo, Seperator, Slider } from "../src/components";
import { CURRENT_YEAR } from "../src/constants/appConstants";
import { iSEO } from "../src/shared/interfaces";

const AboutUs = () => {
    const PAGE_SEO: iSEO = {
        title: 'About Us',
        description: `Hi we are PCArena. This is our official website for Laptop review and blogs.`,
        keywords: 'Laptop, gaming Laptop, coding laptop, best laptop',
        author: 'Pcarena'
    }
    return (
        <PageLayout PAGE_SEO={PAGE_SEO} home>
            <section className='container px-3 md:pb-20 md:pt-10 pt-20'>
                <div className="">
                    <a href="https://pcarena.co" target="_blank" rel="noopener noreferrer" className="block md:w-[15%] w-[50%] ">
                        <img src="/favicon.png" alt="pcarena.co" className="rounded-lg overflow-hidden" />
                    </a>
                    <Text title className='mb-5 mt-10 dark:text-sky-400 text-sky-600'>
                        Hi we are PCArena.
                    </Text>
                    <Text subtitle className='text-xl mb-5'>
                       This is our official website for Laptop review and blogs.
                    </Text>

                    <Text p className='text-lg'>
                        </Text>

                    <div className="px-4 py-3 dark:bg-slate-800 bg-blue-200 rounded my-5">
                        <Text p className="!text-lg leading-relaxed mb-0">
                            For any any queries related to this project / template feel free to connect with us at <u>pcarenaco@gmail.com</u>.
                        </Text>
                    </div>
                </div>
            </section>
        </PageLayout>
    )
}

export default AboutUs