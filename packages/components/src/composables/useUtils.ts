const defaultPrefixCls = "leonui";
export function usePrefixCls(suffixCls: string) {
  return `${defaultPrefixCls}-${suffixCls}`;
}