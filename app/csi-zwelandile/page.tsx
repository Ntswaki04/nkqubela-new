"use client";

import CSIArticleLayout from '@/components/CSIArticleLayout';

export default function CSIZwelandile() {
    return (
        <CSIArticleLayout
            tag="Education"
            tagColor="bg-red-100 text-red-600 dark:bg-red-900/30 dark:text-red-400"
            title="Zwelandile Senior Secondary School Computer Lab"
            date="June 15, 2023"
            readTime="5 min read"
            featuredImage="/images/csi_zwelandile.png"
            featuredImageAlt="Computer Lab Handover"
            articleTags={['#DigitalLiteracy', '#Education', '#RuralDevelopment']}
            prevLink="/csi-food-sponsorship"
            prevTitle="Food Sponsorship"
            nextLink="/csi-youth-exhibition"
            nextTitle="Youth Exhibition"
            relatedItems={[
                {
                    slug: '/csi-youth-exhibition',
                    img: '/images/csi-youth-exhibition.png',
                    title: 'Annual Youth Tech Exhibition 2023',
                    date: 'Oct 2, 2023',
                },
                {
                    slug: '/csi-mec-awards',
                    img: '/images/mec-awards-golf-group.jpg',
                    title: 'MEC Excellence Awards & Golf Day',
                    date: 'Jun 5, 2025',
                },
            ]}
        >
            <p className="mb-6 leading-relaxed">
                On Friday 26th January 2024 Nkqubela Technology donated a brand-new computer lab to
                Zwelandile Senior Secondary School at Cofimvaba. This was part of the celebration of the
                school's 100% matric pass rate for the second year in a row which coincided with the Premier
                tour to 3 schools in the region.
            </p>
            <p className="mb-6 leading-relaxed">
                The ribbon cutting was done officially by Premier Oscar Mabuyane who mentioned to the
                school's assembly that there are pipeline plans to refurbish the school and equip it with
                modern facilities that will enhance a learning culture at the school.
            </p>

            <div className="my-10 p-8 bg-gray-50 dark:bg-darklight border-l-4 border-primary rounded-r-xl italic text-lg text-gray-700 dark:text-gray-300">
                The computer lab is an airconditioned tin structure furnished with 30 chairs, 30 laptops,
                cable-locks and a u-shaped desk.
            </div>

            <h3 className="text-2xl font-bold dark:text-white mb-4 mt-8">Awards and Acknowledgements</h3>
            <p className="mb-6 leading-relaxed">
                Nkqubela Technologies also donated a cheque of R10 000 to Zwelandile Matric Class of 2023
                top performer Mr Liyabona Spalla who achieved 6 distinctions.
            </p>
            <p className="mb-6 leading-relaxed">
                Nkqubela Technologies was founded 21 years ago. It is an Eastern Cape based company that is
                100% black owned. It currently employs over 150 people and provides ICT school support on
                behalf of EC Department of Education in 12 districts.
            </p>
        </CSIArticleLayout>
    );
}
