import React, {FC} from 'react'
import { useTranslation } from "react-i18next";
import logo from '../../assets/logo.png'
import { Switch } from 'antd';


export const Header:FC = () => {
   const { t, i18n } = useTranslation();

  const changeLanguage = (checked: boolean) => {
    const lng = checked ? 'ru' : 'en';
    i18n.changeLanguage(lng);
  };

	return (
	<div className='flex justify-between py-10'>
<img src={logo} alt="" />
<nav className='flex justify-between w-1/4' >
	<h1 className='font-roboto'>
		
		{t("header.cours")}
	</h1>
	<h3 className='font-raleway'>
		{t("header.detail")}
	</h3>
	<h3>
		{t("header.pages")}
	</h3>
	<h3>
		{t('header.blog')}
	</h3>
</nav>
 <div>
	<Switch
        checked={i18n.language === 'ru'}
        checkedChildren="RU"
        unCheckedChildren="EN"
        onChange={changeLanguage}
      />
	  <button type='submit'>
		{t("header.login")}
	  </button>
	  
	  <button type='submit'>
		{t("header.join")}
	  </button>
 </div>
	</div>
  )
}
