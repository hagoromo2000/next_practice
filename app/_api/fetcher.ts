const sleep = (ms: number) => {
  return new Promise((resolve) => setTimeout(resolve, ms));
};
const BASE_URL = "https://pokeapi.co/api/v2/";
export const fetcher = async <T>(
  endpoint: string,
  { headers, ...options }: RequestInit = {}
): Promise<{ result: T }> => {
  // loadingの挙動確認のためにあえて指定
  await sleep(2000);
  try {
    const url = new URL(endpoint, BASE_URL);
    console.log("url", url.toString()); // URLを文字列で出力
    const res = await fetch(url, options); // optionsをfetchに渡す
    if (!res.ok) {
      throw new Error(`HTTP error: ${res.status} - ${res.statusText}`);
    }
    const json = await res.json();
    return { result: json };
  } catch (error) {
    console.error("Fetch error:", error);
    throw error; // エラーを再投げして、呼び出し元に通知
  }
};
