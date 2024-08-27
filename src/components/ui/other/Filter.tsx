"use client";

import { useState, useEffect, type JSX } from "react";

interface FilterProps {
    selectionTitle : string;
    selectionOptions: string[];
    defaultSelection?: string[];
    onSelectionChange: (selectedYears: string[]) => void;
}

export const Filter = ({ selectionTitle, selectionOptions, defaultSelection=["All"], onSelectionChange }: FilterProps): JSX.Element => {
    const [selected, setSelected] = useState<string[]>([]);

    useEffect(() => {
        const isDefaultAll = defaultSelection.length === 1 && defaultSelection[0] === "All";
        
        if (isDefaultAll) {
            setSelected(selectionOptions);
        } else {
            setSelected(defaultSelection);
        }
    }, [defaultSelection, selectionOptions]);

    const toggleSelection = (year: string) => {

        const newSelection = selected.includes(year)
            ? selected.filter((y) => y !== year)
            : [...selected, year];
        
        setSelected(newSelection);
        onSelectionChange(newSelection);
    };

    return (
        <div className="filters">
            <div className="filters_year flex gap-4">
                <span className="text-white">{selectionTitle}</span>
                {selectionOptions.map((year) => (
                    <button
                        key={year}
                        onClick={() => toggleSelection(year)}
                        className={`px-4 py-2 rounded-lg transition-all duration-300 
              ${selected.includes(year)
                                ? "bg-primary text-white"
                                : "bg-white text-primary"
                            } 
              hover:bg-primary hover:text-white`}
                    >
                        {year}
                    </button>
                ))}
            </div>
        </div>
    );
};
