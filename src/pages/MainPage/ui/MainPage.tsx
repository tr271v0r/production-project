// import { BugButton } from 'app/providers/ErrorBoundary';
import { useTranslation } from 'react-i18next';
import { Page } from '@/widgets/Page/Page';
import { RatingCard } from '@/entities/Rating';

const MainPage = () => {
    const { t } = useTranslation();
    return (
        <Page>
            {/* <BugButton /> */}
            {t('Главная страница')}
            <RatingCard title="SUS" feedbackTitle="feedback" />
        </Page>
    );
};

export default MainPage;
