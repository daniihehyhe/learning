import React, {FC} from 'react'
import { useTranslation } from 'react-i18next'
import styles from './style.module.scss'
import { Link } from 'react-router-dom'

export const HeaderDropDown:FC = () => {
	const {t} =useTranslation()
  return (
    <div className={styles.dropdown}>
      <input className="font-roboto" type="checkbox" id="toggle" />
      <label className="font-roboto dark:text-white" htmlFor="toggle">
        {t("header.pages")}
      </label>
      <ul className={styles.menu}>
        <li>
          <Link className="dark:text-black" to="/BlogDetail">
            {t("Connection.bdetail")}
          </Link>
        </li>
        <li>
          <Link className="dark:text-black" to="/Contact">
            {t("Connection.contact")}
          </Link>
        </li>
        <li>
          <Link className="dark:text-black" to="/About">
            {t("Connection.about")}
          </Link>
        </li>
      </ul>
    </div>
  );
}
