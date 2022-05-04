import React from 'react';
import { ICommand, TextState, TextAreaTextApi } from '@uiw/react-md-editor';

export const test: ICommand<string> = {
    name: 'test',
    keyCommand: 'test',
    buttonProps: { 'aria-label': 'Aria Label 123', type: 'button' },
    icon: <span style={{ padding: '0 5px' }}>m</span>,
    execute: (state: TextState, api: TextAreaTextApi) => {
        if (!state.selectedText) return;
        const modifyText = `<span class="test">${state.selectedText}</span>\n`;
        api.replaceSelection(modifyText);
    },
};

export const testPreview = ({ inline, children, className, ...props }) => {
    const txt = children?.[0] || "";
    console.log({txt});
};