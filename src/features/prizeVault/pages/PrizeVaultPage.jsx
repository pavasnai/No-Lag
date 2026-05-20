import '../../../../src/features/prizeVault/pages/PrizeVaultPage.css';
import ChallengeCarousel from '../../prizeVault/pages/ChallengeCarousel';
import PrizeCarousel from '../../prizeVault/pages/PrizeCarousel';
import { IoGameControllerOutline } from "react-icons/io5";
import { FaStarHalfAlt } from "react-icons/fa";
import { TbApps } from "react-icons/tb";
import { Si7Zip } from "react-icons/si";
import { FaStar } from "react-icons/fa";
export default function PrizeVaultPage() {
  return (
    <div className='AwardsContainer'>
      <div class="profile-card">
        <div class="top-section">
          <div class="profile-left">
            <img
              src="https://lh3.googleusercontent.com/a/ACg8ocIDf9sJt9uYW7ZjfdBGdEg3YxzQg1gqnzrNzV_02L9DRPTb06Y=s288-c-no"
              alt="profile"
              class="profile-img"
            />
            <div class="user-info">
              <h2>Pavan Sai</h2>
              <p>Joystick Junkie</p>
            </div>
          </div>
          <div class="profile-tags">
            <div class="tag">LVL 32</div>
            <div class="tag">7 days Streak</div>
          </div>
          <div class="experience">
            <div class="exp-top">
              <strong>Experience</strong>
              <span>2,350 / 10,000XP</span>
            </div>
            <div class="statsbar">
              <div class="statsprogress"></div>
            </div>
            <div class="exp-text">
              7,650 XP to Level 3
            </div>
          </div>
        </div>
        <div class="stats">
          <div class="stat-box">
            <p>Hours Played</p>
            <h3>156</h3>
          </div>
          <div class="stat-box">
            <p>Badges</p>
            <h3>23/45</h3>
          </div>
          <div class="stat-box">
            <p>Completed</p>
            <h3>12</h3>
          </div>
          <div class="stat-box">
            <p>Coins Earned</p>
            <h3>4,200</h3>
          </div>
        </div>
      </div>

      <input type="radio" name="tabs" id="Challenges_tab" checked />
      <input type="radio" name="tabs" id="Badges_tab" />
      <input type="radio" name="tabs" id="Leaderboard_tab" />
      <input type="radio" name="tabs" id="Prizevault_tab" />
      <div className='filtercoins'>
        <div class="tabs Awardstabs">
          <label for="Challenges_tab" class="tab-btn"><IoGameControllerOutline /> Challenges</label>
          <label for="Badges_tab" class="tab-btn"><TbApps /> Badges</label>
          <label for="Leaderboard_tab" class="tab-btn"><TbApps /> Leaderboard</label>
          <label for="Prizevault_tab" class="tab-btn"><TbApps /> Prizevault</label>
        </div>

        <button className='coinsbtn'>4500<span>coins</span></button>

      </div>


      <div class="displaycontent Challengestab">
        <ChallengeCarousel />
      </div>
      <div class="displaycontent Badgestab">
        <div class="filters challengefilters">
          <div class="filter-btn active">sum</div>
          <div class="filter-btn">FPS</div>
          <div class="filter-btn">RPG</div>
          <div class="filter-btn">MOBA</div>
          <div class="filter-btn">Battle Royale</div>
          <div class="filter-btn">Strategy</div>
          <div class="filter-btn">Sports</div>
        </div>
        <div class="card-wrapper">
          <div class="badge-card">
            <div class="badge-icon"></div>
            <h2 class="badge-title">First Timer</h2>
            <div class="stars">
              <FaStar class="active" />
              <FaStarHalfAlt class="active" />
              <FaStar />
              <FaStar />
              <FaStar />
            </div>
            <p class="earned">Earned 2026</p>
          </div>
          <div class="badge-card">
            <div class="badge-icon"></div>
            <h2 class="badge-title">First Timer</h2>
            <div class="stars">
              <FaStar class="active" />
              <FaStarHalfAlt class="active" />
              <FaStar />
              <FaStar />
              <FaStar />
            </div>
            <p class="earned">Earned 2026</p>
          </div>
          <div class="badge-card">
            <div class="badge-icon"></div>
            <h2 class="badge-title">First Timer</h2>
            <div class="stars">
              <FaStar class="active" />
              <FaStarHalfAlt class="active" />
              <FaStar />
              <FaStar />
              <FaStar />
            </div>
            <p class="earned">Earned 2026</p>
          </div>
          <div class="badge-card">
            <div class="badge-icon"></div>
            <h2 class="badge-title">First Timer</h2>
            <div class="stars">
              <FaStar class="active" />
              <FaStarHalfAlt class="active" />
              <FaStar />
              <FaStar />
              <FaStar />
            </div>
            <p class="earned">Earned 2026</p>
          </div>
          <div class="badge-card">
            <div class="badge-icon"></div>
            <h2 class="badge-title">First Timer</h2>
            <div class="stars">
              <FaStar class="active" />
              <FaStarHalfAlt class="active" />
              <FaStar />
              <FaStar />
              <FaStar />
            </div>
            <p class="earned">Earned 2026</p>
          </div>
          <div class="badge-card">
            <div class="badge-icon"></div>
            <h2 class="badge-title">First Timer</h2>
            <div class="stars">
              <FaStar class="active" />
              <FaStarHalfAlt class="active" />
              <FaStar />
              <FaStar />
              <FaStar />
            </div>
            <p class="earned">Earned 2026</p>
          </div>
          <div class="badge-card">
            <div class="badge-icon"></div>
            <h2 class="badge-title">First Timer</h2>
            <div class="stars">
              <FaStar class="active" />
              <FaStarHalfAlt class="active" />
              <FaStar />
              <FaStar />
              <FaStar />
            </div>
            <p class="earned">Earned 2026</p>
          </div>
          <div class="badge-card">
            <div class="badge-icon"></div>
            <h2 class="badge-title">First Timer</h2>
            <div class="stars">
              <FaStar class="active" />
              <FaStarHalfAlt class="active" />
              <FaStar />
              <FaStar />
              <FaStar />
            </div>
            <p class="earned">Earned 2026</p>
          </div>
          <div class="badge-card">
            <div class="badge-icon"></div>
            <h2 class="badge-title">First Timer</h2>
            <div class="stars">
              <FaStar class="active" />
              <FaStarHalfAlt class="active" />
              <FaStar />
              <FaStar />
              <FaStar />
            </div>
            <p class="earned">Earned 2026</p>
          </div>
        </div>
      </div>
      <div class="displaycontent Leaderboardtab">
        <div class="filters challengefilters">
          <div class="filter-btn active">sum</div>
          <div class="filter-btn">FPS</div>
          <div class="filter-btn">RPG</div>
          <div class="filter-btn">MOBA</div>
          <div class="filter-btn">Battle Royale</div>
          <div class="filter-btn">Strategy</div>
          <div class="filter-btn">Sports</div>
        </div>
        <div class="leaderboard">
          <div class="leadertoptext">
            Your Rank: <span>#10</span> out of 128 Players
          </div>
          <div class="leaderbadge">
            Top 8%
          </div>
          <div class="leaderplayers">
            <div class="leaderplayer leadersecond">
              <div class="leaderavatar">NK</div>
              <div class="leadermedal">🥇</div>
              <div class="leadername">Night King</div>
              <div class="leadertime">134h. 7</div>
              <div class="leaderpodium">
                2,430
              </div>
            </div>
            <div class="leaderplayer leaderfirst">
              <div class="leaderavatar">NK</div>
              <div class="leadermedal">🥇</div>
              <div class="leadername">Night King</div>
              <div class="leadertime">134h. 7</div>
              <div class="leaderpodium">
                2,430
              </div>
            </div>
            <div class="leaderplayer leaderthird">
              <div class="leaderavatar">NK</div>
              <div class="leadermedal">🥇</div>
              <div class="leadername">Night King</div>
              <div class="leadertime">134h. 7</div>
              <div class="leaderpodium">
                2,430
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="displaycontent Prizevaulttab">
        <PrizeCarousel />
      </div>
    </div>
  );
}
