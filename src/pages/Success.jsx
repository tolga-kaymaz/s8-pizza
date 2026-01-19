import "./Success.css";
import { useLocation, Link } from "react-router-dom";

export default function Success() {
  const { state } = useLocation();

  if (!state) {
    return <p>Geçersiz erişim</p>;
  }

  const { name, size, dough, toppings, quantity, note, totalPrice } = state;

  return (
    <div className="success-page">
      
      <img
        src="/images/iteration-1-images/logo.svg"
        alt="Teknolojik Yemekler"
        className="success-logo"
      />

      
      <p className="success-slogan">lezzetin yolda</p>

      
      <h1 className="success-title">SİPARİŞ ALINDI</h1>

      <hr />

     
      <h2 className="success-product">Position Absolute Acı Pizza</h2>

      
      <div className="success-details">
        <p><strong>Boyut:</strong> {size}</p>
        <p><strong>Hamur:</strong> {dough}</p>
        <p><strong>Ek Malzemeler:</strong></p>

        <p className="toppings">
          {toppings.join(", ")}
        </p>
        {note && (
        <p>
           <strong>Sipariş Notu:</strong> {note}
         </p>
          )}
      </div>

      
      <div className="success-summary">
        <strong>Sİpariş Toplamı:</strong>
        <p>Seçimler: <span>{toppings.length * 5}₺</span></p>
        <p className="total">
          Toplam: <span>{totalPrice.toFixed(2)}₺</span>
        </p>
      </div>

      <Link to="/" className="back-home">
        Ana Sayfaya Dön
      </Link>
    </div>
  );
}