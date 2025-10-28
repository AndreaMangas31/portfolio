export function goToExternalPage(
  e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
  url: string
) {
  e.preventDefault();
  window.open(url, "_blank", "noopener,noreferrer");
}
