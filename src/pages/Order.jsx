import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios"; 
import { Link } from "react-router-dom";
import "./Order.css";
import { toast } from "react-toastify";

function Order() {
const [size, setSize] = useState("");
const [dough, setDough] = useState("");
const [toppings, setToppings] = useState([]);
const [note, setNote] = useState("");
const [quantity, setQuantity] = useState(1);
const navigate = useNavigate();
const [name, setName] = useState("");

 const handleToppingChange = (e) => {
        const value = e.target.value;

          if (toppings.includes(value)) {
             setToppings(toppings.filter((t) => t !== value));
           } else {
             if (toppings.length >= 10) return;
             setToppings([...toppings, value]);
           }
         };
      const basePrice = 85.5;
      const toppingsPrice = toppings.length * 5;
      const totalPrice = (85.5 + toppings.length * 5) * quantity;
 

      const handleSubmit = async(e) => {
       e.preventDefault();
    

        const orderData = {
         name,
         size,
         dough,
         toppings,
         note,
         quantity,
       };

     try {
    const response = await axios.post(
      "https://reqres.in/api/pizza",
      orderData,
      {
        headers: {
          "x-api-key": "reqres-free-v1",
        },
      }
    );

   
     console.log("Sipariş Özeti:", response.data);
      toast.success("Sipariş başarıyla alındı");
     navigate("/success", {
      state: {
        size,
        dough,
        toppings,
        quantity,
        note,
        totalPrice,
      },
    });

     } catch (error) {
     console.error("Sipariş gönderilemedi:", error);
      alert("Bir hata oluştu, lütfen tekrar deneyin.");
     }
  }

  return (
  <>
   
    <header className="order-header">
      <img
        src="/images/iteration-1-images/logo.svg"
        alt="Teknolojik Yemekler"
        className="logo"
        
      />
    </header>

    <section className="order-hero">
    <img
    src="/images/iteration-2-images/pictures/form-banner.png"
    alt="Pizza"
    className="order-hero-pizza"
  />
   
      <div className="page-path">
        <Link to="/" className="home-link">Anasayfa</Link>
        <span> - </span>
        <p>Seçenekler</p>
        <span> - </span>
        <strong>Sipariş Oluştur</strong>

      </div>
      <div className="order-pizza">
        <h1>Position Absolute Acı Pizza</h1>

        <div className="price-row">
          <span className="price">{basePrice.toFixed(2)}₺</span>
          <span className="rating">4.9 <small>(200)</small></span>
        </div>
        <p className="description">
          Frontend Dev olarak hala position:absolute kullanıyorsan bu acı pizza tam sana göre. Pizza, domates, peynir ve genellikle çeşitli diğer malzemelerle kaplanmış, daha sonra geleneksel olarak odun ateşinde bir fırında yüksek sıcaklıkta pişirilen, genellikle yuvarlak, düzleştirilmiş mayalı buğday bazlı hamurdan oluşan İtalyan kökenli bir yemektir. Küçük bir pizzaya bazen pizzette denir.
        </p>
      </div>

      </section>

   
      
       <form id="order-form" onSubmit={handleSubmit}>
        <fieldset className="size-group">
           
          <div className="size-options">
             <legend>Boyut Seç *</legend>
            <label className="size-option">
              <input type="radio" name="size" value="S"
                checked={size === "S"}
                onChange={e => setSize(e.target.value)}
              />
              <span>S</span>
            </label>

            <label className="size-option">
              <input type="radio" name="size" value="M"
                checked={size === "M"}
                onChange={e => setSize(e.target.value)}
              />
              <span>M</span>
            </label>

            <label className="size-option">
              <input type="radio" name="size" value="L"
                checked={size === "L"}
                onChange={e => setSize(e.target.value)}
              />
              <span>L</span>
            </label>
            </div>
          


          <div className="select-group">
            <label>Hamur Seç *</label>
            <select value={dough} onChange={e => setDough(e.target.value)}>
              <option value="">Hamur Kalınlığı</option>
              <option value="ince">İnce</option>
              <option value="orta">Orta</option>
              <option value="kalın">Kalın</option>
            </select>
          </div>
           </fieldset>
          <fieldset className="toppings-group">
            <legend>Ek Malzemeler</legend>
            <div className="toppings-grid">
              {["Pepperoni","Sosis","Kanada Jambonu","Tavuk Izgara","Soğan","Domates","Mısır","Sucuk","Jalepeno","Sarımsak","Biber","Ananas","Kabak"].map(item => (
                <label key={item}>
                  <input
                    type="checkbox"
                    value={item}
                    checked={toppings.includes(item)}
                    onChange={handleToppingChange}
                  />
                  {item}
                </label>
              ))}
            </div>
          </fieldset>

          <div>  
            <strong>Adınız</strong>
          <input
            type="text"
            placeholder="Adınızı giriniz"
            value={name}
            onChange={e => setName(e.target.value)}
          />
          </div>
           
           <div>  
            <strong>Sipariş Notu</strong>
          <textarea
            placeholder="Siparişine eklemek istediğin bir not var mı?"
            value={note}
            onChange={e => setNote(e.target.value)}
          />
          </div>  

          <div className="count">
            <button type="button" onClick={() => setQuantity(Math.max(1, quantity - 1))}>-</button>
            <span>{quantity}</span>
            <button type="button" onClick={() => setQuantity(quantity + 1)}>+</button>
          </div>
        
      

      
      
        <div className="order-summary">
          <h3>Sipariş Toplamı</h3>
          <p>Seçimler <span>{toppingsPrice.toFixed(2)}₺</span></p>
          <p className="total">Toplam <span>{totalPrice.toFixed(2)}₺</span></p>

          <button
            type="submit"
            form="order-form"
            disabled={name.trim().length < 3 || !size || !dough || toppings.length < 4}
          >
            SİPARİŞ VER
          </button>
        
        </div>
      </form>

    <footer className="footer">
    <div className="footer-container">

      <div className="footer-brand">
        <h3>Teknolojik<br/>Yemekler</h3>
        <p><img src="/images/iteration-2-images/footer/icons/icon-1.png"/> 341 Londonderry Road, İstanbul Türkiye</p>
        <p><img src="/images/iteration-2-images/footer/icons/icon-2.png"/> aciktim@teknolojikyemekler.com</p>
        <p><img src="/images/iteration-2-images/footer/icons/icon-3.png"/>+90 216 123 45 67</p>
      </div>

      <div className="footer-menu">
        <h4>Hot Menu</h4>
        <p>Terminal Pizza</p>
        <p>5 Kişilik Hackathlon Pizza</p>
        <p>useEffect Tavuklu Burger</p>
        <p>Beyaz Console Frosty</p>
        <p>Testler Geçti Mutlu Burger</p>
        <p>Position Absolute Acı Burger</p>
      </div>

      <div className="footer-instagram">
        <h4>Instagram</h4>
        <div className="insta-grid">
          <img src="/images/iteration-2-images/footer/insta/li-0.png"/>
          <img src="/images/iteration-2-images/footer/insta/li-1.png"/>
          <img src="/images/iteration-2-images/footer/insta/li-2.png"/>
          <img src="/images/iteration-2-images/footer/insta/li-3.png"/>
          <img src="/images/iteration-2-images/footer/insta/li-4.png"/>
          <img src="/images/iteration-2-images/footer/insta/li-5.png"/>
        </div>
      </div>

    </div>

    <p className="footer-copy">© 2023 Teknolojik Yemekler</p>
    <p className="footer-tweet"><img src=""/></p>
  </footer>
   </>
  );
 } 

 export default Order;