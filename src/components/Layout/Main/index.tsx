import type { ReactNode } from "react";

type MainProps = {
    children?: ReactNode;
};

export const Main = ({ children }: MainProps) => {
    return (
        <main className="flex min-h-screen w-full flex-col items-center justify-center bg-(--color-background) p-4 md:p-8 overflow-hidden">
            {children}
        </main>
    );
};
