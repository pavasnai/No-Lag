import '../../shop/pages/ShopPage.css';
import ShopCarousel from '../../ShopCarousel/ShopCarousel';
import { IoSettingsOutline } from "react-icons/io5";
import ProductImage from "../../../assets/image/ProductImage.png";
import { MdOutlineCurrencyRupee } from "react-icons/md";
export default function ShopPage() {
  return (
    <>
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
      <div className='ShopContainer'>
        <div className='cartpannel'>
          <div className='cartleft'>
            <ShopCarousel />
            <ShopCarousel className="asd" />
            <ShopCarousel />
            <ShopCarousel />
          </div>
          <div className='cartright'>
            <div class="walletcard glassyfinish">
              <h3 class="wallettitle">WALLET BALANCE</h3>
              <h1 class="walletamount"><span><MdOutlineCurrencyRupee /></span>3,200</h1>
              <p class="walletsubtitle">Last recharge: 2 days ago</p>
              <button class="walletadd">
                <span>+</span>
                <p>Add Coins</p>
              </button>
            </div>
            <div class="cartcard glassyfinish">
              <div className='carttop'>
                <div className='cratheading'>Cart</div>
                <div className='cartquantity'>3items</div>
              </div>
              <div className='cartlistitem'>
                <div className='cartlistitemleft'>
                  <div className='cartlistimg'>
                    <img src={ProductImage} alt="Product" />
                  </div>
                  <div className='cartlistname'>
                    <h5>Coca-Cola</h5>
                    <p><span><MdOutlineCurrencyRupee /></span>500</p>
                  </div>
                </div>

                <div className='listquantity'>
                  <span>-</span>
                  <p>1</p>
                  <span>+</span>
                </div>
              </div>
              <div className='cartlistitem'>
                <div className='cartlistitemleft'>
                  <div className='cartlistimg'>
                    <img src={ProductImage} alt="Product" />
                  </div>
                  <div className='cartlistname'>
                    <h5>Coca-Cola</h5>
                    <p><span><MdOutlineCurrencyRupee /></span>500</p>
                  </div>
                </div>

                <div className='listquantity'>
                  <span>-</span>
                  <p>1</p>
                  <span>+</span>
                </div>
              </div>
              <div className='cartlistitem'>
                <div className='cartlistitemleft'>
                  <div className='cartlistimg'>
                    <img src={ProductImage} alt="Product" />
                  </div>
                  <div className='cartlistname'>
                    <h5>Coca-Cola</h5>
                    <p><span><MdOutlineCurrencyRupee /></span>500</p>
                  </div>
                </div>

                <div className='listquantity'>
                  <span>-</span>
                  <p>1</p>
                  <span>+</span>
                </div>
              </div>
              <div className='cartlistitem'>
                <div className='cartlistitemleft'>
                  <div className='cartlistimg'>
                    <img src={ProductImage} alt="Product" />
                  </div>
                  <div className='cartlistname'>
                    <h5>Coca-Cola</h5>
                    <p><span><MdOutlineCurrencyRupee /></span>500</p>
                  </div>
                </div>

                <div className='listquantity'>
                  <span>-</span>
                  <p>1</p>
                  <span>+</span>
                </div>
              </div>

              <div class="cartcheckout">
                <div className='totalcost'>
                  <div className='costleft'>
                    <h5>Subtotal </h5>
                    <p>Balance after </p>
                  </div>
                  <div className='costright'>
                    <h5>14550</h5>
                    <p>14750</p>
                  </div>


                </div>
                <button >
                  Checkout
                </button>
              </div>
            </div>
          </div>
        </div>
      </div >
    </>
  );
}
