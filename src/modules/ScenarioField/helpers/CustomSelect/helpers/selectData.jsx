const groupedOptions = [
    {
        label: "Сommon comparison operators",
        options: [
          { value: "==", label: "==" },
          { value: "!=", label: "!=" },
        ],
      },
    {
      label: "Numbers",
      options: [
        { value: ">", label: ">" },
        { value: "<", label: "<" },
        { value: ">=", label: ">=" },
        { value: "<=", label: "<=" },
      ],
    },
    {
      label: "String",
      options: [
        { value: "searchIn", label: "Search" },
      ],
    },
    {
        label: "Not a number check(NaN)",
        options: [
          { value: "isNaN", label: "isNaN" },
        ],
      },
  ];

  export default groupedOptions;