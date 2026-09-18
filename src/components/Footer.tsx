import Link from "next/link";

export function Footer() {
  return (
    <footer className="mx-auto w-full max-w-7xl px-4 py-12 md:px-8">
      <div className="flex flex-col gap-8 pt-8 md:flex-row md:items-start md:justify-between border-t border-border">
        <div className="space-y-2">
          <p className="font-serif text-lg font-semibold">Jurisprudências.ai</p>
          <p className="text-sm text-muted-foreground">Pesquisa jurídica com rigor e velocidade.</p>
        </div>
        <div className="grid grid-cols-2 gap-8 md:ml-auto md:grid-cols-3 md:gap-16">
          <div className="space-y-2">
            <p className="text-xs font-semibold">Produto</p>
            <Link href="/" className="block text-xs text-muted-foreground hover:underline">Busca de jurisprudências</Link>
            <Link href="/api" className="block text-xs text-muted-foreground hover:underline">API</Link>
          </div>
          <div className="space-y-2">
            <p className="text-xs font-semibold">Empresa</p>
            <Link href="/about" className="block text-xs text-muted-foreground hover:underline">Sobre</Link>
            <Link href="/how-it-works" className="block text-xs text-muted-foreground hover:underline">Como funciona</Link>
          </div>
          <div className="space-y-2">
            <p className="text-xs font-semibold">Legal</p>
            <Link href="/terms" className="block text-xs text-muted-foreground hover:underline">Termos</Link>
            <Link href="/privacy" className="block text-xs text-muted-foreground hover:underline">Privacidade</Link>
          </div>
        </div>
      </div>
      <p className="mt-8 text-xs text-neutral-500">© 2026 Jurisprudências.ai. Todos os direitos reservados.</p>
    </footer>
  );
}