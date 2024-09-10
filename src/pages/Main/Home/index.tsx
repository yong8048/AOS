import React, { useState } from "react";
import Post from "@/components/Main/Home/Post";
import mockData from "@/mocks/mock_post.json";
import { FlatList, Image, ScrollView, Text, View } from "react-native";
import { IPostData } from "@/types/post";
import * as S from "./style";
const StickyHeader = () => (
  <View
    style={{
      padding: 10,
      backgroundColor: "#f8f8f8",
      borderBottomWidth: 1,
      borderBottomColor: "#fff",
      flexDirection: "row",
      justifyContent: "space-between",
    }}
  >
    <Image source={require("@/assets/Icons/Main/Icon_DM.png")} style={{ marginTop: 8 }} />

    <S.HeaderText>내게 능력 주시는자 안에서 내가 모든 것을 할 수 있느니라 (빌 4:13)</S.HeaderText>
    <Image source={require("@/assets/Icons/Main/Icon_DM.png")} style={{ marginTop: 8 }} />
  </View>
);

const Home = () => {
  const [isShowCommentsModal, setIsShowCommentsModal] = useState(false);
  const [refresh, setRefresh] = useState(false);

  const renderItem = ({ item }: { item: IPostData }) => (
    <Post
      postProps={item}
      OpenCommentsModal={{
        isOpenCommentsModal: isShowCommentsModal,
        setIsOpenCommentsModal: setIsShowCommentsModal,
      }}
    />
  );

  return (
    <FlatList
      data={mockData}
      renderItem={renderItem}
      keyExtractor={(item: IPostData) => item.id.toString()}
      showsVerticalScrollIndicator={false}
      stickyHeaderHiddenOnScroll={true}
      stickyHeaderIndices={[0]}
      ListHeaderComponent={<StickyHeader />}
    />
  );
};

export default Home;

{
  /* {mockData.map((item, index) => (
        <Post
          key={index}
          postProps={item}
          OpenCommentsModal={{
            isOpenCommentsModal: isShowCommentsModal,
            setIsOpenCommentsModal: setIsShowCommentsModal,
          }}
        />
      ))} */
}
