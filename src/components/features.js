import React from "react";
import FeatureItem from "./FeatureItem";

const featuresData = [
  {
    icon: "fa-receipt",
    title: "Smart Accounting",
    description: "Create GST-compliant invoices, track expenses, and manage payments effortlessly.",
  },
  {
    icon: "fa-boxes",
    title: "Inventory Control",
    description: "Monitor stock levels, manage warehouses, and streamline purchase orders.",
  },
  {
    icon: "fa-users",
    title: "CRM Made Simple",
    description: "Track leads, manage customers, and boost sales with integrated tools.",
  },
  {
    icon: "fa-wallet",
    title: "Effortless Payroll",
    description: "Automate salary processing and ensure compliance with ease.",
  },
  {
    icon: "fa-chart-line",
    title: "Insightful Dashboard",
    description: "Get real-time insights into sales, expenses, and business performance.",
  },
  {
    icon: "fa-cloud",
    title: "Secure & Cloud-Based",
    description: "Access your data anytime, anywhere with top-notch security.",
  },
];

const Features = () => {
  return (
    <section className="features">
      <h2>Why Choose Daybooks.in?</h2>
      <div className="features-grid">
        {featuresData.map((feature, index) => (
          <FeatureItem key={index} {...feature} />
        ))}
      </div>
    </section>
  );
};

export default Features;
