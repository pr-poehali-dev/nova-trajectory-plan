import { Mail } from "lucide-react";
import { motion } from "framer-motion";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-[#fafafa] border-t border-[#e5e5e5]">
      <div className="max-w-[1200px] mx-auto px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Left: info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="col-span-1 md:col-span-2"
          >
            <h3 className="text-2xl font-bold text-[#202020] mb-1">МыЗаботаБот</h3>
            <p className="text-sm text-[#156d95] font-medium mb-4">@MYZABOTABOT в Telegram</p>
            <p className="text-sm leading-6 text-[#666666] max-w-md mb-6">
              Интеллектуальный чат-бот для оптимизации обслуживания клиентов в аптеке.
              Разработан на Python + aiogram + Natasha NLP в рамках магистерской диссертации.
            </p>
            <div className="flex flex-wrap gap-3">
              <a
                href="https://t.me/MYZABOTABOT"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-[#156d95] text-white px-5 py-3 rounded-full text-sm font-medium hover:bg-[#156d95]/90 transition-all hover:rounded-2xl"
              >
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
                </svg>
                Открыть бот
              </a>
              <a
                href="mailto:student@pguti.ru"
                className="flex items-center gap-2 border border-[#e5e5e5] bg-white text-[#666] px-5 py-3 rounded-full text-sm font-medium hover:border-[#202020] hover:text-[#202020] transition-all hover:rounded-2xl"
              >
                <Mail className="w-4 h-4" />
                Связаться
              </a>
            </div>
          </motion.div>

          {/* Right: QR code */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
            className="col-span-1 flex flex-col items-center md:items-end"
          >
            <div className="bg-white border border-[#e5e5e5] rounded-2xl p-4 shadow-sm text-center">
              <img
                src="https://cdn.poehali.dev/projects/2fb297bc-c256-4433-b0cb-6641e2cc0f39/bucket/7e26ceb2-61fb-43cd-ba52-45745a58d806.png"
                alt="QR-код @MYZABOTABOT"
                className="w-48 h-48 object-contain rounded-xl"
              />
              <p className="text-[#156d95] font-semibold text-sm mt-3">@MYZABOTABOT</p>
              <p className="text-[#aaa] text-xs mt-1">Отсканируйте для проверки</p>
            </div>
          </motion.div>
        </div>

        {/* Bottom details */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 border-t border-[#e5e5e5] pt-10 mb-10">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h4 className="text-xs font-semibold uppercase tracking-widest text-[#999] mb-3">Автор</h4>
            <p className="text-[#202020] font-medium">Богомягкова Екатерина Алексеевна</p>
            <p className="text-[#666] text-sm mt-1">Магистрант, ФИСиТ ПГУТИ</p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h4 className="text-xs font-semibold uppercase tracking-widest text-[#999] mb-3">Научный руководитель</h4>
            <p className="text-[#202020] font-medium">Секлетова Наталья Николаевна</p>
            <p className="text-[#666] text-sm mt-1">к.п.н., доцент ПГУТИ</p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <h4 className="text-xs font-semibold uppercase tracking-widest text-[#999] mb-3">Технологии</h4>
            <div className="flex flex-wrap gap-2">
              {["Python", "aiogram", "Natasha NLP", "Telegram API", "FSM"].map((tech) => (
                <span key={tech} className="bg-[#f0f4f8] text-[#555] text-xs px-3 py-1 rounded-full">{tech}</span>
              ))}
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="pt-8 border-t border-[#e5e5e5]"
        >
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-[#666666]">
              © {currentYear} Богомягкова Е.А. · Магистерская диссертация · ПГУТИ · Факультет ИСиТ
            </p>
            <div className="flex items-center gap-2 text-sm text-[#666]">
              <span className="w-2 h-2 bg-green-400 rounded-full inline-block animate-pulse"></span>
              Бот активен и работает 24/7
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};
