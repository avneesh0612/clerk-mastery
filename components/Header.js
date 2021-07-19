import styles from "../styles/Header.module.css";
import Link from "next/link";
import { SignedIn, SignedOut, UserButton } from "@clerk/clerk-react";

function Header() {
  return (
    <header className={styles.header}>
      <div>
        <SignedOut>
          <Link href="/sign-in">Sign in</Link>
        </SignedOut>
        <SignedIn>
          <UserButton />
        </SignedIn>
      </div>
    </header>
  );
}

export default Header;
