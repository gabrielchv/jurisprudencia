"use client";

import { useState, useRef } from "react";
import Link from "next/link";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { useOutsideClick } from "@/hooks/use-outside-click";
import { COURTS, CHAMBERS, PERIODS } from "@/lib/constants";

export default function SearchPage() {
  const [query, setQuery] = useState("");
  const [selectedCourts, setSelectedCourts] = useState<string[]>(["stf"]);
  const [selectedChambers, setSelectedChambers] = useState<string[]>([]);
  const [period, setPeriod] = useState("all");

  const [isCourtOpen, setIsCourtOpen] = useState(false);
  const [isChamberOpen, setIsChamberOpen] = useState(false);
  const [isPeriodOpen, setIsPeriodOpen] = useState(false);

  const courtRef = useRef<HTMLDivElement>(null);
  const chamberRef = useRef<HTMLDivElement>(null);
  const periodRef = useRef<HTMLDivElement>(null);

  // Fecha os dropdowns ao clicar fora
  useOutsideClick(courtRef, () => setIsCourtOpen(false));
  useOutsideClick(chamberRef, () => setIsChamberOpen(false));
  useOutsideClick(periodRef, () => setIsPeriodOpen(false));

  const toggleCourt = (courtId: string) => {
    setSelectedCourts((prev) => {
      // Impede desselecionar o último tribunal para evitar busca vazia
      if (prev.includes(courtId) && prev.length === 1) return prev;
      return prev.includes(courtId) ? prev.filter((id) => id !== courtId) : [...prev, courtId];
    });
  };

  const toggleChamber = (chamber: string) => {
    setSelectedChambers((prev) =>
      prev.includes(chamber) ? prev.filter((c) => c !== chamber) : [...prev, chamber]
    );
  };

  // Resumo das pesquisas recentes (idêntico ao original)
  const recentSearches = [
    { title: "Peça", courts: ["STF", "STJ", "TJSP"], date: "28/05/2026", results: 149, href: "#" },
    { title: "dano moral por atraso em voo", courts: ["TJSP"], date: "28/05/2026", results: 58, href: "#" },
    { title: "2312032-56.2025.8.26.0000", courts: ["STF"], date: "28/05/2026", results: 13, href: "#" },
    { title: "ação individual proposta por sindicato gera litispendência em ação proprosta individualmente por advogado?", courts: ["TST"], date: "28/05/2026", results: 12, href: "#" },
    { title: "sindicato ingressou com ação de execução individual em face de sentença em ação coletiva promovida pelo mesmo sindicado. Posteriormente, a substituída entrou com a mesma ação particularmente com advogado. Réu alegou litispedência", courts: ["TST"], date: "28/05/2026", results: 39, href: "#" }
  ];

  return (
    <main className="flex min-h-screen flex-col bg-background">
      <div className="flex-1">
        <section className="bg-secondary">
          <Header isTransparent />
          <div className="mx-auto w-full max-w-5xl px-4 pb-16 pt-10 md:px-8 md:pb-24">
            <div className="mx-auto flex w-full max-w-3xl flex-col items-center gap-5">
              <h1 className="text-center font-serif text-3xl font-medium leading-tight md:text-5xl">
                O que você está pesquisando
              </h1>

              <form className="w-full space-y-4" onSubmit={(e) => e.preventDefault()}>
                <div className="mb-0 flex gap-2 rounded-lg border border-input bg-white p-2 md:mb-4">
                  <label htmlFor="search-query" className="sr-only">Assunto jurídico</label>
                  <input
                    id="search-query"
                    name="q"
                    type="text"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    className="h-10 w-full rounded-md border-none bg-transparent px-2 text-sm shadow-none outline-none"
                    placeholder="Descreva o assunto sobre o qual deseja pesquisar"
                  />
                  <button type="submit" className="btn-primary">Pesquisar</button>
                </div>

                <div className="flex flex-col gap-2 md:flex-row md:items-start md:justify-between">
                  <div className="order-2 w-full flex flex-col md:flex-row gap-2 md:order-1 md:w-auto md:flex-1">
                    
                    {/* DROPDOWN TRIBUNAIS */}
                    <div className="relative w-full" ref={courtRef}>
                      <button
                        type="button"
                        onClick={() => setIsCourtOpen(!isCourtOpen)}
                        className="inline-flex h-10 w-full min-w-0 cursor-pointer items-center justify-between rounded-md border border-input bg-white px-3 text-sm font-medium text-foreground"
                      >
                        <span className="truncate">{selectedCourts.map((c) => c.toUpperCase()).join(", ")}</span>
                        <span className="text-muted-foreground shrink-0" aria-hidden="true">▾</span>
                      </button>
                      {isCourtOpen && (
                        <div className="absolute top-12 z-40 w-full min-w-44 max-h-64 overflow-y-auto rounded-md border border-input bg-popover shadow-lg">
                          <div role="listbox">
                            {Object.entries(COURTS).map(([group, courts]) => (
                              <div key={group}>
                                {group !== "superiores" && <div className="my-1 border-t border-input"></div>}
                                <div className="px-2 py-1.5 text-xs font-semibold text-muted-foreground capitalize">{group}</div>
                                {courts.map((court) => (
                                  <div
                                    key={court.id}
                                    role="option"
                                    aria-selected={selectedCourts.includes(court.id)}
                                    onClick={() => toggleCourt(court.id)}
                                    className={`px-3 py-2 text-sm cursor-pointer hover:bg-muted ${
                                      selectedCourts.includes(court.id) ? "font-bold bg-muted/50" : ""
                                    }`}
                                  >
                                    {court.label}
                                  </div>
                                ))}
                              </div>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>

                    {/* DROPDOWN ÓRGÃOS JULGADORES */}
                    <div className="relative w-full" ref={chamberRef}>
                      <button
                        type="button"
                        onClick={() => setIsChamberOpen(!isChamberOpen)}
                        className="inline-flex h-10 w-full min-w-0 cursor-pointer items-center justify-between rounded-md border border-input bg-white px-3 text-sm font-medium text-foreground"
                      >
                        <span className="truncate">
                          {selectedChambers.length ? `${selectedChambers.length} selecionados` : "Todos os órgãos julgadores"}
                        </span>
                        <span className="text-muted-foreground shrink-0" aria-hidden="true">▾</span>
                      </button>
                      {isChamberOpen && (
                        <div className="absolute top-12 z-40 w-full min-w-64 max-h-64 overflow-y-auto rounded-md border border-input bg-popover shadow-lg">
                          <div role="listbox">
                            {selectedCourts.map((courtId) => {
                              const chambers = CHAMBERS[courtId] || [];
                              if (!chambers.length) return null;
                              return (
                                <div key={courtId}>
                                  <div className="px-2 py-1.5 text-xs font-semibold text-muted-foreground uppercase">{courtId}</div>
                                  {chambers.map((chamber) => (
                                    <div
                                      key={chamber}
                                      role="option"
                                      aria-selected={selectedChambers.includes(chamber)}
                                      onClick={() => toggleChamber(chamber)}
                                      className={`px-3 py-2 text-sm cursor-pointer hover:bg-muted whitespace-normal leading-snug ${
                                        selectedChambers.includes(chamber) ? "font-bold bg-muted/50" : ""
                                      }`}
                                    >
                                      {chamber}
                                    </div>
                                  ))}
                                </div>
                              );
                            })}
                          </div>
                        </div>
                      )}
                    </div>

                    {/* DROPDOWN PERÍODO */}
                    <div className="relative w-full" ref={periodRef}>
                      <button
                        type="button"
                        onClick={() => setIsPeriodOpen(!isPeriodOpen)}
                        className="inline-flex h-10 w-full cursor-pointer items-center justify-between rounded-md border border-input bg-white px-3 text-sm font-medium text-foreground"
                      >
                        <span className="truncate">{PERIODS.find((p) => p.id === period)?.label}</span>
                        <span className="text-muted-foreground" aria-hidden="true">▾</span>
                      </button>
                      {isPeriodOpen && (
                        <div className="absolute top-12 z-40 w-full min-w-60 rounded-md border border-input bg-popover shadow-lg">
                          <div role="listbox">
                            {PERIODS.map((p) => (
                              <div
                                key={p.id}
                                role="option"
                                aria-selected={period === p.id}
                                onClick={() => {
                                  setPeriod(p.id);
                                  setIsPeriodOpen(false);
                                }}
                                className={`px-3 py-2 text-sm cursor-pointer hover:bg-muted text-left ${
                                  period === p.id ? "font-bold bg-muted/50" : ""
                                }`}
                              >
                                {p.label}
                              </div>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>

                  </div>
                  
                  <p className="order-1 my-0 self-end px-4 pt-0.5 text-right text-[11px] leading-tight text-muted-foreground md:order-2 md:self-auto shrink-0">
                    ou <Link className="font-semibold text-foreground underline underline-offset-2 hover:no-underline" href="/petition?c=stf">envie uma peça</Link>
                  </p>
                </div>
              </form>
            </div>
          </div>
        </section>

        {/* LISTA DE PESQUISAS RECENTES */}
        <section className="mx-auto w-full max-w-5xl px-4 py-10 md:px-8 md:py-12">
          <div className="space-y-8">
            <section className="mx-auto w-full max-w-3xl space-y-4">
              <h3 className="text-base font-semibold text-foreground">Pesquisas recentes</h3>
              <div className="w-full">
                {recentSearches.map((search, index) => (
                  <div key={index} className={`pb-5 ${index > 0 ? "pt-5" : ""}`}>
                    <p className="text-[15px] font-medium leading-[1.4] text-foreground">
                      <Link href={search.href} className="hover:underline">{search.title}</Link>
                    </p>
                    <div className="mt-2 flex flex-wrap items-center gap-x-2.5 gap-y-1 text-[13px] text-neutral-500">
                      {search.courts.map((c) => (
                        <span key={c} className="inline-flex items-center rounded-[4px] bg-neutral-100 px-2 py-0.5 text-[11px] font-semibold leading-none text-neutral-500">
                          {c}
                        </span>
                      ))}
                      <span>{search.date}</span>
                      <span className="text-neutral-400" aria-hidden="true">•</span>
                      <span>{search.results} resultados</span>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          </div>
        </section>
      </div>
      <Footer />
    </main>
  );
}