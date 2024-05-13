import { FeatureFlags } from '@/shared/types/featureFlags';

let featureFlags: FeatureFlags;

// context
// state
// realod the page
// костыль
export function setFeatureFlags(newFeatureFlags?: FeatureFlags) {
    if (newFeatureFlags) {
        featureFlags = newFeatureFlags;
    }
}

export function getFeatureFlag(flag: keyof FeatureFlags) {
    return featureFlags?.[flag];
}

export function getAllFeatureFlags() {
    return featureFlags;
}

// ФИЧИ НЕ МЕНЯЮТСЯ В РАМКАХ ОДНОЙ СЕССИИ
