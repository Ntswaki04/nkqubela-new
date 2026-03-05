// app/[slug]/page.tsx
import { notFound } from 'next/navigation';

import Aboutpage from '../Aboutpage';
import Careerpage from '../Careerpage';
import Contactpage from '../Contactpage';
import CSIpage from '../CSIpage';
import Servicespage from '../Servicespage';
import Temapage from '../Temapage';
import CSIArticleTemplate from '@/components/sections/CSI/CSIArticleTemplate';

import { initiatives } from '@/components/sections/CSI/CSIData';

export function generateStaticParams() {
    // Generate statically for all basic pages
    const mainPages = [
        { slug: 'about' },
        { slug: 'careers' },
        { slug: 'contact' },
        { slug: 'csi' },
        { slug: 'services' },
        { slug: 'team' },
    ];

    // AND dynamically generate static paths for all CSI initiatives from the data!
    const csiPages = initiatives.map(init => ({
        slug: init.slug.replace('/', '') // remove leading slash
    }));

    return [...mainPages, ...csiPages];
}

export default function DynamicPage({ params }: { params: { slug: string } }) {
    // Check specific pages first
    switch (params.slug) {
        case 'about': return <Aboutpage />;
        case 'careers': return <Careerpage />;
        case 'contact': return <Contactpage />;
        case 'csi': return <CSIpage />;
        case 'services': return <Servicespage />;
        case 'team': return <Temapage />;
    }

    // If it's none of the core pages, check if it's a known CSI slug dynamically by looking at the data
    const isCsiSlug = initiatives.some(init => init.slug === `/${params.slug}`);

    if (isCsiSlug) {
        // Automatically acts as a universal dynamic template generator
        return <CSIArticleTemplate slug={params.slug} />;
    }

    // If nothing matches, 404
    return notFound();
}
