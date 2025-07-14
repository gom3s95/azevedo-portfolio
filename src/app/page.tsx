'use client';
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Linkedin } from "lucide-react";

export default function Portfolio() {
  return (
    <main className="max-w-4xl mx-auto p-6 space-y-8">
      <section className="text-center">
        <h1 className="text-4xl font-bold">Azevedo Gomes</h1>
        <p className="text-lg text-gray-600">
          Security and Network Engineer with 3+ years of experience in firewall management, IDS, and automated
          network processes.
        </p>
        <div className="flex justify-center gap-4 mt-4">
          <a href="https://www.linkedin.com/in/azevedo-gomes/" target="_blank" rel="noopener noreferrer">
            <Button variant="outline">
              <Linkedin className="mr-2 h-4 w-4" /> LinkedIn
            </Button>
          </a>
          <a href="mailto:azegomes@icloud.com">
            <Button variant="outline">Email</Button>
          </a>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-2">Work Experience</h2>
        <Card>
          <CardContent className="p-4 space-y-2">
            <h3 className="font-semibold">Security & Network Engineer</h3>
            <p className="text-sm text-gray-500">Charterhouse Voice & Data | May 2023 – Present</p>
            <ul className="list-disc list-inside text-sm">
              <li>Reduced unauthorised access attempts by 25% through enhanced firewall configurations.</li>
              <li>Deployed IDS systems identifying 10+ critical vulnerabilities annually.</li>
              <li>Developed response plans cutting threat resolution time by 50%.</li>
              <li>Implemented proactive alerting, reducing network downtime by 20%.</li>
              <li>Led 10+ major network projects with timely deployments and strong security.</li>
              <li>Executed disaster recovery strategies achieving 100% continuity in simulations.</li>
            </ul>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4 space-y-2">
            <h3 className="font-semibold">Technical Support Analyst</h3>
            <p className="text-sm text-gray-500">Pentesec LTD | Oct 2021 – May 2023</p>
            <ul className="list-disc list-inside text-sm">
              <li>Reduced unauthorised access incidents by 30% with strategic perimeter security.</li>
              <li>Improved threat detection by 15% via refined security protocols.</li>
              <li>Applied Application Control policies reducing endpoint threats by 40%.</li>
              <li>Managed 100+ monthly network issues ensuring business continuity.</li>
              <li>Reinforced cybersecurity frameworks, reducing incidents by 15%.</li>
            </ul>
          </CardContent>
        </Card>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-2">Education</h2>
        <Card>
          <CardContent className="p-4">
            <h3 className="font-semibold">BSc Computer Science - First-Class Honours</h3>
            <p className="text-sm text-gray-500">Nottingham Trent University | Sep 2017 – Oct 2021</p>
            <p className="text-sm">Relevant coursework: Networking, Cybersecurity, Programming, System Administration</p>
          </CardContent>
        </Card>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-2">Skills & Certifications</h2>
        <Card>
          <CardContent className="p-4 space-y-1 text-sm">
            <p><strong>Technical Skills:</strong> Firewall Configuration, IDS, Vulnerability Assessments, Disaster Recovery, TCP/IP, FortiManager, Routing Protocols (BGP, OSPF, ECMP)</p>
            <p><strong>Certifications:</strong> CCSM, CCTE, CCSE R81, CompTIA Security+</p>
            <p><strong>Soft Skills:</strong> Incident Response, Risk Management, Compliance, Collaboration, Communication</p>
            <p><strong>Volunteering:</strong> 10 hours/month at Organic Soul Foundation</p>
            <p><strong>Visa:</strong> EU Settlement Status (Eligible to work in the UK)</p>
          </CardContent>
        </Card>
      </section>
    </main>
  );
}