
import Link from "next/link";

export default function Logo() {
  return (
    <Link href="/" className="group relative z-50">
      <div className="flex items-center gap-1 font-bold text-xl tracking-tighter">
        <span className="text-gold text-2xl group-hover:-translate-y-1 transition-transform duration-300">
          R
        </span>
        <span className="text-slate-100 text-2xl group-hover:translate-y-1 transition-transform duration-300">
          M
        </span>
        <div className="h-1.5 w-1.5 rounded-full bg-gold ml-0.5 animate-pulse" />
      </div>
    </Link>
  );
}