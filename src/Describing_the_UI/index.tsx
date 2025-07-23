import FirstComponent from "./FirstComponent";

// one module can only have default export
// when importing default, you can name it whatever you want, but ideally it the name the same
export default function DescribingUI() {
  // this is JSX syntax, it looks like HTML, but its not
  return (
    <section>
      <h1>Describing the UI</h1>

      {/* A component MUST have its first letter capitalized */}
      <FirstComponent />
    </section>
  );
}
