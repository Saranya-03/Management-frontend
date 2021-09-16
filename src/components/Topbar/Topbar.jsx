import React from 'react'
import "./topbar.css"
import {NotificationsNone,Language,Settings} from '@material-ui/icons';

export default function Topbar() {
    return (
        <div className="topbar">
            <div className="topwrapper">
                <div className="topleft">
                    <span className="job">Management</span>
                </div>
                <div className="topright">
                    <div className="topbarIcons">
                        <NotificationsNone/>
                        <span className="ntfcount">2</span>
                    </div>
                    <div className="topbarIcons">
                        <Language/>
                        <span className="ntfcount">2</span>
                    </div>
                    <div className="topbarIcons">
                        <Settings/>
                    </div>
                    <img src="http://www.goodmorningimageshddownload.com/wp-content/uploads/2019/12/beautiful-whatsapp-dp-photo.jpg" alt="profile" className="profile"/>
                </div>
            </div>
        </div>
    )
}
