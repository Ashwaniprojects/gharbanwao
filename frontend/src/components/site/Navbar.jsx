import { useEffect, useState } from "react";
import { Menu, Phone, Search, X } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { Logo } from "./Logo";
import { SearchOverlay } from "./SearchOverlay";
import { NAV, PHONES } from "@/data/content";
import { scrollToId } from "@/lib/scroll";

export const Navbar = () => {
  const [searchOpen, setSearchOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "/" && !["INPUT", "TEXTAREA", "SELECT"].includes(e.target.tagName)) {
        e.preventDefault();
        setSearchOpen(true);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const go = (id) => {
    setMenuOpen(false);
    if (window.location.pathname !== "/") {
      window.location.href = `/#${id}`;
      return;
    }
    scrollToId(id);
  };

  return (
    <>
      <header className="sticky top-0 z-40 h-[72px] bg-paper/90 backdrop-blur-xl border-b border-divider no-print" data-testid="navbar">
        <div className="container-gb h-full flex items-center gap-6">
          <Logo />
          <nav className="hidden lg:flex items-center gap-1 ml-6" aria-label="Primary">
            {NAV.map((n) => (
              <button
                key={n.id}
                onClick={() => go(n.id)}
                className="px-3 py-2 text-[15px] font-semibold rounded-full hover:bg-wash-green transition-colors"
                data-testid={`nav-link-${n.id}`}
              >
                {n.label}
              </button>
            ))}
          </nav>
          <button
            onClick={() => setSearchOpen(true)}
            className="hidden md:flex ml-auto items-center gap-3 h-11 w-[260px] rounded-full border border-divider bg-paper px-4 text-left text-ink/50 text-[14px] hover:border-ink/40 transition-colors"
            data-testid="nav-search-trigger"
          >
            <Search className="h-4 w-4" />
            <span className="flex-1 truncate">Search projects, services, FAQs</span>
            <kbd className="font-mono text-[11px] border border-divider rounded px-1.5">/</kbd>
          </button>
          <button onClick={() => setSearchOpen(true)} className="md:hidden ml-auto h-10 w-10 grid place-items-center rounded-full border border-divider" aria-label="Search" data-testid="nav-search-icon">
            <Search className="h-4 w-4" />
          </button>
          <button onClick={() => go("contact")} className="hidden md:inline-flex pill-green h-11 px-5 text-[15px] whitespace-nowrap" data-testid="nav-cta-consultation">
            Book Free Consultation
          </button>
          <a href={`tel:${PHONES[0]}`} className="hidden xl:flex items-center gap-2 font-mono text-[13px] font-medium tracking-wide" data-testid="nav-phone">
            <Phone className="h-4 w-4 text-green" /> {PHONES[0]}
          </a>
          <button onClick={() => setMenuOpen((p) => !p)} className="lg:hidden h-10 w-10 grid place-items-center rounded-full border border-divider" aria-label="Menu" data-testid="nav-menu-toggle">
            {menuOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
        </div>
        <AnimatePresence>
          {menuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              className="lg:hidden absolute inset-x-0 top-[72px] bg-paper border-b border-divider p-6 flex flex-col gap-1"
              data-testid="nav-mobile-menu"
            >
              {NAV.map((n) => (
                <button key={n.id} onClick={() => go(n.id)} className="text-left px-3 py-3 text-[17px] font-semibold rounded-lg hover:bg-wash-green" data-testid={`nav-mobile-link-${n.id}`}>
                  {n.label}
                </button>
              ))}
              <button onClick={() => go("contact")} className="pill-green h-12 mt-3" data-testid="nav-mobile-cta">
                Book Free Consultation
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
      <SearchOverlay open={searchOpen} onClose={() => setSearchOpen(false)} />
    </>
  );
};
