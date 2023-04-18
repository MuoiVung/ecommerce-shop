import { yupResolver } from "@hookform/resolvers/yup";
import { Box, Button, TextField } from "@mui/material";
import { StyledTextField } from "@styles/shared/CustomForm.style";

import { ReactNode } from "react";
import {
  SubmitHandler,
  useForm,
  Controller,
  DeepPartial,
} from "react-hook-form";

import * as yup from "yup";

type FormData = Record<string, unknown> & {
  [key: string]: string;
};

type FieldProps = {
  name: keyof FormData;
  label: string;
  type: string;
  required?: boolean;
};

interface Props<T extends FormData> {
  onSubmitForm: SubmitHandler<T>;
  defaultValues: DeepPartial<T>;
  validationSchema: yup.AnyObjectSchema;
  fields: FieldProps[];
  children?: ReactNode;
}

export const CustomForm = <T extends FormData>({
  defaultValues,
  fields,
  validationSchema,
  onSubmitForm,
  children,
}: Props<T>) => {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<T>({
    resolver: yupResolver(validationSchema),
    defaultValues: defaultValues,
  });

  const onError = (errors: any, e: any) => console.log(errors, e);

  return (
    <Box component="form" onSubmit={handleSubmit(onSubmitForm, onError)}>
      {fields.map((field) => (
        <StyledTextField
          variant="filled"
          key={field.name}
          label={field.label}
          type={field.type}
          required={field.required}
          error={errors[field.name] ? true : false}
          helperText={errors[field.name]?.message as any}
          autoComplete="true"
          {...register(field.name.toString() as any)}
          margin="normal"
          fullWidth
        />
      ))}
      <Box>{children}</Box>
    </Box>
  );
};
