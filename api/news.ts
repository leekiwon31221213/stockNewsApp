import axios from "axios";

interface signUp {
  email: string;
  password: string;
  recoveryEmail: string;
}

export async function singUp(data: signUp): Promise<void> {
  try {
    console.log("보낸 데이터", data);

    const response = await axios.post("API 주소");
    console.log("응답 데이터", response.data);
  } catch (e) {
    console.log("에러", e);
  }
}
