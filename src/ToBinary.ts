import { Delimination } from './enums/Delimination'
import { baseConversion } from './BaseConversion'

String.prototype.toBinary = function (this: string, deliminate: Delimination = Delimination.NONE): string {
  return baseConversion(this, deliminate, 2)
}
