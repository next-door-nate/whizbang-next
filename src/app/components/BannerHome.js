export default function BannerHome({ banner }) {
  return (
    <section data-block={banner._type}>
      <h1>{banner.title ? banner.title : "Home Banner needs content"}</h1>
    </section>
  );
}
