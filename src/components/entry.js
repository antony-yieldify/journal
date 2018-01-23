import React, { Component } from 'react';
import "./styles/entry.css";
import FaCalendar from 'react-icons/lib/fa/calendar'

class Entry extends Component {
    
    entryDaysOld(date) {
        var day = parseInt(date.split("/")[0]);
        var month = parseInt(date.split("/")[1]);
        var year = parseInt(date.split("/")[2]);
        var entryDate = new Date(year, month, day);
        var today = new Date();
        var daysOld = ((today - entryDate))/(1000*60*60*24);
        return " " + daysOld.toFixed(0) + " ";
    } 
    
    render () {
       return(
           <div className="entry">
            <h1 className="entryTitle">{this.props.title}</h1>
            <h2 className="entryDate"><FaCalendar /> {this.props.date}</h2>
            <p className="entryText">{this.props.entryText}</p>
            <p>This log is 
                <span className="daysOld">
                    {this.entryDaysOld(this.props.date)} 
                </span>
                days old.</p>
          </div>
       )
    }
};

export default Entry; 