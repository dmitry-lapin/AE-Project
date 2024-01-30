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
        { value: "search", label: "contains" },
      ],
    },
  ];

  export default groupedOptions;