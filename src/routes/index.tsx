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

const NAV_TABS = [
  { id: "dau-trang", label: "Tổng quan" },
  { id: "mo-dau", label: "Đặt vấn đề" },
  { id: "co-so-ly-thuyet", label: "Cơ sở lí thuyết" },
  { id: "van-dung", label: "Cơ sở vận dụng" },
  { id: "giai-phap", label: "Giải pháp/Bài học" },
  { id: "liem-chinh", label: "Phụ lục AI" },
];

const HEADER_SCROLL_OFFSET = -20;
const ACTIVE_TAB_SCROLL_OFFSET = 90;

function Index() {
  const heroRef = useRef<HTMLDivElement>(null);
  const [scrollY, setScrollY] = useState(0);
  const [activeTab, setActiveTab] = useState("dau-trang");

  useEffect(() => {
    const onScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const updateActiveTab = () => {
      const current = [...NAV_TABS]
        .map((tab) => {
          const section = document.getElementById(tab.id);
          if (!section) return null;

          const top = section.getBoundingClientRect().top + window.scrollY;
          return { id: tab.id, top };
        })
        .filter((section): section is { id: string; top: number } => section !== null)
        .filter((section) => window.scrollY + ACTIVE_TAB_SCROLL_OFFSET >= section.top)
        .pop();

      if (current?.id) {
        setActiveTab(current.id);
      }
    };

    updateActiveTab();
    window.addEventListener("scroll", updateActiveTab, { passive: true });
    window.addEventListener("resize", updateActiveTab);
    return () => {
      window.removeEventListener("scroll", updateActiveTab);
      window.removeEventListener("resize", updateActiveTab);
    };
  }, []);

  const scrollToSection = (id: string) => {
    const section = document.getElementById(id);
    if (!section) return;
    setActiveTab(id);
    const top = section.getBoundingClientRect().top + window.scrollY - HEADER_SCROLL_OFFSET;
    window.scrollTo({ top, behavior: "smooth" });
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <main className="min-h-screen overflow-x-hidden">
      <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md border-b" style={{ background: "oklch(0.15 0.04 28 / 0.72)", borderColor: "oklch(0.95 0.06 88 / 0.22)" }}>
        <nav className="max-w-6xl mx-auto w-full px-4 md:px-6 py-3 flex justify-center gap-2 md:gap-3 overflow-x-auto">
          {NAV_TABS.map((tab) => {
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                type="button"
                onClick={() => scrollToSection(tab.id)}
                className="nav-pill px-4 py-2 rounded-sm text-xs md:text-sm font-semibold tracking-[0.12em] uppercase whitespace-nowrap transition-all duration-300"
                style={{
                  background: isActive ? "var(--gradient-gold)" : "oklch(0.2 0.04 28 / 0.35)",
                  color: isActive ? "var(--ink)" : "oklch(0.92 0.04 85)",
                  boxShadow: isActive ? "var(--shadow-gold)" : "none",
                }}
              >
                {tab.label}
              </button>
            );
          })}
        </nav>
      </header>

      {/* ============ HERO ============ */}
      <section
        id="dau-trang"
        ref={heroRef}
        className="relative min-h-screen flex items-center justify-center perspective-scene"
        style={{ background: "var(--gradient-flag)", scrollMarginTop: `${HEADER_SCROLL_OFFSET + 8}px` }}
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
            className="hero-title font-display text-5xl sm:text-7xl md:text-8xl font-black leading-[1.05] mb-8"
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
              onClick={(e) => {
                e.preventDefault();
                scrollToSection("mo-dau");
              }}
              className="cta-glow px-8 py-4 rounded-sm font-display text-base tracking-wider uppercase transition-all duration-500 hover:translate-y-[-3px]"
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
      </section>

      {/* ============ PHẦN 1: ĐẶT VẤN ĐỀ ============ */}
      <Section id="mo-dau" label="Phần I" title="Đặt vấn đề">
        <div className="grid md:grid-cols-2 gap-8">
          <Reveal>
            <TiltCard className="parchment p-8 md:p-10 h-full rounded-sm">
              <div className="text-crimson text-xs tracking-[0.3em] uppercase mb-3">
                01 · Thực trạng
              </div>
              <h3 className="text-2xl md:text-3xl font-bold mb-4 text-ink">
                Thời đại của "Tốc độ" và "Thành tích"
              </h3>
              <p className="text-muted-foreground leading-relaxed text-base mb-4">
                Trong học tập, công việc và phát triển cá nhân hiện nay, con người thường có xu
                hướng ưu tiên <em className="text-crimson not-italic font-semibold">tốc độ</em>{" "}
                và <em className="text-crimson not-italic font-semibold">thành tích</em>{" "}
                nhằm đạt kết quả nhanh nhất.
              </p>
              <div className="mt-6 pt-6 border-t border-border space-y-2 text-sm text-muted-foreground">
                <p>⚠ Mất cân bằng giữa <strong>chất lượng</strong> và <strong>số lượng</strong>.</p>
                <p>⚠ Gia tăng <strong>áp lực</strong> và <strong>rủi ro</strong>.</p>
                <p>⚠ Vấn đề về <strong>đạo đức, môi trường</strong> và tính bền vững.</p>
              </div>
            </TiltCard>
          </Reveal>

          <Reveal delay={150}>
            <TiltCard className="p-8 md:p-10 h-full rounded-sm" style={{ background: "var(--gradient-flag)" }}>
              <div className="text-gold-soft text-xs tracking-[0.3em] uppercase mb-3">
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
            <p className="font-display italic text-xl md:text-2xl text-crimson">
              "Thực tiễn phát triển của Việt Nam — đặc biệt từ Đại hội X đến Đại hội XIII — đã cung
              cấp những bài học sâu sắc về mối quan hệ giữa tăng trưởng nhanh và phát triển bền vững."
            </p>
          </div>
        </Reveal>
      </Section>

      {/* ============ PHẦN 2: CƠ SỞ LÝ THUYẾT ============ */}
      <section
        id="co-so-ly-thuyet"
        className="relative py-24 md:py-32 perspective-scene"
        style={{
          scrollMarginTop: `${HEADER_SCROLL_OFFSET + 8}px`,
          background:
            "linear-gradient(180deg, oklch(0.97 0.015 80) 0%, oklch(0.93 0.03 78) 100%)",
        }}
      >
        <div className="max-w-6xl mx-auto px-6">
          <Reveal>
            <div className="text-center mb-20">
              <div className="text-crimson text-xs tracking-[0.4em] uppercase mb-4">
                Phần II · Cơ sở lý thuyết
              </div>
              <h2 className="font-display text-4xl md:text-6xl font-bold text-ink mb-4">
                Bài học lịch sử <span className="text-crimson">Đại hội X — XIII</span>
              </h2>
              <div className="divider-ornament mt-6">★</div>
            </div>
          </Reveal>

          <Reveal delay={150}>
            <TiltCard className="parchment p-8 md:p-10 rounded-sm mb-16 border-l-4" style={{ borderLeftColor: "var(--crimson)" }}>
              <div className="text-crimson text-xs tracking-[0.3em] uppercase mb-4 font-semibold">
                📍 Bối cảnh lịch sử
              </div>
              <h3 className="font-display text-2xl md:text-3xl font-bold text-ink mb-4">
                Đại hội đại biểu toàn quốc lần thứ X
              </h3>
              <p className="text-sm md:text-base text-muted-foreground mb-3 italic">
                Tháng 4 năm 2006 – Dấu ấn 20 năm Đổi mới
              </p>
              <div className="pt-4 border-t border-border">
                <p className="text-muted-foreground leading-relaxed text-base">
                  <span className="text-crimson font-semibold">"</span>Nâng cao năng lực lãnh đạo và sức chiến đấu của Đảng, phát huy sức mạnh toàn dân tộc, đẩy mạnh toàn diện công cuộc đổi mới, sớm đưa nước ta ra khỏi tình trạng kém phát triển.<span className="text-crimson font-semibold">"</span>
                </p>
              </div>
            </TiltCard>
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
              imageSrc="https://fhsc.com.vn/wp-content/uploads/2025/04/Khung-hoang-tai-chinh-nam-2008-768x432.jpg"
              imageAlt="Hình minh họa khủng hoảng tài chính 2008"
              body={
                <ul className="space-y-2 text-sm md:text-base">
                  <li>
                    <strong className="text-crimson">Kinh tế:</strong> tăng trưởng theo
                    chiều rộng, năng suất thấp, phụ thuộc vốn và tài nguyên.
                  </li>
                  <li>
                    <strong className="text-crimson">Xã hội:</strong> khoảng cách giàu
                    nghèo gia tăng, áp lực việc làm và an sinh.
                  </li>
                  <li>
                    <strong className="text-crimson">Môi trường & quản lý:</strong> ô
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
                  <em className="text-crimson not-italic font-semibold">
                    "Phát triển nhanh gắn liền với phát triển bền vững"
                  </em>
                  . Đổi mới mô hình tăng trưởng — chuyển từ <strong>chiều rộng</strong> sang{" "}
                  <strong>chiều sâu</strong>, dựa trên khoa học – công nghệ và đổi mới sáng tạo.
                </>
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
                Phụ lục · Minh bạch AI
              </div>
              <h2
                className="font-display text-4xl md:text-6xl font-bold mb-4"
                style={{ color: "oklch(0.96 0.05 88)" }}
              >
                Bảng sử dụng <span className="shimmer-text not-italic inline-flex align-middle leading-[1.12] pt-[0.08em] pb-[0.1em] overflow-visible">AI</span>
              </h2>
              <p
                className="italic max-w-2xl mx-auto mt-4"
                style={{ color: "oklch(0.88 0.04 85)" }}
              >
                Thông tin minh bạch về các công cụ AI đã sử dụng trong quá trình làm dự án.
              </p>
              <div className="divider-ornament mt-6">✦</div>
            </div>
          </Reveal>

          <Reveal delay={200}>
            <TiltCard
              className="rounded-sm overflow-hidden border"
              style={{
                borderColor: "oklch(0.95 0.06 88 / 0.25)",
                background:
                  "linear-gradient(135deg, oklch(0.16 0.03 250 / 0.62), oklch(0.12 0.04 250 / 0.72))",
                backdropFilter: "blur(8px)",
              }}
            >


              <div className="grid grid-cols-[1.2fr_1.8fr] px-6 md:px-8 py-4 text-sm md:text-base font-semibold border-b" style={{ borderColor: "oklch(0.95 0.06 88 / 0.2)", color: "oklch(0.94 0.03 88)" }}>
                <div>Công cụ AI</div>
                <div>Mục đích sử dụng</div>
              </div>

              {AI_USAGE_TOOLS.map((tool, index) => (
                <div
                  key={tool.name}
                  className="grid grid-cols-[1.2fr_1.8fr] px-6 md:px-8 py-5 md:py-6 items-center"
                  style={{
                    borderTop: index === 0 ? "none" : "1px solid oklch(0.95 0.06 88 / 0.18)",
                    color: "oklch(0.93 0.03 88)",
                  }}
                >
                  <div className="font-display text-xl md:text-2xl font-bold">{tool.name}</div>
                  <div className="text-base md:text-lg leading-relaxed">{tool.purpose}</div>
                </div>
              ))}
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

      <button
        type="button"
        onClick={scrollToTop}
        aria-label="Cuộn lên đầu trang"
        className="fixed right-5 md:right-8 bottom-5 md:bottom-8 z-50 rounded-sm px-4 py-3 font-display text-sm tracking-[0.15em] uppercase transition-all duration-300"
        style={{
          background: "var(--gradient-gold)",
          color: "var(--ink)",
          boxShadow: "var(--shadow-gold)",
          opacity: scrollY > 280 ? 1 : 0,
          transform: `translateY(${scrollY > 280 ? 0 : 18}px)`,
          pointerEvents: scrollY > 280 ? "auto" : "none",
        }}
      >
        ↑ Lên đầu
      </button>
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
          ? {
            background: "linear-gradient(180deg, oklch(0.20 0.04 28) 0%, oklch(0.14 0.04 28) 100%)",
            scrollMarginTop: `${HEADER_SCROLL_OFFSET + 8}px`,
          }
          : { scrollMarginTop: `${HEADER_SCROLL_OFFSET + 8}px` }
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
            className="timeline-year w-16 h-16 md:w-20 md:h-20 rounded-full flex items-center justify-center font-display font-black text-sm md:text-base shadow-lg"
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
          className={`pl-28 md:pl-0 ${side === "right"
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
          className={`pl-28 md:pl-0 ${side === "right"
            ? "md:col-start-1 md:row-start-1 md:pr-16"
            : "md:col-start-2 md:row-start-1 md:pl-16"
            }`}
        >
          <TiltCard className="parchment rounded-sm overflow-hidden h-full">
            {imageSrc ? (
              <img
                src={imageSrc}
                alt={imageAlt || `Hình minh họa cho mốc ${year}`}
                className="timeline-image w-full h-full object-cover min-h-52"
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

const AI_USAGE_TOOLS = [
  {
    name: "Gemini",
    purpose: "Phân tích giáo trình, tóm tắt dữ liệu.",
  },
  {
    name: "Lovable + Copilot",
    purpose: "Thiết kế và làm giao diện web.",
  },
];
