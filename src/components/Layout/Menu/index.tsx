import { useState } from "react";

export const Menu = () => {

    const [, setIsMenuHovered] = useState(false);
    const [hintActive] = useState(false);

    return (
        <div className="absolute right-6 top-1 z-10">
            <svg className="w-40 h-40 mt-0 md:w-36 md:h-36">
                {/* ------------------------------------------------------------- */}
                {/* HOTSPOT DO MENU SANDUÍCHE CIBERPUNK                           */}
                {/* ------------------------------------------------------------- */}
                <a href="/menu" className="group cursor-pointer focus-visible:outline-none"
                    onMouseEnter={() => setIsMenuHovered(true)}
                    onMouseLeave={() => setIsMenuHovered(false)}
                >
                    {/* 
                - origin-[110px_100px]: Centro do ícone para o zoom (scale-110) funcionar perfeitamente sem sair do lugar.
                - stroke="currentColor": Ele usará as cores injetadas dinamicamente pelas variáveis de glow.
                */}
                    <g
                        className={`fill-none transition-all duration-500 origin-[110px_100px] group-hover:scale-110
                        filter-[drop-shadow(0_0_4px_var(--color-glow-menu,rgba(34,211,238,0.5)))] 
                        group-hover:filter-[drop-shadow(0_0_20px_var(--color-glow-menu,#22d3ee))]

                        ${hintActive ? "animate-float" : ""}
                        `}
                    >
                        {/* ÁREA DE CLIQUE INVISÍVEL E ESPESSA (Para facilitar o clique do usuário) */}
                        <rect
                            x="50"
                            y="50"
                            width="120"
                            height="100"
                            fill="transparent"
                            className="cursor-pointer"
                        />

                        {/* 1. TAMPA SUPERIOR DO PÃO (Neon Ciano/Azul) */}
                        <path
                            d="M 60,85 
                            C 60,65 75,55 110,55 
                            C 145,55 160,65 160,85 
                            Z"
                            stroke="var(--color-glow-menu, #22d3ee)"
                            strokeWidth="5"
                            className="opacity-40 group-hover:opacity-100 transition-opacity duration-500"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />

                        {/* Detalhes de cortes em cima do pão (Estilo baguete da imagem) */}
                        <path d="M 80,68 L 90,60" stroke="var(--color-glow-menu, #22d3ee)" strokeWidth="3" className="opacity-30 group-hover:opacity-90" />
                        <path d="M 105,68 L 115,60" stroke="var(--color-glow-menu, #22d3ee)" strokeWidth="3" className="opacity-30 group-hover:opacity-90" />
                        <path d="M 130,68 L 140,60" stroke="var(--color-glow-menu, #22d3ee)" strokeWidth="3" className="opacity-30 group-hover:opacity-90" />

                        {/* 2. O RECHEIO/SALADA ONDULADO (Neon Verde ou Ciano) */}
                        <path
                            d="M 55,95 
                            Q 65,105 75,95 
                            Q 85,105 95,95 
                            Q 105,105 115,95 
                            Q 125,105 135,95 
                            Q 145,105 155,95
                            Q 165,105 170,95"
                            stroke="var(--color-glow-menu, #22d3ee)"
                            strokeWidth="4"
                            className="opacity-50 group-hover:opacity-100 transition-opacity duration-500"
                            strokeLinecap="round"
                        />

                        {/* 3. A PLACA DE CIRCUITO / HAMBÚRGUER CENTRAL (Neon Magenta/Rosa) */}
                        {/* Traço tecnológico da esquerda */}
                        <path d="M 50,115 L 75,115 L 85,125" stroke="var(--color-glow-hair, #f43f5e)" strokeWidth="4" className="opacity-40 group-hover:opacity-100 transition-opacity duration-500" strokeLinecap="round" />
                        {/* Bloco Retangular Central (Simulando o miolo ciberpunk) */}
                        <rect x="90" y="110" width="40" height="12" rx="3" stroke="var(--color-glow-hair, #f43f5e)" strokeWidth="4" className="opacity-40 group-hover:opacity-100 transition-opacity duration-500" />
                        <path d="M 103,116 L 117,116" stroke="var(--color-glow-hair, #f43f5e)" strokeWidth="2" className="opacity-60 group-hover:opacity-100" />
                        {/* Traço tecnológico da direita */}
                        <path d="M 135,125 L 145,115 L 170,115" stroke="var(--color-glow-hair, #f43f5e)" strokeWidth="4" className="opacity-40 group-hover:opacity-100 transition-opacity duration-500" strokeLinecap="round" />

                        {/* 4. BASE INFERIOR DO PÃO (Neon Ciano/Azul) */}
                        <path
                            d="M 60,135 
                            L 160,135 
                            C 160,148 145,152 110,152 
                            C 75,152 60,148 60,135 
                            Z"
                            stroke="var(--color-glow-menu, #22d3ee)"
                            strokeWidth="5"
                            className="opacity-40 group-hover:opacity-100 transition-opacity duration-500"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                    </g>
                </a>

            </svg>
        </div>
    )
}