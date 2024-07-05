import * as Yup from "yup";

export const signUpSchema = Yup.object().shape({
  email: Yup.string().email("유효한 이메일을 입력해주세요.").required("이메일은 필수 입력 항목입니다."),
  code: Yup.string().required("인증코드는 필수 입력 항목입니다."),
  password: Yup.string().min(8, "비밀번호는 최소 8자 이상이어야 합니다.").required("비밀번호는 필수 입력 항목입니다."),
  duplication: Yup.string()
    .oneOf([Yup.ref("password")], "비밀번호가 일치하지 않습니다.")
    .required("비밀번호 확인은 필수 입력 항목입니다."),
  isChecked: Yup.boolean().oneOf([true], "개인정보 처리 방침에 동의해야 합니다."),
});

export const emailSendCodeSchema = Yup.object().shape({
  email: Yup.string().email("유효한 이메일을 입력해주세요.").required("이메일은 필수 입력 항목입니다."),
  code: Yup.string().required("인증코드는 필수 입력 항목입니다."),
});

export const findPasswordSchema = Yup.object().shape({
  password: Yup.string().min(8, "비밀번호는 최소 8자 이상이어야 합니다.").required("비밀번호는 필수 입력 항목입니다."),
  duplication: Yup.string()
    .oneOf([Yup.ref("password")], "비밀번호가 일치하지 않습니다.")
    .required("비밀번호 확인은 필수 입력 항목입니다."),
});

export const nickNameSchema = Yup.object().shape({
  nickName: Yup.string()
    .max(15, "닉네임은 최대 15자까지만 입력가능합니다.")
    .matches(/^[A-z][A-z0-9_-]{0,14}$/, "영문 및 숫자, -, _로 15자까지 구성할 수 있습니다.")
    .required("닉네임은 필수 입력 항목입니다."),
});
