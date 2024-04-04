import { Story } from '@storybook/react';
import { Theme } from '../../../const/theme';
// eslint-disable-next-line mega/fsd-layers-import
import { ThemeProvider } from '@/app/providers/ThemeProvider';

export const ThemeDecorator = (theme: Theme) => (StoryComponent: Story) => (
    <ThemeProvider initialTheme={theme}>
        <div className={`app ${theme}`}>
            <StoryComponent />
        </div>
    </ThemeProvider>
);
