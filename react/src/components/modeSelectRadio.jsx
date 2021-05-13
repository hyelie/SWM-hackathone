import React, { Component } from 'react';

const Modes = [
    { name: '일반' },
    { name: '랭크' },
];

export function ModeSelectRadio() {
    return (
        <>
            {Modes.map((mode) => (
                <div key={mode.name}>
                    <input
                        id={mode.name}
                        type="radio"
                        data-type="horizontal"
                        name="mode-selector"
                        value={mode.name}
                    />
                    <label htmlFor={mode.name}>{mode.name}</label>
                </div>
            ))}
        </>
    );
}