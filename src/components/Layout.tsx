import GovHeader from "./GovHeader";
import GovFooter from "./GovFooter";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex min-h-screen flex-col">
      <GovHeader />
      <main className="flex-1">{children}</main>
      <GovFooter />
    </div>
  );
};

export default Layout;
