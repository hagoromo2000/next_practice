"use client";
type PropsType = {
  result: any;
};

const ClientLogger = (props: PropsType) => {
  console.log(props.result);
  return <></>;
};

export default ClientLogger;
