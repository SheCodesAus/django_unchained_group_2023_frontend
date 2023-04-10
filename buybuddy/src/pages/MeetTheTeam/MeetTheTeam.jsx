import { useState, useEffect } from "react";

function MeetTheTeam() {
    return (
        <div className="team-main-container'>
            <div className="team-container-left">
                <div className="team-name">Team member 1</div>
                <div className="team-descirption">Team member 2</div>
                <div className="team-link">linked in/github/email</div>
                <div className="team-picture"></div>
            </div>

            <div className="team-container-right">
                <div className="team-name">Team member 1</div>
                <div className="team-descirption">Team member 2</div>
                <div className="team-link">linked in/github/email</div>
                <div className="team-picture"></div>
            </div>
        </div>


    );
};

export default MeetTheTeam;