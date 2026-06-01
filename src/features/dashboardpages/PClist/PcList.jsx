import '../PClist/PClist.css';
import { FiMonitor } from "react-icons/fi";
import { FiSearch } from "react-icons/fi";
import { FaLock } from "react-icons/fa";
import { FaUnlockAlt } from "react-icons/fa";
import { RiRestartLine } from "react-icons/ri";
import { PiChatDotsBold } from "react-icons/pi";
export default function PcList() {
    return (
        <div class="pcmonitorning ">
            <h1 class="title">PC List</h1>
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
                    <div class="filterstatus">12 Pcs <span>8 Active</span></div>
                    <button class="adxtrapc">+ ADD PC</button>
                </div>
            </div>
            <div class="pcgridlist">
                <div class="pc_card">
                    <div class="pc_top">
                        <div class="pc_left">
                            <div class="pc_monitor">
                                <FiMonitor />
                            </div>
                            <div>
                                <div class="pc_name">PC-1</div>
                                <div class="pc_gpu">RTX 4070</div>
                            </div>
                        </div>
                        <div class="pc_badge">
                            <div class="pc_dot"></div>
                            Restarting
                        </div>
                    </div>
                    <div class="pc_user">
                        <img src="https://lh3.googleusercontent.com/a/ACg8ocIDf9sJt9uYW7ZjfdBGdEg3YxzQg1gqnzrNzV_02L9DRPTb06Y=s288-c-no" />
                        <div>
                            <div class="pc_username">Rahul Sharma</div>
                            <div class="pc_time">2h pack · started 3:14 pm</div>
                        </div>
                    </div>
                    <div class="pc_actions">
                        <button class="pc_actionbtn"><FaLock />Lock</button>
                        <button class="pc_actionbtn"><FaUnlockAlt />Unlock</button>
                        <button class="pc_actionbtn"><RiRestartLine />Restart</button>
                        <button class="pc_actionbtn"><PiChatDotsBold />Message</button>
                    </div>
                </div>
                <div class="pc_card">
                    <div class="pc_top">
                        <div class="pc_left">
                            <div class="pc_monitor">
                                <FiMonitor />
                            </div>
                            <div>
                                <div class="pc_name">PC-1</div>
                                <div class="pc_gpu">RTX 4070</div>
                            </div>
                        </div>
                        <div class="pc_badge">
                            <div class="pc_dot"></div>
                            Restarting
                        </div>
                    </div>
                    <div class="pc_user">
                        <img src="https://lh3.googleusercontent.com/a/ACg8ocIDf9sJt9uYW7ZjfdBGdEg3YxzQg1gqnzrNzV_02L9DRPTb06Y=s288-c-no" />
                        <div>
                            <div class="pc_username">Rahul Sharma</div>
                            <div class="pc_time">2h pack · started 3:14 pm</div>
                        </div>
                    </div>
                    <div class="pc_actions">
                        <button class="pc_actionbtn"><FaLock />Lock</button>
                        <button class="pc_actionbtn"><FaUnlockAlt />Unlock</button>
                        <button class="pc_actionbtn"><RiRestartLine />Restart</button>
                        <button class="pc_actionbtn"><PiChatDotsBold />Message</button>
                    </div>
                </div>
                <div class="pc_card">
                    <div class="pc_top">
                        <div class="pc_left">
                            <div class="pc_monitor">
                                <FiMonitor />
                            </div>
                            <div>
                                <div class="pc_name">PC-1</div>
                                <div class="pc_gpu">RTX 4070</div>
                            </div>
                        </div>
                        <div class="pc_badge">
                            <div class="pc_dot"></div>
                            Restarting
                        </div>
                    </div>
                    <div class="pc_user">
                        <img src="https://lh3.googleusercontent.com/a/ACg8ocIDf9sJt9uYW7ZjfdBGdEg3YxzQg1gqnzrNzV_02L9DRPTb06Y=s288-c-no" />
                        <div>
                            <div class="pc_username">Rahul Sharma</div>
                            <div class="pc_time">2h pack · started 3:14 pm</div>
                        </div>
                    </div>
                    <div class="pc_actions">
                        <button class="pc_actionbtn"><FaLock />Lock</button>
                        <button class="pc_actionbtn"><FaUnlockAlt />Unlock</button>
                        <button class="pc_actionbtn"><RiRestartLine />Restart</button>
                        <button class="pc_actionbtn"><PiChatDotsBold />Message</button>
                    </div>
                </div>
            </div>
        </div>
    );
}
