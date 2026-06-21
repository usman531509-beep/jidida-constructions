// Re-mounts on every navigation, so the fade-up plays as a smooth route transition.
export default function Template({ children }: { children: React.ReactNode }) {
  return <div className="animate-page-in">{children}</div>;
}
