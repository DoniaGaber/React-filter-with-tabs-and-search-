import React from 'react'
import { tabs } from '../data/data'

export default function Taps({ activeTab, setActiveTab }) {
    return (
        <div className="taps">
            {tabs.map((ele, index) => (
                <span onClick={() => setActiveTab(ele.value)} className={`tab ${activeTab === ele.value ? "active" : ""}`} key={index}>
                    {ele.label}
                </span>
            ))}
        </div>
    );
}
