"use client";

import CSIArticleLayout from '@/components/CSIArticleLayout';
import ImageGallery from '@/components/ImageGallery';

export default function CSIFoodSponsorship() {
    return (
        <CSIArticleLayout
            tag="Community Support"
            tagColor="bg-orange-100 text-orange-700 dark:bg-orange-900/30 dark:text-orange-400"
            title="Food Sponsorship for Grade 12 Learners"
            date="October 21, 2024"
            readTime="2 min read"
            featuredImage="/images/csi-food-1.jpg"
            featuredImageAlt="Food Sponsorship Donation"
            articleTags={['#CommunitySupport', '#Education', '#Grade12']}
            prevLink="/csi-mec-awards"
            prevTitle="MEC Awards & Golf Day"
            nextLink="/csi-zwelandile"
            nextTitle="Zwelandile Computer Lab"
            relatedItems={[
                {
                    slug: '/csi-mec-awards',
                    img: '/images/mec-awards-golf-group.jpg',
                    title: 'MEC Excellence Awards & Golf Day',
                    date: 'Jun 5, 2025',
                },
                {
                    slug: '/csi-youth-exhibition',
                    img: '/images/csi-youth-exhibition.png',
                    title: 'AGC Nkqubela – Youth Exhibition',
                    date: 'Oct 2, 2023',
                },
            ]}
        >
            <p className="mb-6 leading-relaxed">
                Nkqubela Technologies received a sponsorship request from The Eastern Cape Department of
                Education Office of the MEC for a donation to assist the 2024 Grade 12 learners in the Eastern Cape
                who were writing their final Grade 12 final examinations beginning on the 21st of October 2024.
            </p>

            <div className="my-10 p-8 bg-gray-50 dark:bg-darklight border-l-4 border-primary rounded-r-xl italic text-lg text-gray-700 dark:text-gray-300">
                In response to this call, Nkqubela donated stationary, nutritious snacks, and grocery
                contributions to ensure that learners were well-supported during this critical period of their academic
                journey.
            </div>

            <p className="mb-6 leading-relaxed">
                We understand the pressure that comes with final exams, and our aim was to alleviate some of
                the burdens so that students could focus entirely on their studies. By providing essential
                sustenance and supplies, we hope to have contributed to their success and well-being.
            </p>

            <h3 className="text-2xl font-bold dark:text-white mb-6 mt-8">Handover Moments</h3>

            <ImageGallery
                images={[
                    { src: "/images/csi-food-1.jpg", alt: "Donation Handover 1" },
                    { src: "/images/csi-food-2.jpg", alt: "Food Supplies" },
                    { src: "/images/csi-food-3.jpg", alt: "Donation Handover 2" },
                ]}
            />
        </CSIArticleLayout>
    );
}
