import { motion } from "framer-motion";

interface TechItem {
  name: string;
  description: string;
  color: string;
  emoji: string;
}

const techStack: TechItem[] = [
  { name: "Python 3.10+", description: "Основной язык разработки", color: "#3776ab", emoji: "🐍" },
  { name: "aiogram 3.x", description: "Асинхронный Telegram фреймворк", color: "#2ca5e0", emoji: "✈️" },
  { name: "Natasha NLP", description: "Обработка естественного языка", color: "#e8473f", emoji: "🧠" },
  { name: "Telegram Bot API", description: "Пользовательский интерфейс", color: "#2ca5e0", emoji: "💬" },
  { name: "FSM (машина состояний)", description: "Управление диалогами", color: "#5c6bc0", emoji: "⚙️" },
  { name: "SQLite / 1С", description: "База знаний лекарств", color: "#0078d4", emoji: "🗄️" },
  { name: "РЛС / Росздравнадзор", description: "Официальные источники данных", color: "#cc2222", emoji: "📋" },
];

const future: TechItem[] = [
  { name: "Интеграция с 1С", description: "Остатки в реальном времени", color: "#f59e0b", emoji: "🔗" },
  { name: "Голосовой ввод", description: "Для пожилых пользователей", color: "#10b981", emoji: "🎙️" },
  { name: "OCR рецептов", description: "Распознавание фото рецептов", color: "#8b5cf6", emoji: "📷" },
  { name: "Прогнозирование спроса", description: "Анализ истории запросов", color: "#ec4899", emoji: "📊" },
  { name: "Голосовые ответы", description: "TTS для мобильных", color: "#06b6d4", emoji: "🔊" },
  { name: "Web-интерфейс", description: "Панель управления аптекой", color: "#156d95", emoji: "🖥️" },
];

export const IntegrationCarousel = () => {
  return (
    <section className="w-full py-24 overflow-hidden bg-white" id="features">
      <div className="max-w-7xl mx-auto px-8 mb-16">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <div>
            <span className="text-sm font-mono uppercase text-[#146e96] tracking-widest">Технологический стек</span>
            <h2 className="text-[40px] font-normal leading-tight text-[#202020] tracking-tight mt-3">
              Использованные технологии
            </h2>
            <p className="text-lg text-[#666] mt-3 max-w-xl">
              Лёгкие и эффективные инструменты без тяжёлых нейросетей — быстрый отклик, простое сопровождение.
            </p>
          </div>
          <a
            href="https://t.me/MYZABOTABOT"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-[#156d95] text-white px-[18px] py-[15px] rounded-full text-base hover:rounded-2xl transition-all whitespace-nowrap flex-shrink-0"
          >
            Попробовать бот
          </a>
        </div>
      </div>

      {/* Tech stack row */}
      <div className="relative">
        <div className="absolute left-0 top-0 bottom-0 w-24 z-10 bg-gradient-to-r from-white to-transparent pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-24 z-10 bg-gradient-to-l from-white to-transparent pointer-events-none" />
        <div className="overflow-hidden">
          <motion.div
            className="flex gap-4"
            animate={{ x: ["0%", "-50%"] }}
            transition={{ duration: 30, ease: "linear", repeat: Infinity }}
            style={{ width: "max-content" }}
          >
            {[...techStack, ...techStack].map((item, i) => (
              <div
                key={i}
                className="flex-shrink-0 flex items-center gap-3 bg-white border border-[#e5e5e5] rounded-2xl px-6 py-4 shadow-sm"
                style={{ minWidth: "240px" }}
              >
                <span className="text-3xl">{item.emoji}</span>
                <div>
                  <p className="font-semibold text-[#202020] text-sm">{item.name}</p>
                  <p className="text-[#888] text-xs mt-0.5">{item.description}</p>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Future row */}
      <div className="relative mt-4">
        <div className="absolute left-0 top-0 bottom-0 w-24 z-10 bg-gradient-to-r from-white to-transparent pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-24 z-10 bg-gradient-to-l from-white to-transparent pointer-events-none" />
        <div className="overflow-hidden">
          <motion.div
            className="flex gap-4"
            animate={{ x: ["-50%", "0%"] }}
            transition={{ duration: 35, ease: "linear", repeat: Infinity }}
            style={{ width: "max-content" }}
          >
            {[...future, ...future].map((item, i) => (
              <div
                key={i}
                className="flex-shrink-0 flex items-center gap-3 bg-[#f8f9fa] border border-dashed border-[#d0d0d0] rounded-2xl px-6 py-4"
                style={{ minWidth: "240px" }}
              >
                <span className="text-3xl opacity-60">{item.emoji}</span>
                <div>
                  <p className="font-semibold text-[#555] text-sm">{item.name}</p>
                  <p className="text-[#aaa] text-xs mt-0.5">Перспектива: {item.description}</p>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};
