export function useLocale() {
  const locale = useState<'en' | 'ar'>('locale', () => 'en')
  const dir = computed(() => locale.value === 'ar' ? 'rtl' : 'ltr')

  function toggleLocale() {
    locale.value = locale.value === 'en' ? 'ar' : 'en'
  }

  return { locale, dir, toggleLocale }
}
