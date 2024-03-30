import React from 'react'; // Import React
import { PageLayout, Slider } from "../../src/components"; // Import necessary components

const Article = () => {
    return (
        <PageLayout blogwithsidebar> {/* Use PageLayout with sidebar */}
            <Slider
                images={[
                    'https://www.apple.com/v/mac-mini/t/images/overview/versatility_office__eedkqboculw2_large.jpg',
                    'https://www.apple.com/v/mac-mini/t/images/overview/thunderbolt__dxo2l15f3lua_large.jpg',
                    'https://www.apple.com/v/mac-mini/t/images/overview/m2__ervje1p52cya_large.png',
                    'https://www.apple.com/v/mac-mini/t/images/overview/m2_pro__bod7oesbsble_large.png'
                ]}
            />

            {/* Content */}
            <div className="px-4 py-3 dark:bg-slate-900 bg-blue-200 rounded mt-5 !text-lg leading-relaxed">
                {/* You may want to include article content here */}
                Disclaimer. We cannot guarantee that the information on this page is 100% correct.
            </div>
        </PageLayout>
    );
};

export default Article;
