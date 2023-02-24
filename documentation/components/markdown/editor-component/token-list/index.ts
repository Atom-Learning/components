import { TokenListItem } from "./TokenListItem";
import { TokenListRoot } from "./TokenListRoot";

type TTokenList = typeof TokenListRoot & {
  Item: typeof TokenListItem;
};

export const TokenList = TokenListRoot as TTokenList;
TokenList.Item = TokenListItem;
TokenList.displayName = "TokenList";
