import '../dashboardpages/PClist/PcList';
import { FiMonitor } from "react-icons/fi";
import { FiSearch } from "react-icons/fi";
import { FaLock } from "react-icons/fa";
import { FaUnlockAlt } from "react-icons/fa";
import { RiRestartLine } from "react-icons/ri";
import { PiChatDotsBold } from "react-icons/pi";
import { CgCalendarDates } from "react-icons/cg";
import { IoIosArrowDown } from "react-icons/io";
import AccordionTable from '../dashboardpages/AccordionTable/AccordionTable';
export default function Booking() {
    return (
        <div class="pcmonitorning ">
            <h1 class="title">Bookings</h1>
            <div class="totaloutletinfo">
                <div class="infocard">
                    <p>Total today</p>
                    <h2>₹ 2,800</h2>
                    <div class="infogreen">12% Increased</div>
                </div>
                <div class="infocard">
                    <p>checked in</p>
                    <h2 className='greeninfo'>₹ 2,800</h2>
                    <div class="infogreen">12% Increased</div>
                </div>
                <div class="infocard">
                    <p>Consoles Available</p>
                    <h2>6</h2>
                </div>
                <div class="infocard">
                    <p>PCs Available</p>
                    <h2 className='redinfo'>4</h2>
                    <div class="infogreen">12% Increased</div>
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
                    <div class="date-picker">
                        <div class="date-left">
                            <CgCalendarDates />
                            <span class="datetext">Tuesday, 19 May 2026</span>
                        </div>
                        <IoIosArrowDown />
                    </div>
                    <button class="adxtrapc">+ ADD PC</button>
                </div>
            </div>
            <div>
                <h2 class="title">morning</h2>
                <AccordionTable
                    showCheckbox={false}
                    showAvatar={false}
                // showDropdown={false}
                />
            </div>
            <div>
                <h2 class="title">afternoon</h2>
                <AccordionTable
                    showCheckbox={false}
                // showDropdown={false}
                />
            </div>
            <div>
                <h2 class="title">evening </h2>
                <AccordionTable
                    showCheckbox={false}
                // showDropdown={false}
                />
            </div>

        </div >
    );
}
