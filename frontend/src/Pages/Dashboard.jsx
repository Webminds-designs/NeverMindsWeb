import React, { useState } from "react";
import ProfileDashboard from "../components/ProfileDashboard";



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
                <section id="profiledashboard">
                    <ProfileDashboard />
                </section>

                
            </main>
        </div>
    );
}
