export default async function handler(req, res) {
  // === CORS ===
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET,POST,OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");

  if (req.method === "OPTIONS") {
    return res.status(200).end();
  }

  // === TARGET API DEV ORG ===
  const TARGET_API = "https://api-faa.my.id/faa/lloli";

  const response = await fetch(TARGET_API, {
    method: req.method,
    headers: {
      "Content-Type": "application/json"
    },
    body: req.method !== "GET"
      ? JSON.stringify(req.body)
      : null
  });

  const data = await response.text();
  res.status(response.status).send(data);
    }
