import { FormControlType } from "@/types/FormControlType";
import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Stack,
  Typography,
} from "@mui/material";
import { FC } from "react";
import { Control, FieldValues, useController } from "react-hook-form";

export type Option = { value: string; label: string };
export type SelectOptions = Readonly<Option[]>;

type PropsType = {
  name: string;
  control: FormControlType;
  label: string;
  options: SelectOptions;
};

const RHFSelect: FC<PropsType> = (props) => {
  const {
    field: { value, ref, ...rest },
    formState: { errors },
  } = useController({ name: props.name, control: props.control });

  const errorMessage = errors?.[props.name]?.message as string;

  return (
    <Stack direction="row" alignItems="center" m={2}>
      <Typography variant="body1" mr={2}>
        {props.label}:
      </Typography>
      <FormControl variant="filled" sx={{ m: 1, minWidth: 120 }}>
        <InputLabel>{props.label}</InputLabel>
        <Select
          // 値がundefinedの場合は空文字に変換する
          value={value ?? ""}
          inputRef={ref}
          {...rest}
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          {props.options.map((option: Option, index: number) => (
            <MenuItem key={`${option.value}-${index}`} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      {errorMessage && (
        <Typography variant="body1" ml={3} color="red">
          {errorMessage}
        </Typography>
      )}
    </Stack>
  );
};

export default RHFSelect;
