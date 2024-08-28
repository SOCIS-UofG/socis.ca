"use client";

import { useState, useEffect, type JSX } from "react";

interface FilterProps {
    selectionTitle : string;
    selectionOptions: string[];
    defaultSelection?: string[];
    onSelectionChange: (selectedYears: string[]) => void;
}

//This component returns one set of filters and it executes onSelectionChange(selected) in the parent component so the parent has access to all current selections
export const Filter = ({ selectionTitle, selectionOptions, defaultSelection=["All"], onSelectionChange }: FilterProps): JSX.Element => {
    const [selected, setSelected] = useState<string[]>([]);

    useEffect(() => {
        const isDefaultAll = defaultSelection.length === 1 && defaultSelection[0] === "All";
        
        if (isDefaultAll) {
            setSelected(selectionOptions);
        } else {
            setSelected(defaultSelection);
        }
    }, []);

    const toggleSelection2 = (selection: string) => {
        setSelected((prev) => {
            const newSelection = prev.includes(selection) ? prev.filter((sel) => sel !== selection) : [...prev, selection];
            onSelectionChange(newSelection);
            return newSelection;
        });
    }

    const toggleSelection = (selection: string) => {

        const newSelection = selected.includes(selection)
            ? selected.filter((y) => y !== selection)
            : [...selected, selection];
        
        setSelected(newSelection);
        onSelectionChange(newSelection);
        console.log(newSelection);
    };

    return (
        <div className="filters">
            <div className="filters_year flex gap-4">
                <span className="text-white">{selectionTitle}</span>
                {selectionOptions.map((selection) => (
                    <button
                        key={selection}
                        onClick={() => toggleSelection(selection)}
                        className={`px-4 py-2 rounded-lg transition-all duration-300 
              ${selected.includes(selection) || selected.length == 0
                                ? "bg-primary text-white"
                                : "text-primary bg-background hover:opacity-60"
                            } 
              hover:bg-primary hover:text-white`}
                    >
                        {selection}
                    </button>
                ))}
            </div>
        </div>
    );
};
