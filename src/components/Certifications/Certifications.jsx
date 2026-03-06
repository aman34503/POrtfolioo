import React from "react";
import { motion } from "framer-motion";
import { SiSalesforce } from "react-icons/si";
import { HiCpuChip } from "react-icons/hi2";
import { HiCloud } from "react-icons/hi2";
import { FaRobot } from "react-icons/fa";
import { CertificationsData } from "../../data/CertificationsData";
import "./style.css";

const iconMap = {
  admin: <SiSalesforce size={14} />,
  pd1: <SiSalesforce size={14} />,
  copado: <HiCloud size={14} />,
  data: <HiCpuChip size={14} />,
  ai: <FaRobot size={14} />,
};

const Certifications = ({ isDarkTheme }) => {
  return (
    <section className={`certifications ${isDarkTheme ? "dark-theme" : ""}`}>
      <h2 className="cert-title">Certifications</h2>
      <ul className="cert-list">
        {CertificationsData.map((c, i) => (
          <motion.li
            key={c.id}
            className="cert-row"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.03 * i }}
          >
            <span className="cert-icon">{iconMap[c.icon] || <SiSalesforce size={14} />}</span>
            <span className="cert-name">{c.name}</span>
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default Certifications;
