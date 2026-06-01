export const COURTS = {
  superiores: [{ id: "stf", label: "STF" }, { id: "stj", label: "STJ" }, { id: "tst", label: "TST" }],
  federal: [{ id: "trf3", label: "TRF3" }, { id: "trf4", label: "TRF4" }],
  estaduais: [
    { id: "tjpr", label: "TJPR" }, { id: "tjrj", label: "TJRJ" },
    { id: "tjrs", label: "TJRS" }, { id: "tjsc", label: "TJSC" },
    { id: "tjsp", label: "TJSP" }
  ],
  administrativo: [{ id: "carf", label: "CARF" }]
};

export const CHAMBERS: Record<string, string[]> = {
  stf: ["Decisão Monocrática", "1ª Turma", "2ª Turma", "Tribunal Pleno", "Plenário", "Presidência"],
  stj: ["T1 - PRIMEIRA TURMA", "T2 - SEGUNDA TURMA", "CE - CORTE ESPECIAL"],
  tjsp: ["1ª Câmara de Direito Privado", "2ª Câmara de Direito Privado", "Órgão Especial"],
};

export const PERIODS = [
  { id: "all", label: "Todo período" },
  { id: "1y", label: "Último ano" },
  { id: "3y", label: "Últimos 3 anos" },
  { id: "5y", label: "Últimos 5 anos" },
];