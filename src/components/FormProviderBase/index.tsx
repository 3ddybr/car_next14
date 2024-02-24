/* eslint-disable @typescript-eslint/no-explicit-any */
'use client'

import { ReactNode } from 'react'
import { FormProvider, UseFormReturn } from 'react-hook-form'

type FormProviderBaseProps = {
  children: ReactNode
  useFormReturn: UseFormReturn<any>
}

export const FormProviderBase = ({
  children,
  useFormReturn,
}: FormProviderBaseProps) => {
  return <FormProvider {...useFormReturn}>{children}</FormProvider>
}
