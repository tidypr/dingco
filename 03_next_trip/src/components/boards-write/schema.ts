import { CreateBoardInput } from '@/types/gql/graphql';
import { z } from 'zod';

const MIN_LENGTH = 2;
const PASSWORD_MIN_LENGTH = 8;
const PASSWORD_MAX_LENGTH = 16;

export const BoardSchema = z.object({
  writer: z
    .string()
    .nonempty({ message: '작성자를 입력하세요.' })
    .min(MIN_LENGTH, {
      message: `작성자는 최소 ${MIN_LENGTH}자 이상 입력해 주세요.`,
    }),
  password: z
    .string()
    .nonempty({ message: '비밀번호를 입력하세요.' })
    .min(PASSWORD_MIN_LENGTH, {
      message: `비밀번호는 최소 ${PASSWORD_MIN_LENGTH}글자, 최대 ${PASSWORD_MAX_LENGTH}글자까지 입력할 수 있습니다.`,
    })
    .max(PASSWORD_MAX_LENGTH, {
      message: `비밀번호는 최소 ${PASSWORD_MIN_LENGTH}글자, 최대 ${PASSWORD_MAX_LENGTH}글자까지 입력할 수 있습니다.`,
    }),
  title: z
    .string()
    .nonempty({ message: '제목을 입력하세요.' })
    .min(MIN_LENGTH, {
      message: `제목은 최소 ${MIN_LENGTH}자 이상 입력해 주세요.`,
    }),
  contents: z
    .string()
    .nonempty({ message: '내용을 입력하세요.' })
    .min(MIN_LENGTH, {
      message: `내용은 최소 ${MIN_LENGTH}자 이상 입력해 주세요.`,
    }),
});

// export type TBoardForm = z.infer<typeof BoardSchema>;
// export interface IBoardForm
//   extends Pick<
//     CreateBoardInput,
//     'writer' | 'password' | 'title' | 'contents'
//   > {}

export type TBoardForm = Pick<
  CreateBoardInput,
  'writer' | 'password' | 'title' | 'contents'
>;
