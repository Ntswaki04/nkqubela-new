// components/VideoModals/VideoModal.tsx
"use client";

import { useEffect, useRef } from 'react';

interface VideoModalProps {
    isOpen: boolean;
    videoUrl: string;
    onClose: () => void;
}

export default function VideoModal({ isOpen, videoUrl, onClose }: VideoModalProps) {
    const modalRef = useRef<HTMLDivElement>(null);
    const iframeRef = useRef<HTMLIFrameElement>(null);

    useEffect(() => {
        const handleEscape = (e: KeyboardEvent) => {
            if (e.key === 'Escape') {
                onClose();
            }
        };

        if (isOpen) {
            document.addEventListener('keydown', handleEscape);

            // Set iframe src after modal is open
            if (iframeRef.current && videoUrl) {
                iframeRef.current.src = videoUrl;
            }
        }

        return () => {
            document.removeEventListener('keydown', handleEscape);

            // Clean up iframe src
            if (iframeRef.current) {
                iframeRef.current.src = '';
            }
        };
    }, [isOpen, videoUrl, onClose]);

    const handleOverlayClick = (e: React.MouseEvent) => {
        if (modalRef.current && !modalRef.current.contains(e.target as Node)) {
            onClose();
        }
    };

    if (!isOpen) return null;

    return (
        <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4"
            onClick={handleOverlayClick}
        >
            <div
                ref={modalRef}
                className="relative w-full max-w-4xl overflow-hidden rounded-2xl bg-black aspect-video"
            >
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 z-10 bg-black/50 hover:bg-primary p-2 rounded-full text-white transition-colors"
                    aria-label="Close video"
                >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>
                <iframe
                    ref={iframeRef}
                    className="w-full h-full"
                    src=""
                    frameBorder="0"
                    allow="autoplay; fullscreen"
                    allowFullScreen
                    title="Video modal"
                />
            </div>
        </div>
    );
}