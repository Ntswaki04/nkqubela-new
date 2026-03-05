import { Initiative } from './CSIData';

export type ArticleSection =
    | { type: 'paragraph'; text: string }
    | { type: 'highlight'; text: string }
    | { type: 'heading'; text: string }
    | { type: 'gallery'; images: { src: string; alt: string }[] };

export interface CSIArticle {
    slug: string;           // must match initiative slug, e.g. '/csi-food-sponsorship'
    readTime: string;
    tagColor: string;
    featuredImageAlt: string;
    articleTags: string[];
    sections: ArticleSection[];
}

export const csiArticlesData: CSIArticle[] = [
    {
        slug: '/csi-zwelandile',
        readTime: "5 min read",
        tagColor: "bg-red-100 text-red-600 dark:bg-red-900/30 dark:text-red-400",
        featuredImageAlt: "Computer Lab Handover",
        articleTags: ['#DigitalLiteracy', '#Education', '#RuralDevelopment'],
        sections: [
            { type: 'paragraph', text: "On Friday 26th January 2024 Nkqubela Technology donated a brand-new computer lab to Zwelandile Senior Secondary School at Cofimvaba. This was part of the celebration of the school's 100% matric pass rate for the second year in a row which coincided with the Premier tour to 3 schools in the region." },
            { type: 'paragraph', text: "The ribbon cutting was done officially by Premier Oscar Mabuyane who mentioned to the school's assembly that there are pipeline plans to refurbish the school and equip it with modern facilities that will enhance a learning culture at the school." },
            { type: 'highlight', text: "The computer lab is an airconditioned tin structure furnished with 30 chairs, 30 laptops, cable-locks and a u-shaped desk." },
            { type: 'heading', text: "Awards and Acknowledgements" },
            { type: 'paragraph', text: "Nkqubela Technologies also donated a cheque of R10 000 to Zwelandile Matric Class of 2023 top performer Mr Liyabona Spalla who achieved 6 distinctions." },
            { type: 'paragraph', text: "Nkqubela Technologies was founded 21 years ago. It is an Eastern Cape based company that is 100% black owned. It currently employs over 150 people and provides ICT school support on behalf of EC Department of Education in 12 districts." },
        ]
    },
    {
        slug: '/csi-youth-exhibition',
        readTime: "4 min read",
        tagColor: "bg-red-100 text-red-600 dark:bg-red-900/30 dark:text-red-400",
        featuredImageAlt: "Youth Exhibition",
        articleTags: ['#YouthSeminary', '#CareerExhibition', '#ICT'],
        sections: [
            { type: 'paragraph', text: "As part of its Corporate Social Investment programme, Nkqubela Technologies took part at a Youth Seminar and Career Exhibition organized by the African Gospel Church with an aim to equip Grades 11 and 12 learners by providing career guidance, assistance with online registration, and showcasing what the company does; i.e. the services we provide and the future of ICT." },
            { type: 'paragraph', text: "Young adults came in their numbers some had completed school and stayed behind due to the environment, lack of funding or in some cases lack of employment opportunities. Showcasing some of the services and clients who we provide services too, was an eye opener for this youth and also educational for most." },
            { type: 'highlight', text: "The exhibition was held at the Reeston area, Buffalo City Municipality. Our contribution included donations towards their catering." },
            { type: 'paragraph', text: "This opportunity also highlighted the need for bursaries / scholarships and internship programmes and is in line with our vision to create opportunities for our disadvantaged youth but to ensure that we level the playing field in ICT, especially in terms of women in this space." }
        ]
    },
    {
        slug: '/csi-mec-awards',
        readTime: "3 min read",
        tagColor: "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400",
        featuredImageAlt: "MEC Excellence Awards & Golf Day",
        articleTags: ['#MECGolfDay', '#Sponsorship', '#Education'],
        sections: [
            { type: 'paragraph', text: "The Eastern Cape Department of Education hosted the MEC Golf Day on the 5th of June 2025 and MEC Excellence awards on the 06th of June 2025." },
            { type: 'paragraph', text: "The MEC Golf Day was successfully held at the East London Golf club, bringing together government leaders, business partners, community stakeholders, and industry professionals for a day of networking, collaboration, and friendly competition." },
            { type: 'heading', text: "Excellence Awards" },
            { type: 'paragraph', text: "The MEC Excellence Awards are a prestigious annual platform established to recognise and celebrate outstanding performance, dedication, and innovation within the department. These awards highlight individuals and teams who consistently go beyond the call of duty to advance service delivery, uphold departmental values, and contribute to meaningful change within our communities." },
            { type: 'highlight', text: "As part of this initiative, Nkqubela Technologies was requested to sponsor two vehicles to two schools. These vehicles will play a critical role in enabling project staff and field coordinators to reach identified schools efficiently and consistently." },
            { type: 'heading', text: "Event Highlights" },
            {
                type: 'gallery', images: [
                    { src: "/images/mec-awards-handover-1.jpg", alt: "Vehicle Handover Ceremony" },
                    { src: "/images/mec-awards-handover-2.jpg", alt: "Vehicle Handover Ceremony 2" },
                    { src: "/images/mec-awards-car-stirling.jpg", alt: "Stirling High School Vehicle" },
                    { src: "/images/mec-awards-car-xolilizwe.jpg", alt: "Xolilizwe Senior Secondary Vehicle" },
                    { src: "/images/mec-awards-extra-1.jpg", alt: "MEC Awards Gala Dinner" },
                    { src: "/images/mec-awards-extra-2.jpg", alt: "Radio Interview at Event" },
                    { src: "/images/mec-awards-extra-3.jpg", alt: "Nkqubela Team at Golf Day" }
                ]
            },
            { type: 'paragraph', text: "By sponsoring these vehicles, Nkqubela Technologies continues its commitment to supporting education and infrastructure development within the Eastern Cape, ensuring that essential resources reach the schools that need them most." }
        ]
    },
    {
        slug: '/csi-food-sponsorship',
        readTime: "2 min read",
        tagColor: "bg-orange-100 text-orange-700 dark:bg-orange-900/30 dark:text-orange-400",
        featuredImageAlt: "Food Sponsorship Donation",
        articleTags: ['#CommunitySupport', '#Education', '#Grade12'],
        sections: [
            { type: 'paragraph', text: "Nkqubela Technologies received a sponsorship request from The Eastern Cape Department of Education Office of the MEC for a donation to assist the 2024 Grade 12 learners in the Eastern Cape who were writing their final Grade 12 final examinations beginning on the 21st of October 2024." },
            { type: 'highlight', text: "In response to this call, Nkqubela donated stationary, nutritious snacks, and grocery contributions to ensure that learners were well-supported during this critical period of their academic journey." },
            { type: 'paragraph', text: "We understand the pressure that comes with final exams, and our aim was to alleviate some of the burdens so that students could focus entirely on their studies. By providing essential sustenance and supplies, we hope to have contributed to their success and well-being." },
            { type: 'heading', text: "Handover Moments" },
            {
                type: 'gallery', images: [
                    { src: "/images/csi-food-1.jpg", alt: "Donation Handover 1" },
                    { src: "/images/csi-food-2.jpg", alt: "Food Supplies" },
                    { src: "/images/csi-food-3.jpg", alt: "Donation Handover 2" }
                ]
            }
        ]
    }
];
