import { Copy, ExternalLink, ChevronDown } from "lucide-react";
import type { Decision } from "@/types";

export function DecisionCard({ decision }: { decision: Decision }) {
  return (
    <article className="space-y-2 rounded-md border border-border bg-white p-4 shadow-sm mb-4">
      <div className="space-y-0.5">
        <div className="flex flex-wrap items-center gap-2">
          <p className="text-sm font-semibold text-foreground">{decision.processNumber}</p>
          <span className="inline-flex items-center rounded-[4px] bg-neutral-100 px-2 py-0.5 text-[11px] font-semibold text-neutral-500">{decision.court}</span>
          <span className="px-2.5 py-1 text-xs font-semibold rounded-md bg-[#DCFCE7] text-[#166534]">{decision.relevance}</span>
        </div>
        <p className="text-xs text-muted-foreground">{decision.chamber}</p>
      </div>
      <h2 className="font-serif text-base font-medium leading-tight text-foreground">{decision.title}</h2>
      <section className="break-words mt-3 pt-3 border-t border-border">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <p className="text-xs text-muted-foreground">Tema: <span className="font-medium text-foreground">{decision.theme}</span></p>
          <div className="flex items-center gap-3 text-xs font-medium text-foreground">
            <button className="inline-flex items-center gap-1.5 hover:underline"><Copy className="size-3.5" /> Copiar</button>
            <button className="inline-flex items-center gap-1.5 hover:underline">Ver mais <ChevronDown className="size-3.5" /></button>
            <a href={decision.originalLink} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1.5 hover:underline">Ver original <ExternalLink className="size-3.5" /></a>
          </div>
        </div>
        <p className="mt-3 text-xs leading-relaxed text-muted-foreground">{decision.date} — {decision.snippet}</p>
      </section>
    </article>
  );
}