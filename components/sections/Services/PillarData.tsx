// sections/Services/pillarsData.ts

export interface PillarItem {
    icon: string;
    title: string;
    desc: string;
}

export interface Pillar {
    id: string;
    title: string;
    items: PillarItem[];
}

export const pillars: Pillar[] = [
    {
        id: 'ict-resourcing',
        title: 'ICT Resourcing',
        items: [
            { icon: 'ic:round-people', title: 'Staff Augmentation', desc: 'Working with you to understand your specific needs and project goals.' },
            { icon: 'ic:round-school', title: 'Expert Sourcing', desc: 'Leveraging our network and expertise to identify and vet candidates.' },
            { icon: 'ic:round-verified-user', title: 'Seamless Integration', desc: 'Facilitating onboarding and integration of new ICT resources into your environment.' },
        ],
    },
    {
        id: 'software-solutions',
        title: 'Software Solutions',
        items: [
            { icon: 'ic:round-code', title: 'Custom App Dev', desc: 'Building bespoke applications designed for your business workflow.' },
            { icon: 'ic:round-cloud-sync', title: 'Cloud Transformation', desc: 'Transitioning Legacy systems to scalable, modern cloud architectures.' },
            { icon: 'ic:round-terminal', title: 'System Integration', desc: 'Ensuring your diverse software platforms communicate effectively.' },
        ],
    },
    {
        id: 'security',
        title: 'Security',
        items: [
            { icon: 'ic:round-lock', title: 'Cyber Defense', desc: 'Protecting your perimeter and internal assets from advanced threats.' },
            { icon: 'ic:round-videocam', title: 'Smart Surveillance', desc: 'AI-powered monitoring solutions for 24/7 visibility.' },
            { icon: 'ic:round-fingerprint', title: 'Unified Access', desc: 'Modern biometric and digital access control systems.' },
        ],
    },
    {
        id: 'connectivity',
        title: 'Connectivity',
        items: [
            { icon: 'ic:round-router', title: 'Enterprise Wireless', desc: 'High-density, secure Wi-Fi networks for corporate environments.' },
            { icon: 'ic:round-settings-input-antenna', title: 'Fiber Solutions', desc: 'Low-latency, high-bandwidth dedicated internet access.' },
            { icon: 'ic:round-forum', title: 'Unified Comms', desc: 'Streamlined voice and video collaboration for distributed teams.' },
        ],
    },
    {
        id: 'infrastructure',
        title: 'ICT Infrastructure Solutions',
        items: [
            { icon: 'ic:round-dns', title: 'Data Center Build', desc: 'Modern data center designs prioritizing reliability and efficiency.' },
            { icon: 'ic:round-cable', title: 'Smart Cabling', desc: 'Scalable network fabric designed for high-performance data.' },
            { icon: 'ic:round-bolt', title: 'Critical Power', desc: 'Redundant power protection for mission-critical IT Loads.' },
        ],
    },
    {
        id: 'management',
        title: 'Server & Desktop Management',
        items: [
            { icon: 'ic:round-terminal', title: 'Proactive Maintenance', desc: 'Solving issues before they impact productivity.' },
            { icon: 'ic:round-update', title: 'Patch Management', desc: 'Keeping all systems up to date with the latest security fixes.' },
            { icon: 'ic:round-headset-mic', title: '24/7 Help Desk', desc: 'Immediate technical assistance whenever your team needs it.' },
        ],
    },
];

//it suppose to be PillarData.ts