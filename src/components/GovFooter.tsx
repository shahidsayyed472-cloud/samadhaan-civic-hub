const GovFooter = () => {
  return (
    <footer className="border-t bg-primary">
      <div className="saffron-stripe" />
      <div className="container mx-auto px-4 py-4 text-center">
        <p className="text-sm text-primary-foreground/80">
          SAMADHAAN — A Public Service Initiative
        </p>
        <p className="mt-1 text-xs text-primary-foreground/60">
          © {new Date().getFullYear()} Government of India. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default GovFooter;
