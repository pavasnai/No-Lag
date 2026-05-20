import '../../../../src/features/games/pages/GamesPage.css';
import GameCarousel from '../../games/pages/GameCarousel';
import { IoGameControllerOutline } from "react-icons/io5";
import { TbApps } from "react-icons/tb";
import { Si7Zip } from "react-icons/si";
export default function GamesPage() {
  return (
    <div className='gameContainer'>
      <input type="radio" name="tabs" id="games-tab" checked />
      <input type="radio" name="tabs" id="apps-tab" />
      <div class="tabs">
        <label for="games-tab" class="tab-btn"><IoGameControllerOutline /> Games</label>
        <label for="apps-tab" class="tab-btn"><TbApps /> Apps</label>
      </div>
      <div class="displaycontent gamescontent">
        <GameCarousel />
      </div>
      <div class="displaycontent appcontent">
        <div class="appswrapper">
          <div class="appsgrid">
            <div class="appcard">
              <div class="iconbox">
                <Si7Zip />
              </div>
              <div class="appname">7-Zip</div>
            </div>
            <div class="appcard">
              <div class="iconbox">
                <Si7Zip />
              </div>
              <div class="appname">7-Zip</div>
            </div>
            <div class="appcard">
              <div class="iconbox">
                <Si7Zip />
              </div>
              <div class="appname">7-Zip</div>
            </div>
            <div class="appcard">
              <div class="iconbox">
                <Si7Zip />
              </div>
              <div class="appname">7-Zip</div>
            </div>
            <div class="appcard">
              <div class="iconbox">
                <Si7Zip />
              </div>
              <div class="appname">7-Zip</div>
            </div>
            <div class="appcard">
              <div class="iconbox">
                <Si7Zip />
              </div>
              <div class="appname">7-Zip</div>
            </div>
            <div class="appcard">
              <div class="iconbox">
                <Si7Zip />
              </div>
              <div class="appname">7-Zip</div>
            </div>
            <div class="appcard">
              <div class="iconbox">
                <Si7Zip />
              </div>
              <div class="appname">7-Zip</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
