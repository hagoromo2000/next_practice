import { fetcher } from "@/app/_api/fetcher";
import { Box } from "@mui/material";
import Image from "next/image";
import ClientLogger from "./ClientLogger";

type PropsType = {
  searchParams: { [key: string]: string | undefined };
};

const getPokemonData = (params: URLSearchParams) => {
  const pokemonName = params.get("name");
  const endpoint = `pokemon/${pokemonName}`;
  const result = fetcher(endpoint);
  return result;
};

const SampleOutput = async (props: PropsType) => {
  const params = new URLSearchParams();
  params.set("name", props.searchParams.name ?? "1");
  console.log(params);
  const result: any = await getPokemonData(params);
  return (
    <Box>
      <p>選択した図鑑番号のポケモン</p>
      {result ? (
        <Image
          src={result.result.sprites.front_default}
          alt="ポケモン"
          width={200}
          height={200}
        />
      ) : null}
      <ClientLogger result={result} />
    </Box>
  );
};

export default SampleOutput;
