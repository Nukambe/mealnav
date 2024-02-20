export default function Button({
  children,
  href,
}: {
  children: React.ReactNode;
  href?: string;
}) {
  return href ? (
    <a href={href} className="mt-10">
      {children}
    </a>
  ) : (
    <button className="mt-10">{children}</button>
  );
}
