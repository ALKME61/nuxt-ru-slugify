export const useSlugify = () => {
  const slugify = (text: unknown, separator?: string): string => {
    if (typeof text !== 'string') {
      if (import.meta.env.DEV) console.warn('[ru-slugify] expects string', text)
      return ''
    }

    // 1. Транслитерация кириллицы
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

    // 2. Удаляем все символы, кроме букв, цифр и пробелов
    result = result.replace(/[^a-z0-9\s]/g, '')

    // 3. Если separator передан – заменяем последовательности пробелов и других разделителей на него
    if (separator !== undefined) {
      result = result.replace(/\s+/g, separator === '' ? '' : separator)
    }

    // 4. Убираем начальные и конечные разделители
    if (separator !== undefined && separator !== '') {
      result = result.replace(new RegExp(`^${separator}+|${separator}+$`, 'g'), '')
    }

    return result
  }

  return { slugify }
}