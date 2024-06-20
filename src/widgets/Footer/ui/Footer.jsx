import style from "./Footer.module.scss";

const Header = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={style.footer}>
      <div className="container">
        Thothos &copy; {currentYear}
      </div>
    </footer>
  )
}

export default Header