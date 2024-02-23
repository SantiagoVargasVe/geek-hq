import React from "react";

import { cn } from "@/lib/utils";

import styles from "./styles.module.scss";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const Home = () => {
  return (
    <main className="flex flex-col items-center justify-center gap-12 w-full h-full outline-dashed">
      <h1 className={cn("text-emerald-400 text-4xl", styles.mainTitle)}>
        Bienvenido al Centro de Control Familiar
      </h1>

      <div className="">
        <Button asChild>
          <Link href="/api/auth/login"> Iniciar Sesión </Link>
        </Button>
      </div>
    </main>
  );
};

export default Home;
