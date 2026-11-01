# Health Bingo App

A group wellness app that transforms habit-building into a fun and motivating game. Each challenge is structured around a Bingo board of health-related tasks, where players check off completed items weekly, weigh in, and earn points in a supportive, competitive group setting.

**Who it's for:** friends, families, workplaces and community groups who want to build healthy habits together. One person organizes a challenge and invites others as players.

**Status:** active development. Version 1.1.3 of the React Native client (iOS + Android). This repository holds the mobile app only; the backend API is a separate project. Planned work is in [ROADMAP.md](ROADMAP.md).

## 🎯 Product Overview

Health Bingo operates on a pay-per-challenge model with no subscriptions. Players join for free, while organizers pay once per challenge, choosing from flexible pricing tiers based on group size, challenge length, and premium features.

## 👥 User Roles

### Organizer
- Creates challenges and can choose to participate as a Player or just manage
- Can toggle participation on/off after creation
- Has full control over challenge settings and management

### Player
- Joins challenges via invite link or code
- Cannot manage or modify the challenge
- Focuses on completing tasks and earning points

### Role Flexibility
- Roles are scoped per challenge
- A user can be an Organizer in one challenge and a Player in another
- Dashboard clearly separates:
  - **Joined** – Challenges where user is a Player
  - **Hosted** – Challenges where user is an Organizer

## 🎮 Challenge Structure

### Bingo Cards
- Weekly Bingo cards (4x6, 4x5, or 4x4 grid)
- Tasks include categories like hydration, exercise, healthy eating, sleep, and lifestyle goals
- Players manually log daily task completions by marking off squares
- Premium players can track weekly weight and access exclusive card templates

### Challenge Categories

#### Weight Loss (Premium)
- Targeted actions to support fat loss, boost metabolism, and build healthy consistency
- Includes weekly weight tracking feature
- Premium category requiring Pro plan

#### Mental & Emotional Well-being
- Supports stress relief, emotional balance, focus, and restoration
- Tasks include gratitude journaling, mindfulness, random acts of kindness, digital detoxes, and sleep hygiene

#### Physical Health & Movement
- Designed to reduce sedentary behavior and increase energy
- Focuses on steps, stretching, strength, and playful movement

#### Eat Well, Feel Well
- Supports energy, digestion, and focus through improved food habits
- Tasks include eating more whole foods, trying a no-sugar day, adding fermented foods, staying hydrated

## 📅 Weekly Cycle

| Day | Action |
|-----|--------|
| Sunday | New Bingo cards auto-assigned |
| Monday | Push reminder to log weigh-in (for Weight Loss) |
| Weekdays | Players mark off tasks; system tracks progress |
| Friday | Motivation nudges sent to inactive users |
| Saturday | Points awarded, leaderboard updated, Wild Cards sent |

## 🏆 Points & Rewards

| Player Action | Points Earned |
|---------------|---------------|
| First to complete Bingo | +2 |
| Completed entire card | +1 |
| Logged weight loss | +1 |
| Weekly top % weight loser | +2 |
| Top % weight loser overall | +3 |

### Wild Cards
- Awarded to: weekly top loser (Weight Loss) & first to complete Bingo
- Can be used to mark off one missed task

## 💰 Pricing & Monetization

One-Time Payment Per Challenge (No Subscription)

| Plan | Price | Challenges | Custom Cards | Max Members | Duration Limit |
|------|-------|------------|--------------|-------------|----------------|
| Free | $0 | 1 | No | 3 | Up to 2 weeks |
| Premium | $31.99 | 1 | Yes | 10 | 2–12 Weeks |
| Pro | $49.90 | 1 | Yes | 20 | Up to 16 Weeks |
| Pro Lifetime | $89.99 | Unlimited | Yes | Unlimited | Unlimited |

**Note:** A Free challenge cannot exceed 3 players or 2 weeks. Upgrade required to expand.

## 🔒 Archived Challenge Access

- When a challenge ends, it becomes locked to Players
- Organizers can always access any challenges they created
- Players can unlock access to past challenges for $1.99

**What's unlocked:**
- Completed Bingo cards
- Leaderboard
- Weigh-in history

## 🚀 User Flows

### A. Creating a Challenge (Organizer)
1. Tap "Create Challenge"
2. Select plan (Free / Premium / Pro)
3. Choose: "Participate as Player?" Yes / No
4. Complete one-time payment (if required)
5. Select challenge duration
6. Select challenge category
7. Choose pre-built Bingo template or customize (if Premium/Pro)
8. Share invite code or link

### B. Joining a Challenge (Player)
1. Open invite link or enter code
2. Join as Player (no payment required)
3. Access dashboard, start participating

### C. After Completion
1. Archived challenge is locked to Players
2. Option to unlock for $1.99

## 🎨 Design & UX

### Role Management & Navigation
- Dashboard displays two clear sections:
  - **Joined** – for challenges where the user is a Player
  - **Hosted** – for challenges where the user is an Organizer
- Tapping "Create Challenge" always starts a new Organizer flow
- Tapping "Join Challenge" opens the Player flow

### Upgrade Prompting & Feature Unlocks

**Organizer Triggers:**
- Selecting more than 3 members on Free Plan → prompt upgrade
- Selecting Weight Loss category → prompt Pro upgrade
- Clicking "Customize Card" → prompt Premium/Pro upgrade with preview
- Extending duration beyond Free limit → upgrade prompt

**Player Triggers:**
- Clicking "Track Weight" on a non-Pro challenge → show Pro feature message
- Clicking "Archived Challenge" → unlock prompt with $1.99
- After completing first challenge → prompt to host one with optional discount

### Feature Visibility & Locking
- Use blurred overlays or lock icons to show unavailable features
- Show weight tracking as a grayed-out feature with tooltip

## 🛠️ Technical Stack

- **Framework:** React Native 0.78, React 19, TypeScript
- **State Management:** Zustand (persisted with AsyncStorage)
- **Navigation:** React Navigation (bottom tabs + native stack)
- **Auth:** Google Sign-In, Sign in with Apple
- **Payments:** Stripe (Android), Apple In-App Purchase via react-native-iap (iOS)
- **Push Notifications:** Firebase Cloud Messaging
- **Other:** moment-timezone, react-native-image-picker, react-native-sound

## 📱 Getting Started

### Prerequisites
- Node.js >= 18
- React Native development environment
- Android Studio / Xcode

### Configuration
Keys and Firebase config are not committed. Create your local copies from the templates and fill in your own values:

```bash
cp src/constants/secrets.example.ts src/constants/secrets.ts             # Stripe key, Google OAuth client IDs
cp android/app/google-services.example.json android/app/google-services.json
cp ios/GoogleService-Info.example.plist ios/GoogleService-Info.plist
```

### Sound effects
The sound effects are licensed (Epidemic Sound) and can't be redistributed, so they aren't in the repo. The app expects these MP3 files, which you can replace with any sounds you own or with free/CC0 ones:

`complete_card`, `lets_go`, `new_board`, `task_complete_bubble`, `task_complete_button`, `task_complete_mouth`, `task_complete_plop`, `task_complete_ui`

Put them (as `<name>.mp3`) in both `android/app/src/main/res/raw/` and `ios/`. Name mapping lives in `src/services/sound.service.ts`.

Other non-secret settings (API base URL, Apple product IDs, timezone) are in `src/constants/config.ts`.

### Installation
```bash
# Install dependencies
npm install

# iOS
cd ios && pod install && cd ..
npm run ios

# Android
npm run android
```

## 🧪 Testing

```bash
npm test
```

## 📊 Analytics & Event Tracking (planned)

Not implemented yet. See [ROADMAP.md](ROADMAP.md).

- Track conversion from prompt views to upgrade
- Track engagement drop-off points (e.g., days of inactivity)
- Track popular challenge categories and feature usage

## 🎁 Optional Enhancements (planned)

### Gamified Upsell
- Offer milestone-based rewards or discount coupons (e.g., after completing first challenge)

## 📄 License

Released under the [MIT License](LICENSE).

---

**Health Bingo App** - Transforming wellness into a game, one Bingo card at a time! 🎯✨
