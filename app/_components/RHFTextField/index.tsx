import { TextField, Typography, Stack } from "@mui/material";
import { FC } from "react";
import { Control, FieldValues, useController } from "react-hook-form";

type PropsType = {
  name: "name" | "nullableName" | "selectedValue" | "nullableSelectedValue";
  control: Control<
    {
      name: string;
      nullableName: string | null;
      selectedValue: string;
      nullableSelectedValue: string | null;
    },
    any
  >;
  label: string;
};

export const RHFTextField: FC<PropsType> = (props) => {
  // 入力フォームを共通化したいので、RHFのControllerの代わりにuseControllerを使用しています
  const {
    field,
    formState: { errors },
  } = useController({ name: props.name, control: props.control });

  const errorMessage = errors?.[props.name]?.message as string;

  return (
    <Stack direction="row" alignItems="center" m={2}>
      <Typography variant="body1" mr={2}>
        {props.label}:
      </Typography>
      <TextField
        // 値がundefinedの場合は空文字に変換する
        value={field.value ?? ""}
        inputRef={field.ref}
        name={field.name}
        onChange={field.onChange}
        onBlur={field.onBlur}
      />
      {errorMessage && (
        <Typography variant="body1" ml={3} color="red">
          {errorMessage}
        </Typography>
      )}
    </Stack>
  );
};
