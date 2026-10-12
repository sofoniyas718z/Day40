export default function MenuLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section>
      <div className="menu-heading">
        <p>ADDIS EATS · FRESH & DELICIOUS</p>
      </div>

      {children}
    </section>
  );
}