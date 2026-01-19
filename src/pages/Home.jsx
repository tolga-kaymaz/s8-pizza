import { Link } from "react-router-dom";
export default function Home() {
  return (
    
    <>
   <header className="relative w-full h-[90vh] bg-[url('/images/iteration-1-images/home-banner.png')] bg-cover bg-center overflow-hidden">
  <div className="absolute left-1/2 -translate-x-1/2 top-[120px]  flex flex-col items text-center text-white">

    
    <img
      src="/images/iteration-1-images/logo.svg"
      alt="Teknolojik Yemekler"
      className="w-[400px] mx auto mb-10 "
    />

 
    
    <p className="mt-4 text-[30px] font-satisfy text-[#FDC913] m-3">
      fırsatı kaçırma
    </p>
    


  
    <h1 className="mt-2 text-[50px] leading-[1.15] font-light mb-8">
      KOD ACIKTIRIR <br />
      PİZZA, DOYURUR
    </h1>

    
    <Link  to="/order">
    <button
      className="bg-[#FDC913] text-[#292929]
                 px-10 py-4 rounded-full
                 text-[24px] font-semibold
                 hover:opacity-90 transition"
    >
      ACIKTIM
    </button>
    </Link>
  </div>
</header>

   <nav className="bg-white h-[80px] flex items-center">
  <ul className="
    flex gap-6 px-4
    overflow-x-auto whitespace-nowrap
    md:justify-center md:overflow-visible
    w-full
  ">
    <li className="flex items-center gap-2">
      <img src="/images/iteration-2-images/icons/1.svg" className="w-7 h-7" />
      <span className="text-[20px] font-medium">Yeni! Kore</span>
    </li>
    <li className="flex items-center gap-2 px-3 py-2">
      <img src="/images/iteration-2-images/icons/2.svg" className="w-7 h-7" />
      <span className="text-[20px] font-medium">Pizza</span>
    </li>
    <li className="flex items-center gap-2">
      <img src="/images/iteration-2-images/icons/3.svg" className="w-7 h-7" />
      <span className="text-[20px] font-medium">Burger</span>
    </li>
    <li className="flex items-center gap-2">
      <img src="/images/iteration-2-images/icons/4.svg" className="w-7 h-7" />
      <span className="text-[20px] font-medium">Kızartmalar</span>
    </li>
    <li className="flex items-center gap-2">
      <img src="/images/iteration-2-images/icons/5.svg" className="w-7 h-7" />
     <span className="text-[20px] font-medium">Fast Food</span>
    </li>
    <li className="flex items-center gap-2">
      <img src="/images/iteration-2-images/icons/6.svg" className="w-7 h-7" />
      <span className="text-[20px] font-medium">Gazlı İçecek</span>
    </li>
  </ul>
</nav>

<section className="w-full flex justify-center bg-[#FAF7F2] py-[80px]">
  <div className="w-full max-w-[1072px]">
    <div className="grid grid-cols-2 gap-[10px] h-[449px]">

     
      <div
        className="
          rounded-2xl
          p-10
          flex flex-col
          justify-center
          gap-y-15
          bg-[url('/images/iteration-2-images/cta/kart-1.png')]
          bg-cover bg-no-repeat bg-right
        "
      >
        <div className="flex flex-col gap-[14px] max-w-[260px]">
          <h2 className="text-white text-4xl font-bold">
            Özel <br /> Lezzetus
          </h2>
          <p className="text-white text-lg">
            Position: Absolute Acı Burger
          </p>
        </div>

        <button className="bg-white
      text-[#CE2829]
      font-semibold
      px-8 py-3
      rounded-full
      w-fit
      -mt-10">
          SİPARİŞ VER
        </button>
      </div>

      <div className="grid grid-rows-2 gap-[16px]">

        <div
          className="
            rounded-[20px]
            p-[32px]
            flex flex-col
            gap-y-20
            text-white
            justify-between
            bg-[url('/images/iteration-2-images/cta/kart-2.png')]
            bg-cover bg-no-repeat bg-right
          "
        >
          <h3 className="text-[26px] font-semibold leading-[2] max-w-[200px] mt-6 ">
            Hackathlon <br /> Burger Menü
          </h3>

          <button className="bg-white text-[#CE2829] leading-[2] px-[28px] py-[10px] rounded-full font-semibold w-fit -mt-8">
            SİPARİŞ VER
          </button>
        </div>

        <div
          className="
            rounded-[20px]
            p-[32px]
            gap-y-20
            flex flex-col justify-between
            bg-[url('/images/iteration-2-images/cta/kart-3.png')]
            bg-cover bg-no-repeat bg-right
          "
        >
          <h3 className="text-[24px] font-semibold">
            <span className="text-[#CE2829]">Coooook</span> hızlı <br />
            npm gibi kurye
          </h3>

          <button className="bg-white text-[#CE2829] px-[28px] py-[10px] rounded-full font-semibold w-fit">
            SİPARİŞ VER
          </button>
        </div>

      </div>
    </div>
  </div>
</section>
<div className="h-30 bg-[#FAF7F2]" />

  <section className="w-full bg-[#FAF7F2] flex justify-center ">
  
  <div className="w-full max-w-[1200px] px-4">

   
    <div className="max-w-6xl mx-auto text-center pt-32 pb-16">
    <p className="text-red-500 font-satisfy-cursive text-xl mb-6 mt- 20">
      en çok paketlenen menüler
    </p>

    <h2 className="text-4xl font-bold text-[#292929]">
      Acıktıran Kodlara Doyuran Lezzetler
    </h2>
    <div className="h-15"></div>
  </div>

    
    <div className="flex justify-center gap-8 mb-20 flex-wrap">
      {[
        ["1.svg", "Ramen"],
        ["2.svg", "Pizza", true],
        ["3.svg", "Burger"],
        ["4.svg", "French fries"],
        ["5.svg", "Fast food"],
        ["6.svg", "Soft drinks"],
      ].map(([icon, label, active], i) => (
        <button
          key={i}
          className={`
            rounded-full h-14 w-30
            flex items-center gap-3
            px-8 py-4
            rounded-full
            text-[15px]
            font-medium
            ${
              active
                ? "bg-[#292929] text-white"
                : "bg-white text-[#292929]"
            }
          `}
        >
          <img
            src={`/images/iteration-2-images/icons/${icon}`}
            className="w-7 h-7"
          />
          {label}
        </button>
      ))}
      <div className="h-5"></div>

    </div>
    <div className="h-10"></div>

   
    <div className="grid grid-cols-1 md:grid-cols-3 gap-12 pb-32">

     
      {[
        ["food-1.png", "Terminal Pizza"],
        ["food-2.png", "Position Absolute Acı Pizza"],
        ["food-3.png", "useEffect Tavuklu Burger"],
      ].map(([img, title], i) => (
        <div
          key={i}
          className="
            bg-white
            rounded-2xl
            p-8
            flex flex-col
            items-center
          "
        >
          <img
            src={`/images/iteration-2-images/pictures/${img}`}
            className="w-[220px] h-[220px] object-contain mb-8"
          />

          <h4 className="font-semibold text-[20px] mb-3 text-center">
            {title}
          </h4>

          <div className="flex items-center gap-4 text-[16px] text-gray-500 mb-3">
            <span>4.9</span>
            <span>(200)</span>
          </div>

          <span className="font-bold text-[20px]">
            60₺
          </span>
        </div>
      ))}
    </div>
  </div>
</section>
<div className="h-30 bg-[#FAF7F2]" />
 <footer className="bg-[#1A1A1A] text-white pt-20 pb-8">
  <div className="max-w-7xl mx-auto px-6">

   
    <div className="grid grid-cols-1 md:grid-cols-3 gap-12">

     
      <div>
        <h3 className="text-4xl font-bold mb-6">Teknolojik Yemekler</h3>

        <p className="mb-3 flex items-start gap-3">
          📍 341 Londonderry Road, Istanbul Türkiye
        </p>

        <p className="mb-3 flex items-center gap-3">
          ✉️ aciktim@teknolojikyemekler.com
        </p>

        <p className="flex items-center gap-3">
          📞 +90 216 123 45 67
        </p>
      </div>

      
      <div>
        <h4 className="text-xl font-semibold mb-6">Hot Menu</h4>
        <ul className="space-y-4 text-gray-300">
          <li>Terminal Pizza</li>
          <li>5 Kişilik Hackathlon Pizza</li>
          <li>useEffect Tavuklu Burger</li>
          <li>Beyaz Console Frosty</li>
          <li>Testler Geçti Mutluluk</li>
        </ul>
      </div>

      
      <div>
        <h4 className="text-xl font-semibold mb-6">Instagram</h4>

        <div className="grid grid-cols-3 gap-3">
          <img src="/images/iteration-2-images/footer/insta/li-0.png"className="rounded-lg" />
          <img src="/images/iteration-2-images/footer/insta/li-1.png" className="rounded-lg" />
          <img src="/images/iteration-2-images/footer/insta/li-2.png" className="rounded-lg" />
          <img src="/images/iteration-2-images/footer/insta/li-3.png "className="rounded-lg" />
          <img src="/images/iteration-2-images/footer/insta/li-4.png" className="rounded-lg" />
          <img src="/images/iteration-2-images/footer/insta/li-5.png" className="rounded-lg" />
        </div>
      </div>

    </div>

    
    <div className="border-t border-gray-700 mt-16 pt-6 text-center text-gray-400 text-sm">
      © 2026 Teknolojik Yemekler.
    </div>

  </div>
</footer>

    </>
  );
}