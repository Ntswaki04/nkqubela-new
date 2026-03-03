// sections/Team/teamData.ts

export interface TeamMemberData {
    name: string;
    role: string;
    bio: string;
    img: string;
}

export const executiveTeam: TeamMemberData[] = [
    {
        name: "Mawethu Sidzamba",
        role: "Chief Executive Officer",
        img: "/images/team/mawethu-sidzamba.png",
        bio: "Mawethu Sivuyile Sidzamba was born in Sterkspruit in the Eastern Cape. He obtained his BCom degree from Vista University and Post Graduate Diploma in Compliance Management from the University of Johannesburg.\n\nHe has an audit career spanning over 16 years and completed his articles at Ngubane & Co. Chartered Accountants in Johannesburg. He has worked for a government agency, the National Regulator for Compulsory Specifications (NRCS) where he also acted as a Chief Audit Executive and reported directly to the Board and CEO.\n\nHe moved to Foskor (Pty) Ltd as Senior Internal Auditor and later Ford Motor Company of Southern Africa as an Internal Controls Analyst.",
    },
    {
        name: "Andile Kenqu",
        role: "Chief Operations Officer",
        img: "/images/team/andile-kenqu.png",
        bio: "Andile Cyril Kenqu was born in South Africa's second biggest township (Mdantsane) in East London the Eastern Cape. He obtained his National Diploma in Information Technology specializing in Intelligent Industrial System at the Tshwane University of Technology in Pretoria and a post graduate certificate in Specialized Application Development at the Centre for Development of Advanced Computing Institute in Noida India.\n\nHis employment journey began at the Eastern Cape Provincial Treasury as a Junior Data and Budget Systems Analysts for 5 years where he was responsible for data analyses and data mining provincial departments transversal systems (BAS, LOGIS, PerSal). He had offered Data Analyses Services for a period of four (4) years to the ECDoE. In 2021, he started as a Senior Business Analysts for Nkqubela Technologies until he was promoted to Chief Operations Officer on the 1st of September 2023.",
    },
];

export const managementTeam: TeamMemberData[] = [
    {
        name: "Melikhaya Phangwa",
        role: "Head of Business Solutions",
        img: "/images/management/melikhaya.png",
        bio: "Melikhaya is the strategic engine behind our business solutions. With a keen eye for Identifying opportunities, he expertly bridges the gap between complex technical capabilities and client requirements, ensuring every solution delivers tangible business value.",
    },
    {
        name: "Siyabulela Jindela",
        role: "Senior Account Manager",
        img: "/images/management/siyabulela.png",
        bio: "Siyabulela ensures that we deliver on our promises. He manages our clients accounts to ensure seamless delivery with precision, maintaining strict service level agreements and ensuring that every client interaction reflects our commitment to reliability and quality.",
    },
    {
        name: "Fezeka Mntonintshi",
        role: "Head of Human Resources",
        img: "/images/management/fezeka.png",
        bio: "Fezeka champions our most valuable asset: our people. She fosters a culture of innovation and excellence, supervising specialized talent acquisition and ensuring that Nkqubela Technologies remains a workplace where professionals thrive.",
    },
    {
        name: "Thando Mtombeni",
        role: "Executive Personal Assistant",
        img: "/images/management/thando.png",
        bio: "As the backbone of our executive office, Thando ensures seamless operations at the highest level. Her ability to manage complex schedules and provide strategic support to leadership allows our executives to focus on steering the company forward.",
    },
    {
        name: "Mpondokazi Zweni",
        role: "Service Desk Manager",
        img: "/images/management/mpondokazi.png",
        bio: "At the frontline of our support operations, Mpondokazi leads with empathy and technical expertise. She oversees the resolution of incidents, ensuring that our clients receive prompt, effective support whenever they encounter challenges.",
    },
];


//suppose to be Teamdata.ts
