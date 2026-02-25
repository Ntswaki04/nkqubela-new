"use client";

import CSIArticleLayout from '@/components/CSIArticleLayout';
import ImageGallery from '@/components/ImageGallery';

export default function CSIMecAwards() {
    return (
        <CSIArticleLayout
            tag="Sponsorship"
            tagColor="bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400"
            title="MEC Excellence Awards & Golf Day"
            date="June 5-6, 2025"
            readTime="3 min read"
            featuredImage="/images/mec-awards-golf-group.jpg"
            featuredImageAlt="MEC Excellence Awards & Golf Day"
            articleTags={['#MECGolfDay', '#Sponsorship', '#Education']}
            prevLink="/csi-youth-exhibition"
            prevTitle="Youth Exhibition"
            nextLink="/csi-food-sponsorship"
            nextTitle="Food Sponsorship"
            relatedItems={[
                {
                    slug: '/csi-youth-exhibition',
                    img: '/images/csi-youth-exhibition.png',
                    title: 'AGC Nkqubela – Youth Exhibition',
                    date: 'Oct 2, 2023',
                },
                {
                    slug: '/csi-zwelandile',
                    img: '/images/csi_zwelandile.png',
                    title: 'Zwelandile Senior Secondary School Computer Lab',
                    date: 'Jan 26, 2024',
                },
            ]}
        >
            <p className="mb-6 leading-relaxed">
                The Eastern Cape Department of Education hosted the MEC Golf Day on the 5th of June 2025 and
                MEC Excellence awards on the 06th of June 2025.
            </p>
            <p className="mb-6 leading-relaxed">
                The MEC Golf Day was successfully held at the East London Golf club, bringing together
                government leaders, business partners, community stakeholders, and industry professionals for a day of
                networking, collaboration, and friendly competition.
            </p>

            <h3 className="text-2xl font-bold dark:text-white mb-4 mt-8">Excellence Awards</h3>
            <p className="mb-6 leading-relaxed">
                The MEC Excellence Awards are a prestigious annual platform established to recognise and
                celebrate outstanding performance, dedication, and innovation within the department. These awards
                highlight individuals and teams who consistently go beyond the call of duty to advance service
                delivery, uphold departmental values, and contribute to meaningful change within our communities.
            </p>

            <div className="my-10 p-8 bg-gray-50 dark:bg-darklight border-l-4 border-primary rounded-r-xl italic text-lg text-gray-700 dark:text-gray-300">
                As part of this initiative, Nkqubela Technologies was requested to sponsor two vehicles to
                two schools. These vehicles will play a critical role in enabling project staff and field coordinators to
                reach identified schools efficiently and consistently.
            </div>

            <h3 className="text-2xl font-bold dark:text-white mb-6 mt-8">Event Highlights</h3>

            <ImageGallery
                images={[
                    { src: "/images/mec-awards-handover-1.jpg", alt: "Vehicle Handover Ceremony" },
                    { src: "/images/mec-awards-handover-2.jpg", alt: "Vehicle Handover Ceremony 2" },
                    { src: "/images/mec-awards-car-stirling.jpg", alt: "Stirling High School Vehicle" },
                    { src: "/images/mec-awards-car-xolilizwe.jpg", alt: "Xolilizwe Senior Secondary Vehicle" },
                    { src: "/images/mec-awards-extra-1.jpg", alt: "MEC Awards Gala Dinner" },
                    { src: "/images/mec-awards-extra-2.jpg", alt: "Radio Interview at Event" },
                    { src: "/images/mec-awards-extra-3.jpg", alt: "Nkqubela Team at Golf Day" },
                ]}
            />

            <p className="mb-6 leading-relaxed">
                By sponsoring these vehicles, Nkqubela Technologies continues its commitment to supporting
                education and infrastructure development within the Eastern Cape, ensuring that essential resources
                reach the schools that need them most.
            </p>
        </CSIArticleLayout>
    );
}
