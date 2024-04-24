import { FeatureFlags } from '../../../types/featureFlags';
import { getFeatureFlag } from '../setGetFeatures';

interface ToggleFeaturesProps {
    feature: keyof FeatureFlags;
    on: React.ReactElement;
    off: React.ReactElement;
}

export const ToggleFeatures = (props: ToggleFeaturesProps) => {
    const { feature, off, on } = props;

    if (getFeatureFlag(feature)) {
        return on;
    }

    return off;
};
