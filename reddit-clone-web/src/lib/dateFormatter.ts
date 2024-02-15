export default function dateFormatter(isoDateString: string) {
  const date = new Date(isoDateString);

  const options = {
    year: "numeric",
    month: "short",
    day: "2-digit",
  } as const;

  const formattedDate = date.toLocaleDateString("en-US", options);

  return formattedDate;
}
