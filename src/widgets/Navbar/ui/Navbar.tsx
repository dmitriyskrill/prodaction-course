import { classNames } from 'shared/lib/classNames/classNames'
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink'
import { useTranslation } from 'react-i18next'
import cls from './Navbar.module.scss'

interface NavbarProps {
  className?: string;
}

export const Navbar = ({ className }: NavbarProps) => {
  const { t } = useTranslation(['main', 'about'])

  return (
    <div className={classNames(cls.Navbar, {}, [className])}>
      <div className={cls.links}>
        <AppLink
          theme={AppLinkTheme.SECONDARY}
          to="/"
          className={cls.mainLink}
        >
          {t('Главная страница', { ns: 'main' })}
        </AppLink>
        <AppLink
          theme={AppLinkTheme.RED}
          to="/about"
        >
          {t('О сайте', { ns: 'about' })}
        </AppLink>
      </div>
    </div>
  )
}
