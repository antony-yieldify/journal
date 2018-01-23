import React, { Component}  from 'react';
import Entry from './entry';

export const EntryList = ({entries}) => (
    <div className = "entryList">
        {entries.map((entry, i) =>
            <Entry key={i}
                   title={entry.title}
                   date={entry.date}
                   entryText={entry.entryText} 
            />
        )}
    </div>
)