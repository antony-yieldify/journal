import React, { Component}  from 'react';
import Entry from './entry';
import "./styles/entryStats.css";

class EntryStats extends Component {
    render() {
        return(
            <div className="entryStats">
                <h1>Stats</h1>
                <p>Number of journal entries: <span>{this.props.noEntries}</span></p>
                <p>Most recent entry: <span>{this.props.lastEntryDate}</span></p>
                <p>Oldest entry: <span>{this.props.oldestEntryDate}</span></p>
            </div>
        )
    }
}

export default EntryStats;