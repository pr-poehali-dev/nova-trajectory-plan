import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus } from "lucide-react";

interface FAQItem {
  question: string;
  answer: string;
}

const defaultFAQs: FAQItem[] = [
  {
    question: "Почему выбрана библиотека Natasha, а не крупные языковые модели?",
    answer:
      "Natasha — лёгкая русскоязычная NLP-библиотека, не требующая GPU и не зависящая от внешних API. Она обеспечивает быстрое извлечение именованных сущностей (названия препаратов, дозировки) без дополнительного обучения. Это критично для аптечного контекста: скорость ответа 1.8 сек, автономность, низкая стоимость сопровождения. Крупные LLM избыточны для задачи распознавания фармацевтической терминологии по конечному словарю.",
  },
  {
    question: "Как бот соблюдает ФЗ № 323 «Об основах охраны здоровья граждан»?",
    answer:
      "В архитектуре FSM предусмотрены триггеры для паттернов запросов, связанных с симптомами, диагнозами и назначением лечения (например, «У меня болит...», «Что принять при...»). При обнаружении таких паттернов бот автоматически информирует пользователя о необходимости консультации врача и предлагает перевод на живого фармацевта. Бот работает исключительно с информацией о наличии и составе лекарств — не с медицинскими рекомендациями.",
  },
  {
    question: "Какова практическая значимость и перспективы внедрения?",
    answer:
      "Система готова к внедрению в малые и средние аптечные сети. Затраты на разработку составили ~710 чел./часов. Экономический эффект: снижение нагрузки на персонал на 30–50%, сокращение времени обработки типового запроса с 10 мин до 2 мин, круглосуточная доступность без расширения штата. Перспективы: интеграция с 1С для синхронизации остатков, OCR-распознавание рецептов, голосовой ввод для маломобильных пользователей.",
  },
  {
    question: "Что такое онтология лекарственных средств и зачем она нужна?",
    answer:
      "Онтология — иерархическая база знаний, связывающая торговые названия, МНН (международное непатентованное наименование) и фармакологические группы. Пример цепочки: «Нурофен» → «Ибупрофен» → «НПВС» → «Обезболивающее». Такой подход позволяет боту понимать разговорные запросы («таблетки от головы»), находить аналоги и не требует тяжёлых нейросетей — поиск выполняется по словарю за миллисекунды.",
  },
];

export const FAQSection = ({ title = "Вопросы и ответы", faqs = defaultFAQs }: { title?: string; faqs?: FAQItem[] }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="w-full py-24 px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-12 gap-16">
          <div className="lg:col-span-4">
            <span className="text-sm font-mono uppercase text-[#146e96] tracking-widest">FAQ</span>
            <h2 className="text-[40px] leading-tight font-normal text-[#202020] tracking-tight sticky top-24 mt-3">
              {title}
            </h2>
            <p className="text-[#888] text-base mt-4 sticky top-40 leading-6">
              Ответы на технические вопросы по диссертации
            </p>
          </div>

          <div className="lg:col-span-8">
            <div className="space-y-0">
              {faqs.map((faq, index) => (
                <div key={index} className="border-b border-[#e5e5e5] last:border-b-0">
                  <button
                    onClick={() => toggleFAQ(index)}
                    className="w-full flex items-center justify-between py-6 text-left group hover:opacity-70 transition-opacity duration-150"
                    aria-expanded={openIndex === index}
                  >
                    <span className="text-lg leading-7 text-[#202020] pr-8 font-normal">
                      {faq.question}
                    </span>
                    <motion.div
                      animate={{ rotate: openIndex === index ? 45 : 0 }}
                      transition={{ duration: 0.2, ease: [0.4, 0, 0.2, 1] }}
                      className="flex-shrink-0"
                    >
                      <Plus className="w-6 h-6 text-[#202020]" strokeWidth={1.5} />
                    </motion.div>
                  </button>

                  <AnimatePresence initial={false}>
                    {openIndex === index && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
                        className="overflow-hidden"
                      >
                        <div className="pb-6 pr-12">
                          <p className="text-lg leading-6 text-[#666666]">
                            {faq.answer}
                          </p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
