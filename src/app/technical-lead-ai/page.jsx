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
                                    <Link href="/">Home</Link> / Technical Lead – AI & Distributed Systems
                                </nav>
                                <h1 className="breadcumb-title">Technical Lead – AI & Distributed Systems</h1>
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
                                Elile builds mission-critical AI systems for national security and energy operations. Our
                                engineering challenges sit at the intersection of AI, distributed systems and data
                                pipelines.

                                We are looking for a hands-on Technical Lead who can lead by example the design and
                                engineering execution, working closely with product and domain experts to ship
                                systems that must be reliable, secure, and performant at scale.
                            </p>
                            <div className="career-list">
                                <h3>What You Will Lead  </h3>
                                <p className="job-subtitle">Architecture & System Design</p>
                                <ul>
                                    <li>Design scalable and fault-tolerant architectures for AI-driven industrial platforms, including LLM pipelines, inference systems, and monitoring systems</li>
                                    <li>Lead end-to-end system architecture for on-premise deployments, edge compute environments, and GPU-backed clusters</li>
                                    <li>Define robust data models, API contracts, and integration patterns for high-volume industrial data sources</li>
                                    <li>Ensure system reliability, performance optimization, and high availability across distributed environments</li>
                                    <li>Collaborate with cross-functional teams to align architecture decisions with business and operational requirements</li>
                                </ul>

                                <p className="job-subtitle">Technical Leadership</p>
                                <ul>
                                    <li>Mentor and guide cross-functional engineering teams, including AI Engineers, Full Stack Engineers, and DevOps Engineers</li>
                                    <li>Translate business and product requirements into clear technical roadmaps with defined milestones and deliverables</li>
                                    <li>Review codebases, enforce engineering best practices, and ensure architectural consistency across teams</li>
                                    <li>Drive build-vs-buy decisions by evaluating open-source and commercial solutions</li>
                                    <li>Ensure platform security, compliance, and adherence to industry standards</li>
                                </ul>


                                <p className="job-subtitle">AI & Intelligence Systems</p>
                                <ul>
                                    <li>Collaborate with AI engineers to train and deploy open LLMs, Retrieval-Augmented Generation (RAG) systems, domain-specific models, and agentic workflows</li>
                                    <li>Architect scalable data pipelines for OSINT, SIGINT, OPSINT ingestion, real-time turbine telemetry, and industrial sensor networks</li>
                                    <li>Design intelligent systems for processing high-volume, real-time, and batch data streams</li>
                                    <li>Optimize inference pipelines, caching strategies, and dataflows for low-latency industrial applications</li>
                                    <li>Ensure AI systems are production-ready, scalable, and reliable in edge and on-prem environments</li>
                                </ul>

                                <p className="job-subtitle">Platform Reliability & Observability</p>
                                <ul>
                                    <li>Ensure platforms meet strict uptime and reliability requirements across production environments</li>
                                    <li>Design and maintain monitoring, alerting, and observability stacks for distributed systems</li>
                                    <li>Lead incident response processes and guide root-cause analysis for system failures</li>
                                    <li>Support debugging and performance tuning of complex distributed architectures</li>
                                    <li>Implement role-based access control (RBAC), encryption, and end-to-end data governance</li>
                                </ul>
                                <p className="job-subtitle">Cross-Functional Collaboration</p>
                                <ul>
                                    <li>Work closely with Product, AI Research, and Energy/Intelligence domain experts to align technical solutions with business goals</li>
                                    <li>Break down complex system requirements into clear, actionable engineering tasks</li>
                                    <li>Coordinate with internal and external stakeholders, including customers, partners, and system integrators</li>
                                    <li>Own and drive technical communication across teams and leadership</li>
                                    <li>Support pre-sales, solution design discussions, and technical reviews when required</li>
                                </ul>


                            </div>
                            <div className="career-list">
                                <h3>What You Bring</h3>

                                <p className="job-subtitle">Technical Foundations</p>
                                <ul>
                                    <li>4+ years of experience in software engineering, with at least 2 years in a technical leadership or system architecture role</li>
                                    <li>Strong command of Python, Go, or Node.js, with experience designing and scaling large backend systems</li>
                                    <li>Deep understanding of:
                                        <ul>
                                            <li>Distributed systems and microservices architectures</li>
                                            <li>Experience designing and operating high-availability, fault-tolerant systems</li>
                                            <li>Hands-on experience with object storage platforms such as Amazon S3, MinIO, or Azure Blob Storage</li>
                                            <li>Strong knowledge of containerization and orchestration technologies, including Docker and Kubernetes</li>
                                        </ul>
                                    </li>
                                </ul>


                                <p className="job-subtitle">AI & Data Experience (Preferred)</p>
                                <ul>
                                    <li>Hands-on experience working with Large Language Models (LLMs), vector databases, Retrieval-Augmented Generation (RAG), or ML pipelines</li>
                                    <li>Familiarity with frameworks and tools such as LangGraph and LangSmith</li>
                                    <li>Strong understanding of chunking strategies, embeddings, model tuning, and prompt engineering</li>
                                    <li>Experience designing and implementing agentic workflows for AI-driven systems</li>
                                    <li>Experience deploying and optimizing models on GPU-backed infrastructure is a strong plus</li>
                                </ul>


                                <p className="job-subtitle">Domain Knowledge (Bonus, Not Required)</p>
                                <ul>
                                    <li>Familiarity with energy systems, turbines, and industrial platforms, including SCADA, OMS, and EMS integrations</li>
                                    <li>Understanding of cybersecurity principles, including zero-trust architectures and secure system design</li>
                                    <li>Exposure to OSINT and SIGINT data pipelines, threat intelligence platforms, or intelligence systems</li>
                                    <li>Experience with real-time monitoring, automation, and control platforms</li>
                                </ul>

                            </div>
                            <div className="career-list">
                                <h3>What Success Looks Like</h3>
                                <p>Within your first 30-90-180 days, you will have:</p>

                                <ul>
                                    <li>Designed and deployed large-scale, AI-native features across Elile products</li>
                                    <li>Improved engineering velocity through clearer system architecture and streamlined development processes</li>
                                    <li>Led engineering teams through complex technical challenges to deliver robust and secure systems</li>
                                    <li>Directly contributed to Elile’s mission of building autonomous, intelligent infrastructure for the region</li>
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
