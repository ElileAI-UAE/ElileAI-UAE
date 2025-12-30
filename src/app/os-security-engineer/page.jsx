import React from "react";
import Link from "next/link";

const page = () => {
    return (
        <>
            {/* ----------- Page Banner --------- */}
            <section
                className="breadcrumb-area custom-breadcrumb bg-green bg-cover"
                style={{
                    backgroundImage: `url('/img/about-banner.webp')`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    width: "100%",
                }}
            >
                <div className="container">
                    <div className="breadcrumb-item">
                        <div className="row">
                            <div className="col-lg-8 ">
                                <nav className="woocommerce-breadcrumb" aria-label="Breadcrumb">
                                    <Link href="/">Home</Link> / Senior GrapheneOS Security Engineer
                                </nav>
                                <h1 className="breadcumb-title">Senior GrapheneOS Security Engineer</h1>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="career-detail section-gap">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <h3>Role Summary</h3>
                            <p>
                                We are seeking a Senior GrapheneOS Security Engineer to architect, deploy, harden, and
                                maintain sovereign, de-Googled Android security environments built entirely on GrapheneOS.
                                This role focuses on creating a fully independent, Big Tech–decoupled mobile ecosystem for
                                sensitive communications, on-device privacy, and operational security — suitable for executives,
                                high-risk individuals, and organizations facing advanced threat models.
                                The engineer will design a zero-trust, end-to-end secure mobile stack, ensuring the system
                                operates without Google Play Services, cloud dependencies, or centralized telemetry.
                            </p>
                            <div className="career-list">
                                <h3>Key Responsibilities</h3>
                                <p className="job-subtitle">1. GrapheneOS Deployment & Hardening</p>
                                <ul>
                                    <li>Build, flash, and maintain GrapheneOS using deterministic, reproducible builds</li>
                                    <li>Configure hardened system components:
                                        <ul>
                                            <li>Memory tagging (MTE)</li>
                                            <li>Hardened libc, kernel protections</li>
                                            <li>Enhanced sandboxing and app isolation</li>
                                        </ul>
                                    </li>
                                    <li>Optimize OS security posture without compromising usability for mission workflows</li>
                                    <li>Maintain strict separation between personal profiles, work profiles, and secure compartments</li>
                                </ul>


                                <p className="job-subtitle">2. Secure Android Application Architecture (No Google Dependencies)</p>
                                <ul>
                                    <li>Deploy and manage applications using:
                                        <ul>
                                            <li>F-Droid privileged extension</li>
                                            <li>Aurora services (anonymous mode)</li>
                                            <li>Custom internal app repositories</li>
                                        </ul>
                                    </li>
                                    <li>Build or integrate end-to-end encrypted communication applications that run without Google Play, push services, or Firebase</li>
                                    <li>Configure per-application network routing, VPN restrictions, and firewall rules</li>
                                    <li>Implement a no-analytics, no-telemetry, and no-crash-reporting application infrastructure</li>
                                </ul>

                                <p className="job-subtitle">3. Private, Self-Hosted Backend & Sync Layer</p>
                                <ul>
                                    <li>Configure secure backend infrastructure (self-hosted; no third-party cloud):
                                        <ul>
                                            <li>Nextcloud (documents, encrypted backups)</li>
                                            <li>Matrix Synapse (private messaging)</li>
                                            <li>Vaultwarden (encrypted secrets)</li>
                                            <li>Custom Tor hidden services for secure sync</li>
                                        </ul>
                                    </li>
                                    <li>Establish Tor-only, metadata-minimized connectivity between phones and servers</li>
                                    <li>Build workflows where the device:
                                        <ul>
                                            <li>Only syncs on approved networks</li>
                                            <li>Never leaks metadata</li>
                                            <li>Maintains full sovereignty over backup locations and encryption keys</li>
                                        </ul>
                                    </li>
                                </ul>


                                <p className="job-subtitle">4. Zero-Trust Mobile Security Engineering</p>
                                <ul>
                                    <li>Implement system-wide isolation mechanisms:
                                        <ul>
                                            <li>Hardened user profiles</li>
                                            <li>Per-app storage scopes</li>
                                            <li>Hardened toggles (camera, mic, sensors)</li>
                                        </ul>
                                    </li>
                                    <li>Configure and maintain:
                                        <ul>
                                            <li>Verified boot</li>
                                            <li>Integrity checks</li>
                                            <li>Hardware-backed key storage</li>
                                        </ul>
                                    </li>
                                    <li>Build provisioning pipelines for employees, VIP clients, or high-risk users</li>
                                </ul>

                                <p className="job-subtitle">5. Threat Modeling, Monitoring & Red-Teaming</p>
                                <ul>
                                    <li>Conduct adversarial threat modeling against:
                                        <ul>
                                            <li>Network attacks</li>
                                            <li>Side-channel attacks</li>
                                            <li>Baseband exploitation</li>
                                            <li>Physical access attempts</li>
                                        </ul>
                                    </li>
                                    <li>Test resistance to:
                                        <ul>
                                            <li>SIM-based hijacking</li>
                                            <li>IMSI catchers</li>
                                            <li>Rogue access points</li>
                                            <li>App-level exfiltration</li>
                                        </ul>
                                    </li>
                                    <li>Provide executive intelligence reports on vulnerabilities and risk exposure</li>
                                </ul>

                            </div>
                            <div className="career-list">
                                <h3>Required Technical Skills</h3>

                                <p className="job-subtitle">GrapheneOS & Android Security</p>
                                <ul>
                                    <li>Expert knowledge of GrapheneOS internals, permissions, toggles, and threat model</li>
                                    <li>Experience with AOSP, Android kernel hardening, and system-level security patches</li>
                                    <li>Strong understanding of secure boot, verified boot, and hardware-backed key attestation</li>
                                </ul>

                                <p className="job-subtitle">Networks & Privacy</p>
                                <ul>
                                    <li>Strong foundation in:
                                        <ul>
                                            <li>Tor routing</li>
                                            <li>VPN chaining</li>
                                            <li>DNS over Tor/HTTPS</li>
                                            <li>Firewall isolation</li>
                                            <li>Zero-metadata communication workflows</li>
                                        </ul>
                                    </li>
                                </ul>

                                <p className="job-subtitle">Backend Sovereign Infrastructure</p>
                                <ul>
                                    <li>Comfortable with:
                                        <ul>
                                            <li>Linux server security</li>
                                            <li>Nextcloud with encrypted storage</li>
                                            <li>Matrix Synapse</li>
                                            <li>Vaultwarden</li>
                                            <li>Custom private app stores</li>
                                        </ul>
                                    </li>
                                </ul>
                                <p className="job-subtitle">Cryptography</p>
                                <ul>
                                    <li>Solid understanding of:
                                        <ul>
                                            <li>Hardware key storage</li>
                                            <li>End-to-end encryption</li>
                                            <li>Key rotation</li>
                                            <li>Backup encryption</li>
                                            <li>Secure file sharing</li>
                                        </ul>
                                    </li>
                                </ul>
                                <p className="job-subtitle">Personal Attributes</p>
                                <ul>
                                    <li>Zero-trust mindset, assuming compromise until proven otherwise</li>
                                    <li>Surgical precision in configurations and security workflows</li>
                                    <li>Strong discipline in documentation and operational hygiene</li>
                                    <li>Ability to translate complex technical security risks into clear, executive-level guidance</li>
                                    <li>Extreme discretion and respect for confidentiality</li>
                                </ul>

                            </div>
                            <div className="career-list">
                                <h3>What This Role Enables</h3>
                                <p>A fully sovereign, Big-Tech-free Android mobile ecosystem</p>
                                <ul>
                                    <li>Mobile devices resistant to advanced surveillance, interception, and network-based attacks</li>
                                    <li>GrapheneOS-hardened communication channels with zero metadata leakage</li>
                                    <li>A secure, private backend infrastructure outside U.S. or EU jurisdiction</li>
                                    <li>A system architecture capable of withstanding state-level threat models</li>
                                </ul>

                            </div>
                            <div className="career-list">
                                {/* <h3>How to Apply</h3>
                                <p>Submit your resume and a cover letter outlining your experience in Kubernetes, infrastructure, or platform engineering. Highlight any relevant projects, open-source contributions, or certifications.
                                </p> */}
                            </div>
                            <div className="job-footer mt-4">
                                <Link
                                    className="default-btn"
                                    href="mailto:people@elile.ai"
                                >
                                    Apply Now
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};
export default page;
