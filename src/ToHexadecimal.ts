import { Delimination } from './enums/Delimination'
import { baseConversion } from './BaseConversion'

String.prototype.toHexadecimal = function (this: string, deliminate: Delimination = Delimination.NONE): string {
  return baseConversion(this, deliminate, 16)
}
