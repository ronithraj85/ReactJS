export function createMockJwt(role: "CUSTOMER" | "OWNER" | "ADMIN"): string {
  const header = {
    alg: "HS256",
    typ: "JWT",
  };

  const payload = {
    sub: "1",
    role,
    exp: Math.floor(Date.now() / 1000) + 60 * 60, // 1 hour from now
  };

  const base64 = (obj: object) =>
    btoa(JSON.stringify(obj))
      .replace(/=/g, "")
      .replace(/\+/g, "-")
      .replace(/\//g, "_");

  const token = `${base64(header)}.${base64(payload)}.signature`;
  return token;
}
