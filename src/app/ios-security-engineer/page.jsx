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
                                    <Link href="/">Home</Link> / iOS Security Engineer
                                </nav>
                                <h1 className="breadcumb-title">iOS Security Engineer</h1>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="career-detail section-gap">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <h3>About the Role</h3>
                            <p>
                                We are looking for an exceptional iOS Security Engineer with deep expertise in hardened iOS
                                builds, secure OS customization, and advanced mobile threat defence. You will help
                                design, build, and maintain a military-grade iOS security stack, ensuring device integrity,
                                resilience, and resistance against adversarial threats in high-risk environments.
                                This is a highly technical role requiring strong OS-level understanding, reverse engineering
                                skills, and hands-on experience in securing iOS beyond standard enterprise MDM controls.
                            </p>
                            <div className="career-list">
                                <h3>Key Responsibilities</h3>
                                <p className="job-subtitle">1. iOS Hardening & OS-Level Security</p>
                                <ul>
                                    <li>Design and implement custom hardened iOS configurations, profiles, and secure system policies</li>
                                    <li>Lock down system components, APIs, and services to reduce attack surface</li>
                                    <li>Develop and maintain secure boot, root-of-trust, and code integrity frameworks</li>
                                    <li>Implement protections against jailbreaking, tampering, and privilege escalation</li>
                                </ul>

                                <p className="job-subtitle">2. Secure System Architecture</p>
                                <ul>
                                    <li>Work with platform engineers to create security-first system architectures (kernel,
                                        sandboxing, entitlement control).
                                    </li>
                                    <li>Define security baselines, configuration frameworks, and compliance policies</li>
                                    <li>Integrate secure communication protocols, encrypted storage, and secure key-management flows</li>
                                </ul>

                                <p className="job-subtitle">3. Threat Defense & Detection</p>
                                <ul>
                                    <li>Build and implement real-time threat detection, anomaly monitoring, and behavioral security controls for iOS</li>
                                    <li>Develop anti-exfiltration measures and forensic-resistant logging</li>
                                    <li>Conduct adversarial simulations, penetration tests, and exploit analysis on iOS systems</li>
                                </ul>


                                <p className="job-subtitle">4. Reverse Engineering & Vulnerability Analysis</p>
                                <ul>
                                    <li>Perform static and dynamic analysis on iOS binaries, frameworks, and 3rd-party SDKs</li>
                                    <li>Reverse engineer iOS components to detect vulnerabilities or undocumented behavior</li>
                                    <li>Track CVEs, zero-days, and Apple security updates relevant to hardened deployments</li>
                                </ul>

                                <p className="job-subtitle">5. Secure App & System Development</p>
                                <ul>
                                    <li>Build internal security libraries, hardened communication modules, and secure wrappers</li>
                                    <li>Work with iOS app engineering teams to enforce secure coding patterns</li>
                                    <li>Support the development of compartmentalised secure workspaces and sandboxed environments</li>
                                </ul>

                            </div>
                            <div className="career-list">
                                <h3>Required Skills & Experience</h3>

                                <p className="job-subtitle">Technical Skills</p>
                                <p className="job-subtitle">Experience & Expertise</p>
                                <ul>
                                    <li>5–10+ years in iOS Security, OS Hardening, Mobile Security Engineering, or Reverse Engineering</li>
                                    <li>Deep hands-on knowledge of:
                                        <ul>
                                            <li>iOS internals (kernel, dyld, entitlements, sandboxing, AMFI, code signing)</li>
                                            <li>MDM, Configuration Profiles, supervised mode, DEP</li>
                                            <li>Secure boot, device provisioning, and Apple’s security architecture</li>
                                            <li>Anti-tamper and jailbreak detection technologies</li>
                                            <li>Swift, Objective-C development (secure coding expertise)</li>
                                            <li>Frida, LLDB, Hopper, IDA Pro, Ghidra or similar RE tools</li>
                                        </ul>
                                    </li>
                                    <li>Experience with encryption, PKI, certificates, TLS/SSL</li>
                                    <li>Experience implementing hardened OS images or custom enterprise-grade controls</li>
                                </ul>

                                <p className="job-subtitle">Soft Skills</p>
                                <ul>
                                    <li>Strong documentation and technical design abilities</li>
                                    <li>Ability to work in high-security, confidential, or regulated environments</li>
                                    <li>Excellent problem-solving and threat-modelling skills</li>
                                    <li>Comfortable collaborating with cloud, backend, MDM, and compliance teams</li>
                                </ul>
                                <p className="job-subtitle">Preferred (Bonus) Experience</p>
                                <ul>
                                    <li>Experience working on government, defense, or telecom-grade mobile security systems</li>
                                    <li>Exposure to end-to-end encrypted communication systems</li>
                                    <li>Background in zero-trust mobile security architecture</li>
                                    <li>Knowledge of mobile SIGINT, anti-surveillance tools, or hardened smartphone design</li>
                                    <li>Experience with Corellium or similar iOS virtualization/testing platforms</li>
                                </ul>

                            </div>

                            <div className="career-list">
                                <h3>How to Apply</h3>
                                <p>
                                    Submit your resume and a cover letter outlining your experience
                                </p>
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
