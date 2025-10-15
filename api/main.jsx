export default async function handler(req, res) {
  const response = await fetch('https://script.google.com/macros/s/AKfycbyJV6OCt8ZZpLuyq93cLkQvqa9h1OJKWpyvbpqIMPFDCPXVUxGktq8PCK4atEK9pQ95BQ/exec');
  const text = await response.text();
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.status(200).send(text);
}
