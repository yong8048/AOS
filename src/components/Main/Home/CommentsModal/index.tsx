import { View, Text } from "react-native";
import React from "react";
import * as S from "./style";
import { IOpenCommentsModal } from "@/types/post";

const CommentsModal = ({ OpenCommentsModal }: { OpenCommentsModal: IOpenCommentsModal }) => {
  return (
    <S.ModalContainer visible={OpenCommentsModal.isOpenCommentsModal} animationType="slide">
      <Text onPress={() => OpenCommentsModal.setIsOpenCommentsModal(false)}>CommentsModal</Text>
    </S.ModalContainer>
  );
};

export default CommentsModal;
