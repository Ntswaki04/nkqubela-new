// sections/Contact/contactData.ts

export interface ContactDetail {
    icon: string;
    label: string;
    value: string;
    href?: string;
}

export const contactDetails: ContactDetail[] = [
    {
        icon: 'lucide:map',
        label: 'Our Office',
        value: 'Office 1, Palm Square Business Park, Beacon Bay, East London, 5205',
    },
    {
        icon: 'lucide:mail',
        label: 'Email Us',
        value: 'Info@nkqubela.co.za',
        href: 'mailto:Info@nkqubela.co.za',
    },
    {
        icon: 'lucide:phone',
        label: 'Call Us',
        value: '+27 43 050 0821',
        href: 'tel:+27430500821',
    },
];