// sections/CSI/csiData.ts

export interface Initiative {
    slug: string;
    img: string;
    title: string;
    desc: string;
    tag: string;
    date: string;
}

export interface FocusArea {
    title: string;
    desc: string;
}

export const ITEMS_PER_PAGE = 4;

export const initiatives: Initiative[] = [
    {
        slug: '/csi-zwelandile',
        img: '/images/csi_zwelandile.png',
        title: 'Zwelandile Senior Secondary School Computer Lab',
        desc: 'Donated a brand-new computer lab to Zwelandile Senior Secondary School at Cofimvaba, celebrating their 100% matric pass rate.',
        tag: 'Education',
        date: 'Jan 2024',
    },
    {
        slug: '/csi-youth-exhibition',
        img: '/images/csi-youth-exhibition.png',
        title: 'AGC Nkqubela – Youth Exhibition',
        desc: 'Participated in a Youth Seminar and Career Exhibition organized by the African Gospel Church.',
        tag: 'Youth Development',
        date: 'Oct 2023',
    },
    {
        slug: '/csi-mec-awards',
        img: '/images/mec-awards-golf-group.jpg',
        title: 'MEC Excellence Awards & Golf Day',
        desc: 'Sponsored two vehicles for schools as part of the MEC Golf Day and Excellence Awards.',
        tag: 'Sponsorship',
        date: 'Jun 2025',
    },
    {
        slug: '/csi-food-sponsorship',
        img: '/images/csi-food-1.jpg',
        title: 'Food Sponsorship for Grade 12 Learners',
        desc: 'Donated stationery, nutritious snacks and grocery contributions for Grade 12 learners during final exams.',
        tag: 'Community Support',
        date: 'Oct 2024',
    },
    {
        slug: '/csi-zwelandile',
        img: '/images/csi_zwelandile.png',
        title: 'Digital Skills Workshop – Mdantsane Township',
        desc: 'Hosted a two-day digital literacy workshop for 80 learners in Mdantsane, covering coding fundamentals and internet safety.',
        tag: 'Digital Skills',
        date: 'Mar 2025',
    },
    {
        slug: '/csi-youth-exhibition',
        img: '/images/csi-youth-exhibition.png',
        title: 'STEM Bursary Programme – Eastern Cape',
        desc: 'Awarded bursaries to five high-achieving Grade 12 learners from under-resourced schools to pursue STEM degrees at university.',
        tag: 'Bursaries',
        date: 'Nov 2024',
    },
];

export const focusAreas: FocusArea[] = [
    {
        title: 'Education',
        desc: 'Bridging the digital divide through computer labs and skills training.',
    },
    {
        title: 'Youth Empowerment',
        desc: 'Career guidance, internships, and skill development for young adults.',
    },
    {
        title: 'Community Support',
        desc: 'Direct contributions to improve the lives of those in need.',
    },
];

//suppose to be CSIData.ts