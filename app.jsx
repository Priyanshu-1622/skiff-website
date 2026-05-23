// Top-level app with scroll animation observer and mobile nav toggle.

const App = () => {
  // Intersection observer — adds .visible to .fade-in elements when they scroll into view
  React.useEffect(() => {
    const els = document.querySelectorAll(".fade-in");
    if (!els.length) return;
    const obs = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) { e.target.classList.add("visible"); obs.unobserve(e.target); } }),
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
    );
    els.forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  return (
    <>
      <Nav />
      <Hero />
      <Trusted />
      <Features />
      <Showcase />
      <Comparison />
      <QuickStart />
      <Architecture />
      <Community />
      <FAQ />
      <FinalCTA />
      <Footer />
    </>
  );
};

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
