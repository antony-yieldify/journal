import React, { Component } from 'react'
import  { EntryList }  from './entryList'
import EntryStats from './entryStats'

class Application extends Component {
    constructor(props) {
        super(props)
        this.state = {
            allEntries: [
                {
                    title: "First ever journal entry",
                    date: "22/10/2017",
                    entryText: "This is my first ever journal entry. Today was a nice day."
                },
                {
                    title: "Today was an even better day - my second journal entry",
                    date: "25/10/2017",
                    entryText: "This is my second journal entry. Today was an ever better day."
                },
                {
                    title: "Today was a terrible  day",
                    date: "28/10/2016",
                    entryText: "Today was a terrible day."
                }
            ]
        }
    }

    getNoEntries() {
        return this.state.allEntries.length;
    }

    getEarliestEntryDate() {
        return this.state.allEntries[0].date;
    }

    getOldestEntryDate() {
        return this.state.allEntries[2].date;
    }
     
    render() {
        return(
            <div className="application">
                <EntryStats 
                noEntries={this.getNoEntries()}
                lastEntryDate={this.getEarliestEntryDate()}
                oldestEntryDate={this.getOldestEntryDate()}
                />
                <EntryList entries={this.state.allEntries}/>
            </div>
        )
    }
}

export default Application; 