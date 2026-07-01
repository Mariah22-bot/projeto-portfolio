import { useState } from "react";
import logoImg from "../../../assets/images/logo.png";
import menuImg from "../../../assets/images/menu.png";

const links = [
    { href: "#home", label: "Home" },
    { href: "#sobre", label: "Sobre" },
    { href: "#projetos", label: "Projetos" },
    { href: "#contato", label: "Contato" },
];

export const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="relative z-50 w-full">
            <div className="flex items-center justify-between px-3 pt-3 absolute top-0 left-0 w-full z-50">
                <img
                    src={logoImg}
                    alt="Logo Mariah Desenvolvedora Front-end"
                    className="h-auto w-28 object-contain"
                />

                <button
                    type="button"
                    onClick={() => setIsOpen((prev) => !prev)}
                    className="rounded-full p-2 transition-transform hover:scale-105 focus:outline-none"
                    aria-label="Abrir menu"
                    aria-expanded={isOpen}
                >
                    <img src={menuImg} alt="Ícone de menu" className="h-auto w-20 object-contain" />
                </button>
            </div>

            {isOpen && (
                <div className="absolute right-3 top-full mt-2 w-48 rounded-xl border border-white/10 bg-slate-950/95 p-3 shadow-2xl backdrop-blur-md">
                    <div className="flex flex-col gap-2">
                        {links.map(({ href, label }) => (
                            <a
                                key={href}
                                href={href}
                                onClick={() => setIsOpen(false)}
                                className="rounded-lg px-3 py-2 text-sm font-medium text-white transition-colors hover:bg-cyan-500/10 hover:text-cyan-400"
                            >
                                {label}
                            </a>
                        ))}
                    </div>
                </div>
            )}
        </nav>
    );
};
