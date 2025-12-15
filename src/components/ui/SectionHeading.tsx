export default function SectionHeading({
  number,
  title,
}: {
  number: string;
  title: string;
}) {
  return (
    <div className="flex items-center gap-4 mb-10">
      <span className="text-gold font-mono text-xl md:text-2xl">{number}.</span>
      <h2 className="text-slate-100 text-2xl md:text-3xl font-bold whitespace-nowrap">
        {title}
      </h2>
      <div className="h-[1px] bg-navy-600 w-full max-w-[300px]" />
    </div>
  );
}