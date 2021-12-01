import { ConvertDef } from "../../compiled/Convert";

export class Convert implements ConvertDef {
  strTou16(input: string): number[] | Promise<number[]> {
    let parsed = JSON.parse(input)
    try {
      if (!!parsed && parsed.length) {
        let result = []
        for (const i of parsed) {
          let parsedNumber = parseInt(i)
          if (parsedNumber >= Math.pow(2, 16))
            result.push(parseInt(i))
        }
        return result
      } else {
        return []
      }
    } catch {
      return []
    }
  }
}
