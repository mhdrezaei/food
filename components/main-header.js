import Image from "next/image";
import Link from "next/link";

import LogoImage from "@/assets/logo.png";
import classes from "./main-header.module.css";
export const MainHeader = () => {
  return (
    <>
      <header className={classes.header}>
        <Link className={classes.logo} href="/">
          <Image src={LogoImage} alt="A plate full of meals" priority />
          Food Party
        </Link>
        <nav className={classes.nav}>
          <ul>
            <li>
              <Link href="/meals">Browse Meals</Link>
            </li>
            <li>
              <Link href="/comunity">Community</Link>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
};
