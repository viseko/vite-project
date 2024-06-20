import style from "./Header.module.scss";

const Header = (props) => {
  const classNames = [
    props.className,
    style.header
  ].join(" ");

  return (
    <header className={classNames}>
      <div className="container">
        <div className={style.logo}>
          <img src="/img/logo.svg" alt="Штукарий" />
          <span className={style.logoText}>Штукарий</span>
        </div>
      </div>
    </header>
  )
}

export default Header