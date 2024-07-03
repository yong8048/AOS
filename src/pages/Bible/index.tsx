import { View, Text, ActivityIndicator } from "react-native";
import React, { useEffect, useState } from "react";
import { getRandomBible } from "@/apis/services/bible";
import { useGetBible } from "@/hooks/useGetBible";

const Bible = () => {
  // const [bible, setBible] = useState("");
  // useEffect(() => {
  //   getBible();
  // }, []);

  // const getBible = async () => {
  //   const res = await getRandomBible({ doctype: "ge", chapter: 2, verse: 1 });
  //   setBible(res[0].message);
  //   console.log(res);
  // };

  const { bible, isLoading } = useGetBible({ doctype: "ge", chapter: 8, verse: 4 });
  console.log(isLoading);

  if (isLoading) return <ActivityIndicator size="large" />;
  return (
    <View>
      <Text>{bible && bible[0].message}</Text>
    </View>
  );
};

export default Bible;
