import React, { useEffect, useState } from "react";
import * as S from "./style";
import { Dimensions, Image } from "react-native";
import OMGText from "@/components/Common/OMGText";
import theme from "@/styles/theme";
import { splitHashTags } from "@/utils/splitHashTags";
import { IOpenCommentsModal, IPostData } from "@/types/post";
import CommentsModal from "../CommentsModal";
import { useAppNavigation } from "@/navigation/Navigation";

const Post = ({ postProps, OpenCommentsModal }: { postProps: IPostData; OpenCommentsModal: IOpenCommentsModal }) => {
  const [swiperHeight, setSwiperHeight] = useState(0);
  const navigation = useAppNavigation();

  useEffect(() => {
    const { width } = Dimensions.get("window");
    const scale = postProps.images.length > 1 ? 1 : 1.25;
    setSwiperHeight(width * scale);
  }, []);

  return (
    <S.Container>
      <S.PostHeader>
        <S.ProfileImage src={postProps.profileImage} />
        <S.UserDateWrapper>
          <OMGText>{postProps.userName}</OMGText>
          <OMGText style={{ color: theme.colors.place_holder }}>{postProps.created_at}</OMGText>
        </S.UserDateWrapper>
        <Image source={require("@/assets/Icons/Main/Icon_DM.png")} style={{ marginRight: 8 }} />
        <Image source={require("@/assets/Icons/Main/Icon_ETC.png")} />
      </S.PostHeader>
      <S.ImageSwiper loop={false} $height={swiperHeight}>
        {postProps.images.map((image, index) => (
          <Image key={index} src={image} style={{ width: "100%", height: "100%", objectFit: "contain" }} />
        ))}
      </S.ImageSwiper>
      <S.CountsContainer>
        <S.CountsWrapper onPress={() => navigation.navigate("Login")}>
          <Image source={require("@/assets/Icons/Main/Icon_Likes.png")} />
          <OMGText>{postProps.likes.length}</OMGText>
        </S.CountsWrapper>
        <S.CountsWrapper onPress={() => OpenCommentsModal.setIsOpenCommentsModal(true)}>
          <Image source={require("@/assets/Icons/Main/Icon_Comments.png")} />
          <OMGText>{postProps.comments.length}</OMGText>
        </S.CountsWrapper>
      </S.CountsContainer>
      <S.ContentsWrapper>
        <OMGText>{postProps.contents}</OMGText>
      </S.ContentsWrapper>
      <S.HashTagWrapper>
        <OMGText style={{ color: "#699d51" }}>
          {splitHashTags(postProps.hashtags).map((hashtag, index) => `${index === 0 ? "" : "#"}${hashtag} `)}
        </OMGText>
      </S.HashTagWrapper>
      <CommentsModal OpenCommentsModal={OpenCommentsModal} />
    </S.Container>
  );
};

export default Post;
