import { EditableProfileCard } from '@/features/editableProfileCard';
import { TestProvider } from '../../src/shared/lib/tests/componentRender/componentRender';

const TEST_USER_ID = '4';

describe('EditableProfileCard.cy.tsx', () => {
    it('playground', () => {
        cy.intercept('GET', '**/profile/*', { fixture: 'profile.json' });
        cy.mount(
            <TestProvider
                options={{
                    initialState: {
                        user: {
                            authData: {
                                id: TEST_USER_ID,
                            },
                        },
                    },
                }}
            >
                <EditableProfileCard id={TEST_USER_ID} />
            </TestProvider>,
        );
    });
});
