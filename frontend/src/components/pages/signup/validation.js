export const validation = ( getValues ) => {

  const validationSignup = {
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
    confirmation: {
      required: {
        value: true,
        message: "入力が必須",
      },
      validate: (value) => {
        return (
          value === getValues("password") || "パスワードが一致しません"
        )
      }
    }
  }

  return validationSignup

};

export default validation