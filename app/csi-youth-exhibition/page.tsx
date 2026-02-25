"use client";

import CSIArticleLayout from '@/components/CSIArticleLayout';

export default function CSIYouthExhibition() {
    return (
        <CSIArticleLayout
            tag="Youth Development"
            tagColor="bg-red-100 text-red-600 dark:bg-red-900/30 dark:text-red-400"
            title="AGC Nkqubela – Youth Exhibition"
            date="October 2, 2023"
            readTime="4 min read"
            featuredImage="/images/csi-youth-exhibition.png"
            featuredImageAlt="Youth Exhibition"
            articleTags={['#YouthSeminary', '#CareerExhibition', '#ICT']}
            prevLink="/csi-zwelandile"
            prevTitle="Zwelandile Computer Lab"
            nextLink="/csi-mec-awards"
            nextTitle="MEC Awards & Golf Day"
            relatedItems={[
                {
                    slug: '/csi-zwelandile',
                    img: '/images/csi_zwelandile.png',
                    title: 'Zwelandile Senior Secondary School Computer Lab',
                    date: 'Jan 26, 2024',
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
                As part of its Corporate Social Investment programme, Nkqubela Technologies took part at a
                Youth Seminar and Career Exhibition organized by the African Gospel Church with an aim to
                equip Grades 11 and 12 learners by providing career guidance, assistance with online
                registration, and showcasing what the company does; i.e. the services we provide and the
                future of ICT.
            </p>
            <p className="mb-6 leading-relaxed">
                Young adults came in their numbers some had completed school and stayed behind due to the
                environment, lack of funding or in some cases lack of employment opportunities. Showcasing
                some of the services and clients who we provide services too, was an eye opener for this
                youth and also educational for most.
            </p>

            <div className="my-10 p-8 bg-gray-50 dark:bg-darklight border-l-4 border-primary rounded-r-xl italic text-lg text-gray-700 dark:text-gray-300">
                The exhibition was held at the Reeston area, Buffalo City Municipality. Our contribution
                included donations towards their catering.
            </div>

            <p className="mb-6 leading-relaxed">
                This opportunity also highlighted the need for bursaries / scholarships and internship
                programmes and is in line with our vision to create opportunities for our disadvantaged
                youth but to ensure that we level the playing field in ICT, especially in terms of women in
                this space.
            </p>
        </CSIArticleLayout>
    );
}
