import { jwtDecode } from "jwt-decode";

interface JwtPayload {
  sub: string;
  role: string;
  exp: number;
}

export function getUserRole(): string | null {
  const token = localStorage.getItem("token");
  if (!token) {
    console.log("No token found in localStorage");
    return null;
  }

  try {
    const decoded = jwtDecode<JwtPayload>(token);
    console.log("Decoded JWT:", decoded);

    if (decoded.exp && decoded.exp * 1000 < Date.now()) {
      console.log("Token expiry (ms):", decoded.exp * 1000);
      console.log("Current time (ms):", Date.now());

      localStorage.removeItem("token");
      return null;
    }

    console.log("User role:", decoded.role);
    return decoded.role;
  } catch (err) {
    console.error("Invalid JWT", err);
    return null;
  }
}
