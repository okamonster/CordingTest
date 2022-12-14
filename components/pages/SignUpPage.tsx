import styled from "@emotion/styled";
import Link from "next/link";
import {} from "react-icons/fa";

export const SignUpPage = () => {
  return (
    <>
      <SHeader>
        <h3>新規登録</h3>
      </SHeader>
      <SInputForm>
        <SCircleAvater></SCircleAvater>
        <SInputOption>
          <label>ユーザー名:</label>
          <SInput type="text" placeholder="ユーザー名" />
        </SInputOption>
        <SInputOption>
          <label>メールアドレス:</label>
          <SInput type="email" placeholder="メールアドレス" />
        </SInputOption>
        <SInputOption>
          <label>パスワード:</label>
          <SInput type="password" placeholder="パスワード" />
        </SInputOption>
        <SInputOption>
          <label>生年月日:</label>
          <SInput type="month" placeholder="生年月日" />
        </SInputOption>
        <SInputOption>
          <label>性別:</label>
          <SSexualityOption>
            <SSexualitySelecter>
              <label>男性</label>
              <input type="radio" name="sex" value="男性" />
            </SSexualitySelecter>
            <SSexualitySelecter>
              <label>女性</label>
              <input type="radio" name="sex" value="女性" />
            </SSexualitySelecter>
            <SSexualitySelecter>
              <label>その他</label>
              <input type="radio" name="sex" value="その他" />
            </SSexualitySelecter>
          </SSexualityOption>
        </SInputOption>
        <SInputOption>
          <label>利用規約:</label>
          <Link
            href={
              "https://menherasenpai.notion.site/457df49475494671807673a0a3346451"
            }
          >
            サービス利用規約はこちら
          </Link>
          <div>
            <input type="checkbox" />
            <label>利用規約に同意する</label>
          </div>
        </SInputOption>
        <Button type="submit">サインアップ</Button>
      </SInputForm>
    </>
  );
};

const SHeader = styled.header`
  height: 60px;
  width: 100%;
  text-align: center;
  border-bottom: 1px solid #e0e8e8;
  h3 {
    line-height: 60px;
    margin: 0;
    font-weight: normal;
  }
`;

const SInputForm = styled.form`
  padding: 20px;
  display: flex;
  flex-flow: column;
`;

const SCircleAvater = styled.div`
  height: 80px;
  width: 80px;
  margin: auto;
  border-radius: 50%;
  background-color: #e0e8e8;
`;

const SInputOption = styled.div`
  margin-top: 10px;
`;

const SInput = styled.input`
  border: solid 1px #e0e8e8;
  width: 100%;
  padding: 10px;
  border-radius: 5px;
`;

const SSexualitySelecter = styled.div`
  display: flex;
  margin-left: 10px;
`;

const SSexualityOption = styled.div`
  margin-top: 10px;
  display: flex;
`;

const Button = styled.button`
  margin: 20px auto;
  width: 100%;
  height: 40px;
  border-radius: 8px;
  border: solid 1px #f0f0f0;
  color: #fff;
  background-color: #000;
  font-size: 16px;
  :hover {
    cursor: pointer;
    color: #000;
    border: solid 1px #000;
    background-color: #fff;
  }
`;
