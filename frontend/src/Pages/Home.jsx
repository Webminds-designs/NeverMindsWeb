import React, { useState } from "react";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Services from "../components/Services"
import Footer from "../components/Footer";
import { Contributors } from "../components/Contributors";
import ContactTeam from "../components/ContactTeam";
import LatestQuizzes from "../components/LatestQuizzes";
import HowtoStart from "../components/HowtoStart";



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

                <section id="contributors">
                    <Contributors />
                </section>

                <section id="services">
                    <Services />
                </section>

                <section id="howtostart">
                    <HowtoStart />
                </section> 

                <section id="contactteam">
                    <ContactTeam />
                </section>

                <section id="latestquizzes">
                    <LatestQuizzes  />
                </section> 
                
                <footer>
                    <Footer />
                </footer>
            </main>
        </div>
    );
}
