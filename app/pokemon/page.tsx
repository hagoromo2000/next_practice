import { Box } from "@mui/material";
import { Suspense } from "react";
import SampleForm from "./_components/SampleForm";
import SampleOutput from "./_components/SampleOutput";

export default function Pokemon({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) {
  return (
    <Box>
      <SampleForm />
      <Suspense
        key={JSON.stringify(searchParams)}
        fallback={
          <>
            <p>loading...</p>
          </>
        }
      >
        {/* @ts-expect-error Server Component */}
        <SampleOutput searchParams={searchParams} />
        {/*そのままだと型エラーが出る https://nextjs.org/docs/app/building-your-application/data-fetching/fetching#asyncawait-in-server-components */}
      </Suspense>
    </Box>
  );
}
