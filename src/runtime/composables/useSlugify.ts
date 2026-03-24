export const useSlugify = () => {
  const slugify = (text: unknown, separator?: string): string => {
    if (typeof text !== 'string') {
      if (import.meta.env.DEV) {
        console.warn('[ru-slugify] slugify expects a string for text, received', text)
      }
      return ''
    }

    // транслитерируем кириллицу
    let result = text
      .toLowerCase()
      .replace(/[а-яё]/g, (char) => {
        const dict: Record<string, string> = {
          'а': 'a', 'б': 'b', 'в': 'v', 'г': 'g', 'д': 'd',
          'е': 'e', 'ё': 'yo', 'ж': 'zh', 'з': 'z', 'и': 'i',
          'й': 'y', 'к': 'k', 'л': 'l', 'м': 'm', 'н': 'n',
          'о': 'o', 'п': 'p', 'р': 'r', 'с': 's', 'т': 't',
          'у': 'u', 'ф': 'f', 'х': 'kh', 'ц': 'ts', 'ч': 'ch',
          'ш': 'sh', 'щ': 'sch', 'ъ': '', 'ы': 'y', 'ь': '',
          'э': 'e', 'ю': 'yu', 'я': 'ya'
        }
        return dict[char] || char
      })

    // если separator передан — заменяем все не-буквенно-цифровые последовательности на него
    if (separator !== undefined) {
      result = result.replace(/[^a-z0-9]+/g, separator === '' ? '' : separator)
    }

    // убираем начальные и конечные разделители (если они появились)
    result = result.replace(/^-|-$/g, '')

    return result
  }

  return { slugify }
}