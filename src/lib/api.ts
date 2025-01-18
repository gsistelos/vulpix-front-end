export function fetchAPI(path: string, options?: RequestInit) {
  const defaultOptions: RequestInit = {
    headers: {
      "Content-Type": "application/json",
    },
  };

  return fetch(`${process.env.NEXT_PUBLIC_API_URL}${path}`, {
    ...defaultOptions,
    ...options,
  });
}
