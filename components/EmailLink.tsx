export function EmailLink({ email }: { email: string }) {
  return (
    <a href={`mailto:${email}`} suppressHydrationWarning>
      {email}
    </a>
  );
}
