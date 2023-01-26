export const validation = () => {
  const validationPost = {
    name: {
      required: {
        value: true,
        message: "入力が必須です",
      },
      minLength: {
        value: 5,
        message: "5文字以上で入力してください",
      },
      maxLength: {
        value: 20,
        message: "20文字以下で入力してください",
      },
    },
    lat: {
      required: {
        value: true,
        message: "入力が必須です",
      },
    },
    lng: {
      required: {
        value: true,
        message: "入力が必須です",
      },
    },
    price: {
      required: {
        value: true,
        message: "選択が必須です",
      },
    },
    clean: {
      required: {
        value: true,
        message: "選択が必須です",
      },
    },
    privateRoomNum: {
      required: {
        value: true,
        message: "選択が必須です",
      },
    },
    privateRoomType: {
      required: {
        value: true,
        message: "選択が必須です",
      },
    },
    washlet: {
      required: {
        value: true,
        message: "選択が必須です",
      },
    },
    multiPurposeRoom: {
      required: {
        value: true,
        message: "選択が必須です",
      },
    },
    description: {
      required: {
        value: true,
        message: "入力が必須です",
      },
      minLength: {
        value: 10,
        message: "10文字以上で入力してください",
      },
      maxLength: {
        value: 300,
        message: "300文字以下で入力してください",
      },
    },
  };
  return validationPost;
};

export default validation;
