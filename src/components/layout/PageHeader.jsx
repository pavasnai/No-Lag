import '../../components/layout/PageHeader.css';
export default function PageHeader() {
  return (
    <div className='pageheader'>
      <div className='cartheader glassyfinish'>
        <div className="sessionbadge">
          <div className="indicator"></div>
          <p>SESSION &nbsp;<span>49:22:21</span></p>
        </div>
        <div className="shoplogo">Clutc<span>HH</span></div>
        <div className="headerright">
          <div className="iconbtn">
            <IoSettingsOutline />
          </div>
          <div className="useravatar">JD</div>
        </div>
      </div>
    </div>
  );
}
