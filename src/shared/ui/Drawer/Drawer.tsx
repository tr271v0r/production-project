import { Mods, classNames } from "shared/lib/classNames/classNames";
import { memo } from "react";
import  cls  from './Drawer.module.scss';
import { useTheme } from "app/providers/ThemeProvider";
import { Portal } from "../Portal/Portal";
import { Overlay } from "../Overlay/Overlay";
import { useModal } from '../../lib/hooks/useModal/useModal';

interface DrawerProps {
    className?: string;
    children: React.ReactNode;
    isOpen?: boolean;
    onClose?: () => void;
    lazy?:boolean;
};

export const Drawer = memo((props: DrawerProps) => {
    const {
        className,
        children,
        isOpen,
        onClose,
        lazy
    } = props;

    const {theme} = useTheme();

    const { 
        isClosing,
        isMounted,
        close
    } = useModal({
        animationDelay: 300,
        onClose,
        isOpen
    });


    const mods: Mods = {
        [cls.opened]: isOpen,
        [cls.isClosing]: isClosing,
    };

    if (lazy && !isMounted) {
        return null;
    }

    return (
        <Portal>
            <div className={classNames(cls.Drawer, mods, [className, theme, 'app_drawer'])}>
                <Overlay onClick={close}/>
                <div className={cls.content}>
                    {children}
                </div>
            </div>
        </Portal> 
    );
});