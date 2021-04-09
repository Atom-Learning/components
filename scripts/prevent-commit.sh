SRC_PATTERN="sandbox/index.tsx"

if git diff --cached --name-only | grep --quiet "$SRC_PATTERN"
then
  echo -e "\033[1;31mCommit failed. Do not make changes to $SRC_PATTERN\033[0m"
  exit 1
fi
