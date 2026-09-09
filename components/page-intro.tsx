export function PageIntro({
  index,
  title,
  children,
}: {
  index: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <header className="page-intro">
      <p className="page-index">{index}</p>
      <div>
        <h1>{title}</h1>
        <p>{children}</p>
      </div>
    </header>
  );
}
