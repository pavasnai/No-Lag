import '../dashboardpages/PClist/PcList';
import { FiMonitor } from "react-icons/fi";
import { FiSearch } from "react-icons/fi";
import { FaLock } from "react-icons/fa";
import { FaUnlockAlt } from "react-icons/fa";
import { RiRestartLine } from "react-icons/ri";
import { PiChatDotsBold } from "react-icons/pi";
export default function Users() {
    return (
        <div class="pcmonitorning ">
            <h1 class="title">Users</h1>
            <div class="totaloutletinfo">
                <div class="infocard">
                    <p>Today's Income</p>
                    <h2>₹ 2,800</h2>
                </div>
                <div class="infocard">
                    <p>Today Sales</p>
                    <h2>₹ 2,800</h2>
                </div>
                <div class="infocard">
                    <p>Consoles Available</p>
                    <h2>6</h2>
                </div>
                <div class="infocard">
                    <p>PCs Available</p>
                    <h2>4</h2>
                </div>
                <div class="infocard">
                    <p>Game Timing Purchased</p>
                    <h2>4:53:23:00</h2>
                </div>
                <div class="infocard">
                    <p>Total money deposits</p>
                    <h2>₹ 6,600</h2>
                    <div class="infogreen">12% Increased</div>
                </div>
            </div>
            <div class="filterbar">
                <div class="leftfilter">
                    <div class="searchfilter">
                        <FiSearch />
                        <input type="text" placeholder="Search for PCs, Users..." />
                    </div>
                    <button class="filterbox boxactive">All 12</button>
                    <button class="filterbox">Active 8</button>
                    <button class="filterbox">Idle 6</button>
                    <button class="filterbox">Issues 2</button>
                </div>
                <div class="rightfilter">
                    <button class="filterbox">User Group</button>
                    <button class="filterbox">Export</button>
                    <button class="filterbox">Imporst csv</button>
                    <button class="adxtrapc">+ ADD user</button>
                </div>
            </div>

        </div>
    );
}
