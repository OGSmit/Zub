import * as XLSX from 'xlsx'

/**
 * Composable для чтения Excel файлов (xlsx)
 * 
 * @example
 * const { readExcelFile, parseExcelData } = useExcelReader()
 * const workbook = await readExcelFile('/path/to/file.xlsx')
 * const data = parseExcelData(workbook, 'Sheet1')
 */
export const useExcelReader = () => {
  /**
   * Читает Excel файл и возвращает workbook
   * @param filePath - Путь к файлу или File объект
   * @returns Promise с workbook объектом
   */
  const readExcelFile = async (filePath: string | File): Promise<XLSX.WorkBook> => {
    let data: ArrayBuffer

    if (filePath instanceof File) {
      // Если передан File объект (из input)
      data = await filePath.arrayBuffer()
    } else {
      // Если передан путь к файлу
      if (typeof window === 'undefined') {
        // Server-side: используем fs
        const fs = await import('fs')
        const buffer = fs.readFileSync(filePath)
        data = buffer.buffer.slice(buffer.byteOffset, buffer.byteOffset + buffer.byteLength)
      } else {
        // Client-side: используем fetch
        const response = await fetch(filePath)
        data = await response.arrayBuffer()
      }
    }

    const workbook = XLSX.read(data, { type: 'array' })
    return workbook
  }

  /**
   * Парсит данные из листа Excel в массив объектов
   * @param workbook - Workbook объект
   * @param sheetName - Название листа (по умолчанию первый лист)
   * @returns Массив объектов, где ключи - заголовки столбцов
   */
  const parseExcelData = <T = Record<string, any>>(
    workbook: XLSX.WorkBook,
    sheetName?: string
  ): T[] => {
    const sheet = sheetName 
      ? workbook.Sheets[sheetName] 
      : workbook.Sheets[workbook.SheetNames[0]]

    if (!sheet) {
      throw new Error(`Sheet "${sheetName || workbook.SheetNames[0]}" not found`)
    }

    const data = XLSX.utils.sheet_to_json<T>(sheet)
    return data
  }

  /**
   * Получает список всех листов в workbook
   * @param workbook - Workbook объект
   * @returns Массив названий листов
   */
  const getSheetNames = (workbook: XLSX.WorkBook): string[] => {
    return workbook.SheetNames
  }

  /**
   * Читает Excel файл и сразу парсит данные
   * @param filePath - Путь к файлу или File объект
   * @param sheetName - Название листа (опционально)
   * @returns Promise с массивом данных
   */
  const readAndParseExcel = async <T = Record<string, any>>(
    filePath: string | File,
    sheetName?: string
  ): Promise<T[]> => {
    const workbook = await readExcelFile(filePath)
    return parseExcelData<T>(workbook, sheetName)
  }

  return {
    readExcelFile,
    parseExcelData,
    getSheetNames,
    readAndParseExcel
  }
}
