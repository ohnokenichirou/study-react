import Link from 'next/link'
import classes from './Header.module.css'

export function Header() {
  return (
    <header className={classes.header}>
      <Link href="/" passHref legacyBehavior>
        <a className={classes.anchor}>Index</a>
      </Link>
      <Link href="/about" passHref legacyBehavior>
        <a className={classes.anchor}>About</a>
      </Link>
    </header>
  );
}