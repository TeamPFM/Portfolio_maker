export default function getCurrentTime() {
  // FIXME 서버 시간 받아 오는 걸로 변경하거나 아니면 이것이 시스템 시간과 상관없는 현재의 시간인께 이대로 쓰든지

  return new Date(Date.now() + 32_400_000)
    .toISOString()
    .split("T")
    .join(" ")
    .split("Z")
    .join("");
}
