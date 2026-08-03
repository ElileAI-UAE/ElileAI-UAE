"use client";
import React from "react";
import Link from "next/link";
import { FaLocationDot } from "react-icons/fa6";
import { TbBriefcaseFilled } from "react-icons/tb";
import { useState } from "react";

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
                  <Link href="/">Home</Link> / Career
                </nav>
                <h1 className="breadcumb-title">Career</h1>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="career-sec section-gap">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-12">
              <div className="jobs-item">
                <h5>Principal Engineer — Complex Systems Architecture</h5>

                <ul className="job-header-info list-unstyled">
                  <li>
                    <FaLocationDot /> Remote, Europe preferred
                  </li>

                  <li>
                    <TbBriefcaseFilled /> Level L5 or L6, based on experience
                  </li>
                </ul>

                <div className="jobsDesc">
                  <p>
                    You are the architect and the engineer. You design a system on
                    paper, then build it yourself, own it in production, and set the
                    standard the rest of the team works toward. You will own one full
                    workstream end-to-end: design → implementation → testing →
                    deployment → operations.
                  </p>
                </div>

                <div className="job-footer">
                  <Link
                    className="default-btn"
                    href="/principal-engineer-complex-systems-architecture"
                  >
                    Read More
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-12">
              <div className="jobs-item">
                <h5>Senior AI Deployment Engineer</h5>
                <ul className="job-header-info list-unstyled">
                  <li>
                    <FaLocationDot /> Hybrid or Remote
                  </li>
                  <li>
                    <TbBriefcaseFilled /> 5–8+ years (Senior/Lead level)
                  </li>
                </ul>
                <div className="jobsDesc">
                  <p>
                    We are seeking a Senior AI Deployment Engineer to lead the
                    architecture and delivery of AI-native applications in
                    complex, high-security environments. This is a "Master
                    Builder" role that bridges the gap between state-of-the-art
                    LLM development and hardened, on-premises hardware
                    infrastructure. You will be the primary technical authority
                    for deploying mission-critical AI agents and RAG pipelines
                    within sovereign data infrastructures and air-gapped
                    environments.
                  </p>
                </div>
                <div className="job-footer">
                  <Link
                    className="default-btn"
                    href="/senior-ai-deployment-engineer"
                  >
                    Read More
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-12">
              <div className="jobs-item">
                <h5>
                  Senior Intelligence Data Lead – OSINT, Social & External
                  Intelligence{" "}
                </h5>
                <ul className="job-header-info list-unstyled">
                  <li>
                    <FaLocationDot /> Hybrid or Remote
                  </li>
                  <li>
                    <TbBriefcaseFilled /> 6+ years
                  </li>
                </ul>
                <div className="jobsDesc">
                  <p>
                    We are seeking a senior leader to own and evolve Elile’s
                    external intelligence and data acquisition capabilities,
                    spanning open-source intelligence (OSINT), social platforms,
                    dark web sources, Ad-ID, cookies and other publicly or
                    commercially available data environments. This role sits at
                    the intersection of intelligence collection, data
                    structuring, investigative workflows, and platform
                    execution. It is intentionally designed for candidates with
                    either a strong engineering background, a product leadership
                    background, or a hybrid intelligence profile who have built
                    such platforms for digital intelligence in their career.
                  </p>
                </div>
                <div className="job-footer">
                  <Link
                    className="default-btn"
                    href="/senior-intelligence-data-lead"
                  >
                    Read More
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-12">
              <div className="jobs-item">
                <h5>Dark Web Researcher / Threat Intel Analyst </h5>
                <ul className="job-header-info list-unstyled">
                  <li>
                    <FaLocationDot /> Remote / Hybrid
                  </li>
                  <li>
                    <TbBriefcaseFilled /> 3+ years
                  </li>
                </ul>
                <div className="jobsDesc">
                  <p>
                    We are seeking a Dark Web Researcher with deep experience in
                    underground ecosystems, threat intelligence collection, and
                    adversarial research. This role focuses on monitoring,
                    investigating, and analyzing illicit online activity across
                    dark web forums, marketplaces, encrypted platforms, and
                    breach ecosystems.You will operate at the intersection of
                    cyber threat intelligence, OSINT, and investigative
                    research, producing insights that support security
                    operations, risk assessment, and strategic decision-making.
                    This is a hands-on role for someone comfortable working in
                    hostile, deceptive, and fast-evolving digital environments.
                  </p>
                </div>
                <div className="job-footer">
                  <Link className="default-btn" href="/dark-web-researcher">
                    Read More
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default page;
