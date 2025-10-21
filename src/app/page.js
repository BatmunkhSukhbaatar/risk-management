"use client";

import Image from "next/image";
import Head from "next/head";
import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";

export default function Home() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [navbarOpen, setNavbarOpen] = useState(false);
  const headerRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scrollPosition = window.scrollY;
      const progress = (scrollPosition / totalHeight) * 100;
      setScrollProgress(progress);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleEmergencyCall = () => {
    window.location.href = "tel:105";
  };

  const handleNavClick = (e, sectionId) => {
    e.preventDefault();
    setNavbarOpen(false);

    const section = document.querySelector(sectionId);
    if (section && headerRef.current) {
      const headerHeight = headerRef.current.getBoundingClientRect().height;
      const sectionTop = section.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({
        top: sectionTop - headerHeight,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 text-gray-800 relative">
      <Head>
        <title>Хүн, малын гоц халдварт өвчин</title>
        <meta name="description" content="A modern guide to infectious diseases." />
      </Head>

      <div className="fixed top-0 left-0 w-full h-1 bg-gray-200 z-50">
        <motion.div
          className="h-full bg-teal-600"
          animate={{ width: `${scrollProgress}%` }}
          transition={{ ease: "easeOut", duration: 0.2 }}
        />
      </div>

      <header ref={headerRef} className="fixed top-0 left-0 w-full bg-blue-900 text-white z-40 shadow-md">
        <div className="flex items-center justify-between px-4 py-4 md:px-6">
          <button
            className="md:hidden text-white text-2xl focus:outline-none"
            onClick={() => setNavbarOpen(!navbarOpen)}
          >
            {navbarOpen ? "✖" : "☰"}
          </button>

          <nav
            className={`${navbarOpen ? "translate-x-0" : "-translate-x-full"
              } fixed top-0 left-0 h-full w-64 bg-blue-900 md:bg-transparent md:static md:h-auto md:w-auto md:translate-x-0 flex flex-col md:flex-row items-start md:items-center justify-start md:justify-center space-y-6 md:space-y-0 md:space-x-6 p-6 md:p-0 transition-transform duration-300 ease-in-out z-50`}
          >
            <a
              href="#hero"
              className="hover:text-teal-400 transition-colors text-lg"
              title="Home"
              onClick={(e) => handleNavClick(e, "#hero")}
            >
              Нүүр
            </a>
            <a
              href="#understanding"
              className="hover:text-teal-400 transition-colors text-lg"
              title="Understanding"
              onClick={(e) => handleNavClick(e, "#understanding")}
            >
              Ойлголт
            </a>
            <a
              href="#prevention"
              className="hover:text-teal-400 transition-colors text-lg"
              title="Prevention"
              onClick={(e) => handleNavClick(e, "#prevention")}
            >
              Урьдчилан Сэргийлэх
            </a>
            <a
              href="#actions"
              className="hover:text-teal-400 transition-colors text-lg"
              title="Actions"
              onClick={(e) => handleNavClick(e, "#actions")}
            >
              Авах арга хэмжээ
            </a>
          </nav>
        </div>

        {navbarOpen && (
          <div
            className="fixed inset-0 bg-black bg-opacity-50 md:hidden z-40"
            onClick={() => setNavbarOpen(false)}
          />
        )}
      </header>

      <main className="transition-all duration-300">
        <section
          id="hero"
          className="relative bg-gradient-to-br from-blue-900 via-teal-600 to-blue-700 text-white py-16 px-4 sm:py-24 sm:px-6 text-center min-h-screen flex items-center justify-center"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="max-w-3xl mx-auto"
          >
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extralight tracking-tight">
              Хүн, малын гоц халдварт өвчин
            </h1>
            <p className="mt-4 text-base sm:text-lg md:text-xl lg:text-2xl opacity-90">
              Дэгдэлтийг ойлгох, урьдчилан сэргийлэх, хариу арга хэмжээ авах гарын авлага.
            </p>
          </motion.div>
        </section>

        <section id="understanding" className="py-16 px-6 bg-white shadow-lg">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-8 border-l-4 border-teal-600 pl-4">
              Халдварт өвчний талаар
            </h2>
            <p className="text-lg md:text-xl text-gray-700 mb-6 leading-relaxed text-justify">
              &quot;Хүн, мал амьтны гоц халдварт өвчин&quot; гэж олон улсын хил хязгаараас үл хамааран богино хугацаанд хурдан тархаж хүн, малын эрүүл мэндэд хохирол учруулж, үндэсний аюулгүй байдалд сөргөөр нөлөөлөх халдварт өвчнийг хэлнэ.
              Тухайлбал түгээмэл тархсан малын гоц халдварт өвчин болох бруцеллёз, шүлхий зэрэг нь эрүүл мэнд, эдийн засагт томоохон хямрал үүсгэдэг бөгөөд мал аж ахуй нь Монголын эдийн засгийн тулгуур баганын нэг юм.
            </p>
            <div className="relative w-full h-72 md:h-96 rounded-xl overflow-hidden shadow-md">
              <Image
                src="/images/image.png"
                alt="Zoonotic Disease Transmission Cycle"
                layout="fill"
                objectFit="cover"
                className="transition-transform duration-300 hover:scale-105"
              />
            </div>
          </div>
        </section>

        <section id="information" className="py-16 px-6 bg-gradient-to-r from-gray-50 to-teal-50">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-8 border-l-4 border-orange-500 pl-4">
              Халдварлах зам ба Өвчний төрөл
            </h2>
            <div className="overflow-x-auto">
              <table className="w-full text-left text-sm md:text-base bg-white shadow-md">
                <thead className="bg-teal-100 text-teal-900">
                  <tr>
                    <th className="p-4">#</th>
                    <th className="p-4">Халдварлах зам</th>
                    <th className="p-4">Өвчний Төрөл</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {[
                    {
                      id: 1,
                      path: "Тэжээл боловсруулах замаар",
                      diseases:
                        "Боом, дуут хавдар, сүрьеэ, бруцеллёз, шүлхий, ям, сахуу, иж балнадын гаралтай хээл хаялт, адууны халдварт цус багадах, үхэр, гахайн мялзан, нохойн гудрага, гахайн ёлом",
                    },
                    {
                      id: 2,
                      path: "Амьсгалын замаар",
                      diseases:
                        "Сүрьеэ, цэцэг, сахуу, уушги-гялтангийн халдварт үрэвсэл, адууны амьсгалын дээд замын халдварт салслалт, үхрийн цээж, цусан халдвар, гахайн инфлюэнц, нохойн галзуу",
                    },
                    {
                      id: 3,
                      path: "Шээс-бэлгийн замаар",
                      diseases: "Үтрээний үрэвсэл, бруцеллёз, адууны инфлюэнц",
                    },
                    {
                      id: 4,
                      path: "Арьс, салст бүрхэвч",
                      diseases:
                        "Боом, дуут хавдар, хорт хаван, зогсоо, садраг, ям, цэцэг, цахлай, галзуу, хулганын яр, адууны халдварт цус багасах өвчин",
                    },
                  ].map((row) => (
                    <tr key={row.id} className="hover:bg-gray-50 transition-colors">
                      <td className="p-4">{row.id}</td>
                      <td className="p-4 font-medium">{row.path}</td>
                      <td className="p-4">{row.diseases}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        <section id="prevention" className="py-16 px-6 bg-white">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-8 border-l-4 border-orange-500 pl-4">
              Урьдчилан Сэргийлэлт ба Бэлтгэл
            </h2>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-6 text-lg">
              {[
                "✔️ Гэртээ тэжээвэр амьтан, малыг вакцинжуулах.",
                "✔️ Сэжигтэй мал, амьтанд ойртохоос зайлсхийх.",
                "✔️ Амьтантай харьцсаны дараа гараа угаах.",
                "✔️ Холбогдох байгууллагаас зөвлөгөө авах.",
                "✔️ ХӨСҮТ/ЗӨСҮТ-аас мэдээллийг тогтмол авах.",
                "✔️ Маск, бээлий, ариутгагч хэрэгслийг нөөцлөх.",
              ].map((tip, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-center space-x-2"
                >
                  <span className="text-orange-500">{tip.split(" ")[0]}</span>
                  <span>{tip.split(" ").slice(1).join(" ")}</span>
                </motion.li>
              ))}
            </ul>
            <a href="https://nema.gov.mn/uridchilan-sergiileh" target="_blank">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="mt-8 px-6 py-3 bg-orange-500 text-white rounded-full hover:bg-orange-600 transition-all shadow-lg cursor-pointer"
              >
                Дэлгэрэнгүй
              </motion.button>
            </a>
          </div>
        </section>

        <section id="video" className="py-16 px-6 bg-white">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-8 border-l-4 border-teal-600 pl-4">
              Видео Мэдээлэл
            </h2>
            <div className="relative w-full h-0 pb-[56.25%]"> {/* 16:9 Aspect Ratio */}
              <iframe
                src="https://www.youtube.com/embed/iqyubMcvK-w"
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="absolute top-0 left-0 w-full h-full rounded-xl shadow-md"
              />
            </div>
          </div>
        </section>

        <section id="actions" className="py-16 px-6 bg-white">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-8 border-l-4 border-teal-600 pl-4">
              Авах хариу арга хэмжээ
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                {
                  title: "Дэгдэлтийн Үед",
                  items: [
                    "Өвчтөнийг яаралтай тусгаарлах.",
                    "Хамгаалалтын хэрэгсэл зүүх.",
                    "Холбогдох байгууллагад хандах.",
                  ],
                },
                {
                  title: "Дэгдэлтийн Дараа",
                  items: [
                    "Бүрэн халдваргүйжүүлэх.",
                    "Тархалтыг хянах.",
                    "Нийтэд сургалт, семинарыг зохион байгуулах.",
                  ],
                },
              ].map((section, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.2 }}
                >
                  <h3 className="text-xl md:text-2xl font-semibold text-teal-600 mb-4">
                    {section.title}
                  </h3>
                  <ul className="space-y-3 text-lg">
                    {section.items.map((item, i) => (
                      <li key={i} className="flex items-start">
                        <span className="text-orange-500 mr-2">→</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
        <section id="call" className="py-16 px-6 bg-gradient-to-r from-red-50 to-white">
          <div className="max-w-5xl mx-auto text-center">
            <h1 className="text-3xl md:text-4xl font-bold text-blue-900 mb-8 border-l-4 border-red-500 pl-4 inline-block">
              Яаралтай Тусламжийн Дугаар
            </h1>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleEmergencyCall}
              className="flex items-center justify-center mx-auto px-8 py-4 bg-red-500 text-white rounded-2xl hover:bg-red-600 transition-all shadow-xl text-lg font-semibold cursor-pointer"
            >
              <span className="text-2xl mr-3">🚨 </span> 105 Залгах
            </motion.button>
          </div>
        </section>

        <section id="quote" className="py-12 sm:py-20 px-4 sm:px-6 bg-gradient-to-r from-gray-50 to-teal-50">
          <div className="max-w-4xl mx-auto flex items-center">
            <div className="mr-6">
              <Image 
                src="/images/MUST-logo.png" 
                alt="Logo" 
                width={64}  
                height={48}
                className="h-12 sm:h-16" 
                priority
              />
            </div>

            <div>
              <blockquote className="text-lg sm:text-xl md:text-2xl text-gray-700 italic">
                &quot;Хүн бүр эрүүл, аюулгүй байх болтугай.&quot;
              </blockquote>

              <p className="text-base sm:text-lg md:text-xl text-gray-800 mt-2">ШУТИС МХТС-ийн оюутнуудаас...</p>
            </div>
          </div>
        </section>


        <footer className="bg-blue-900 text-white py-4 sm:py-4 px-4 sm:px-6 text-center">
          <p className="text-base sm:text-lg opacity-80">&copy; {new Date().getFullYear()} он. Зохиогчийн эрх хуулиар хамгаалав.</p>
        </footer>
      </main>
    </div>
  );
}
