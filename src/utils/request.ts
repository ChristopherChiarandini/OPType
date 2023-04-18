export default function request(url: string) {
  // Code requête générale par url
  const baseUrl = import.meta.env.VITE_API_URL_API
  return fetch(`${baseUrl + url}`).then((res) => res.json())
}
