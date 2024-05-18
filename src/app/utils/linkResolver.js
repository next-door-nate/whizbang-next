export default function linkResolver(doc) {
  switch (doc._type) {
    case "post":
      return "/blog" + doc.slug.current;

    default:
      return doc.slug.current;
  }
}
