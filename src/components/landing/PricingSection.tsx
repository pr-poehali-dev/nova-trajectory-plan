import { motion } from "framer-motion";

interface ComparisonRow {
  criterion: string;
  apteka: string;
  zdravcity: string;
  bot: string;
  highlight?: boolean;
}

const rows: ComparisonRow[] = [
  {
    criterion: "Понимание естественной речи (NLP)",
    apteka: "❌ Нет",
    zdravcity: "⚠️ Частичное",
    bot: "✅ Полное (Natasha)",
    highlight: true,
  },
  {
    criterion: "Подбор аналогов по МНН",
    apteka: "❌ Нет",
    zdravcity: "❌ Нет",
    bot: "✅ Есть",
    highlight: true,
  },
  {
    criterion: "Официальные инструкции (РЛС)",
    apteka: "❌ Нет",
    zdravcity: "⚠️ Частичное",
    bot: "✅ Полные",
  },
  {
    criterion: "Среднее время ответа",
    apteka: "⏱ 4–6 сек",
    zdravcity: "⏱ 5–10 сек",
    bot: "⚡ 1.8 сек",
    highlight: true,
  },
  {
    criterion: "Работа 24/7",
    apteka: "✅ Да",
    zdravcity: "✅ Да",
    bot: "✅ Да",
  },
  {
    criterion: "Маршрутизация к фармацевту",
    apteka: "❌ Нет",
    zdravcity: "❌ Нет",
    bot: "✅ Есть (323-ФЗ)",
  },
  {
    criterion: "Соответствие законам РФ",
    apteka: "⚠️ Частичное",
    zdravcity: "⚠️ Частичное",
    bot: "✅ Полное",
    highlight: true,
  },
];

export function PricingSection() {
  return (
    <section className="py-24 bg-[#fafafa]" id="results">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-sm font-mono uppercase text-[#146e96] tracking-widest">Сравнительный анализ</span>
          <h2 className="text-[40px] font-normal leading-tight mt-3 mb-4">Сравнение с аналогами</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Разработанный бот превосходит существующие решения по скорости и глубине интеллектуальной обработки на 30–40%.
          </p>
        </div>

        {/* Comparison table */}
        <div className="border border-border rounded-2xl overflow-hidden bg-white shadow-sm">
          <div className="overflow-x-auto">
            <div className="min-w-[700px]">
              {/* Header */}
              <div className="grid grid-cols-4 bg-[#f0f4f8] border-b border-border">
                <div className="p-5 font-semibold text-[#202020]">Критерий</div>
                <div className="p-5 text-center font-semibold text-[#555]">
                  <div className="text-sm uppercase tracking-wide text-[#888]">Аналог</div>
                  Аптека.ру
                </div>
                <div className="p-5 text-center font-semibold text-[#555]">
                  <div className="text-sm uppercase tracking-wide text-[#888]">Аналог</div>
                  ЗдравСити
                </div>
                <div className="p-5 text-center font-bold text-[#156d95] bg-[#156d95]/5 rounded-tr-2xl">
                  <div className="text-sm uppercase tracking-wide text-[#146e96]/70">Наша разработка</div>
                  МыЗаботаБот
                </div>
              </div>

              {rows.map((row, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-30px" }}
                  transition={{ duration: 0.4, delay: i * 0.06 }}
                  className={`grid grid-cols-4 border-b border-border last:border-b-0 ${
                    row.highlight ? "bg-[#f8fbff]" : ""
                  }`}
                >
                  <div className="p-5 text-[#202020] font-medium text-sm flex items-center">{row.criterion}</div>
                  <div className="p-5 text-center text-[#555] text-sm flex items-center justify-center">{row.apteka}</div>
                  <div className="p-5 text-center text-[#555] text-sm flex items-center justify-center">{row.zdravcity}</div>
                  <div className={`p-5 text-center text-sm font-semibold flex items-center justify-center ${
                    row.highlight ? "text-[#156d95] bg-[#156d95]/5" : "text-[#156d95] bg-[#156d95]/3"
                  }`}>
                    {row.bot}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom stats */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { value: "94%", label: "Точность распознавания препаратов", sub: "120 юнит-тестов пройдено" },
            { value: "1.8 с", label: "Среднее время ответа", sub: "Быстрее аналогов в 3–5 раз" },
            { value: "100%", label: "Успешных сценариев", sub: "30 респондентов, 100 запросов" },
          ].map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.12 }}
              className="bg-white border border-[#e5e5e5] rounded-2xl p-8 text-center shadow-sm"
            >
              <div className="text-5xl font-bold text-[#156d95] mb-2">{stat.value}</div>
              <div className="font-semibold text-[#202020] mb-1">{stat.label}</div>
              <div className="text-sm text-[#888]">{stat.sub}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
