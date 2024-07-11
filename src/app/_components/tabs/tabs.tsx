"use client";

import { useState } from "react";
import { TabsProps } from "./tabs.types";

const Tabs: React.FC<TabsProps> = ({ tabs }) => {
  const [activeTab, setActiveTab] = useState<number>(0);
  function handleTabClick(index: number) {
    setActiveTab(index);
  }
  return (
    <div className="tabs">
      <div className="tab-labels">
        {tabs.map((tab, index) => (
          <a
            key={`tab-${index}`}
            className={`tab-label ${index === activeTab ? "tab-active" : ""}`}
            onClick={() => handleTabClick(index)}
          >
            {tab.label}
          </a>
        ))}
      </div>
      {tabs.map((tab, index) => (
        <div
          className="tab-content"
          key={`tab-content-${index}`}
          style={{ display: activeTab !== index ? "none" : "block" }}
        >
          {typeof tab.content === "string" ? (
            <div
              className="font-light leading-8"
              dangerouslySetInnerHTML={{
                __html: tab.content,
              }}
            />
          ) : (
            tab.content
          )}
        </div>
      ))}
    </div>
  );
};

export default Tabs;
