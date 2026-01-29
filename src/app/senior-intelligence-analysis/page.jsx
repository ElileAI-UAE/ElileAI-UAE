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
                                    <Link href="/">Home</Link> / Senior Intelligence Analysis &
                                    Decision Systems Lead
                                </nav>
                                <h1 className="breadcumb-title">
                                    Senior Intelligence Analysis & Decision Systems Lead
                                </h1>
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
                                We are seeking a senior leader to own and evolve Elile’s
                                external intelligence and data acquisition capabilities,
                                spanning open-source intelligence (OSINT), social platforms,
                                dark web sources, Ad-ID, cookies and other publicly or
                                commercially available data environments.
                                <br />
                                This role sits at the intersection of intelligence collection,
                                data structuring, investigative workflows, and platform
                                execution. It is intentionally designed for candidates with
                                either a strong engineering background, a product leadership
                                background, or a hybrid intelligence profile who have built such
                                platforms for digital intelligence in their career.
                                <br />
                                The scope includes intelligence sourced from open-source,
                                social, dark web, and externally observable platforms including
                                advertising servers, cookies, and dark web breaches, for
                                investigative and operational decision-making.
                            </p>
                            <div className="career-list">
                                <h3>Key Responsibilities</h3>
                                <p className="job-subtitle">
                                    Intelligence Analysis & Decision Frameworks
                                </p>
                                <ul>
                                    <li>
                                        Define and lead frameworks for analyzing intelligence inputs
                                        and converting them into prioritized threats, alerts, and
                                        decision signals.
                                    </li>
                                    <li>
                                        Establish methodologies for risk scoring, confidence
                                        assessment, and alert prioritization across investigative
                                        and operational use cases.
                                    </li>
                                    <li>
                                        Ensure analytical outputs align with real-world
                                        decision-making requirements, not just technical metrics.
                                    </li>
                                </ul>

                                <p className="job-subtitle">
                                    Analytics, Automation & AI Enablement
                                </p>
                                <ul>
                                    <li>
                                        Guide the application of analytics, automation, and AI to
                                        intelligence workflows in a responsible and controlled
                                        manner.
                                    </li>
                                    <li>
                                        Partner with engineering and data teams to operationalize
                                        analytical models into production systems.
                                    </li>
                                    <li>
                                        Ensure analytical outputs are explainable, auditable, and
                                        defensible, with clear handling of uncertainty and
                                        confidence levels.
                                    </li>
                                    <li>
                                        Actively prevent over-automation and misuse of AI in
                                        high-risk decision environments.
                                    </li>
                                </ul>

                                <p className="job-subtitle">Analyst-Centric Workflow Design</p>
                                <ul>
                                    <li>
                                        Design analyst-in-the-loop workflows that enable review,
                                        override, annotation, and feedback on automated outputs.
                                    </li>
                                    <li>
                                        Ensure systems enhance analyst effectiveness rather than
                                        replace professional judgment.
                                    </li>
                                    <li>
                                        Incorporate mechanisms for dissent, validation, and
                                        iterative learning within analytical workflows.
                                    </li>
                                    <li>
                                        Promote transparency in how conclusions, alerts, and
                                        recommendations are generated.
                                    </li>
                                </ul>

                                <p className="job-subtitle">
                                    Risk, Governance & Accountability
                                </p>
                                <ul>
                                    <li>
                                        Define guardrails to manage risks related to bias,
                                        misinterpretation, false positives, and operational misuse.
                                    </li>
                                    <li>
                                        Work closely with legal, compliance, and policy teams to
                                        ensure ethical, regulatory, and procedural alignment.
                                    </li>
                                    <li>
                                        Establish governance standards for auditability,
                                        traceability, and decision accountability across
                                        intelligence outputs.
                                    </li>
                                </ul>

                                <p className="job-subtitle">
                                    Executive & Stakeholder Engagement
                                </p>
                                <ul>
                                    <li>
                                        Engage with executive leadership, government stakeholders,
                                        and operational teams to align analytical capabilities with
                                        mission needs.
                                    </li>
                                    <li>
                                        Communicate analytical logic, limitations, and outcomes
                                        clearly to both technical and non-technical audiences.
                                    </li>
                                    <li>
                                        Represent analytical and decisioning ownership in high-level
                                        discussions with customers and partners.
                                    </li>
                                </ul>
                            </div>
                            <div className="career-list">
                                <h3>Technical & Analytical Familiarity</h3>
                                <ul>
                                    <li>
                                        Solid understanding of applied analytics and AI concepts such as scoring,
                                        classification, prioritization, and confidence handling.
                                    </li>
                                    <li>
                                        Experience translating analytical outputs into real-world workflows and
                                        decisions.
                                    </li>
                                    <li>
                                        Familiarity with data governance, explainability, auditability, and transparency
                                        requirements.
                                    </li>
                                    <li>
                                        Ability to engage deeply with engineering teams without being a hands-on
                                        data scientist.
                                    </li>
                                </ul>

                            </div>

                            <div className="career-list">
                                <h3>Preferred</h3>
                                <ul>
                                    <li>
                                        Background in counterterrorism, cyber threat intelligence, influence
                                        operations, or financial crime analysis.
                                    </li>
                                    <li>
                                        Experience with alerting, risk scoring, or intelligence prioritization systems.
                                    </li>
                                    <li>
                                        Experience working with sensitive, regulated, or government-led programs.
                                    </li>
                                </ul>
                            </div>

                            <div className="career-list">
                                <h3>What This Role Is Not</h3>
                                <ul>
                                    <li>
                                        This is not a machine learning research or pure data science role.
                                    </li>
                                    <li>
                                        This role does not own raw data ingestion, OSINT crawling, or collection
                                        infrastructure.
                                    </li>
                                    <li>
                                        This is not a junior or execution-only position.
                                    </li>
                                </ul>

                            </div>
                            <div className="career-list">
                                <h3>Success Measures</h3>
                                <ul>
                                    <li>
                                        Operational relevance and precision of analytical outputs and alerts.
                                    </li>
                                    <li>
                                        Analyst adoption, confidence, and sustained use of decision-support
                                        workflows.
                                    </li>
                                    <li>
                                        Reduction in missed, delayed, or mis-prioritized high-risk intelligence signals.
                                    </li>
                                    <li>
                                        Executive and customer trust in analytical outputs and decision logic.
                                    </li>
                                    <li>
                                        Demonstrated impact on investigative, security, or operational outcomes.
                                    </li>
                                </ul>

                            </div>
                            <div className="career-list">
                                <h3>How to Apply</h3>
                                <p>
                                    Submit your resume and a cover letter outlining your experience
                                </p>
                            </div>
                            <div className="job-footer mt-4">
                                <Link className="default-btn" href="mailto:people@elile.ai">
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
