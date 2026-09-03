import axios from "axios";
interface Login {
  email: string;
  password: string;
}

export async function Login(data: Login): Promise<void> {
  try {
    console.log("보낸 데이터", data);
    const response = await axios.post("API 주소", data);

    console.log("응답 데이터", response.data);
  } catch (error) {
    console.log("오류", error);
  }
}
