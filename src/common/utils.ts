export const isMounted = typeof window !== "undefined";

export function upperFirst(text: string) {
  return text.charAt(0).toUpperCase() + text.slice(1);
}