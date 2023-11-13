import { BrandRoot } from "./BrandRoot"
import { BrandText } from "./BrandText"
import { BrandLogo } from "./BrandLogo"


type BrandType = typeof BrandRoot & {
  Text: typeof BrandText
  Logo: typeof BrandLogo
}

export const Brand = BrandRoot as BrandType
Brand.Text = BrandText
Brand.Logo = BrandLogo
