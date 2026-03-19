export interface DiscountOverride {
  propertyId: string;
  discountPercent: number;
  discountedPrice?: number;
  note?: string;
}

const STORAGE_KEY = 'yahia-dubai-discount-overrides';
const FOUNDER_SETTINGS_KEY = 'yahia-dubai-founder-settings';

export interface FounderSettings {
  founderPhotoUrl: string;
  mascotByCategory: Record<string, string>;
}

const defaultFounderSettings: FounderSettings = {
  founderPhotoUrl: '',
  mascotByCategory: {},
};

export function getDiscountOverrides(): DiscountOverride[] {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? (JSON.parse(raw) as DiscountOverride[]) : [];
  } catch {
    return [];
  }
}

export function getDiscountOverride(propertyId: string) {
  return getDiscountOverrides().find((item) => item.propertyId === propertyId);
}

export function saveDiscountOverride(override: DiscountOverride) {
  const current = getDiscountOverrides().filter((item) => item.propertyId !== override.propertyId);
  current.push(override);
  localStorage.setItem(STORAGE_KEY, JSON.stringify(current));
}

export function removeDiscountOverride(propertyId: string) {
  const current = getDiscountOverrides().filter((item) => item.propertyId !== propertyId);
  localStorage.setItem(STORAGE_KEY, JSON.stringify(current));
}

export function getFounderSettings(): FounderSettings {
  try {
    const raw = localStorage.getItem(FOUNDER_SETTINGS_KEY);
    if (!raw) {
      return defaultFounderSettings;
    }
    const parsed = JSON.parse(raw) as FounderSettings;
    return {
      founderPhotoUrl: parsed.founderPhotoUrl || '',
      mascotByCategory: parsed.mascotByCategory || {},
    };
  } catch {
    return defaultFounderSettings;
  }
}

export function saveFounderSettings(settings: FounderSettings) {
  localStorage.setItem(FOUNDER_SETTINGS_KEY, JSON.stringify(settings));
}

export function getMascotImage(category: string) {
  const settings = getFounderSettings();
  return settings.mascotByCategory[category] || settings.founderPhotoUrl;
}
