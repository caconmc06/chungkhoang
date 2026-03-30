export default function Home() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-gradient-to-br from-slate-900 to-black text-white">
      <div className="text-center px-6">
        
        <h1 className="text-5xl font-bold bg-gradient-to-r from-cyan-400 to-indigo-500 text-transparent bg-clip-text mb-4">
          caconmc.shop
        </h1>

        <p className="text-gray-400 mb-8 text-lg">
          Website đang được phát triển 🚀 <br />
          Sắp ra mắt trong thời gian tới
        </p>

        <Countdown />

        <button className="mt-8 px-6 py-3 rounded-full bg-gradient-to-r from-indigo-500 to-cyan-400 hover:scale-105 transition">
          Notify Me
        </button>

        <p className="text-xs text-gray-500 mt-6">
          © 2026 Cá con MC • Powered by Next.js
        </p>

      </div>
    </main>
  );
}

function Countdown() {
  return (
    <div className="flex justify-center gap-4">
      <TimeBox label="Ngày" value="07" />
      <TimeBox label="Giờ" value="12" />
      <TimeBox label="Phút" value="45" />
      <TimeBox label="Giây" value="30" />
    </div>
  );
}

function TimeBox({ label, value }: any) {
  return (
    <div className="bg-white/5 px-4 py-3 rounded-xl min-w-[70px]">
      <div className="text-2xl font-bold">{value}</div>
      <div className="text-xs text-gray-400">{label}</div>
    </div>
  );
}
