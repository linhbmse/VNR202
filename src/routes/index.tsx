/* eslint-disable prettier/prettier */
import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import { StarSeal } from "@/components/StarSeal";
import { Reveal } from "@/components/Reveal";
import { Particles } from "@/components/Particles";
import { TiltCard } from "@/components/TiltCard";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Lịch sử Đảng Cộng sản Việt Nam" },
      {
        name: "description",
        content:
          "Dung hoà giữa tăng trưởng và xử lý mặt trái — Bài học từ Đại hội X đến Đại hội XIII của Đảng Cộng sản Việt Nam, vận dụng vào cá nhân và tổ chức.",
      },
      { property: "og:title", content: "Phát triển nhanh nhưng bền vững" },
      {
        property: "og:description",
        content: "Bài học Lịch sử Đảng và vận dụng thực tiễn cho cá nhân, tổ chức.",
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

        <div
          className="absolute inset-0 flex items-center justify-center pointer-events-none"
          style={{
            transform: `translateY(${scrollY * 0.3}px) scale(${1 + scrollY * 0.0005})`,
          }}
        >
          <StarSeal size={520} className="star-pulse opacity-25" />
        </div>

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
            Lịch sử Đảng Cộng sản Việt Nam · Đại hội X — XIII
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
          </div>
        </div>

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
                01 · Thực trạng
              </div>
              <h3 className="text-2xl md:text-3xl font-bold mb-4 text-[var(--ink)]">
                Thời đại của "Tốc độ" và "Thành tích"
              </h3>
              <p className="text-[var(--muted-foreground)] leading-relaxed text-base mb-4">
                Trong học tập, công việc và phát triển cá nhân hiện nay, con người thường có xu
                hướng ưu tiên <em className="text-[var(--crimson)] not-italic font-semibold">tốc độ</em>{" "}
                và <em className="text-[var(--crimson)] not-italic font-semibold">thành tích</em>{" "}
                nhằm đạt kết quả nhanh nhất.
              </p>
              <div className="mt-6 pt-6 border-t border-[var(--border)] space-y-2 text-sm text-[var(--muted-foreground)]">
                <p>⚠ Mất cân bằng giữa <strong>chất lượng</strong> và <strong>số lượng</strong>.</p>
                <p>⚠ Gia tăng <strong>áp lực</strong> và <strong>rủi ro</strong>.</p>
                <p>⚠ Vấn đề về <strong>đạo đức, môi trường</strong> và tính bền vững.</p>
              </div>
            </TiltCard>
          </Reveal>

          <Reveal delay={150}>
            <TiltCard className="p-8 md:p-10 h-full rounded-sm" style={{ background: "var(--gradient-flag)" }}>
              <div className="text-[var(--gold-soft)] text-xs tracking-[0.3em] uppercase mb-3">
                02 · Câu hỏi chiến lược
              </div>
              <h3 className="text-2xl md:text-3xl font-bold mb-6" style={{ color: "oklch(0.96 0.05 88)" }}>
                Hai câu hỏi cốt lõi
              </h3>
              <ul className="space-y-5 text-[oklch(0.92_0.04_85)]">
                <li className="flex gap-4">
                  <StarSeal size={28} className="shrink-0 mt-1" />
                  <span>
                    Làm thế nào vừa <strong>phát triển nhanh</strong> mà không đánh đổi yếu tố nền
                    tảng cốt lõi?
                  </span>
                </li>
                <li className="flex gap-4">
                  <StarSeal size={28} className="shrink-0 mt-1" />
                  <span>
                    Đâu là giới hạn giữa <strong>"tăng trưởng cần thiết"</strong> và{" "}
                    <strong>"hệ quả độc hại"</strong> cần kiểm soát?
                  </span>
                </li>
              </ul>
            </TiltCard>
          </Reveal>
        </div>

        <Reveal delay={300}>
          <div className="mt-16 text-center max-w-3xl mx-auto">
            <div className="divider-ornament mb-6">✦</div>
            <p className="font-display italic text-xl md:text-2xl text-[var(--crimson)]">
              "Thực tiễn phát triển của Việt Nam — đặc biệt từ Đại hội X đến Đại hội XIII — đã cung
              cấp những bài học sâu sắc về mối quan hệ giữa tăng trưởng nhanh và phát triển bền vững."
            </p>
          </div>
        </Reveal>
      </Section>

      {/* ============ PHẦN 2: CƠ SỞ LÝ THUYẾT ============ */}
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
                Bài học lịch sử <span className="text-[var(--crimson)]">Đại hội X — XIII</span>
              </h2>
              <div className="divider-ornament mt-6">★</div>
            </div>
          </Reveal>

          <div className="relative preserve-3d">
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
              title="Đại hội X — Tăng trưởng nhanh & hội nhập"
              imageSrc="https://resource.kinhtedothi.vn/resources2025/1/users/171/t6-1768443258.jpg"
              imageAlt="Hình minh họa giai đoạn Đại hội X"
              body={
                <>
                  Việt Nam bước vào giai đoạn <strong>đẩy mạnh đổi mới toàn diện</strong> và hội
                  nhập quốc tế sâu rộng. Năm 2007, gia nhập <strong>WTO</strong> — bước ngoặt mở
                  rộng quan hệ quốc tế và nâng cao vị thế toàn cầu. Nền kinh tế đạt mức tăng trưởng
                  cao và liên tục.
                </>
              }
            />

            <TimelineNode
              year="2008"
              side="right"
              title="Mặt trái lộ diện — Khủng hoảng tài chính toàn cầu"
              imageSrc="https://statics.tititada.com/News/20240810/nhin-lai-cuoc-khung-hoang-tai-chinh-2007-2008.png"
              imageAlt="Hình minh họa khủng hoảng tài chính 2008"
              body={
                <ul className="space-y-2 text-sm md:text-base">
                  <li>
                    <strong className="text-[var(--crimson)]">Kinh tế:</strong> tăng trưởng theo
                    chiều rộng, năng suất thấp, phụ thuộc vốn và tài nguyên.
                  </li>
                  <li>
                    <strong className="text-[var(--crimson)]">Xã hội:</strong> khoảng cách giàu
                    nghèo gia tăng, áp lực việc làm và an sinh.
                  </li>
                  <li>
                    <strong className="text-[var(--crimson)]">Môi trường & quản lý:</strong> ô
                    nhiễm, khai thác quá mức; tham nhũng, lãng phí.
                  </li>
                </ul>
              }
              accent
            />

            <TimelineNode
              year="2011"
              side="left"
              title="Đại hội XI — Điều chỉnh chiến lược"
              imageSrc="https://cdncongthuong.quangtrung.vn/static_files/lehuy/images/2026/01/16/lan-11-9660.png"
              imageAlt="Hình minh họa định hướng phát triển bền vững"
              body={
                <>
                  Cương lĩnh 2011 khẳng định nguyên tắc:{" "}
                  <em className="text-[var(--crimson)] not-italic font-semibold">
                    "Phát triển nhanh gắn liền với phát triển bền vững"
                  </em>
                  . Đổi mới mô hình tăng trưởng — chuyển từ <strong>chiều rộng</strong> sang{" "}
                  <strong>chiều sâu</strong>, dựa trên khoa học – công nghệ và đổi mới sáng tạo.
                </>
              }
            />

            <TimelineNode
              year="XII"
              side="right"
              title="Hài hoà các mối quan hệ lớn"
              imageSrc="https://lh3.googleusercontent.com/proxy/pUXnegwFSzbNpw88S_QIVruqNLtj7DuhQI0xzS_Rm1CL-WNjhFx6dn1O--TRot4w3BCxZyen8MsTHmwgypOcnDm9xiK4bocNnXUwMM3GiCMSf907tXFIg0GgThgzKd-zrWbj1hU"
              imageAlt="Hình minh họa các mối quan hệ lớn"
              body={
                <ul className="space-y-2 text-sm md:text-base">
                  <li>⚖ <strong>Kinh tế</strong> — <strong>xã hội</strong> — <strong>môi trường</strong></li>
                  <li>⚖ <strong>Tăng trưởng</strong> — <strong>công bằng</strong></li>
                  <li>⚖ <strong>Độc lập</strong> — <strong>hội nhập</strong></li>
                </ul>
              }
            />

            <TimelineNode
              year="XIII"
              side="left"
              title="Tầm nhìn 2045 — Kinh tế số & Nhân lực chất lượng cao"
              imageSrc="https://s-aicmscdn.vietnamhoinhap.vn/vnhn-media/23/4/15/amhc.jpg"
              imageAlt="Hình minh họa tầm nhìn 2045"
              body={
                <>
                  Đại hội XIII nhấn mạnh phát triển <strong>kinh tế số</strong>, nâng cao chất
                  lượng <strong>nguồn nhân lực</strong> để tạo đà phát triển bền vững đến năm
                  2045 — khát vọng đưa Việt Nam trở thành nước phát triển, thu nhập cao.
                </>
              }
              accent
            />
          </div>
        </div>
      </section>

      {/* ============ PHẦN 3: VẬN DỤNG THỰC TIỄN ============ */}
      <Section
        id="van-dung"
        label="Phần III"
        title="Vận dụng vào thực tiễn"
        subtitle="Từ vĩ mô quốc gia đến vi mô cá nhân & tổ chức"
      >
        <div className="grid md:grid-cols-3 gap-6">
          {[
            {
              icon: "📚",
              title: "Trong học tập",
              fast: "Chạy theo điểm số, học 'tủ', học vẹt để thi qua môn.",
              slow: "Hiểu bản chất, tích luỹ kiến thức nền tảng vững.",
              warn: "Lỗ hổng kiến thức — ra trường dễ bị đào thải.",
            },
            {
              icon: "💼",
              title: "Trong công việc",
              fast: "Cày KPI, ôm nhiều dự án cùng lúc để mau thăng tiến.",
              slow: "Ưu tiên chiều sâu chuyên môn, cân bằng cuộc sống.",
              warn: "Bỏ qua chất lượng — sai sót và kiệt sức (burnout).",
            },
            {
              icon: "🚀",
              title: "Trong tổ chức",
              fast: "Mở rộng nhanh, 'đốt tiền' chạy quảng cáo, bỏ qua quy trình.",
              slow: "Hoàn thiện sản phẩm và văn hoá cốt lõi trước khi mở rộng.",
              warn: "Khủng hoảng nội bộ, mất uy tín với khách hàng.",
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
                Cảnh báo sớm
              </div>
              <h3
                className="font-display text-3xl md:text-4xl font-bold mb-6"
                style={{ color: "oklch(0.96 0.05 88)" }}
              >
                Khi nào cần chậm lại để điều chỉnh?
              </h3>
              <p className="text-[oklch(0.92_0.04_85)] leading-relaxed text-lg">
                Khi sự phát triển đi kèm với <strong>chất lượng giảm sút</strong>,{" "}
                <strong>áp lực tăng cao</strong> và <strong>sai sót xuất hiện nhiều</strong> — đó
                chính là lúc cần <em className="shimmer-text not-italic font-semibold">"cơ cấu lại"</em>{" "}
                thói quen, loại bỏ việc không tạo giá trị lõi và tập trung phát triển{" "}
                <strong className="shimmer-text">theo chiều sâu</strong>.
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
            Tốc độ <span className="shimmer-text">+</span> Chất lượng{" "}
            <span className="shimmer-text">+</span> Bền vững
          </p>
        </Reveal>

        <div className="grid md:grid-cols-3 gap-6">
          {[
            {
              num: "I",
              title: "Xây nền tảng vững chắc",
              desc: "Liên tục đầu tư vào kiến thức, kỹ năng mềm và tư duy — thay vì chỉ chạy theo bề nổi.",
            },
            {
              num: "II",
              title: "Quản lý nhịp độ",
              desc: "Biết khi nào nên tăng tốc, khi nào cần dừng lại để ổn định và củng cố lực lượng.",
            },
            {
              num: "III",
              title: "Tự đánh giá thường xuyên",
              desc: "Liên tục rà soát bản thân để nhận diện và sửa chữa những sai lệch từ sớm.",
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
              Phát triển hiệu quả không phải là{" "}
              <span className="shimmer-text">đi nhanh nhất</span>,
              <br />
              mà là <span className="shimmer-text">đi bền vững nhất</span>.
            </p>
            <p
              className="mt-6 italic text-base md:text-lg"
              style={{ color: "oklch(0.85 0.04 80)" }}
            >
              Thành công lâu dài luôn phụ thuộc vào nền tảng vững chắc và khả năng thích ứng linh
              hoạt.
            </p>
          </div>
        </Reveal>
      </Section>

      {/* ============ CAM KẾT LIÊM CHÍNH HỌC THUẬT ============ */}
      <section
        id="liem-chinh"
        className="relative py-24 md:py-32 perspective-scene overflow-hidden"
        style={{ background: "var(--gradient-flag)" }}
      >
        <Particles count={15} />
        <div className="max-w-5xl mx-auto px-6 relative z-10">
          <Reveal>
            <div className="text-center mb-12">
              <div className="flex justify-center mb-6">
                <StarSeal size={70} className="star-pulse" />
              </div>
              <div
                className="text-xs tracking-[0.4em] uppercase mb-4"
                style={{ color: "var(--gold-soft)" }}
              >
                Phụ lục · Cam kết
              </div>
              <h2
                className="font-display text-4xl md:text-6xl font-bold mb-4"
                style={{ color: "oklch(0.96 0.05 88)" }}
              >
                Liêm chính <span className="shimmer-text italic">Học thuật</span>
              </h2>
              <p
                className="italic max-w-2xl mx-auto mt-4"
                style={{ color: "oklch(0.88 0.04 85)" }}
              >
                Cam kết về việc sử dụng AI có trách nhiệm trong bài thuyết trình này.
              </p>
              <div className="divider-ornament mt-6">✦</div>
            </div>
          </Reveal>

          <div className="grid md:grid-cols-2 gap-6">
            {INTEGRITY_PRINCIPLES.map((p, i) => (
              <Reveal key={p.code} delay={i * 120}>
                <TiltCard className="parchment p-7 md:p-8 h-full rounded-sm vintage-frame">
                  <div className="flex items-start gap-4 mb-4">
                    <div
                      className="shrink-0 w-14 h-14 rounded-sm flex items-center justify-center font-display font-black text-lg"
                      style={{
                        background: "var(--gradient-gold)",
                        color: "var(--ink)",
                        boxShadow: "var(--shadow-gold)",
                      }}
                    >
                      {p.code}
                    </div>
                    <div>
                      <div className="text-[var(--crimson)] text-xs tracking-[0.3em] uppercase mb-1">
                        Nguyên tắc
                      </div>
                      <h3 className="font-display text-2xl font-bold text-[var(--ink)]">
                        {p.title}
                      </h3>
                    </div>
                  </div>
                  <div className="text-[var(--muted-foreground)] leading-relaxed text-base">
                    {p.body}
                  </div>
                </TiltCard>
              </Reveal>
            ))}
          </div>

          {/* 4.4 — Three signals card (full width, highlighted) */}
          <Reveal delay={500}>
            <TiltCard className="mt-8 parchment p-8 md:p-12 rounded-sm vintage-frame">
              <div className="flex flex-col md:flex-row md:items-start gap-6 mb-6">
                <div
                  className="shrink-0 w-16 h-16 rounded-sm flex items-center justify-center font-display font-black text-xl"
                  style={{
                    background: "var(--gradient-flag)",
                    color: "oklch(0.96 0.05 88)",
                    boxShadow: "var(--shadow-gold)",
                  }}
                >
                  4.4
                </div>
                <div>
                  <div className="text-[var(--crimson)] text-xs tracking-[0.3em] uppercase mb-1">
                    Cốt lõi
                  </div>
                  <h3 className="font-display text-2xl md:text-3xl font-bold text-[var(--ink)] mb-2">
                    Liêm chính học thuật
                  </h3>
                  <p className="text-[var(--muted-foreground)] italic">
                    Đánh giá cụ thể qua 3 dấu hiệu sau:
                  </p>
                </div>
              </div>

              <ul className="space-y-4">
                {INTEGRITY_SIGNALS.map((s, i) => (
                  <li
                    key={i}
                    className="flex gap-4 items-start p-4 rounded-sm"
                    style={{ background: "oklch(0.96 0.02 82 / 0.6)" }}
                  >
                    <span
                      className="shrink-0 w-9 h-9 rounded-full flex items-center justify-center font-display font-bold text-sm"
                      style={{
                        background: "var(--gradient-gold)",
                        color: "var(--ink)",
                      }}
                    >
                      {i + 1}
                    </span>
                    <span className="leading-relaxed pt-1 text-[var(--ink)]">{s}</span>
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
                    Nhóm 2
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
  imageSrc,
  imageAlt,
  accent = false,
}: {
  year: string;
  title: string;
  body: React.ReactNode;
  side: "left" | "right";
  imageSrc?: string;
  imageAlt?: string;
  accent?: boolean;
}) {
  return (
    <Reveal>
      <div className="relative mb-16 md:mb-20 grid md:grid-cols-2 gap-8 items-start">
        <div className="absolute left-8 md:left-1/2 md:-translate-x-1/2 -translate-y-1/2 top-1/2 z-10">
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

        <div
          className={`pl-28 md:pl-0 ${
            side === "right"
              ? "md:col-start-2 md:row-start-1 md:pl-16"
              : "md:col-start-1 md:row-start-1 md:pr-16"
          }`}
        >
          <TiltCard className="parchment p-7 md:p-8 rounded-sm h-full">
            <h3 className="font-display text-xl md:text-2xl font-bold text-[var(--ink)] mb-3">
              {title}
            </h3>
            <div className="text-[var(--muted-foreground)] leading-relaxed">{body}</div>
          </TiltCard>
        </div>

        <div
          className={`pl-28 md:pl-0 ${
            side === "right"
              ? "md:col-start-1 md:row-start-1 md:pr-16"
              : "md:col-start-2 md:row-start-1 md:pl-16"
          }`}
        >
          <TiltCard className="parchment rounded-sm overflow-hidden h-full">
            {imageSrc ? (
              <img
                src={imageSrc}
                alt={imageAlt || `Hình minh họa cho mốc ${year}`}
                className="w-full h-full object-cover min-h-52"
                loading="lazy"
              />
            ) : (
              <div className="w-full h-full min-h-52 flex items-center justify-center px-5 text-center border-2 border-dashed border-[var(--border)] text-[var(--muted-foreground)] text-sm italic">
                Dán link ảnh vào imageSrc của mốc {year}
              </div>
            )}
          </TiltCard>
        </div>
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

const INTEGRITY_PRINCIPLES: { code: string; title: string; body: React.ReactNode }[] = [
  {
    code: "4.1",
    title: "Minh bạch",
    body: (
      <>
        Có slide / phụ lục <strong>"AI Usage"</strong> liệt kê công cụ, mục đích, prompt chính,
        kết quả nhận được và phần nhóm đã chỉnh sửa. <strong>Chia sẻ link đoạn chat</strong> đã sử
        dụng để giảng viên có thể đối chiếu.
      </>
    ),
  },
  {
    code: "4.2",
    title: "Có trách nhiệm",
    body: (
      <>
        <strong>Kiểm chứng</strong> mọi thông tin do AI sinh ra bằng giáo trình LLCT, nghị quyết
        và các văn bản chính thống. Nhóm <strong>chịu trách nhiệm</strong> hoàn toàn về nội dung
        cuối cùng được trình bày.
      </>
    ),
  },
  {
    code: "4.3",
    title: "Sáng tạo",
    body: (
      <>
        AI chỉ đóng vai trò <strong>hỗ trợ</strong> (tạo sơ đồ, quiz, video, chatbot…),{" "}
        <strong>không thay thế toàn bộ</strong> quá trình tư duy, biên soạn và sáng tạo của nhóm.
      </>
    ),
  },
  {
    code: "★",
    title: "Tinh thần chung",
    body: (
      <>
        Sử dụng AI như một <em>công cụ học tập</em> — để khai mở tư duy, không phải để né tránh nỗ
        lực. Mỗi sản phẩm cuối cùng đều phải mang dấu ấn lao động trí tuệ thực sự của sinh viên.
      </>
    ),
  },
];

const INTEGRITY_SIGNALS = [
  "Có cam kết bằng văn bản (slide / phụ lục) khẳng định không để AI làm thay hoàn toàn.",
  "Có phân định rõ phần AI output và phần sinh viên chỉnh sửa / biên soạn.",
  "Có đối chiếu nguồn chính thống cho mọi thông tin do AI sinh ra.",
];
