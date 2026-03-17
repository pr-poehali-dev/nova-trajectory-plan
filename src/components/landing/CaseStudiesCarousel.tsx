import { useState, ReactNode } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface Slide {
  id: string;
  icon: ReactNode;
  badge: string;
  title: string;
  items: { icon: string; text: string }[];
  accentColor: string;
}

const slides: Slide[] = [
  {
    id: "arch",
    icon: (
      <svg fill="none" height="40" viewBox="0 0 40 40" width="40" xmlns="http://www.w3.org/2000/svg">
        <rect fill="#156d95" height="40" rx="10" width="40" />
        <path d="M12 20h16M20 12v16" stroke="white" strokeWidth="2.5" strokeLinecap="round" />
        <circle cx="20" cy="20" r="5" fill="white" fillOpacity="0.3" />
      </svg>
    ),
    badge: "Архитектура системы",
    title: "Клиент (Telegram) → aiogram + Natasha NLP → База знаний → Ответ за 1.8 сек",
    items: [
      { icon: "🐍", text: "Python 3.10+ и aiogram 3.x с асинхронной обработкой и FSM" },
      { icon: "🧠", text: "Natasha NLP для распознавания сущностей без обучения нейросетей" },
      { icon: "📚", text: "Онтология: Торговое название → МНН → Группа препаратов" },
    ],
    accentColor: "#156d95",
  },
  {
    id: "func",
    icon: (
      <svg fill="none" height="40" viewBox="0 0 40 40" width="40" xmlns="http://www.w3.org/2000/svg">
        <rect fill="#16b364" height="40" rx="10" width="40" />
        <path d="M10 20l8 8 12-14" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    badge: "Функциональные возможности",
    title: "4 ключевых сценария использования чат-бота в аптеке",
    items: [
      { icon: "💊", text: "Проверка наличия: поиск препарата по названию в конкретной аптеке" },
      { icon: "🔄", text: "Подбор аналогов: замена по МНН с учётом цены (323-ФЗ)" },
      { icon: "📋", text: "Инструкции и маршрутизация к живому фармацевту при сложных вопросах" },
    ],
    accentColor: "#16b364",
  },
  {
    id: "legal",
    icon: (
      <svg fill="none" height="40" viewBox="0 0 40 40" width="40" xmlns="http://www.w3.org/2000/svg">
        <rect fill="#f59e0b" height="40" rx="10" width="40" />
        <path d="M20 10v12M20 26v2" stroke="white" strokeWidth="2.5" strokeLinecap="round" />
      </svg>
    ),
    badge: "Безопасность и право РФ",
    title: "Бот не ставит диагнозы. Только официальные источники: РЛС, Росздравнадзор",
    items: [
      { icon: "⚖️", text: "ФЗ № 323: запрет диагностики и назначения лечения — реализован в коде" },
      { icon: "🔒", text: "ФЗ № 152: минимизация сбора персональных данных пользователей" },
      { icon: "🏥", text: "При запросах типа «У меня давление...» — автоматический редирект к врачу" },
    ],
    accentColor: "#f59e0b",
  },
  {
    id: "results",
    icon: (
      <svg fill="none" height="40" viewBox="0 0 40 40" width="40" xmlns="http://www.w3.org/2000/svg">
        <rect fill="#8b5cf6" height="40" rx="10" width="40" />
        <path d="M10 28l8-10 6 6 6-12" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    badge: "Результаты тестирования",
    title: "120 юнит-тестов. 30 респондентов. 100 реальных запросов — все сценарии пройдены",
    items: [
      { icon: "🎯", text: "Точность распознавания названий препаратов: 94%" },
      { icon: "⚡", text: "Среднее время ответа: 1.8 секунды — быстрее всех аналогов на 30–40%" },
      { icon: "💰", text: "Затраты на разработку: ~710 чел./часов, снижение нагрузки персонала на 30–50%" },
    ],
    accentColor: "#8b5cf6",
  },
];

export const CaseStudiesCarousel = () => {
  const [current, setCurrent] = useState(0);
  const slide = slides[current];

  return (
    <section className="w-full py-24 px-8 bg-[#fafafa]" id="architecture">
      <div className="max-w-7xl mx-auto">
        <div className="mb-12">
          <span className="text-sm font-mono uppercase text-[#146e96] tracking-widest">Ключевые аспекты</span>
          <h2 className="text-[40px] font-normal leading-tight text-[#202020] tracking-tight mt-3">
            Архитектура, функции и результаты
          </h2>
        </div>

        <div className="grid grid-cols-12 gap-8">
          {/* Left nav */}
          <div className="col-span-12 md:col-span-4 flex flex-col gap-3">
            {slides.map((s, i) => (
              <button
                key={s.id}
                onClick={() => setCurrent(i)}
                className={`text-left px-5 py-4 rounded-2xl transition-all duration-200 border-2 ${
                  i === current
                    ? "border-[#156d95] bg-[#156d95]/5 shadow-sm"
                    : "border-transparent bg-white hover:border-[#e5e5e5]"
                }`}
              >
                <div className="flex items-center gap-3">
                  {s.icon}
                  <span className={`font-medium text-base ${i === current ? "text-[#156d95]" : "text-[#404040]"}`}>
                    {s.badge}
                  </span>
                </div>
              </button>
            ))}
          </div>

          {/* Right content */}
          <div className="col-span-12 md:col-span-8">
            <AnimatePresence mode="wait">
              <motion.div
                key={slide.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
                className="bg-white rounded-3xl p-10 shadow-sm border border-[#e5e5e5] h-full"
              >
                <div
                  className="inline-block px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wide mb-6 text-white"
                  style={{ backgroundColor: slide.accentColor }}
                >
                  {slide.badge}
                </div>

                <h3 className="text-2xl font-medium text-[#202020] leading-tight mb-8">
                  {slide.title}
                </h3>

                <div className="space-y-4">
                  {slide.items.map((item, i) => (
                    <div key={i} className="flex items-start gap-4 p-4 rounded-xl bg-[#f8f9fa]">
                      <span className="text-2xl flex-shrink-0">{item.icon}</span>
                      <p className="text-[#404040] leading-6">{item.text}</p>
                    </div>
                  ))}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
};
