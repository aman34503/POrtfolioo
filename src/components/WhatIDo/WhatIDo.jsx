import React from "react";
import { ServicesData } from "../../data/SiteData";
import "./WhatIDo.css";

const WhatIDo = () => {
  return (
    <section className="section what-i-do" id="what-i-do" aria-labelledby="what-i-do-heading">
      <div className="page-inner">
        <span className="section-number">02</span>
        <h2 className="section-heading" id="what-i-do-heading">what i do</h2>

        <ol className="services-list">
          {ServicesData.map((service) => (
            <li key={service.id} className="service-item">
              <div className="service-left">
                <span className="service-num">
                  {String(service.id).padStart(2, "0")}
                </span>
                <div className="service-info">
                  <span className="service-title">{service.title}</span>
                  <span className="service-desc">{service.description}</span>
                </div>
              </div>
              <span className="service-tools">
                {service.tools.join(" · ")}
              </span>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
};

export default WhatIDo;
