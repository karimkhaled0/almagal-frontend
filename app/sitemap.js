export default async function sitemap(req, res) {
  const baseUrl = "https://al-magal.com";

  return [
    { url: baseUrl, lastModified: new Date() },
    { url: `${baseUrl}/dammam-pest-control`, lastModified: new Date() },
  ];
}
