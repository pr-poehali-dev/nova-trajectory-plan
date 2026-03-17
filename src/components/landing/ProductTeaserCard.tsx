import { motion } from "framer-motion";

export const ProductTeaserCard = () => {
  return (
    <section className="w-full px-8 pt-32 pb-16" id="home">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-12 gap-2">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, ease: [0.645, 0.045, 0.355, 1] }}
            className="col-span-12 lg:col-span-6 bg-[#e9e9e9] rounded-[40px] p-12 lg:p-16 flex flex-col justify-end aspect-square overflow-hidden"
          >
            <motion.span
              initial={{ transform: "translateY(20px)", opacity: 0 }}
              animate={{ transform: "translateY(0px)", opacity: 1 }}
              transition={{ duration: 0.4, ease: [0.645, 0.045, 0.355, 1], delay: 0.6 }}
              className="text-sm uppercase tracking-tight font-mono text-[#9a9a9a] mb-2 block"
            >
              Магистерская диссертация · ПГУТИ · 2026
            </motion.span>

            <h1 className="text-[42px] leading-[48px] tracking-tight text-[#202020] max-w-[520px] mb-6 font-medium">
              Интеллектуальный чат-бот для оптимизации обслуживания клиентов в аптеке
            </h1>

            <p className="text-lg leading-7 text-[#404040] max-w-[520px] mb-6">
              Богомягкова Екатерина Алексеевна<br />
              <span className="text-[#666] text-base">Научный руководитель: к.п.н., доцент Секлетова Н.Н.</span>
            </p>

            <p className="text-base leading-6 text-[#555] max-w-[480px] mb-8">
              Факультет Информационных систем и технологий, ПГУТИ
            </p>

            <ul className="flex gap-1.5 flex-wrap mt-4">
              <li>
                <a
                  href="https://t.me/MYZABOTABOT"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block cursor-pointer text-white bg-[#156d95] rounded-full px-[18px] py-[15px] text-base leading-4 whitespace-nowrap transition-all duration-150 ease-[cubic-bezier(0.455,0.03,0.515,0.955)] hover:rounded-2xl"
                >
                  Открыть бот @MYZABOTABOT
                </a>
              </li>
              <li>
                <a
                  href="#architecture"
                  onClick={(e) => { e.preventDefault(); document.querySelector('#architecture')?.scrollIntoView({ behavior: 'smooth' }); }}
                  className="block cursor-pointer text-[#202020] border border-[#202020] rounded-full px-[18px] py-[15px] text-base leading-4 whitespace-nowrap transition-all duration-150 ease-[cubic-bezier(0.455,0.03,0.515,0.955)] hover:rounded-2xl"
                >
                  Архитектура системы
                </a>
              </li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, ease: [0.645, 0.045, 0.355, 1], delay: 0.2 }}
            className="col-span-12 lg:col-span-6 bg-gradient-to-br from-[#156d95]/10 to-[#156d95]/30 rounded-[40px] flex justify-center items-center aspect-square overflow-hidden relative"
          >
            <div className="flex flex-col items-center justify-center text-center p-8">
              {/* Telegram Bot UI mockup */}
              <div className="w-full max-w-[300px] bg-white rounded-2xl shadow-2xl overflow-hidden">
                {/* Header */}
                <div className="bg-[#156d95] px-4 py-3 flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center">
                    <span className="text-white text-sm font-bold">З</span>
                  </div>
                  <div className="text-left">
                    <p className="text-white font-semibold text-sm">МыЗаботаБот</p>
                    <p className="text-white/70 text-xs">онлайн</p>
                  </div>
                </div>
                {/* Messages */}
                <div className="bg-[#e5ddd5] px-3 py-4 space-y-3">
                  <div className="flex justify-end">
                    <div className="bg-[#dcf8c6] rounded-2xl rounded-br-sm px-3 py-2 max-w-[200px] shadow-sm">
                      <p className="text-[#202020] text-sm">Есть ли Нурофен?</p>
                      <p className="text-[#aaa] text-[10px] text-right mt-1">14:22 ✓✓</p>
                    </div>
                  </div>
                  <div className="flex justify-start">
                    <div className="bg-white rounded-2xl rounded-bl-sm px-3 py-2 max-w-[220px] shadow-sm">
                      <p className="text-[#202020] text-sm">✅ Нурофен 400мг — <strong>есть в наличии</strong></p>
                      <p className="text-[#555] text-sm mt-1">Цена: 287 ₽</p>
                      <p className="text-[#aaa] text-[10px] text-right mt-1">14:22</p>
                    </div>
                  </div>
                  <div className="flex justify-start">
                    <div className="bg-white rounded-2xl rounded-bl-sm px-3 py-2 max-w-[220px] shadow-sm">
                      <p className="text-[#555] text-sm">Также доступны аналоги по МНН →</p>
                      <p className="text-[#aaa] text-[10px] text-right mt-1">14:22</p>
                    </div>
                  </div>
                  {/* Buttons */}
                  <div className="grid grid-cols-2 gap-2 mt-2">
                    <div className="bg-white rounded-xl px-2 py-2 text-center shadow-sm border border-[#ddd]">
                      <p className="text-[#156d95] text-xs font-medium">💊 Наличие</p>
                    </div>
                    <div className="bg-white rounded-xl px-2 py-2 text-center shadow-sm border border-[#ddd]">
                      <p className="text-[#156d95] text-xs font-medium">🔄 Аналоги</p>
                    </div>
                    <div className="bg-white rounded-xl px-2 py-2 text-center shadow-sm border border-[#ddd]">
                      <p className="text-[#156d95] text-xs font-medium">📋 Инструкции</p>
                    </div>
                    <div className="bg-white rounded-xl px-2 py-2 text-center shadow-sm border border-[#ddd]">
                      <p className="text-[#156d95] text-xs font-medium">👨‍⚕️ Фармацевт</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
