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
            { icon: 'ic:round-analytics', title: 'Business Analysis Services', desc: 'Analysis of ICT needs to align technology with business goals. Requirement gathering, solution scoping.' },
            { icon: 'ic:round-assignment', title: 'Project Management Services', desc: 'Management and oversight of ICT-related projects across clients using structured methodologies.' },
            { icon: 'ic:round-school', title: 'Systems Training & Computer Training', desc: 'Capacity building through ICT training on systems, software, and digital literacy for staff and users.' },
            { icon: 'ic:round-policy', title: 'IT Policy, Compliance & Audit Services', desc: 'Ensure compliance with ICT standards, AGSA requirements, and internal controls.' },
        ],
    },
    {
        id: 'software-solutions',
        title: 'Software Solutions',
        items: [
            { icon: 'ic:round-folder-special', title: 'Enterprise Content Management (ECM)', desc: 'Manage the lifecycle of documents from creation to archiving, integrated with scanning/OCR.' },
            { icon: 'ic:round-bar-chart', title: 'End-User Reporting', desc: 'Providing dashboards, insights, and reports to support decision-making using data from client systems.' },
            { icon: 'ic:round-web', title: 'Intranet & Website', desc: 'Internal (Intranet) and public (Website) platforms for information sharing, communication, and system access.' },
            { icon: 'ic:round-account-balance', title: 'Transversal Systems Support (BAS, Persal, Logis)', desc: 'Internal maintenance of finance, payroll, and procurement systems.' },
            { icon: 'ic:round-computer', title: 'Schools Based Systems Support (e.g. SASAMS)', desc: 'Internal technical support for school-based systems and platforms.' },
            { icon: 'ic:round-menu-book', title: 'Knowledge Management & Self-Service Portal', desc: 'Provide digital resources to enable users to resolve issues independently and stay informed.' },
        ],
    },
    {
        id: 'security',
        title: 'Security',
        items: [
            { icon: 'ic:round-security', title: 'Security Services', desc: 'Ensuring confidentiality, integrity, and availability of ICT systems through firewalls, antivirus, access controls, and monitoring.' },
            { icon: 'ic:round-manage-accounts', title: 'Identity & Access Management (IAM)', desc: 'Management of user identities, authentication, and access control.' },
            { icon: 'ic:round-restore', title: 'Disaster Recovery & Business Continuity', desc: 'Ensures recovery of systems and data in case of outage, disaster, or cyberattack.' },
        ],
    },
    {
        id: 'connectivity',
        title: 'Connectivity',
        items: [
            { icon: 'ic:round-wifi', title: 'Network and Wireless Services', desc: 'High-speed data connections from office locations to the data centre and Internet.' },
            { icon: 'ic:round-phone-in-talk', title: 'VoIP Services', desc: 'Internal telephone and video conferencing services across selected office rooms.' },
            { icon: 'ic:round-language', title: 'Internet Service Provisioning', desc: 'Provision of secure and reliable internet access to schools, district offices, and head office through contracted service providers.' },
            { icon: 'ic:round-email', title: 'E-Mail & Collaboration Services', desc: 'Provision of official email, shared calendars, task management, and collaboration tools like Teams or Outlook.' },
        ],
    },
    {
        id: 'infrastructure',
        title: 'ICT Infrastructure Solutions',
        items: [
            { icon: 'ic:round-cloud', title: 'Cloud Infrastructure & Hosting', desc: 'Delivery and hosting of cloud-based services including email, storage, and applications.' },
            { icon: 'ic:round-storage', title: 'Storage Services', desc: 'Centralized data storage, backup, and recovery services to ensure availability and protection of client data.' },
            { icon: 'ic:round-architecture', title: 'ICT Capacity Planning & Architecture', desc: 'Design of ICT systems and infrastructure for scalability, performance, and alignment.' },
            { icon: 'ic:round-inventory', title: 'ICT Asset Management', desc: 'Tracking, auditing, and lifecycle management of all ICT equipment.' },
        ],
    },
    {
        id: 'management',
        title: 'Server & Desktop Management',
        items: [
            { icon: 'ic:round-phone-android', title: 'Mobile Device / Unified Endpoint Management (MDM/UEM)', desc: 'Manage, secure, and monitor end-user devices remotely.' },
            { icon: 'ic:round-support-agent', title: 'Service Desk Support', desc: 'Centralized support platform for logging, tracking, and resolving user IT requests and incidents.' },
        ],
    },
];
