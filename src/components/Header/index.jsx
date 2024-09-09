import Link from "next/link";
import classes from "src/components/Header/Header.module.css";

const NAV_ITEMS = [
  { href: "/", lavel: "Index" },
  { href: "/about", lavel: "About" },
];

export const Header = () => {
  return (
    <header className={classes.header}>
      {NAV_ITEMS.map((item) => {
        return (
          <Link key={item.href} href={item.href} passHref legacyBehavior>
            <a className={classes.anchor}>{item.lavel}</a>
          </Link>
        );
      })}
    </header>
  );
};
