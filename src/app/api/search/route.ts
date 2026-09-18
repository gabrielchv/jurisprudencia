import { NextResponse } from "next/server";
import type { SearchPayload, Decision } from "@/types";

const MOCK_RESULTS: Decision[] = [
  {
    id: "133353",
    processNumber: "1007365-84.2025.8.26.0011",
    court: "TJSP",
    relevance: "Muito relevante",
    chamber: "24ª Câmara de Direito Privado",
    title: "Afasta dano moral em atraso de 5h, com realocação e jurisprudência do STJ.",
    theme: "Indenização por Dano Moral decorrente de Atraso em Voo",
    date: "17 de mar. de 2026",
    snippet: "TRANSPORTE AÉREO – DANO MORAL – Inocorrência – Atraso do voo que acarretou a chegada dos autores ao seu destino, aproximadamente, 5 horas após o horário previsto...",
    originalLink: "#",
  },
];

export async function POST(request: Request) {
  const body: SearchPayload = await request.json();

  return NextResponse.json(MOCK_RESULTS);
}
