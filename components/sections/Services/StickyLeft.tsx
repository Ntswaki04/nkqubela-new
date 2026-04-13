// sections/Services/StickyLeft.tsx
"use client";

import { useEffect, useRef, useCallback } from 'react';

export default function StickyLeft() {
    const panelRef = useRef<HTMLDivElement>(null);
    const sectionRef = useRef<HTMLElement | null>(null);
    const rightColRef = useRef<HTMLElement | null>(null);

    const NAV_HEIGHT = 96;   // px – matches your fixed header height
    const PADDING_TOP = 32;  // extra breathing room below nav

    const update = useCallback(() => {
        const panel = panelRef.current;
        const section = sectionRef.current;
        const rightCol = rightColRef.current;
        if (!panel || !section || !rightCol) return;

        const sectionRect = section.getBoundingClientRect();
        const rightColRect = rightCol.getBoundingClientRect();
        const panelHeight = panel.offsetHeight;
        const topOffset = NAV_HEIGHT + PADDING_TOP;

        // 1. Before section enters viewport — sit naturally at top of section
        if (sectionRect.top > topOffset) {
            panel.style.position = 'absolute';
            panel.style.top = '0px';
            panel.style.width = '380px';
            panel.style.zIndex = '';
            return;
        }

        // 2+3. Pin fixed, clamped so bottom never exceeds the right column's bottom
        const clampedTop = Math.min(topOffset, rightColRect.bottom - panelHeight);
        panel.style.position = 'fixed';
        panel.style.top = `${clampedTop}px`;
        panel.style.width = '380px';
        panel.style.zIndex = '10';
    }, []);

    useEffect(() => {
        sectionRef.current = panelRef.current?.closest('section') ?? null;
        rightColRef.current = (panelRef.current?.parentElement?.nextElementSibling as HTMLElement) ?? null;

        window.addEventListener('scroll', update, { passive: true });
        window.addEventListener('resize', update, { passive: true });
        update();

        return () => {
            window.removeEventListener('scroll', update);
            window.removeEventListener('resize', update);
        };
    }, [update]);

    return (
        /* Outer placeholder preserves layout space */
        <div style={{ flex: '0 0 380px', position: 'relative', minHeight: 1 }}>
            <div ref={panelRef} style={{ position: 'absolute', top: 0, width: 380 }}>

                {/* Badge */}
                <div className="inline-flex items-center gap-2 bg-white dark:bg-darklight border border-gray-200 dark:border-dark_border rounded-full px-4 py-1.5 text-sm font-bold text-primary mb-7 shadow-sm">
                    What We Do
                </div>

                {/* Headline */}
                <h2
                    className="font-extrabold dark:text-white mb-5"
                    style={{ fontSize: 'clamp(36px, 4vw, 52px)', lineHeight: 1.12 }}
                >
                    Fresh Perspectives<br />
                    On <span className="text-gray-900 dark:text-white italic">Strategy.</span>
                </h2>

                {/* Sub-text */}
                <p
                    className="text-black dark:text-gray-400 leading-relaxed max-w-[300px]"
                    style={{ fontSize: 15 }}
                >
                    We combine strategy, creativity, and technology to help brands grow in the modern digital landscape.
                </p>
            </div>
        </div>
    );
}