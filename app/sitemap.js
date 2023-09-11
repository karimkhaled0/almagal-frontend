export default async function sitemap(req, res) {
  const baseUrl = "https://www.al-magal.com";

  return [{ url: baseUrl, lastModified: new Date() }];
}
