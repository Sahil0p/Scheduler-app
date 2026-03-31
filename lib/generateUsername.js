export function generateUsername(name) {
  return name.toLowerCase().replace(/\s+/g, "") + Math.floor(Math.random() * 1000);
}