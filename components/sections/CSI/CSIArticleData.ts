import { Initiative } from './csiData';

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
    ,
    {
        slug: '/csi-stutterheim',
        readTime: "3 min read",
        tagColor: "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400",
        featuredImageAlt: "Stutterheim Rugby Tournament",
        articleTags: ['#Sport', '#Sponsorship', '#Community'],
        sections: [
            { type: 'paragraph', text: "Nkqubela Technologies proudly acted as the official sponsor for a community rugby tournament held in Stutterheim. The sponsorship supported youth teams with equipment, refreshments and event logistics, helping to promote teamwork, inclusion and physical activity among local learners." },
            { type: 'highlight', text: "Our contribution enabled several under-resourced teams to participate and showcased the power of community sport to bring people together." },
            { type: 'heading', text: 'Event Highlights' },
            { type: 'paragraph', text: "The tournament saw local clubs and school teams compete in friendly matches, with families and volunteers coming together to support the youth. Nkqubela's presence included branded equipment and refreshments for participants." },
            { type: 'gallery', images: [
                { src: '/images/Stutt-tournament/IMG_8941.jpg', alt: 'Stutterheim rugby tournament photo 1' },
                { src: '/images/Stutt-tournament/IMG_8942.jpg', alt: 'Stutterheim rugby tournament photo 2' },
                { src: '/images/Stutt-tournament/IMG_8943.jpg', alt: 'Stutterheim rugby tournament photo 3' },
                { src: '/images/Stutt-tournament/IMG_8944.jpg', alt: 'Stutterheim rugby tournament photo 4' },
                { src: '/images/Stutt-tournament/IMG_8946.jpg', alt: 'Stutterheim rugby tournament photo 5' },
                { src: '/images/Stutt-tournament/IMG_8947.jpg', alt: 'Stutterheim rugby tournament photo 6' },
                { src: '/images/Stutt-tournament/IMG_8950.jpg', alt: 'Stutterheim rugby tournament photo 7' },
                { src: '/images/Stutt-tournament/IMG_8961.jpg', alt: 'Stutterheim rugby tournament photo 8' },
                { src: '/images/Stutt-tournament/IMG_8962.jpg', alt: 'Stutterheim rugby tournament photo 9' },
                { src: '/images/Stutt-tournament/IMG_8963.jpg', alt: 'Stutterheim rugby tournament photo 10' },
                { src: '/images/Stutt-tournament/IMG_8964.jpg', alt: 'Stutterheim rugby tournament photo 11' },
                { src: '/images/Stutt-tournament/IMG_8965.jpg', alt: 'Stutterheim rugby tournament photo 12' },
                { src: '/images/Stutt-tournament/IMG_8966.jpg', alt: 'Stutterheim rugby tournament photo 13' },
                { src: '/images/Stutt-tournament/IMG_8967.jpg', alt: 'Stutterheim rugby tournament photo 14' },
                { src: '/images/Stutt-tournament/IMG_8968.jpg', alt: 'Stutterheim rugby tournament photo 15' },
                { src: '/images/Stutt-tournament/IMG_8969.jpg', alt: 'Stutterheim rugby tournament photo 16' },
                { src: '/images/Stutt-tournament/IMG_8970.jpg', alt: 'Stutterheim rugby tournament photo 17' },
                { src: '/images/Stutt-tournament/IMG_8971.jpg', alt: 'Stutterheim rugby tournament photo 18' },
                { src: '/images/Stutt-tournament/IMG_8972.jpg', alt: 'Stutterheim rugby tournament photo 19' },
                { src: '/images/Stutt-tournament/IMG_8975.jpg', alt: 'Stutterheim rugby tournament photo 20' },
                { src: '/images/Stutt-tournament/IMG_8976.jpg', alt: 'Stutterheim rugby tournament photo 21' },
                { src: '/images/Stutt-tournament/IMG_8980.jpg', alt: 'Stutterheim rugby tournament photo 22' },
                { src: '/images/Stutt-tournament/IMG_8981.jpg', alt: 'Stutterheim rugby tournament photo 23' },
                { src: '/images/Stutt-tournament/IMG_8982.jpg', alt: 'Stutterheim rugby tournament photo 24' },
                { src: '/images/Stutt-tournament/IMG_8990.jpg', alt: 'Stutterheim rugby tournament photo 25' },
                { src: '/images/Stutt-tournament/IMG_8991.jpg', alt: 'Stutterheim rugby tournament photo 26' },
                { src: '/images/Stutt-tournament/IMG_8992.jpg', alt: 'Stutterheim rugby tournament photo 27' },
                { src: '/images/Stutt-tournament/IMG_8993.jpg', alt: 'Stutterheim rugby tournament photo 28' },
                { src: '/images/Stutt-tournament/IMG_8994.jpg', alt: 'Stutterheim rugby tournament photo 29' },
                { src: '/images/Stutt-tournament/IMG_8995.jpg', alt: 'Stutterheim rugby tournament photo 30' },
                { src: '/images/Stutt-tournament/IMG_8999.jpg', alt: 'Stutterheim rugby tournament photo 31' },
                { src: '/images/Stutt-tournament/IMG_9000.jpg', alt: 'Stutterheim rugby tournament photo 32' },
                { src: '/images/Stutt-tournament/IMG_9001.jpg', alt: 'Stutterheim rugby tournament photo 33' },
                { src: '/images/Stutt-tournament/IMG_9006.jpg', alt: 'Stutterheim rugby tournament photo 34' },
                { src: '/images/Stutt-tournament/IMG_9007.jpg', alt: 'Stutterheim rugby tournament photo 35' },
                { src: '/images/Stutt-tournament/IMG_9008.jpg', alt: 'Stutterheim rugby tournament photo 36' },
                { src: '/images/Stutt-tournament/IMG_9009.jpg', alt: 'Stutterheim rugby tournament photo 37' },
                { src: '/images/Stutt-tournament/IMG_9010.jpg', alt: 'Stutterheim rugby tournament photo 38' },
                { src: '/images/Stutt-tournament/IMG_9011.jpg', alt: 'Stutterheim rugby tournament photo 39' },
                { src: '/images/Stutt-tournament/IMG_9015.jpg', alt: 'Stutterheim rugby tournament photo 40' },
                { src: '/images/Stutt-tournament/IMG_9016.jpg', alt: 'Stutterheim rugby tournament photo 41' },
                { src: '/images/Stutt-tournament/IMG_9017.jpg', alt: 'Stutterheim rugby tournament photo 42' },
                { src: '/images/Stutt-tournament/IMG_9018.jpg', alt: 'Stutterheim rugby tournament photo 43' },
                { src: '/images/Stutt-tournament/IMG_9019.jpg', alt: 'Stutterheim rugby tournament photo 44' },
                { src: '/images/Stutt-tournament/IMG_9020.jpg', alt: 'Stutterheim rugby tournament photo 45' },
                { src: '/images/Stutt-tournament/IMG_9021.jpg', alt: 'Stutterheim rugby tournament photo 46' },
                { src: '/images/Stutt-tournament/IMG_9022.jpg', alt: 'Stutterheim rugby tournament photo 47' },
                { src: '/images/Stutt-tournament/IMG_9023.jpg', alt: 'Stutterheim rugby tournament photo 48' },
                { src: '/images/Stutt-tournament/IMG_9024.jpg', alt: 'Stutterheim rugby tournament photo 49' },
                { src: '/images/Stutt-tournament/IMG_9025.jpg', alt: 'Stutterheim rugby tournament photo 50' },
                { src: '/images/Stutt-tournament/IMG_9027.jpg', alt: 'Stutterheim rugby tournament photo 51' },
                { src: '/images/Stutt-tournament/IMG_9028.jpg', alt: 'Stutterheim rugby tournament photo 52' },
                { src: '/images/Stutt-tournament/IMG_9029.jpg', alt: 'Stutterheim rugby tournament photo 53' },
                { src: '/images/Stutt-tournament/IMG_9030.jpg', alt: 'Stutterheim rugby tournament photo 54' },
                { src: '/images/Stutt-tournament/IMG_9031.jpg', alt: 'Stutterheim rugby tournament photo 55' },
                { src: '/images/Stutt-tournament/IMG_9032.jpg', alt: 'Stutterheim rugby tournament photo 56' },
                { src: '/images/Stutt-tournament/IMG_9033.jpg', alt: 'Stutterheim rugby tournament photo 57' },
                { src: '/images/Stutt-tournament/IMG_9035.jpg', alt: 'Stutterheim rugby tournament photo 58' },
                { src: '/images/Stutt-tournament/IMG_9036.jpg', alt: 'Stutterheim rugby tournament photo 59' },
                { src: '/images/Stutt-tournament/IMG_9037.jpg', alt: 'Stutterheim rugby tournament photo 60' },
                { src: '/images/Stutt-tournament/IMG_9038.jpg', alt: 'Stutterheim rugby tournament photo 61' },
                { src: '/images/Stutt-tournament/IMG_9044.jpg', alt: 'Stutterheim rugby tournament photo 62' },
                { src: '/images/Stutt-tournament/IMG_9045.jpg', alt: 'Stutterheim rugby tournament photo 63' },
                { src: '/images/Stutt-tournament/IMG_9049.jpg', alt: 'Stutterheim rugby tournament photo 64' },
                { src: '/images/Stutt-tournament/IMG_9051.jpg', alt: 'Stutterheim rugby tournament photo 65' },
                { src: '/images/Stutt-tournament/IMG_9052.jpg', alt: 'Stutterheim rugby tournament photo 66' },
                { src: '/images/Stutt-tournament/IMG_9053.jpg', alt: 'Stutterheim rugby tournament photo 67' },
                { src: '/images/Stutt-tournament/IMG_9054.jpg', alt: 'Stutterheim rugby tournament photo 68' },
                { src: '/images/Stutt-tournament/IMG_9055.jpg', alt: 'Stutterheim rugby tournament photo 69' },
                { src: '/images/Stutt-tournament/IMG_9059.jpg', alt: 'Stutterheim rugby tournament photo 70' },
                { src: '/images/Stutt-tournament/IMG_9060.jpg', alt: 'Stutterheim rugby tournament photo 71' }
            ] }
        ]
    }
];
