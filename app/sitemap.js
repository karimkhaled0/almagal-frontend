export default async function sitemap(req, res) {
  const baseUrl = "https://www.almajal-ksa.com/";

  return [{ url: baseUrl, lastModified: new Date() }];
}
