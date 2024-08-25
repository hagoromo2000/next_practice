import { useForm, useWatch } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  sampleFormSchema,
  SampleFormSchema,
} from "../_schema/sampleFormSchema";
import { SelectOptions } from "@/app/_components/RHFSelect/index";

const useSampleForm = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<SampleFormSchema>({
    mode: "onSubmit", // modeをonBlurにすることで、初回validation時を検索ボタンが押されたタイミングに設定できる
    reValidateMode: "onBlur", // reValidateModeをonBlurにすることで、検索ボタンが押された後は常に入力値が変更されたタイミングでvalidationが走る
    defaultValues: undefined, // デフォルト状態はフォーム要素全てが未定義(undefined)の状態として取り扱う
    resolver: zodResolver(sampleFormSchema), // zodResolverの引数にvalidation時に実行するschemaを渡す
  });

  // // フォームのエラー状況
  console.log("errors", errors);
  // // フォームの入力値
  // const watchedInput = useWatch({ control });
  // console.log("watchedInput", watchedInput);

  // zodの値変換+方チェックを通過した場合のみonSubmitが呼ばれる
  const onSubmit = (data: SampleFormSchema) => {
    // zodの値変換+型チェックを通過した値
    console.log("data", data);
  };

  return {
    form: {
      control,
      handleSubmit,
      onSubmit,
    },
    options: {
      options,
      optionsWithColor,
    },
  };
};

const options: SelectOptions = [
  {
    value: "候補1",
    label: "候補1",
  },
  {
    value: "候補2",
    label: "候補2",
  },
  {
    value: "候補3",
    label: "候補3",
  },
] as const;

const optionsWithColor = [
  {
    value: "赤",
    label: "あか",
    color: "red",
  },
  {
    value: "青",
    label: "あお",
    color: "blue",
  },
  {
    value: "緑",
    label: "みどり",
    color: "green",
  },
] as const;

export default useSampleForm;
