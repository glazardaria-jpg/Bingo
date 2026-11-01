// export const API_BASE_URL = 'http://10.96.45.76:3000';
export const API_BASE_URL = 'https://healthbingo-backend-dev-69f9daf23457.herokuapp.com';

// Stripe Configuration
export const STRIPE_MERCHANT_IDENTIFIER = 'merchant.com.healthbingo.app';

// Keys and OAuth client IDs live in secrets.ts (gitignored) — see secrets.example.ts
export {
  STRIPE_PUBLISHABLE_KEY,
  GOOGLE_WEB_CLIENT_ID,
  GOOGLE_IOS_CLIENT_ID,
} from './secrets';

// Sign in with Apple — Android web-OAuth flow only (iOS uses the native bundle id).
// APPLE_SERVICE_ID = the Apple "Services ID" configured for Sign in with Apple.
// APPLE_REDIRECT_URI = an HTTPS endpoint you host that receives Apple's form_post
// callback and 303-redirects it back so the in-app browser can read the result
// (see healthbingo-web/functions/auth/apple/callback.js). Both must match the
// values registered in the Apple Developer portal for the Services ID.
export const APPLE_SERVICE_ID = 'com.healthbingo.signin';
export const APPLE_REDIRECT_URI =
  'https://healthbingo.com.au/auth/apple/callback';

// Apple In-App Purchase product IDs (iOS only). Must match the consumable
// products configured in App Store Connect and the backend's APPLE_PRODUCT_IDS.
// Android continues to use Stripe.
export const APPLE_IAP_PRODUCT_IDS: Record<string, string> = {
  premium: 'com.healthbingo.app.challenge.premium',
  pro: 'com.healthbingo.app.challenge.pro',
};
export const APPLE_IAP_UPGRADE_PRODUCT_ID =
  'com.healthbingo.app.challenge.upgrade_pro';

// Default Timezone
export const DEFAULT_TIMEZONE = 'Australia/Sydney';
