export default function PageHeader({
  title,
  subtitle,
}: {
  title: string;
  subtitle: string;
}) {
  return (
    <section className="relative w-full pt-10 pb-20 px-6 text-center text-white overflow-hidden bg-[#010304]">

      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0 bg-[linear-gradient(to_bottom,#3d68e4_0%,#294aab_32%,#112251_62%,#050b19_82%,#010304_100%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(120%_80%_at_50%_0%,rgba(140,173,255,0.28)_0%,rgba(76,113,229,0.14)_34%,rgba(0,0,0,0)_72%)]"></div>
        <div className="absolute inset-0 bg-[url('/noise.jpg')] bg-[length:120px] opacity-26 mix-blend-soft-light"></div>
        <div className="absolute inset-0 bg-[url('/noise.jpg')] bg-[length:55px] opacity-12 mix-blend-overlay"></div>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto">
        <h1 className="text-[56px] mb-4 font-bold bg-linear-180 from-white to-[#a2a2a2] text-transparent bg-clip-text">{title}</h1>
        <p className=" text-[#999] text-[18px]">
          {subtitle}
        </p>
      </div>
    </section>
  );
}