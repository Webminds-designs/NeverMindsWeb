import React, { useState } from "react";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Services from "../components/Services"
import Footer from "../components/Footer";

export default function Home() {
    const [overlayVisible, setOverlayVisible] = useState(false);

    return (
        <div className={`relative ${overlayVisible ? 'overflow-hidden' : ''}`}>
            {/* Header */}
            <Header setOverlayVisible={setOverlayVisible} />

            {/* Dark Overlay */}
            {overlayVisible && (
                <div
                    className="fixed inset-0 bg-secondary bg-opacity-90 z-40"
                ></div>
            )}

            <main>
                <section id="hero">
                    <Hero />
                </section>

                <section id="services">
                    <Services />
                </section>

                <footer>
                    <Footer />
                </footer>
            </main>
        </div>
    );
}
