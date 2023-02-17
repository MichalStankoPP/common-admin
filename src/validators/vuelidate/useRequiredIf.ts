import { requiredIf, createI18nMessage } from '@vuelidate/validators'

export function useRequiredIf(i18nTranslate: any) {
  const withI18nMessage = createI18nMessage({ t: i18nTranslate })

  return withI18nMessage(requiredIf, {
    withArguments: true,
    messagePath: () => 'validations.required',
  })
}