"use client";

import Image from "next/image";
import { X } from "lucide-react";
import { useEffect } from "react";

interface ImageLightboxProps {
    src: string;
    alt: string;
    isOpen: boolean;
    onClose: () => void;
}

export function ImageLightbox({ src, alt, isOpen, onClose }: ImageLightboxProps) {
    useEffect(() => {
        if (!isOpen) return;

        const handleEscape = (e: KeyboardEvent) => {
            if (e.key === "Escape") onClose();
        };

        document.addEventListener("keydown", handleEscape);
        document.body.style.overflow = "hidden";

        return () => {
            document.removeEventListener("keydown", handleEscape);
            document.body.style.overflow = "unset";
        };
    }, [isOpen, onClose]);

    if (!isOpen) return null;

    return (
        <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4"
            onClick={onClose}
        >
            <div
                className="relative max-h-[90vh] max-w-[90vw]"
                onClick={(e) => e.stopPropagation()}
            >
                <Image
                    src={src}
                    alt={alt}
                    width={1200}
                    height={800}
                    className="h-auto w-full object-contain"
                />
                <button
                    onClick={onClose}
                    className="absolute -right-12 -top-12 rounded-full bg-white p-2 text-black transition-all hover:bg-stone/20 hover:text-white sm:right-2 sm:top-2 sm:bg-white/20"
                    aria-label="Fermer"
                >
                    <X size={24} />
                </button>
            </div>
        </div>
    );
}
