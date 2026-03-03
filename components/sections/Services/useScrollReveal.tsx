// sections/Services/useScrollReveal.ts
// NOTE: This hook is defined for future use. It is not currently wired up
// in the Services page but is kept here as a ready-to-use utility.

import { useCallback, useEffect, useRef } from 'react';

/**
 * Attaches an IntersectionObserver to a container element.
 * Every direct child with class `scroll-reveal` inside the container
 * will receive `is-visible` when it enters the viewport.
 * Staggered transition-delay is applied inline so cards cascade in.
 *
 * @param setActiveDot  optional callback – called with the index of the
 *                      most-recently-visible card so you can drive dots.
 * @param threshold     how much of the element must be visible to trigger
 */
export function useScrollReveal(
    setActiveDot?: (idx: number) => void,
    threshold = 0.35,
) {
    const containerRef = useRef<HTMLDivElement>(null);

    const handleEntries = useCallback(
        (entries: IntersectionObserverEntry[]) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('is-visible');
                    const idx = parseInt(
                        (entry.target as HTMLElement).dataset.index ?? '0',
                        10,
                    );
                    setActiveDot?.(idx);
                }
            });
        },
        [setActiveDot],
    );

    useEffect(() => {
        const container = containerRef.current;
        if (!container) return;

        const cards = container.querySelectorAll<HTMLElement>('.scroll-reveal');

        // Stagger delay so cards cascade in
        cards.forEach((card, i) => {
            card.style.transitionDelay = `${i * 0.06}s`;
        });

        const observer = new IntersectionObserver(handleEntries, {
            threshold,
            rootMargin: '0px 0px -80px 0px',
        });

        cards.forEach((card) => observer.observe(card));

        return () => observer.disconnect();
    }, [threshold, handleEntries]);

    return containerRef;
}

//suppuse to be Usescrollreveal.ts
