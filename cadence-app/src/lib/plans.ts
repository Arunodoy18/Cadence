// One place that defines what Free and Plus get. Used by the server (enforcement)
// and mirrored in the app (labels). Change the numbers here only.
export const LIMITS = {
  free: { convo: 15, pron: 8, stt: 25, tts: 5000 },
  plus: { convo: 400, pron: 200, stt: 600, tts: 150000 }, // generous fair-use ceiling, not a selling point
} as const;

export type Plan = keyof typeof LIMITS;
export type UsageKind = keyof (typeof LIMITS)['free'];

export const KIND_LABEL: Record<UsageKind, string> = {
  convo: 'AI conversation messages',
  pron: 'pronunciation checks',
  stt: 'voice-to-text',
  tts: 'cloud voice',
};
