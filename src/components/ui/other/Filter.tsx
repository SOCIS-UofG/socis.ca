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
            onSelectionChange(selectionOptions);
        } else {
            setSelected(defaultSelection);
            onSelectionChange(defaultSelection);
        }
    }, []);

    const toggleSelection = (selection: string) => {

        const newSelection = selected.includes(selection)
            ? selected.filter((y) => y !== selection)
            : [...selected, selection];
        
        setSelected(newSelection);
        onSelectionChange(newSelection);
        console.log(newSelection);
    };

    return (
            <div className="flex flex-row gap-4 items-center flex-wrap">
                <span className="text-white w-20">{selectionTitle}:</span>
                {selectionOptions.map((selection) => (
                    <button
                        key={selection}
                        onClick={() => toggleSelection(selection)}
                        className={`px-4 py-2 rounded-lg transition-all duration-300 text-nowrap
              ${selected.includes(selection)
                                ? "bg-primary text-white border-primary"
                                : "text-primary bg-background border-background hover:border-primary"
                            } 
              border-1`}
                    >
                        {selection}
                    </button>
                ))}
            </div>
    );
};
