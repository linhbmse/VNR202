import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import { StarSeal } from "@/components/StarSeal";
import { Reveal } from "@/components/Reveal";
import { Particles } from "@/components/Particles";
import { TiltCard } from "@/components/TiltCard";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Phát triển nhanh nhưng bền vững — Bài học Lịch sử Đảng 2006–2015" },
      {
        name: "description",
        content:
          "Dung hoà giữa tăng trưởng và xử lý mặt trái — Bài học từ giai đoạn 2006–2015 của Đảng Cộng sản Việt Nam, vận dụng vào cá nhân và tổ chức.",
      },
      { property: "og:title", content: "Phát triển nhanh nhưng bền vững" },
      {
        property: "og:description",
        content: "Bài học Lịch sử Đảng giai đoạn 2006–2015 và vận dụng thực tiễn.",
      },
    ],
    links: [
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Playfair+Display:wght@600;700;900&family=Lora:ital,wght@0,400;0,500;0,600;1,400&display=swap",
      },
    ],
  }),
  component: Index,
});

function Index() {
  const heroRef = useRef<HTMLDivElement>(null);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const onScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <main className="min-h-screen overflow-x-hidden">
      {/* ============ HERO ============ */}
      <section
        ref={heroRef}
        className="relative min-h-screen flex items-center justify-center perspective-scene"
        style={{ background: "var(--gradient-flag)" }}
      >
        <Particles count={25} />

        {/* Parallax giant star */}
        <div
          className="absolute inset-0 flex items-center justify-center pointer-events-none"
          style={{
            transform: `translateY(${scrollY * 0.3}px) scale(${1 + scrollY * 0.0005})`,
          }}
        >
          <StarSeal size={520} className="star-pulse opacity-25" />
        </div>

        {/* Gold radial glow */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(circle at 50% 50%, oklch(0.85 0.18 86 / 0.25), transparent 60%)",
            transform: `translateY(${scrollY * 0.15}px)`,
          }}
        />

        <div className="relative z-10 text-center px-6 max-w-5xl preserve-3d">
          <div
            className="mb-8 flex justify-center"
            style={{ transform: `translateZ(${50 - scrollY * 0.05}px) rotateX(${scrollY * 0.02}deg)` }}
          >
            <StarSeal size={110} className="flag-wave" />
          </div>

          <p className="text-[var(--gold-soft)] tracking-[0.4em] text-xs sm:text-sm mb-6 uppercase">
            Lịch sử Đảng Cộng sản Việt Nam · 2006 — 2015
          </p>

          <h1
            className="font-display text-5xl sm:text-7xl md:text-8xl font-black leading-[1.05] mb-8"
            style={{
              color: "oklch(0.96 0.05 88)",
              textShadow: "0 4px 40px oklch(0.2 0.1 25 / 0.6), 0 0 80px oklch(0.85 0.15 86 / 0.3)",
              transform: `translateZ(${30 - scrollY * 0.03}px)`,
            }}
          >
            Phát triển <span className="shimmer-text italic">nhanh</span>
            <br />
            nhưng vẫn <span className="shimmer-text italic">bền vững</span>
          </h1>

          <p
            className="font-serif text-lg sm:text-xl md:text-2xl italic max-w-3xl mx-auto leading-relaxed"
            style={{ color: "oklch(0.92 0.04 85)" }}
          >
            Bài học về dung hoà giữa tăng trưởng và xử lý mặt trái của tăng trưởng.
          </p>

          <div className="mt-14 flex justify-center gap-4 flex-wrap">
            <a
              href="#mo-dau"
              className="px-8 py-4 rounded-sm font-display text-base tracking-wider uppercase transition-all duration-500 hover:translate-y-[-3px]"
              style={{
                background: "var(--gradient-gold)",
                color: "var(--ink)",
                boxShadow: "var(--shadow-gold)",
              }}
            >
              Bắt đầu hành trình
            </a>
            <a
              href="#hoi-dap"
              className="px-8 py-4 rounded-sm font-display text-base tracking-wider uppercase border-2 transition-all hover:bg-[oklch(0.95_0.05_88_/_0.1)]"
              style={{ color: "var(--gold-soft)", borderColor: "var(--gold)" }}
            >
              Đặt câu hỏi
            </a>
          </div>
        </div>

        {/* Scroll cue */}
        <div
          className="absolute bottom-10 left-1/2 -translate-x-1/2 text-[var(--gold-soft)] text-xs tracking-[0.3em] uppercase"
          style={{ opacity: Math.max(0, 1 - scrollY / 300) }}
        >
          ↓ Cuộn xuống
        </div>
      </section>

      {/* ============ PHẦN 1: ĐẶT VẤN ĐỀ ============ */}
      <Section id="mo-dau" label="Phần I" title="Đặt vấn đề">
        <div className="grid md:grid-cols-2 gap-8">
          <Reveal>
            <TiltCard className="parchment p-8 md:p-10 h-full rounded-sm">
              <div className="text-[var(--crimson)] text-xs tracking-[0.3em] uppercase mb-3">
                01 · Bối cảnh
              </div>
              <h3 className="text-2xl md:text-3xl font-bold mb-4 text-[var(--ink)]">
                Thời đại của "Tốc độ" và "Thành tích"
              </h3>
              <p className="text-[var(--muted-foreground)] leading-relaxed text-base">
                Chúng ta đang sống trong một thời đại mà{" "}
                <em className="text-[var(--crimson)] not-italic font-semibold">"nhanh"</em> và{" "}
                <em className="text-[var(--crimson)] not-italic font-semibold">"thành tích"</em>{" "}
                được đặt lên hàng đầu — từ học tập, thăng tiến trong công việc, cho đến mở rộng
                quy mô của một tổ chức, doanh nghiệp.
              </p>
              <div className="mt-6 pt-6 border-t border-[var(--border)]">
                <p className="text-sm text-[var(--muted-foreground)] italic">
                  Hệ quả: sức khoẻ suy giảm, chất lượng công việc hời hợt, hoặc sự sụp đổ khi nền
                  tảng chưa vững chắc.
                </p>
              </div>
            </TiltCard>
          </Reveal>

          <Reveal delay={150}>
            <TiltCard className="p-8 md:p-10 h-full rounded-sm" style={{ background: "var(--gradient-flag)" }}>
              <div className="text-[var(--gold-soft)] text-xs tracking-[0.3em] uppercase mb-3">
                02 · Câu hỏi trăn trở
              </div>
              <h3 className="text-2xl md:text-3xl font-bold mb-6" style={{ color: "oklch(0.96 0.05 88)" }}>
                Hai câu hỏi cốt lõi
              </h3>
              <ul className="space-y-5 text-[oklch(0.92_0.04_85)]">
                <li className="flex gap-4">
                  <StarSeal size={28} className="shrink-0 mt-1" />
                  <span>
                    Làm thế nào để vừa <strong>tăng tốc</strong> phát triển mà không đánh đổi giá
                    trị nền tảng cốt lõi?
                  </span>
                </li>
                <li className="flex gap-4">
                  <StarSeal size={28} className="shrink-0 mt-1" />
                  <span>
                    Đâu là ranh giới giữa <strong>"tăng trưởng cần thiết"</strong> và{" "}
                    <strong>"hệ quả độc hại"</strong> cần kiểm soát?
                  </span>
                </li>
              </ul>
            </TiltCard>
          </Reveal>
        </div>

        <Reveal delay={300}>
          <div className="mt-16 text-center max-w-2xl mx-auto">
            <div className="divider-ornament mb-6">✦</div>
            <p className="font-display italic text-xl md:text-2xl text-[var(--crimson)]">
              "Hãy cùng nhìn lại một bài học lịch sử đắt giá của đất nước
              <br />
              trong giai đoạn 2006 – 2015."
            </p>
          </div>
        </Reveal>
      </Section>

      {/* ============ PHẦN 2: BÀI HỌC LỊCH SỬ ============ */}
      <section
        className="relative py-24 md:py-32 perspective-scene"
        style={{
          background:
            "linear-gradient(180deg, oklch(0.97 0.015 80) 0%, oklch(0.93 0.03 78) 100%)",
        }}
      >
        <div className="max-w-6xl mx-auto px-6">
          <Reveal>
            <div className="text-center mb-20">
              <div className="text-[var(--crimson)] text-xs tracking-[0.4em] uppercase mb-4">
                Phần II · Cơ sở lý thuyết
              </div>
              <h2 className="font-display text-4xl md:text-6xl font-bold text-[var(--ink)] mb-4">
                Bài học lịch sử <span className="text-[var(--crimson)]">2006 — 2015</span>
              </h2>
              <div className="divider-ornament mt-6">★</div>
            </div>
          </Reveal>

          {/* Timeline 3D */}
          <div className="relative preserve-3d">
            {/* vertical line */}
            <div
              className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px md:-translate-x-1/2"
              style={{
                background:
                  "linear-gradient(180deg, transparent, var(--crimson) 10%, var(--gold) 50%, var(--crimson) 90%, transparent)",
              }}
            />

            <TimelineNode
              year="2006"
              side="left"
              title="Khát vọng tăng trưởng — Đại hội X"
              body={
                <>
                  Đảng đề ra mục tiêu{" "}
                  <em className="text-[var(--crimson)] not-italic font-semibold">
                    "đẩy mạnh toàn diện công cuộc đổi mới, sớm đưa nước ta ra khỏi tình trạng kém
                    phát triển"
                  </em>
                  . Việt Nam gia nhập <strong>WTO</strong>, mở ra cơ hội thu hút FDI khổng lồ và
                  tăng trưởng nhanh chóng.
                </>
              }
            />

            <TimelineNode
              year="2008"
              side="right"
              title="Mặt trái lộ diện"
              body={
                <>
                  Khủng hoảng tài chính toàn cầu cộng hưởng với yếu kém nội tại: lạm phát tăng
                  cao, kinh tế vĩ mô bất ổn. Tăng trưởng chủ yếu theo{" "}
                  <strong>chiều rộng</strong> — khai thác tài nguyên, lao động giá rẻ — mà thiếu{" "}
                  <strong>chiều sâu</strong> về chất lượng và năng lực cạnh tranh.
                </>
              }
              accent
            />

            <TimelineNode
              year="2011"
              side="left"
              title="Điều chỉnh — Đại hội XI"
              body={
                <>
                  Cương lĩnh 2011 khẳng định nguyên tắc:{" "}
                  <em className="text-[var(--crimson)] not-italic font-semibold">
                    "Phát triển nhanh gắn liền với phát triển bền vững"
                  </em>
                  . Quyết định <strong>"đổi mới mô hình tăng trưởng, cơ cấu lại nền kinh tế"</strong>{" "}
                  — chuyển từ số lượng sang chất lượng, năng suất, hiệu quả.
                </>
              }
            />

            <TimelineNode
              year="2011+"
              side="right"
              title="Ba đột phá chiến lược"
              body={
                <ul className="space-y-2 text-sm md:text-base">
                  <li>
                    <strong className="text-[var(--crimson)]">① Thể chế</strong> — hoàn thiện hệ
                    thống pháp luật, kinh tế thị trường định hướng XHCN.
                  </li>
                  <li>
                    <strong className="text-[var(--crimson)]">② Nguồn nhân lực</strong> — gắn với
                    khoa học, công nghệ.
                  </li>
                  <li>
                    <strong className="text-[var(--crimson)]">③ Hạ tầng</strong> — đồng bộ, hiện
                    đại, kết nối.
                  </li>
                </ul>
              }
            />
          </div>
        </div>
      </section>

      {/* ============ PHẦN 3: VẬN DỤNG THỰC TIỄN ============ */}
      <Section
        id="van-dung"
        label="Phần III"
        title="Vận dụng vào thực tiễn"
        subtitle="Từ vĩ mô đến vi mô — cá nhân & tổ chức"
      >
        <div className="grid md:grid-cols-3 gap-6">
          {[
            {
              icon: "📚",
              title: "Trong học tập",
              fast: "Chạy đua thành tích, học vẹt để qua môn.",
              slow: "Hiểu sâu bản chất, tích luỹ kỹ năng thực tế.",
              warn: "Lạm phát điểm số — ra trường dễ bị đào thải.",
            },
            {
              icon: "💼",
              title: "Trong công việc",
              fast: "Hustle culture, ôm nhiều dự án để mau thăng tiến.",
              slow: "Ưu tiên chiều sâu chuyên môn và sức khoẻ.",
              warn: "Burnout, sai sót, đánh đổi gia đình.",
            },
            {
              icon: "🚀",
              title: "Trong tổ chức",
              fast: "Đốt tiền chạy quảng cáo để tăng user nhanh nhất.",
              slow: "Hoàn thiện sản phẩm cốt lõi trước khi mở rộng.",
              warn: "Khách hàng rời bỏ, dòng tiền gãy đổ.",
            },
          ].map((c, i) => (
            <Reveal key={c.title} delay={i * 120}>
              <TiltCard className="parchment p-7 h-full rounded-sm vintage-frame">
                <div className="text-4xl mb-3">{c.icon}</div>
                <h3 className="font-display text-xl font-bold text-[var(--ink)] mb-4">
                  {c.title}
                </h3>
                <div className="space-y-3 text-sm">
                  <Row label="Nhanh" color="var(--crimson)" text={c.fast} />
                  <Row label="Bền" color="oklch(0.45 0.12 140)" text={c.slow} />
                  <div
                    className="mt-4 pt-3 border-t border-dashed text-xs italic text-[var(--muted-foreground)]"
                    style={{ borderColor: "var(--border)" }}
                  >
                    ⚠ {c.warn}
                  </div>
                </div>
              </TiltCard>
            </Reveal>
          ))}
        </div>

        <Reveal delay={400}>
          <div
            className="mt-16 p-10 md:p-14 rounded-sm relative overflow-hidden"
            style={{ background: "var(--gradient-flag)" }}
          >
            <div className="absolute -right-20 -top-20 opacity-10">
              <StarSeal size={300} />
            </div>
            <div className="relative z-10 max-w-3xl">
              <div className="text-[var(--gold-soft)] text-xs tracking-[0.3em] uppercase mb-3">
                Nhận diện · Xử lý
              </div>
              <h3
                className="font-display text-3xl md:text-4xl font-bold mb-6"
                style={{ color: "oklch(0.96 0.05 88)" }}
              >
                "Chỉ số cảnh báo" của con người
              </h3>
              <p className="text-[oklch(0.92_0.04_85)] leading-relaxed text-lg">
                Giống như nền kinh tế bộc lộ lạm phát và bất ổn, con người cũng có những dấu hiệu:{" "}
                <strong>mệt mỏi kéo dài</strong>, <strong>mất cảm hứng</strong>,{" "}
                <strong>làm việc đối phó</strong>.
              </p>
              <p className="text-[oklch(0.92_0.04_85)] leading-relaxed text-lg mt-4">
                Đừng sợ phải chậm lại. Khi xuất hiện hệ quả, hãy mạnh dạn{" "}
                <em className="shimmer-text font-semibold not-italic">"cơ cấu lại"</em> thói quen,
                loại bỏ việc không tạo giá trị lõi, tập trung vào{" "}
                <strong className="shimmer-text">phát triển theo chiều sâu</strong>.
              </p>
            </div>
          </div>
        </Reveal>
      </Section>

      {/* ============ PHẦN 4: GIẢI PHÁP ============ */}
      <Section
        id="giai-phap"
        label="Phần IV"
        title="Giải pháp & Bài học rút ra"
        dark
      >
        <Reveal>
          <p
            className="text-center font-display italic text-2xl md:text-3xl mb-16 max-w-3xl mx-auto"
            style={{ color: "oklch(0.92 0.06 85)" }}
          >
            "Sự phát triển lý tưởng không phải là{" "}
            <span className="shimmer-text">đi nhanh nhất</span>, mà là{" "}
            <span className="shimmer-text">đi xa nhất</span>."
          </p>
        </Reveal>

        <div className="grid md:grid-cols-3 gap-6">
          {[
            {
              num: "I",
              title: "Đột phá Thể chế",
              desc: "Xây dựng nguyên tắc sống và làm việc kỷ luật cho bản thân — quy tắc rõ ràng, nhất quán.",
            },
            {
              num: "II",
              title: "Đột phá Hạ tầng",
              desc: "Đầu tư vào sức khoẻ thể chất, công cụ làm việc, và môi trường sống lành mạnh.",
            },
            {
              num: "III",
              title: "Đột phá Nhân lực",
              desc: "Liên tục tự học, nâng cấp tư duy và kỹ năng mềm — không cày cuốc như một cái máy.",
            },
          ].map((b, i) => (
            <Reveal key={b.num} delay={i * 150}>
              <TiltCard
                className="p-8 h-full rounded-sm border-2"
                style={{
                  borderColor: "var(--gold)",
                  background: "oklch(0.22 0.04 30 / 0.6)",
                  backdropFilter: "blur(8px)",
                }}
              >
                <div
                  className="font-display text-6xl font-black mb-4 shimmer-text"
                  style={{ lineHeight: 1 }}
                >
                  {b.num}
                </div>
                <h3
                  className="font-display text-2xl font-bold mb-3"
                  style={{ color: "oklch(0.95 0.05 88)" }}
                >
                  {b.title}
                </h3>
                <p style={{ color: "oklch(0.85 0.04 80)" }} className="leading-relaxed">
                  {b.desc}
                </p>
              </TiltCard>
            </Reveal>
          ))}
        </div>

        <Reveal delay={500}>
          <div className="mt-20 text-center max-w-3xl mx-auto">
            <div className="divider-ornament mb-8">★ ★ ★</div>
            <p
              className="font-display text-2xl md:text-3xl leading-snug"
              style={{ color: "oklch(0.96 0.05 88)" }}
            >
              <span className="shimmer-text">Phát triển nhanh</span> là khát vọng chính đáng,
              <br />
              nhưng <span className="shimmer-text">phát triển bền vững</span> mới là điều kiện
              sinh tồn.
            </p>
          </div>
        </Reveal>
      </Section>

      {/* ============ HỎI ĐÁP (FAQ) ============ */}
      <Section
        id="hoi-dap"
        label="Tương tác"
        title="Hỏi & Đáp"
        subtitle="Những câu hỏi thường gặp về chủ đề"
      >
        <Reveal>
          <div className="max-w-3xl mx-auto parchment p-6 md:p-10 rounded-sm">
            <Accordion type="single" collapsible className="w-full">
              {FAQS.map((f, i) => (
                <AccordionItem key={i} value={`item-${i}`} className="border-[var(--border)]">
                  <AccordionTrigger className="text-left font-display text-base md:text-lg text-[var(--ink)] hover:text-[var(--crimson)]">
                    <span className="flex gap-3 items-start">
                      <span className="text-[var(--crimson)] font-black shrink-0">
                        {String(i + 1).padStart(2, "0")}.
                      </span>
                      <span>{f.q}</span>
                    </span>
                  </AccordionTrigger>
                  <AccordionContent className="text-[var(--muted-foreground)] leading-relaxed text-base pl-9">
                    {f.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </Reveal>

        <Reveal delay={200}>
          <div className="mt-10 max-w-3xl mx-auto text-center">
            <p className="text-sm text-[var(--muted-foreground)] italic">
              Còn câu hỏi khác? Hãy ghi chú lại và trao đổi trực tiếp trong buổi thuyết trình.
            </p>
          </div>
        </Reveal>
      </Section>

      {/* ============ CAM KẾT LIÊM CHÍNH HỌC THUẬT ============ */}
      <section
        className="relative py-24 md:py-32 perspective-scene overflow-hidden"
        style={{ background: "var(--gradient-flag)" }}
      >
        <Particles count={15} />
        <div className="max-w-4xl mx-auto px-6 relative z-10">
          <Reveal>
            <div className="text-center mb-12">
              <div className="flex justify-center mb-6">
                <StarSeal size={70} className="star-pulse" />
              </div>
              <div
                className="text-xs tracking-[0.4em] uppercase mb-4"
                style={{ color: "var(--gold-soft)" }}
              >
                Cam kết
              </div>
              <h2
                className="font-display text-4xl md:text-6xl font-bold mb-4"
                style={{ color: "oklch(0.96 0.05 88)" }}
              >
                Liêm chính <span className="shimmer-text italic">Học thuật</span>
              </h2>
              <div className="divider-ornament">✦</div>
            </div>
          </Reveal>

          <Reveal delay={200}>
            <TiltCard className="parchment p-8 md:p-12 rounded-sm vintage-frame">
              <p className="font-display text-lg md:text-xl text-[var(--ink)] mb-6 leading-relaxed">
                Chúng tôi — nhóm thực hiện bài thuyết trình này — long trọng cam kết:
              </p>
              <ul className="space-y-5 text-[var(--ink)]">
                {COMMITMENTS.map((c, i) => (
                  <li key={i} className="flex gap-4 items-start">
                    <span
                      className="shrink-0 w-8 h-8 rounded-full flex items-center justify-center font-display font-bold text-sm"
                      style={{
                        background: "var(--gradient-gold)",
                        color: "var(--ink)",
                      }}
                    >
                      {i + 1}
                    </span>
                    <span className="leading-relaxed pt-1">{c}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-10 pt-8 border-t-2 border-dashed border-[var(--gold)] flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
                <div>
                  <p className="text-xs uppercase tracking-widest text-[var(--muted-foreground)] mb-2">
                    Ký xác nhận
                  </p>
                  <p
                    className="font-display italic text-3xl text-[var(--crimson)]"
                    style={{ fontFamily: '"Playfair Display", cursive' }}
                  >
                    Nhóm thuyết trình
                  </p>
                </div>
                <div className="text-right">
                  <p className="text-xs uppercase tracking-widest text-[var(--muted-foreground)]">
                    Học phần
                  </p>
                  <p className="font-display font-bold text-[var(--ink)]">
                    Lịch sử Đảng Cộng sản Việt Nam
                  </p>
                </div>
              </div>
            </TiltCard>
          </Reveal>
        </div>
      </section>

      {/* ============ FOOTER ============ */}
      <footer
        className="py-12 text-center"
        style={{ background: "oklch(0.15 0.04 28)", color: "oklch(0.78 0.04 80)" }}
      >
        <div className="flex justify-center mb-4">
          <StarSeal size={36} />
        </div>
        <p className="font-display italic text-sm">
          "Đi chậm mà chắc — đi cùng nhau, đi được rất xa."
        </p>
        <p className="text-xs mt-3 opacity-60">
          © Bài thuyết trình học thuật · Lịch sử Đảng Cộng sản Việt Nam
        </p>
      </footer>
    </main>
  );
}

/* ===== Subcomponents ===== */
function Section({
  id,
  label,
  title,
  subtitle,
  children,
  dark = false,
}: {
  id?: string;
  label: string;
  title: string;
  subtitle?: string;
  children: React.ReactNode;
  dark?: boolean;
}) {
  return (
    <section
      id={id}
      className="relative py-24 md:py-32 perspective-scene"
      style={
        dark
          ? { background: "linear-gradient(180deg, oklch(0.20 0.04 28) 0%, oklch(0.14 0.04 28) 100%)" }
          : undefined
      }
    >
      <div className="max-w-6xl mx-auto px-6">
        <Reveal>
          <div className="text-center mb-16">
            <div
              className="text-xs tracking-[0.4em] uppercase mb-4"
              style={{ color: dark ? "var(--gold-soft)" : "var(--crimson)" }}
            >
              {label}
            </div>
            <h2
              className="font-display text-4xl md:text-6xl font-bold mb-3"
              style={{ color: dark ? "oklch(0.96 0.05 88)" : "var(--ink)" }}
            >
              {title}
            </h2>
            {subtitle && (
              <p
                className="italic text-lg mt-2"
                style={{ color: dark ? "oklch(0.85 0.04 80)" : "var(--muted-foreground)" }}
              >
                {subtitle}
              </p>
            )}
            <div className="divider-ornament mt-6">★</div>
          </div>
        </Reveal>
        {children}
      </div>
    </section>
  );
}

function TimelineNode({
  year,
  title,
  body,
  side,
  accent = false,
}: {
  year: string;
  title: string;
  body: React.ReactNode;
  side: "left" | "right";
  accent?: boolean;
}) {
  return (
    <Reveal>
      <div
        className={`relative mb-16 md:mb-20 grid md:grid-cols-2 gap-8 items-center ${
          side === "right" ? "md:[&>*:first-child]:order-2" : ""
        }`}
      >
        {/* Year medallion */}
        <div
          className={`absolute left-8 md:left-1/2 md:-translate-x-1/2 -translate-y-1/2 top-1/2 z-10`}
        >
          <div
            className="w-16 h-16 md:w-20 md:h-20 rounded-full flex items-center justify-center font-display font-black text-sm md:text-base shadow-lg"
            style={{
              background: accent ? "var(--gradient-gold)" : "var(--gradient-flag)",
              color: accent ? "var(--ink)" : "oklch(0.95 0.05 88)",
              border: "3px solid oklch(0.97 0.02 82)",
              boxShadow: "0 8px 30px oklch(0.3 0.1 25 / 0.4)",
            }}
          >
            {year}
          </div>
        </div>

        {/* Card */}
        <div className={`pl-28 md:pl-0 ${side === "right" ? "md:pr-16" : "md:pl-16"}`}>
          <TiltCard className="parchment p-7 md:p-8 rounded-sm">
            <h3 className="font-display text-xl md:text-2xl font-bold text-[var(--ink)] mb-3">
              {title}
            </h3>
            <div className="text-[var(--muted-foreground)] leading-relaxed">{body}</div>
          </TiltCard>
        </div>

        {/* Spacer */}
        <div className="hidden md:block" />
      </div>
    </Reveal>
  );
}

function Row({ label, color, text }: { label: string; color: string; text: string }) {
  return (
    <div className="flex gap-3">
      <span
        className="shrink-0 text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-sm h-fit mt-0.5"
        style={{ background: color, color: "white" }}
      >
        {label}
      </span>
      <span className="text-[var(--ink)]">{text}</span>
    </div>
  );
}

const FAQS = [
  {
    q: "Vì sao Đại hội X (2006) lại đặt mục tiêu tăng trưởng nhanh?",
    a: "Sau 20 năm Đổi mới, Việt Nam vẫn nằm trong nhóm nước kém phát triển. Đại hội X xác định cần đẩy mạnh toàn diện công cuộc đổi mới, sớm đưa nước ta ra khỏi tình trạng kém phát triển. Việc gia nhập WTO cùng năm 2006 mở ra cơ hội thu hút FDI và hội nhập sâu rộng để đạt mục tiêu này.",
  },
  {
    q: "Những 'mặt trái' lớn nhất của giai đoạn tăng trưởng nóng 2006–2010 là gì?",
    a: "Lạm phát tăng cao, kinh tế vĩ mô bất ổn (đặc biệt sau khủng hoảng tài chính 2008), tăng trưởng dựa vào chiều rộng — tài nguyên, lao động giá rẻ, vốn đầu tư — thiếu chiều sâu về chất lượng và năng lực cạnh tranh. Đồng thời nảy sinh vấn đề xã hội, môi trường và suy thoái đạo đức.",
  },
  {
    q: "Đại hội XI (2011) đã điều chỉnh mô hình phát triển như thế nào?",
    a: "Cương lĩnh 2011 khẳng định nguyên tắc 'Phát triển nhanh gắn liền với phát triển bền vững'. Đảng quyết định đổi mới mô hình tăng trưởng, cơ cấu lại nền kinh tế — chuyển từ tăng trưởng số lượng sang chất lượng, năng suất, hiệu quả; đồng thời thực hiện 3 đột phá chiến lược về thể chế, nguồn nhân lực và hạ tầng.",
  },
  {
    q: "Bài học này có thể áp dụng cho cá nhân sinh viên ra sao?",
    a: "Tránh học vẹt, chạy điểm — thay vào đó hiểu bản chất, tích luỹ kỹ năng. Khi cảm thấy mệt mỏi kéo dài, mất cảm hứng, hãy 'cơ cấu lại' lịch học và sinh hoạt. Áp dụng 3 đột phá cá nhân: kỷ luật bản thân (thể chế), sức khoẻ và công cụ (hạ tầng), tự học liên tục (nhân lực).",
  },
  {
    q: "'Đi xa nhất' khác với 'đi nhanh nhất' ở điểm nào?",
    a: "Đi nhanh tập trung vào tốc độ ngắn hạn, dễ đánh đổi nền tảng. Đi xa đặt mục tiêu trên nền móng dài hạn — đạo đức, sức khoẻ, năng lực cốt lõi. Người đi xa biết khi nào cần dừng, điều chỉnh và xây lại nền tảng để hành trình tiếp tục bền vững.",
  },
  {
    q: "Vì sao 'liêm chính học thuật' liên quan đến chủ đề tăng trưởng bền vững?",
    a: "Liêm chính học thuật chính là 'phát triển theo chiều sâu' trong học tập — từ chối thành tích ảo (đạo văn, gian lận) để xây dựng năng lực thật. Đó là phiên bản cá nhân của bài học mà Đảng đã rút ra: muốn bền vững, phải dũng cảm chọn chất lượng thay vì số lượng.",
  },
];

const COMMITMENTS = [
  "Toàn bộ nội dung trình bày được xây dựng dựa trên giáo trình Lịch sử Đảng Cộng sản Việt Nam và các văn kiện chính thức của Đại hội X (2006), Đại hội XI (2011).",
  "Mọi trích dẫn, số liệu, nguyên văn nghị quyết đều được dẫn nguồn rõ ràng, không cắt xén làm sai lệch ý nghĩa gốc.",
  "Không sao chép nguyên văn tài liệu của người khác mà không ghi nguồn; các phần phân tích, liên hệ thực tiễn là quan điểm và lập luận của chính nhóm.",
  "Không sử dụng AI để tạo nội dung học thuật rồi nộp như sản phẩm hoàn toàn của mình; AI (nếu có) chỉ đóng vai trò hỗ trợ trình bày, đã được kiểm chứng và biên tập lại.",
  "Sẵn sàng chịu trách nhiệm trước giảng viên và tập thể lớp về tính trung thực của bài thuyết trình này.",
];
