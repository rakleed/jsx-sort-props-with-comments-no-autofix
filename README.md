# jsx-sort-props-with-comments-no-autofix

### Describe the bug

Autofix does not work if there is a comment between props for rule [`jsx/jsx-sort-props`](https://eslint.style/rules/jsx/jsx-sort-props).

![CleanShot 2024-09-27 at 01 22 13](https://github.com/user-attachments/assets/11252058-bd90-440f-ad02-7336c87c2d0e)


### Reproduction

```sh
git clone https://github.com/rakleed/jsx-sort-props-with-comments-no-autofix
npm run install
npm run lint:fix
```

### Issue

https://github.com/eslint-stylistic/eslint-stylistic/issues/549
