import { gql } from '@apollo/client';

export const CREATE_BOARD = gql`
  mutation CreateBoard($writer: String, $title: String, $contents: String) {
    createBoard(writer: $writer, title: $title, contents: $contents) {
      number
      message
    }
  }
`;
