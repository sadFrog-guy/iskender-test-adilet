import React from "react"
import { ReactComponent as ArrowIcon } from "../icons/arrowRight.svg"
import { ReactComponent as ClockIcon } from "../icons/clock.svg"
import { ReactComponent as LocationIcon } from "../icons/locationBlue.svg"
import logoBranch from "../icons/logoBranch.svg"
import { ReactComponent as PhoneIco } from "../icons/pnoneBranch.svg"

const BranchItem = ({ branch }) => {
    return (
        <div className="branches-item">
            <div className="branches-item_top">
                <img
                    src={logoBranch}
                    alt="logo"
                />
                <div className="branches-item_top-right">
                    <h3>{branch.name}</h3>
                    <div className="branches-item-nav">
                        <p>Открыть в карте</p>
                        <ArrowIcon />
                    </div>
                </div>
            </div>
            <div className="branches-item-info">
                {/* <div> */}
                <div className="branches-item-clock">
                    <ClockIcon />
                    <span>
                        {branch.start} - {branch.end}
                    </span>
                </div>
                <div className="branches-item-clock">
                    <PhoneIco />
                    <span>+996 500 345 345</span>
                </div>
                <div className="branches-item-clock">
                    <LocationIcon />
                    <span>{branch.address}</span>
                </div>
                {/* </div> */}
            </div>
        </div>
    )
}

export default BranchItem
