export const validation = {
  email: {
    required: {
      value: true,
      message: "入力が必須です",
    },
    pattern: {
      value: /^[a-zA-Z0-9_.+-]+@([a-zA-Z0-9][a-zA-Z0-9-]*[a-zA-Z0-9]*\.)+[a-zA-Z]{2,}$/,
      message: "正しい形式で入力してください",
    },
  },
  password: {
    required: {
      value: true,
      message: "入力が必須です",
    },
    minLength: {
      value: 8,
      message: "8文字以上入力してください",
    },
  },
};
