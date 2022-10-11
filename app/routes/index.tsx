import invariant from "tiny-invariant";

invariant(process.env.SLIDES_SRC, "SLIDES_SRC must be set");

const slides = process.env.SLIDES_SRC;

export default function Index() {
  return (
    <main className="min-h-screen min-w-screen bg-black sm:flex sm:items-center sm:justify-center">
      <iframe
        className="w-screen h-screen"
        title="elks current events"
        src={slides}
        frameBorder="0"
      />
    </main>
  );
}
