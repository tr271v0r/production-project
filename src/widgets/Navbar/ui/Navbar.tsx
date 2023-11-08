import { classNames } from 'shared/lib/classNames/classNames';
// 17:01
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import { useTranslation } from 'react-i18next';
import cls from './Navbar.module.scss';

interface NavbarProps{
    className?: string;
}

// Компонент не требует асинхронного чанка, экспортируем не по дефолту
export const Navbar = ({ className }: NavbarProps) => {
    const { t } = useTranslation();
    return (
        <div className={classNames(cls.Navbar, {}, [className])}>

            <div className={cls.links} />
        </div>
    );
};
