import React from 'react'
import '../css/leadcard.css';

function LeadCard(props) {
    return (
        <div className="leadercard">
            <div className="rank">{props.rank}</div> <hr className="vertical"/>
            <div>{props.name}</div> <hr className="vertical"/>
            <div></div>
        </div>
    )
}

export default LeadCard
