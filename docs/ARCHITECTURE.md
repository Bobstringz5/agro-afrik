# ECO-AFRIK Architecture

## Application

- `app/page.tsx`: investor-facing landing page.
- `app/dashboard/*`: farmer, buyer, and admin dashboard shells.
- `app/passport/[id]`: public QR verification page for livestock passports.
- `app/api/ai/route.ts`: OpenAI-backed livestock assistant endpoint.
- `app/actions.ts`: Next.js Server Actions for lead capture.
- `components/investor-charts.tsx`: client-side Recharts visualizations.
- `lib/firebase.ts`: Firebase client SDK for Auth, Firestore, Storage, Analytics, and Messaging.
- `lib/firestore-schema.ts`: typed schema reference for all required collections.

## Firebase

- Firestore collections: `users`, `farmers`, `buyers`, `livestock`, `vaccinations`, `medical_records`, `marketplace_listings`, `orders`, `deliveries`, `reviews`, `messages`, `notifications`, `investor_leads`, `partners`, `waitlist`.
- Security rules: `firestore.rules`.
- Indexes: `firestore.indexes.json`.
- Cloud Functions: `functions/src/index.ts`.

## Production Integrations

- Authentication: Firebase Auth with role fields mirrored in `users/{uid}`.
- Storage: Firebase Storage for vaccination proof, animal images, farm documents, and verification files.
- Notifications: Firebase Cloud Messaging triggered by verification, order, health, and payment events.
- AI: OpenAI Responses API through the server route.
- Maps: Google Maps API for farm location, buyer filters, delivery routes, and cluster analysis.
- Analytics: Firebase Analytics plus Vercel analytics for acquisition funnels.

## Deployment

1. Add environment variables from `.env.example` to Vercel.
2. Create Firebase project and enable Auth, Firestore, Storage, Analytics, and Messaging.
3. Deploy Firestore rules and indexes.
4. Install function dependencies inside `functions` and deploy Cloud Functions.
5. Deploy the Next.js app to Vercel.

## Investor UX Strategy

The landing page is structured like a venture pitch:

1. Market-defining hero.
2. Clear problem and quantified pain.
3. Product-led solution flow.
4. Passport moat and defensibility.
5. Market size, business model, and impact.
6. Roadmap, fundraising ask, team, and conversion forms.
