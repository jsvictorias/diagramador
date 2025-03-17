"use client"; 

import { useState } from 'react';
import styles from './Tooltip.module.css'; 

export default function Tooltip({ text, children }: { text: string; children: React.ReactNode }) {
    const [isVisible, setIsVisible] = useState(false);

    return (
        <div className={styles.tooltipContainer}>
            <div
                onMouseEnter={() => setIsVisible(true)}
                onMouseLeave={() => setIsVisible(false)}
            >
                {children}
            </div>
            {isVisible && <div className={styles.tooltip}>{text}</div>}
        </div>
    );
}