"use client";

import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

export function useSectionInView() {
    const [activeSection, setActiveSection] = useState<string>("");
    const location = useLocation();

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        console.log(entry);

                        setActiveSection(entry.target.id);
                    }
                });
            },
            {
                threshold: 0.5,
                rootMargin: "-20% 0px -20% 0px",
            }
        );

        const sections = document.querySelectorAll("[data-section]");
        sections.forEach((section) => observer.observe(section));

        return () => {
            sections.forEach((section) => observer.unobserve(section));
        };
    }, [location.pathname]);

    return activeSection;
}
