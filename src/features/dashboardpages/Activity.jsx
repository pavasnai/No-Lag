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
export default function Activity() {
    return (

        <div class="filter-wrapper">

            <div class="filter-card">
                <label>Start Date</label>
                <div class="input-box">
                    <input type="text" placeholder="Select Date" />
                    <i class="fa-regular fa-calendar"></i>
                </div>
            </div>

            <div class="filter-card">
                <label>End Date</label>
                <div class="input-box">
                    <input type="text" placeholder="Select Date" />
                    <i class="fa-regular fa-calendar"></i>
                </div>
            </div>

            <div class="filter-card">
                <label>Category</label>
                <div class="input-box">
                    <input type="text" placeholder="eg. Order" />
                </div>
            </div>

            <div class="filter-card">
                <label>PC</label>
                <div class="input-box">
                    <input type="text" placeholder="Id or Name" />
                </div>
            </div>

            <div class="filter-card">
                <label>Employee</label>
                <div class="input-box">
                    <input type="text" placeholder="Id or Name" />
                </div>
            </div>

            <div class="filter-card">
                <label>User</label>
                <div class="input-box">
                    <input type="text" placeholder="Id or Name" />
                </div>
            </div>

        </div>
    );
}
