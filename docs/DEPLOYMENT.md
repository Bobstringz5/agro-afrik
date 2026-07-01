# ECO-AFRIK Deployment Guide

## Local Development

```bash
npm install
npm run dev
```

Create `.env.local` from `.env.example` and provide Firebase, OpenAI, and Google Maps keys.

## Firebase Setup

```bash
firebase login
firebase use <project-id>
firebase deploy --only firestore:rules,firestore:indexes
```

Enable these Firebase products:

- Authentication
- Firestore
- Storage
- Cloud Messaging
- Analytics
- Cloud Functions

## Cloud Functions

```bash
cd functions
npm install
npm run build
npm run deploy
```

Functions included:

- `createLivestockPassport`
- `notifyVerificationChange`
- `requestBulkPurchase`

## Vercel

Set the variables from `.env.example` in Vercel Project Settings, then deploy from the connected Git repository.

## SEO Targets

- Livestock marketplace Africa
- Livestock technology Africa
- Smart farming Africa
- Livestock traceability
- Livestock verification
- Digital livestock passport
- AgriTech Africa
