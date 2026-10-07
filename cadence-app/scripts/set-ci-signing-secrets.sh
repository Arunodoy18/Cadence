#!/usr/bin/env bash
# One-time: store your Android signing key as GitHub Actions secrets so every CI
# build is signed with the same key and phones can update the app in place.
# Needs the GitHub CLI logged in (`gh auth login`). The key never enters git.
set -euo pipefail
cd "$(dirname "$0")/../android"
[ -f keystore.properties ] || { echo "android/keystore.properties not found"; exit 1; }
get() { grep "^$1=" keystore.properties | head -1 | cut -d= -f2-; }
STORE_FILE="$(get storeFile)"; [ -f "$STORE_FILE" ] || STORE_FILE="$(pwd)/$STORE_FILE"
REPO="${1:-Arunodoy18/Cadence}"
base64 < "$STORE_FILE" | tr -d '\n' | gh secret set ANDROID_KEYSTORE_BASE64 --repo "$REPO"
get storePassword | tr -d '\n' | gh secret set ANDROID_KEYSTORE_PASSWORD --repo "$REPO"
get keyAlias      | tr -d '\n' | gh secret set ANDROID_KEY_ALIAS --repo "$REPO"
get keyPassword   | tr -d '\n' | gh secret set ANDROID_KEY_PASSWORD --repo "$REPO"
echo "Done. The next push builds a release APK signed with your key."
