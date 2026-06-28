import React, { useState, useEffect } from "react";
import imagemCentral from "../../../assets/images/imagem-central.png";

export const InteractiveContainer: React.FC = () => {
    const [hintActive, setHintActive] = useState(false);

    // Ativa a indicação sutil de interação (piscada/brilho) após 3 segundos
    useEffect(() => {
        const timer = setTimeout(() => {
            setHintActive(true);
        }, 3000);
        return () => clearTimeout(timer);
    }, []);

    return (
        <main className="flex min-h-screen w-full items-center justify-center bg-background p-0 overflow-hidden">

            {/* Container Principal da Ilustração */}
            <div className=
                "relative inline-block w-full max-w-150 max-h-[85vh] animate-fade-in"
            >

                {/* A Imagem de Fundo Protagonista */}
                <img
                    src={imagemCentral}
                    alt="Ilustração interativa estilo Cyberpunk de uma mulher com traços futuristas e brincos de neon brilhantes"
                    className=
                    "w-full h-auto block pointer-events-none select-none rounded-2xl"
                />

                {/* ------------------------------------------------------------- */}
                {/* CAMADA DE HOTSPOTS (Navigation as UI) */}
                {/* As posições em % foram estimadas com base na anatomia da arte */}
                {/* ------------------------------------------------------------- */}

                {/* Hotspot: Olho Esquerdo -> Sobre */}
                <a
                    href="/about"
                    className="absolute top-[57.5%] left-[30%] w-[18%] 
                    cursor-pointer group focus-visible:outline-none z-10"
                    aria-label="Ir para a página Sobre Mim (Olho Esquerdo)"
                    title="Sobre Mim"
                >
                    <svg
                        viewBox="0 0 100 50"
                        className={`w-full h-full fill-none transition-all duration-500 
                        scale-x-[-1] 
                        group-hover:scale-x-[-1.1] 
                        group-hover:scale-y-[1.1]
                        filter-[drop-shadow(0_0_2px_var(--color-glow-eye))] 
                        group-hover:filter-[drop-shadow(0_0_12px_var(--color-glow-eye))]
                        ${hintActive ? "animate-float" : ""}`}
                    >

                        {/* 1. Traçado do Delineado Superior (Estilo Gatinho / Fox Eyes) */}
                        <path
                            d="M 5,28 
                               C 15,18 35,10 65,13 
                               C 78,14 88,12 95,8 
                               C 92,15 82,24 68,26
                               C 45,29 20,31 5,28 Z"
                            stroke="var(--color-glow-eye)"
                            strokeWidth="2"
                            className="opacity-40 group-hover:opacity-100 
                            transition-opacity 
                            duration-500
                            "
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />

                        {/* 2. Traçado da Pálpebra Inferior e Linha D'água */}
                        <path
                            d="M 5,28 
                               C 22,38 52,40 78,28 
                               C 88,24 95,8 95,8"
                            stroke="var(--color-glow-eye)"
                            strokeWidth="1.5"
                            className="opacity-30 group-hover:opacity-90 transition-opacity duration-500"
                            strokeLinecap="round"
                        />
                    </svg>
                </a>

                {/* Hotspot: Olho Direito -> Sobre */}
                <a
                    href="/about"
                    className="absolute top-[57.5%] left-[54%] w-[18%] 
                    cursor-pointer group focus-visible:outline-none z-10"
                    aria-label="Ir para a página Sobre Mim (Olho Direito)"
                    title="Sobre Mim"
                >
                    <svg
                        viewBox="0 0 100 50"
                        className={`w-full h-full fill-none transition-all duration-500 
                        group-hover:scale-110 
                        filter-[drop-shadow(0_0_2px_var(--color-glow-eye))] 
                        group-hover:filter-[drop-shadow(0_0_12px_var(--color-glow-eye))]
                        ${hintActive ? "animate-float" : ""}`}
                    >

                        {/* 1. Traçado do Delineado Superior (Estilo Gatinho / Fox Eyes) */}
                        <path
                            d="M 5,28 
                               C 15,18 35,10 65,13 
                               C 78,14 88,12 95,8 
                               C 92,15 82,24 68,26
                               C 45,29 20,31 5,28 Z"
                            stroke="var(--color-glow-eye)"
                            strokeWidth="2"
                            className="opacity-40 group-hover:opacity-100 transition-opacity duration-500"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />

                        {/* 2. Traçado da Pálpebra Inferior e Linha D'água */}
                        <path
                            d="M 5,28 
                               C 22,38 52,40 78,28 
                               C 88,24 95,8 95,8"
                            stroke="var(--color-glow-eye)"
                            strokeWidth="1.5"
                            className="opacity-30 group-hover:opacity-90 transition-opacity duration-500"
                            strokeLinecap="round"
                        />

                    </svg>
                </a>

                {/* Hotspot: Boca -> Contato */}
                <a
                    href="/contact"
                    className=
                    "absolute top-[73%] left-[42.3%] w-[18%] cursor-pointer group focus-visible:outline-none z-10"

                    aria-label="Ir para a página de Contato (Boca)"
                    title="Contato"
                >
                    {/* O SVG desenha o contorno exato sobre a boca */}
                    <svg
                        viewBox="0 0 100 50"
                        className={
                            `w-full h-full fill-none transition-all duration-500 
                                    group-hover:scale-110 
                                    filter-[drop-shadow(0_0_2px_var(--color-glow-mouth))] 
                                    group-hover:filter-[drop-shadow(0_0_12px_var(--color-glow-mouth))]

                                    ${hintActive ? "animate-float" : ""}`
                        }
                    >
                        {/* Contorno Neon Translúcido dos Lábios */}
                        <path
                            d="M 5,23 
                                C 15,14 30,5 42,12 
                                C 46,14 48,14 52,12 
                                C 64,5 79,14 89,23 
                                C 95,25 95,27 89,29 
                                C 78,33 66,45 47,45 
                                C 28,45 16,33 5,29 
                                C -1,27 -1,25 5,23 Z"
                            stroke="var(--color-glow-mouth)"
                            strokeWidth="2"
                            className="opacity-40 group-hover:opacity-100 transition-opacity duration-500"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />

                        {/* Linha Central sutil dos Lábios para dar profundidade cyberpunk */}
                        <path
                            d="M 6,25 C 25,23 40,29 47,27 C 54,29 69,23 88,25"
                            stroke="var(--color-glow-mouth)"
                            strokeWidth="1"
                            className="opacity-20 group-hover:opacity-80 transition-opacity duration-500"
                        />
                    </svg>
                </a>

                {/* Hotspot: Fio de Cabelo Esquerdo -> Projetos */}
                <a
                    href="/projects"
                    className="absolute top-[6%] left-[29%] w-[12%] h-[22%] rounded-full rotate-[-15deg] cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-[0_0_15px_var(--color-glow-hair)] focus-visible:ring-2 focus-visible:ring-glow-hair"
                    aria-label="Ir para a página de Projetos (Fio de Cabelo Esquerdo)"
                    title="Meus Projetos"
                />

                {/* Hotspot: Fio de Cabelo Central -> Projetos */}
                <a
                    href="/projects"
                    className="absolute top-[2%] left-[46%] w-[9%] h-[24%] rounded-full cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-[0_0_15px_var(--color-glow-hair)] focus-visible:ring-2 focus-visible:ring-glow-hair"
                    aria-label="Ir para a página de Projetos (Fio de Cabelo Central)"
                    title="Meus Projetos"
                />

                {/* Hotspot: Fio de Cabelo Direito -> Projetos */}
                <a
                    href="/projects"
                    className="absolute top-[5%] left-[58%] w-[13%] h-[22%] rounded-full rotate-15 cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-[0_0_15px_var(--color-glow-hair)] focus-visible:ring-2 focus-visible:ring-glow-hair"
                    aria-label="Ir para a página de Projetos (Fio de Cabelo Direito)"
                    title="Meus Projetos"
                />

            </div>
        </main >
    );
};
