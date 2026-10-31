import React from "react";
import "./HowIWork.css";

const steps = [
  { label: "scope", note: "understand the problem" },
  { label: "build", note: null },
  { label: "ship", note: null },
  { label: "automate", note: null },
  { label: "maintain", note: "keep it running" },
];

const HowIWork = () => {
  return (
    <section className="section how-i-work" id="process" aria-labelledby="process-heading">
      <div className="page-inner">
        <span className="section-number">05</span>
        <h2 className="section-heading" id="process-heading">how i work</h2>

        <div className="process-stepper" role="list">
          {steps.map((step, i) => (
            <div key={step.label} className="process-step" role="listitem">
              <span className="process-label">{step.label}</span>
              {step.note && (
                <span className="process-note">{step.note}</span>
              )}
              {i < steps.length - 1 && (
                <span className="process-connector" aria-hidden="true">—</span>
              )}
            </div>
          ))}
        </div>

        <p className="process-aside">
          <span className="process-aside-marker" aria-hidden="true">*</span>
          most projects don't need all five steps. but when they do, you only need one person.
        </p>
      </div>
    </section>
  );
};

export default HowIWork;
