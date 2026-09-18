import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { COURTS } from "@/lib/constants";
import Link from "next/link";

export default function Home() {
  const tribunals = Object.values(COURTS).flat().map((court) => court.label);

  return (
    <main className="flex min-h-screen flex-col">
      <div className="flex-1">
        {/* HERO SECTION */}
        <section id="product" className="bg-secondary">
          <Header />
          <div className="mx-auto w-full max-w-7xl px-4 pb-16 pt-10 md:px-8 md:pb-24">
            <div className="grid gap-6 lg:grid-cols-2 lg:grid-rows-[auto_auto_auto] lg:items-start lg:gap-x-16 lg:gap-y-6">
              <div className="min-w-0 space-y-4 lg:col-start-1 lg:row-start-1">
                <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">Para advogados que pesquisam jurisprudência</p>
                <h1 className="font-serif text-4xl font-medium leading-tight lg:text-5xl lg:leading-tight">
                  Pesquisa de jurisprudência que levaria horas, feita em segundos.
                </h1>
                <p className="text-base text-muted-foreground lg:text-lg">
                  Advogados gastam 2 a 3 horas por pesquisa formulando queries, abrindo abas e verificando fontes. Envie uma peça e receba mais de 150 decisões relevantes em segundos, com links diretos aos tribunais.
                </p>
                <p className="text-sm font-medium">Cada decisão é real, verificável e com link direto ao tribunal. Zero alucinações.</p>
              </div>

              <div className="min-w-0 lg:col-start-2 lg:row-start-1 lg:row-span-3">
                <video className="w-full rounded-xl border border-input shadow-sm" muted playsInline autoPlay loop>
                  <source src="/assets/petition-demo-d2be2e5a.webm" type="video/webm" />
                </video>
              </div>

              <div className="min-w-0 space-y-3 lg:col-start-1 lg:row-start-2">
                <form action="/search" method="post">
                  <div className="overflow-hidden rounded-xl border border-input bg-white shadow-sm">
                    <div className="border-b border-input px-4">
                      <div className="flex max-w-full items-center overflow-x-auto py-2 [contain:paint]" role="radiogroup">
                        <span className="mr-3 shrink-0 text-xs font-semibold text-muted-foreground">Tribunal</span>
                        {tribunals.map((t) => (
                          <label key={t} className="cursor-pointer">
                            <input type="radio" name="c" value={t.toLowerCase()} defaultChecked={t === "STF"} className="sr-only peer" />
                            <span className="inline-flex shrink-0 items-center border-b-2 border-transparent px-3 py-2 text-xs font-medium text-muted-foreground transition-colors hover:text-foreground peer-checked:border-foreground peer-checked:font-semibold peer-checked:text-foreground">
                              {t}
                            </span>
                          </label>
                        ))}
                      </div>
                    </div>
                    <div className="flex items-center gap-2 p-3">
                      <input type="text" name="q" autoComplete="off" maxLength={2048} placeholder="Ex: dano moral por atraso em voo" className="flex-1 bg-transparent px-1 py-1 text-sm placeholder:text-muted-foreground focus:outline-none" />
                      <button type="submit" className="btn-primary shrink-0 text-sm">Pesquisar</button>
                    </div>
                  </div>
                </form>
                <p className="text-sm text-muted-foreground">
                  Ou <Link href="/petition?c=stf" className="font-medium text-foreground underline underline-offset-2 hover:no-underline">envie uma peça</Link> para busca automática.
                </p>
              </div>

              <dl className="flex flex-wrap gap-x-10 gap-y-4 lg:col-start-1 lg:row-start-3">
                <div>
                  <dt className="font-serif text-3xl font-medium">+10M</dt>
                  <dd className="text-sm text-muted-foreground">decisões indexadas</dd>
                </div>
                <div>
                  <dt className="font-serif text-3xl font-medium">11</dt>
                  <dd className="text-sm text-muted-foreground">tribunais</dd>
                </div>
                <div>
                  <dt className="font-serif text-3xl font-medium">+150</dt>
                  <dd className="text-sm text-muted-foreground">resultados por peça</dd>
                </div>
              </dl>
            </div>
          </div>
        </section>

        {/* PAIN SECTION */}
        <section className="mx-auto w-full max-w-7xl px-4 py-16 md:px-8">
          <div className="space-y-3">
            <h2 className="font-serif text-3xl font-medium">Pesquisar jurisprudência ainda demora horas?</h2>
            <p className="max-w-3xl text-muted-foreground">Em média, 2 a 3 horas por pesquisa. Horas que poderiam estar na estratégia do caso, no cliente ou no descanso. Se você é advogado, provavelmente reconhece pelo menos uma dessas situações.</p>
          </div>
          <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            <article className="space-y-2 border border-neutral-200 p-5">
              <h3 className="text-base font-medium">Reformulando a busca cinco vezes</h3>
              <p className="text-sm leading-relaxed text-muted-foreground">A query não retorna nada útil. Você tenta sinônimos, termos técnicos, variações e os resultados continuam aquém do que o caso precisa.</p>
            </article>
            <article className="space-y-2 border border-neutral-200 p-5">
              <h3 className="text-base font-medium">Verificando fonte por fonte</h3>
              <p className="text-sm leading-relaxed text-muted-foreground">Cada acórdão precisa ser aberto manualmente no site do tribunal para confirmar número, data e se o link ainda funciona.</p>
            </article>
            <article className="space-y-2 border border-neutral-200 p-5">
              <h3 className="text-base font-medium">Sem saber se deixou algo para trás</h3>
              <p className="text-sm leading-relaxed text-muted-foreground">Depois de uma hora pesquisando, persiste a dúvida: e se houver um precedente mais relevante que passou despercebido?</p>
            </article>
            <article className="space-y-2 border border-neutral-200 p-5">
              <h3 className="text-base font-medium">O precedente que derruba a tese</h3>
              <p className="text-sm leading-relaxed text-muted-foreground">A outra parte encontra um acórdão que você não encontrou. Pesquisa incompleta é risco direto para o cliente.</p>
            </article>
          </div>
          <div className="mt-10 border-l-4 border-foreground pl-5">
            <p className="text-base font-medium">O Jurisprudências.ai foi criado para resolver exatamente isso.</p>
            <p className="mt-1 text-sm text-muted-foreground">Envie uma peça. A IA identifica os temas, busca nos tribunais e devolve as decisões verificáveis em segundos. Pesquisa completa, não pesquisa suficiente.</p>
          </div>
        </section>

        {/* COMO FUNCIONA */}
        <section id="how-it-works" className="mx-auto w-full max-w-7xl px-4 py-16 md:px-8">
          <div className="space-y-4">
            <h2 className="font-serif text-3xl font-medium">Como funciona</h2>
            <p className="max-w-3xl text-muted-foreground">Três passos do arquivo à jurisprudência aplicável ao caso.</p>
          </div>
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            <article className="space-y-2 border border-neutral-200 p-5">
              <p className="text-xs font-semibold tracking-wide text-muted-foreground uppercase">01</p>
              <h3 className="text-xl font-medium">Envie uma peça</h3>
              <p className="text-sm leading-relaxed text-muted-foreground">Carregue um arquivo .doc ou .docx. A peça é lida na íntegra e os temas jurídicos relevantes são identificados automaticamente.</p>
            </article>
            <article className="space-y-2 border border-neutral-200 p-5">
              <p className="text-xs font-semibold tracking-wide text-muted-foreground uppercase">02</p>
              <h3 className="text-xl font-medium">Analisamos os temas</h3>
              <p className="text-sm leading-relaxed text-muted-foreground">Mapeamos a tese, o direito material e o tribunal mais adequado. Sem precisar formular uma query.</p>
            </article>
            <article className="space-y-2 border border-neutral-200 p-5">
              <p className="text-xs font-semibold tracking-wide text-muted-foreground uppercase">03</p>
              <h3 className="text-xl font-medium">Receba as jurisprudências</h3>
              <p className="text-sm leading-relaxed text-muted-foreground">Ementas e links oficiais prontos para usar na peça. Em média mais de 150 decisões relevantes por busca.</p>
            </article>
          </div>
        </section>

        {/* OUTRAS FORMAS DE PESQUISAR */}
        <section className="bg-secondary">
          <div className="mx-auto w-full max-w-7xl px-4 py-16 md:px-8">
            <div className="space-y-4">
              <h2 className="font-serif text-3xl font-medium">Outras formas de pesquisar</h2>
              <p className="max-w-3xl text-muted-foreground">Além do envio de peça, você pode <Link className="font-medium text-foreground underline underline-offset-2 hover:no-underline" href="/search">pesquisar por texto</Link> ou integrar via API.</p>
            </div>
            <div className="mt-8 grid gap-8 md:grid-cols-2">
              <article className="space-y-2">
                <h3 className="text-xl font-medium">Busca contextual por texto</h3>
                <p className="text-sm leading-relaxed text-muted-foreground">Descreva a tese em linguagem natural. O modelo entende o contexto jurídico e prioriza as jurisprudências que sustentam a argumentação.</p>
              </article>
              <article className="space-y-2">
                <h3 className="text-xl font-medium">Resultados verificáveis</h3>
                <p className="text-sm leading-relaxed text-muted-foreground">Cada resultado inclui link direto para a fonte oficial do tribunal. Nenhuma referência inventada.</p>
              </article>
              <article className="space-y-2">
                <h3 className="text-xl font-medium">Filtros por tribunal e tema</h3>
                <p className="text-sm leading-relaxed text-muted-foreground">Refine os resultados por tribunal ou pelos temas identificados automaticamente na sua peça.</p>
              </article>
              <article className="space-y-2">
                <h3 className="text-xl font-medium">Integração via API</h3>
                <p className="text-sm leading-relaxed text-muted-foreground">Acesse decisões em JSON com campos separados: relator, órgão julgador, ementa, data de julgamento e link direto. Pronto para integrar em sistemas, agentes de IA e fluxos automatizados.</p>
              </article>
            </div>
          </div>
        </section>

        {/* COMPARISON */}
        <section>
          <div className="mx-auto w-full max-w-7xl px-4 py-16 md:px-8">
            <div className="space-y-3">
              <h2 className="font-serif text-3xl font-medium">Em segundos, não em horas</h2>
              <p className="max-w-3xl text-muted-foreground">O que muda na prática em relação à pesquisa tradicional.</p>
            </div>
            <div className="mt-8 grid gap-4 md:grid-cols-2">
              <div className="space-y-4 border border-neutral-200 bg-white p-6">
                <p className="text-xs font-semibold tracking-wide text-muted-foreground uppercase">Pesquisa tradicional</p>
                <ul className="space-y-3 text-sm text-muted-foreground">
                  <li className="flex items-start gap-3"><span className="mt-0.5 shrink-0 text-neutral-300">•</span><span>Formular e reformular queries manualmente até encontrar algo relevante</span></li>
                  <li className="flex items-start gap-3"><span className="mt-0.5 shrink-0 text-neutral-300">•</span><span>Abrir dezenas de abas para verificar cada acórdão no tribunal</span></li>
                  <li className="flex items-start gap-3"><span className="mt-0.5 shrink-0 text-neutral-300">•</span><span>Copiar ementas e referências uma por uma para o documento</span></li>
                  <li className="flex items-start gap-3"><span className="mt-0.5 shrink-0 text-neutral-300">•</span><span>1 a 3 horas por pesquisa, dependendo da complexidade do caso</span></li>
                </ul>
              </div>
              <div className="space-y-4 border border-foreground p-6">
                <p className="text-xs font-semibold tracking-wide uppercase">Jurisprudências.ai</p>
                <ul className="space-y-3 text-sm">
                  <li className="flex items-start gap-3"><span className="mt-0.5 shrink-0 font-bold">•</span><span>Envia a peça uma vez e a IA identifica todos os temas automaticamente</span></li>
                  <li className="flex items-start gap-3"><span className="mt-0.5 shrink-0 font-bold">•</span><span>Resultados com link direto ao tribunal, sem abrir nenhuma aba extra</span></li>
                  <li className="flex items-start gap-3"><span className="mt-0.5 shrink-0 font-bold">•</span><span>Mais de 150 decisões organizadas por tribunal e tema, prontas para usar</span></li>
                  <li className="flex items-start gap-3"><span className="mt-0.5 shrink-0 font-bold">•</span><span>Menos de 1 minuto do upload ao resultado completo</span></li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* PLANOS */}
        <section id="plans">
          <div className="mx-auto w-full max-w-7xl px-4 py-16 md:px-8">
            <div className="space-y-4">
              <h2 className="font-serif text-3xl font-medium">Planos</h2>
              <p className="max-w-3xl text-muted-foreground">Teste gratuitamente e assine quando precisar pesquisar sem limite, enviar peças com frequência ou conectar agentes de IA à base de jurisprudências.</p>
            </div>
            <div className="mt-8 grid gap-4 lg:grid-cols-3">
              <article className="flex h-full flex-col rounded-xl border border-foreground/20 bg-accent p-5">
                <div className="space-y-3">
                  <div className="flex flex-wrap items-center gap-2">
                    <p className="text-sm font-semibold text-foreground">Anual</p>
                    <span className="inline-flex rounded-full bg-background px-2 py-0.5 text-[11px] font-semibold text-foreground">2 meses grátis</span>
                    <span className="inline-flex rounded-full border border-amber-200 bg-amber-50 px-2 py-0.5 text-[11px] font-semibold text-amber-900">Preço de hoje</span>
                  </div>
                  <div className="space-y-1">
                    <p className="text-sm text-muted-foreground">De <s className="text-foreground decoration-2">R$ 899,00</s></p>
                    <div className="flex flex-wrap items-baseline gap-x-2 gap-y-1">
                      <p className="text-2xl font-semibold text-foreground">R$ 599,00<span className="text-sm font-normal text-muted-foreground">/ano</span></p>
                    </div>
                    <p className="text-xs text-muted-foreground">Economize R$ 300 no ano. Equivale a R$ 49,92/mês.</p>
                  </div>
                </div>
                <div className="mt-4"><Link className="btn-primary w-full text-sm text-center" href="/sign-in">Começar grátis, depois assinar</Link></div>
                <ul className="mt-4 space-y-2 text-xs text-muted-foreground">
                  <li><span className="mr-1.5 text-foreground">✓</span>Buscas no site ilimitadas.</li>
                  <li><span className="mr-1.5 text-foreground">✓</span>Envio de peças ilimitado.</li>
                  <li><span className="mr-1.5 text-foreground">✓</span>Integração com agentes de IA (500 buscas/dia e 10.000 expansões de decisões).</li>
                </ul>
              </article>
              <article className="flex h-full flex-col rounded-xl border border-border bg-background p-5">
                <div className="space-y-3">
                  <div className="flex flex-wrap items-center gap-2">
                    <p className="text-sm font-semibold text-foreground">Mensal</p>
                    <span className="inline-flex rounded-full border border-amber-200 bg-amber-50 px-2 py-0.5 text-[11px] font-semibold text-amber-900">Preço de hoje</span>
                  </div>
                  <div className="space-y-1">
                    <p className="text-sm text-muted-foreground">De <s className="text-foreground decoration-2">R$ 89,90</s></p>
                    <div className="flex flex-wrap items-baseline gap-x-2 gap-y-1">
                      <p className="text-2xl font-semibold text-foreground">R$ 59,90<span className="text-sm font-normal text-muted-foreground">/mês</span></p>
                    </div>
                    <p className="text-xs text-muted-foreground">Economize R$ 30 por mês antes do reajuste.</p>
                  </div>
                </div>
                <div className="mt-4"><Link className="btn-primary w-full text-sm text-center" href="/sign-in">Começar grátis, depois assinar</Link></div>
                <ul className="mt-4 space-y-2 text-xs text-muted-foreground">
                  <li><span className="mr-1.5 text-foreground">✓</span>Buscas no site ilimitadas.</li>
                  <li><span className="mr-1.5 text-foreground">✓</span>Envio de peças ilimitado.</li>
                  <li><span className="mr-1.5 text-foreground">✓</span>Integração com agentes de IA (500 buscas/dia e 10.000 expansões de decisões).</li>
                </ul>
              </article>
              <article className="flex h-full flex-col rounded-xl border border-border bg-muted/30 p-5">
                <div className="space-y-1">
                  <p className="text-sm font-semibold text-foreground">Grátis</p>
                  <p className="text-2xl font-semibold text-foreground">R$ 0</p>
                  <p className="text-xs text-muted-foreground">Para experimentar</p>
                </div>
                <div className="mt-4"><Link className="block w-full rounded-md border border-border bg-background px-3 py-2 text-center text-sm font-medium text-foreground hover:bg-muted" href="/sign-in">Começar grátis</Link></div>
                <ul className="mt-4 space-y-2 text-xs text-muted-foreground">
                  <li><span className="mr-1.5 text-foreground">✓</span>5 buscas por dia.</li>
                  <li><span className="mr-1.5 text-foreground">✓</span>Envio de peças incluído.</li>
                  <li><span className="mr-1.5 text-foreground">✓</span>Sem cartão de crédito.</li>
                </ul>
              </article>
            </div>
            <p className="mt-6 text-sm text-muted-foreground">Sem fidelidade. Cancele quando quiser.</p>
          </div>
        </section>

        {/* FAQ */}
        <section id="faq" className="bg-secondary">
          <div className="mx-auto w-full max-w-7xl px-4 py-16 md:px-8">
            <div className="space-y-4">
              <h2 className="font-serif text-3xl font-medium">FAQ</h2>
              <p className="max-w-3xl text-muted-foreground">Respostas objetivas para as principais dúvidas.</p>
            </div>
            <div className="accordion mt-8 border border-neutral-200 bg-white">
              <details className="group border-b border-neutral-200">
                <summary className="flex cursor-pointer list-none items-center justify-between p-4 text-sm font-medium">
                  Como funciona o envio de peça?
                  <span className="text-muted-foreground transition-transform group-open:rotate-45">+</span>
                </summary>
                <section className="px-4 pb-4 pt-0 text-sm leading-relaxed text-muted-foreground">
                  Você envia um arquivo .doc ou .docx. Nós identificamos os temas jurídicos da peça e buscamos automaticamente as decisões mais relevantes nos tribunais disponíveis. Funciona melhor com peças como petições iniciais, recursos e apelações.
                </section>
              </details>
              <details className="group border-b border-neutral-200">
                <summary className="flex cursor-pointer list-none items-center justify-between p-4 text-sm font-medium">
                  Minha peça fica armazenada? É seguro enviar?
                  <span className="text-muted-foreground transition-transform group-open:rotate-45">+</span>
                </summary>
                <section className="px-4 pb-4 pt-0 text-sm leading-relaxed text-muted-foreground">
                  O arquivo é processado para extrair os temas jurídicos e descartado logo em seguida. Não armazenamos o conteúdo das peças. Os dados trafegam em conexão segura (HTTPS) e não são compartilhados com terceiros.
                </section>
              </details>
              <details className="group border-b border-neutral-200">
                <summary className="flex cursor-pointer list-none items-center justify-between p-4 text-sm font-medium">
                  Vale a pena assinar se o plano grátis funciona?
                  <span className="text-muted-foreground transition-transform group-open:rotate-45">+</span>
                </summary>
                <section className="px-4 pb-4 pt-0 text-sm leading-relaxed text-muted-foreground">
                  O plano grátis é ideal para experimentar. Para advogados que usam a plataforma com frequência, 5 buscas por dia acabam rápido. O plano pago remove esse limite e libera o envio ilimitado de peças.
                </section>
              </details>
              <details className="group border-b border-neutral-200">
                <summary className="flex cursor-pointer list-none items-center justify-between p-4 text-sm font-medium">
                  As jurisprudências são oficiais?
                  <span className="text-muted-foreground transition-transform group-open:rotate-45">+</span>
                </summary>
                <section className="px-4 pb-4 pt-0 text-sm leading-relaxed text-muted-foreground">
                  Sim. Cada resultado inclui referência e link direto para a fonte oficial do tribunal.
                </section>
              </details>
              <details className="group border-b border-neutral-200">
                <summary className="flex cursor-pointer list-none items-center justify-between p-4 text-sm font-medium">
                  É diferente do Jusbrasil?
                  <span className="text-muted-foreground transition-transform group-open:rotate-45">+</span>
                </summary>
                <section className="px-4 pb-4 pt-0 text-sm leading-relaxed text-muted-foreground">
                  Sim. O foco é exclusivamente em busca semântica e no envio de peças para encontrar jurisprudências por caso. Sem conteúdo editorial, templates ou doutrina, só decisões reais indexadas e pesquisáveis.
                </section>
              </details>
              <details className="group border-b border-neutral-200">
                <summary className="flex cursor-pointer list-none items-center justify-between p-4 text-sm font-medium">
                  Quais tribunais estão disponíveis?
                  <span className="text-muted-foreground transition-transform group-open:rotate-45">+</span>
                </summary>
                <section className="px-4 pb-4 pt-0 text-sm leading-relaxed text-muted-foreground">
                  Atualmente: STF, STJ, TST, TRF3, TRF4, TJPR, TJRJ, TJRS, TJSC, TJSP e CARF. Você pode selecionar até 3 tribunais na mesma busca.
                </section>
              </details>
              <details className="group">
                <summary className="flex cursor-pointer list-none items-center justify-between p-4 text-sm font-medium">
                  O teste grátis exige cadastro?
                  <span className="text-muted-foreground transition-transform group-open:rotate-45">+</span>
                </summary>
                <section className="px-4 pb-4 pt-0 text-sm leading-relaxed text-muted-foreground">
                  Não. Você pode enviar uma peça ou fazer buscas por texto sem cadastro para ver os resultados antes de decidir.
                </section>
              </details>
            </div>
          </div>
        </section>

        {/* BOTTOM CTA */}
        <section className="bg-foreground text-white">
          <div className="mx-auto w-full max-w-7xl px-4 py-16 md:px-8">
            <div className="max-w-3xl space-y-4">
              <h2 className="font-serif text-3xl font-medium">Teste com a sua próxima peça agora</h2>
              <p className="text-neutral-300">Sem cadastro. Sem cartão. 3 buscas grátis por dia. Envie uma peça e veja mais de 150 decisões reais antes de decidir qualquer coisa.</p>
              <Link className="btn-secondary" href="/petition?c=stf">Enviar peça agora</Link>
              <p className="text-xs font-medium text-neutral-300">Decisões de fontes oficiais, com número do processo, tribunal e link para conferência.</p>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </main>
  );
}