import { useParams } from 'react-router-dom';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Page } from '@/widgets/Page';
import { VStack } from '@/shared/ui/redesigned/Stack';
import { EditableProfileCard } from '@/features/editableProfileCard';

const ProfilePage = () => {
    const { id } = useParams<{ id: string }>();

    return (
        <Page data-testid="ProfilePage" className={classNames('', {}, [])}>
            <VStack gap="16" max>
                <EditableProfileCard id={id} />
            </VStack>
        </Page>
    );
};

export default ProfilePage;
