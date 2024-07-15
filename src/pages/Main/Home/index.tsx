import React, { useState } from "react";
import Post from "@/components/Main/Home/Post";
import mockData from "@/mocks/mock_post.json";
import { ScrollView } from "react-native";

const Home = () => {
  const [isShowCommentsModal, setIsShowCommentsModal] = useState(false);
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      {mockData.map((item, index) => (
        <Post
          key={index}
          postProps={item}
          OpenCommentsModal={{
            isOpenCommentsModal: isShowCommentsModal,
            setIsOpenCommentsModal: setIsShowCommentsModal,
          }}
        />
      ))}
    </ScrollView>
  );
};

export default Home;
