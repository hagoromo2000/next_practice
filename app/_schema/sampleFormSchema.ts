// zodのpreprocessを使って、値が空文字の場合はnullに変換する

import { z } from "zod";
const castToValOrNull = <T extends Parameters<typeof z.preprocess>[1]>(
  schema: T
) =>
  z.preprocess((val) => {
    if (typeof val === "string") {
      const trimmedVal = val.trim();
      return trimmedVal.length > 0 ? trimmedVal : null;
    }
    return null;
  }, schema);

export const sampleFormSchema = z.object({
  name: castToValOrNull(
    z.string({
      required_error: "必須項目です",
      invalid_type_error: "入力値に誤りがあります",
    })
  ),
  nullableName: castToValOrNull(z.string().nullable()),
  selectedValue: castToValOrNull(
    z.string({
      required_error: "必須項目です",
      invalid_type_error: "選択必須です",
    })
  ),
  nullableSelectedValue: castToValOrNull(z.string().nullable()),
  // 最低でも一つは選択必須
  // multiOptions: z.array(z.string()).min(1),
});

export type SampleFormSchema = z.infer<typeof sampleFormSchema>;
